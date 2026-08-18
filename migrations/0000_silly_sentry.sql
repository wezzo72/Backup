CREATE TABLE "bitcoin_timestamps" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"filename" text NOT NULL,
	"sha256" text NOT NULL,
	"ots_receipt" text,
	"submitted_at" timestamp DEFAULT now(),
	"bitcoin_block" integer,
	"confirmed_at" timestamp,
	"category" text DEFAULT 'document' NOT NULL,
	"document_path" text,
	"calendar_url" text,
	CONSTRAINT "bitcoin_timestamps_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"page_slug" text NOT NULL,
	"display_name" text NOT NULL,
	"message" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "commission_requests" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"youtube_url" text NOT NULL,
	"additional_urls" text,
	"situation" text NOT NULL,
	"tier" text NOT NULL,
	"amount_aud" integer NOT NULL,
	"payment_confirmed" boolean DEFAULT false,
	"status" text DEFAULT 'pending' NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "course_enrollments" (
	"id" serial PRIMARY KEY NOT NULL,
	"access_token" text NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"payment_intent_id" text,
	"amount_paid" integer DEFAULT 33300 NOT NULL,
	"enrolled_at" timestamp DEFAULT now(),
	"completed_at" timestamp,
	"certificate_id" text,
	CONSTRAINT "course_enrollments_access_token_unique" UNIQUE("access_token")
);
--> statement-breakpoint
CREATE TABLE "course_progress" (
	"id" serial PRIMARY KEY NOT NULL,
	"access_token" text NOT NULL,
	"unit_id" integer NOT NULL,
	"completed_at" timestamp DEFAULT now(),
	"quiz_score" integer,
	"quiz_answers" json
);
--> statement-breakpoint
CREATE TABLE "download_counts" (
	"id" serial PRIMARY KEY NOT NULL,
	"document_slug" text NOT NULL,
	"count" integer DEFAULT 0 NOT NULL,
	CONSTRAINT "download_counts_document_slug_unique" UNIQUE("document_slug")
);
--> statement-breakpoint
CREATE TABLE "download_events" (
	"id" serial PRIMARY KEY NOT NULL,
	"document_slug" text NOT NULL,
	"downloaded_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "evidence_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"category" text NOT NULL,
	"description" text,
	"external_url" text,
	"reference_code" text,
	"timestamp" text,
	"sha256" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "inquiries" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"subject" text,
	"message" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "page_archives" (
	"id" serial PRIMARY KEY NOT NULL,
	"path" text NOT NULL,
	"title" text NOT NULL,
	"ai_statement" text,
	"sha256" text,
	"timestamp_slug" text,
	"generated_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "page_archives_path_unique" UNIQUE("path")
);
--> statement-breakpoint
CREATE TABLE "page_views" (
	"id" serial PRIMARY KEY NOT NULL,
	"path" text NOT NULL,
	"viewed_at" timestamp DEFAULT now(),
	"ip_hash" text,
	"user_agent" text,
	"country" text
);
--> statement-breakpoint
CREATE TABLE "subscribers" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"name" text,
	"phone" text,
	"address" text,
	"document_slug" text,
	"source" text,
	"created_at" timestamp DEFAULT now(),
	"is_active" boolean DEFAULT true,
	"is_paid" boolean DEFAULT false,
	"tier_name" text,
	"stripe_customer_id" text,
	"stripe_subscription_id" text,
	"subscription_status" text,
	"show_on_wall" boolean DEFAULT false,
	CONSTRAINT "subscribers_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "conversations" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"session_id" text NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"conversation_id" integer NOT NULL,
	"role" text NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
ALTER TABLE "messages" ADD CONSTRAINT "messages_conversation_id_conversations_id_fk" FOREIGN KEY ("conversation_id") REFERENCES "public"."conversations"("id") ON DELETE cascade ON UPDATE no action;