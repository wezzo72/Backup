import { db } from "./db";
import { eq, sql, desc } from "drizzle-orm";
import {
  subscribers,
  inquiries,
  evidenceItems,
  downloadCounts,
  downloadEvents,
  comments,
  pageViews,
  type InsertSubscriber,
  type InsertInquiry,
  type InsertEvidence,
  type InsertComment,
  type Subscriber,
  type Inquiry,
  type EvidenceItem,
  type DownloadCount,
  type DownloadEvent,
  type Comment
} from "@shared/schema";

const BOT_UA_PATTERNS: RegExp[] = [
  /googlebot/i, /bingbot/i, /slurp/i, /duckduckbot/i, /baiduspider/i,
  /yandexbot/i, /sogou/i, /exabot/i, /ia_archiver/i, /archive\.org_bot/i,
  /ahrefsbot/i, /semrushbot/i, /mj12bot/i, /dotbot/i, /rogerbot/i,
  /seznambot/i, /blexbot/i, /dataforseobot/i, /petalbot/i, /neevabot/i,
  /gptbot/i, /claudebot/i, /ccbot/i, /perplexitybot/i, /bytespider/i,
  /google-extended/i, /applebot/i, /anthropic-ai/i, /cohere-ai/i,
  /facebookexternalhit/i, /facebookbot/i, /twitterbot/i, /linkedinbot/i,
  /slackbot/i, /telegrambot/i, /discordbot/i,
  /scrapy/i, /python-requests/i, /python-urllib/i, /libwww-perl/i,
  /curl\//i, /wget\//i, /okhttp/i, /go-http-client/i, /heritrix/i,
  /uptimerobot/i, /pingdom/i, /gtmetrix/i, /statuscake/i,
];

export function isBot(userAgent?: string): boolean {
  if (!userAgent || userAgent.trim() === '') return true;
  return BOT_UA_PATTERNS.some(p => p.test(userAgent));
}

export interface IStorage {
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  upsertSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getAllSubscribers(): Promise<Subscriber[]>;
  getTotalSubscriberCount(): Promise<number>;
  updateSubscriberPaid(email: string, data: { isPaid: boolean; tierName: string; stripeCustomerId?: string; stripeSubscriptionId?: string; subscriptionStatus?: string }): Promise<Subscriber | null>;
  findSubscriberByStripeCustomerId(customerId: string): Promise<Subscriber | null>;
  findSubscriberByEmail(email: string): Promise<Subscriber | null>;
  getPublicSupporters(): Promise<{ name: string; tierName: string; createdAt: Date | null }[]>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getEvidenceItems(): Promise<EvidenceItem[]>;
  createEvidenceItem(evidence: InsertEvidence): Promise<EvidenceItem>;
  getDownloadCount(slug: string): Promise<number>;
  getTotalDownloadCount(): Promise<number>;
  incrementDownloadCount(slug: string, userAgent?: string): Promise<number>;
  recordDownloadEvent(slug: string, userAgent?: string): Promise<void>;
  getDownloadAnalytics(days: number): Promise<{ date: string; count: number }[]>;
  getTopDocuments(days: number, limit: number): Promise<{ slug: string; count: number }[]>;
  getRecentDownloadCount(hours: number): Promise<number>;
  getComments(pageSlug: string): Promise<Comment[]>;
  createComment(comment: InsertComment): Promise<Comment>;
  recordPageView(path: string, ipHash?: string, userAgent?: string): Promise<void>;
  getPageViewStats(days: number): Promise<{ date: string; count: number }[]>;
  getTopPages(days: number, limit: number): Promise<{ path: string; count: number }[]>;
  getRecentPageViewCount(hours: number): Promise<number>;
  getTotalPageViews(): Promise<number>;
  getUniqueVisitorStats(): Promise<{
    allTime: number;
    last30Days: number;
    last7Days: number;
    last24Hours: number;
    byDay: { date: string; unique: number; total: number }[];
    topPages: { path: string; unique: number; total: number }[];
  }>;
}

export class DatabaseStorage implements IStorage {
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const [subscriber] = await db
      .insert(subscribers)
      .values(insertSubscriber)
      .returning();
    return subscriber;
  }

  async upsertSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const [subscriber] = await db
      .insert(subscribers)
      .values(insertSubscriber)
      .onConflictDoUpdate({
        target: subscribers.email,
        set: {
          name: sql`COALESCE(EXCLUDED.name, ${subscribers.name})`,
          phone: sql`COALESCE(EXCLUDED.phone, ${subscribers.phone})`,
          address: sql`COALESCE(EXCLUDED.address, ${subscribers.address})`,
          isActive: true,
        },
      })
      .returning();
    return subscriber;
  }

  async getAllSubscribers(): Promise<Subscriber[]> {
    return await db.select().from(subscribers).orderBy(desc(subscribers.createdAt));
  }

  async getTotalSubscriberCount(): Promise<number> {
    const [row] = await db.select({ count: sql<number>`count(*)::int` }).from(subscribers);
    return row?.count ?? 0;
  }

  async updateSubscriberPaid(email: string, data: { isPaid: boolean; tierName: string; stripeCustomerId?: string; stripeSubscriptionId?: string; subscriptionStatus?: string }): Promise<Subscriber | null> {
    const [row] = await db
      .update(subscribers)
      .set({
        isPaid: data.isPaid,
        tierName: data.tierName,
        stripeCustomerId: data.stripeCustomerId,
        stripeSubscriptionId: data.stripeSubscriptionId,
        subscriptionStatus: data.subscriptionStatus ?? 'active',
      })
      .where(eq(subscribers.email, email.toLowerCase()))
      .returning();
    return row ?? null;
  }

  async findSubscriberByStripeCustomerId(customerId: string): Promise<Subscriber | null> {
    const [row] = await db.select().from(subscribers).where(eq(subscribers.stripeCustomerId, customerId));
    return row ?? null;
  }

  async findSubscriberByEmail(email: string): Promise<Subscriber | null> {
    const [row] = await db.select().from(subscribers).where(eq(subscribers.email, email.toLowerCase()));
    return row ?? null;
  }

  async getPublicSupporters(): Promise<{ name: string; tierName: string; createdAt: Date | null }[]> {
    const rows = await db
      .select({ name: subscribers.name, tierName: subscribers.tierName, createdAt: subscribers.createdAt })
      .from(subscribers)
      .where(eq(subscribers.isPaid, true));
    return rows.map(r => ({ name: r.name ?? 'Anonymous', tierName: r.tierName ?? 'supporter', createdAt: r.createdAt }));
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db
      .insert(inquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }

  async getEvidenceItems(): Promise<EvidenceItem[]> {
    return await db.select().from(evidenceItems);
  }

  async createEvidenceItem(insertEvidence: InsertEvidence): Promise<EvidenceItem> {
    const [evidence] = await db
      .insert(evidenceItems)
      .values(insertEvidence)
      .returning();
    return evidence;
  }

  async getDownloadCount(slug: string): Promise<number> {
    const [row] = await db
      .select()
      .from(downloadCounts)
      .where(eq(downloadCounts.documentSlug, slug));
    return row ? row.count : 0;
  }

  async getTotalDownloadCount(): Promise<number> {
    // download_events tracks all events since Feb 2026.
    // HISTORICAL_OFFSET accounts for confirmed downloads before the event tracker existed.
    const HISTORICAL_OFFSET = 90584;
    try {
      const result = await db.execute(sql`SELECT COUNT(*)::int as total FROM download_events`);
      const row = result.rows[0] as any;
      return (row ? Number(row.total) : 0) + HISTORICAL_OFFSET;
    } catch {
      return HISTORICAL_OFFSET;
    }
  }

  async incrementDownloadCount(slug: string, userAgent?: string): Promise<number> {
    const [row] = await db
      .insert(downloadCounts)
      .values({ documentSlug: slug, count: 1 })
      .onConflictDoUpdate({
        target: downloadCounts.documentSlug,
        set: { count: sql`${downloadCounts.count} + 1` },
      })
      .returning();
    this.recordDownloadEvent(slug, userAgent).catch(() => {});
    return row.count;
  }

  async recordDownloadEvent(slug: string, userAgent?: string): Promise<void> {
    if (isBot(userAgent)) return;
    await db.insert(downloadEvents).values({ documentSlug: slug });
  }

  async getDownloadAnalytics(days: number): Promise<{ date: string; count: number }[]> {
    const rows = await db.execute(sql`
      SELECT DATE(downloaded_at) as date, COUNT(*)::int as count
      FROM download_events
      WHERE downloaded_at >= NOW() - INTERVAL '1 day' * ${days}
      GROUP BY DATE(downloaded_at)
      ORDER BY date ASC
    `);
    return (rows.rows as any[]).map(r => ({ date: String(r.date), count: Number(r.count) }));
  }

  async getTopDocuments(days: number, limit: number): Promise<{ slug: string; count: number }[]> {
    const rows = await db.execute(sql`
      SELECT document_slug as slug, COUNT(*)::int as count
      FROM download_events
      WHERE downloaded_at >= NOW() - INTERVAL '1 day' * ${days}
      GROUP BY document_slug
      ORDER BY count DESC
      LIMIT ${limit}
    `);
    return (rows.rows as any[]).map(r => ({ slug: String(r.slug), count: Number(r.count) }));
  }

  async getRecentDownloadCount(hours: number): Promise<number> {
    const result = await db.execute(sql`
      SELECT COUNT(*)::int as count
      FROM download_events
      WHERE downloaded_at >= NOW() - INTERVAL '1 hour' * ${hours}
    `);
    const row = result.rows[0] as any;
    return row ? Number(row.count) : 0;
  }

  async getComments(pageSlug: string): Promise<Comment[]> {
    return await db
      .select()
      .from(comments)
      .where(eq(comments.pageSlug, pageSlug))
      .orderBy(desc(comments.createdAt));
  }

  async createComment(insertComment: InsertComment): Promise<Comment> {
    const [comment] = await db
      .insert(comments)
      .values(insertComment)
      .returning();
    return comment;
  }

  async recordPageView(path: string, ipHash?: string, userAgent?: string): Promise<void> {
    await db.insert(pageViews).values({ path, ipHash, userAgent });
  }

  async getUniqueVisitorStats() {
    const [allTime, last30, last7, last24, byDay, topPages] = await Promise.all([
      db.execute(sql`SELECT COUNT(DISTINCT ip_hash)::int as count FROM page_views WHERE ip_hash IS NOT NULL`),
      db.execute(sql`SELECT COUNT(DISTINCT ip_hash)::int as count FROM page_views WHERE ip_hash IS NOT NULL AND viewed_at >= NOW() - INTERVAL '30 days'`),
      db.execute(sql`SELECT COUNT(DISTINCT ip_hash)::int as count FROM page_views WHERE ip_hash IS NOT NULL AND viewed_at >= NOW() - INTERVAL '7 days'`),
      db.execute(sql`SELECT COUNT(DISTINCT ip_hash)::int as count FROM page_views WHERE ip_hash IS NOT NULL AND viewed_at >= NOW() - INTERVAL '24 hours'`),
      db.execute(sql`
        SELECT DATE(viewed_at) as date,
               COUNT(DISTINCT ip_hash)::int as unique_count,
               COUNT(*)::int as total
        FROM page_views
        WHERE viewed_at >= NOW() - INTERVAL '30 days'
        GROUP BY DATE(viewed_at)
        ORDER BY date ASC
      `),
      db.execute(sql`
        SELECT path,
               COUNT(DISTINCT ip_hash)::int as unique_count,
               COUNT(*)::int as total
        FROM page_views
        WHERE viewed_at >= NOW() - INTERVAL '30 days'
        GROUP BY path
        ORDER BY unique_count DESC
        LIMIT 10
      `),
    ]);
    return {
      allTime: Number((allTime.rows[0] as any)?.count ?? 0),
      last30Days: Number((last30.rows[0] as any)?.count ?? 0),
      last7Days: Number((last7.rows[0] as any)?.count ?? 0),
      last24Hours: Number((last24.rows[0] as any)?.count ?? 0),
      byDay: (byDay.rows as any[]).map(r => ({ date: String(r.date), unique: Number(r.unique_count), total: Number(r.total) })),
      topPages: (topPages.rows as any[]).map(r => ({ path: String(r.path), unique: Number(r.unique_count), total: Number(r.total) })),
    };
  }

  async getPageViewStats(days: number): Promise<{ date: string; count: number }[]> {
    const rows = await db.execute(sql`
      SELECT DATE(viewed_at) as date, COUNT(*)::int as count
      FROM page_views
      WHERE viewed_at >= NOW() - INTERVAL '1 day' * ${days}
      GROUP BY DATE(viewed_at)
      ORDER BY date ASC
    `);
    return (rows.rows as any[]).map(r => ({ date: String(r.date), count: Number(r.count) }));
  }

  async getTopPages(days: number, limit: number): Promise<{ path: string; count: number }[]> {
    const rows = await db.execute(sql`
      SELECT path, COUNT(*)::int as count
      FROM page_views
      WHERE viewed_at >= NOW() - INTERVAL '1 day' * ${days}
      GROUP BY path
      ORDER BY count DESC
      LIMIT ${limit}
    `);
    return (rows.rows as any[]).map(r => ({ path: String(r.path), count: Number(r.count) }));
  }

  async getRecentPageViewCount(hours: number): Promise<number> {
    const result = await db.execute(sql`
      SELECT COUNT(*)::int as count
      FROM page_views
      WHERE viewed_at >= NOW() - INTERVAL '1 hour' * ${hours}
    `);
    const row = result.rows[0] as any;
    return row ? Number(row.count) : 0;
  }

  async getTotalPageViews(): Promise<number> {
    const result = await db.execute(sql`
      SELECT COUNT(*)::int as count FROM page_views
    `);
    const row = result.rows[0] as any;
    return row ? Number(row.count) : 0;
  }

  async createCourseEnrollment(data: { accessToken: string; name: string; email: string; paymentIntentId?: string; amountPaid?: number }): Promise<any> {
    const result = await db.execute(sql`
      INSERT INTO course_enrollments (access_token, name, email, payment_intent_id, amount_paid)
      VALUES (${data.accessToken}, ${data.name}, ${data.email}, ${data.paymentIntentId ?? null}, ${data.amountPaid ?? 33300})
      ON CONFLICT (access_token) DO NOTHING
      RETURNING *
    `);
    return result.rows[0];
  }

  async getCourseEnrollment(accessToken: string): Promise<any | null> {
    const result = await db.execute(sql`
      SELECT * FROM course_enrollments WHERE access_token = ${accessToken} LIMIT 1
    `);
    return result.rows[0] ?? null;
  }

  async getCourseEnrollmentByEmail(email: string): Promise<any | null> {
    const result = await db.execute(sql`
      SELECT * FROM course_enrollments WHERE LOWER(email) = LOWER(${email}) ORDER BY enrolled_at DESC LIMIT 1
    `);
    return result.rows[0] ?? null;
  }

  async getCourseProgress(accessToken: string): Promise<any[]> {
    const result = await db.execute(sql`
      SELECT * FROM course_progress WHERE access_token = ${accessToken} ORDER BY unit_id ASC
    `);
    return result.rows as any[];
  }

  async saveCourseUnitProgress(accessToken: string, unitId: number, quizScore: number, quizAnswers: any): Promise<void> {
    await db.execute(sql`
      INSERT INTO course_progress (access_token, unit_id, quiz_score, quiz_answers)
      VALUES (${accessToken}, ${unitId}, ${quizScore}, ${JSON.stringify(quizAnswers)})
      ON CONFLICT DO NOTHING
    `);
  }

  async markCourseComplete(accessToken: string, certificateId: string): Promise<void> {
    await db.execute(sql`
      UPDATE course_enrollments
      SET completed_at = NOW(), certificate_id = ${certificateId}
      WHERE access_token = ${accessToken}
    `);
  }
}

export const storage = new DatabaseStorage();
