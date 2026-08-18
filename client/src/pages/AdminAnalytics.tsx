import { useQuery } from "@tanstack/react-query";
import { SEO } from "@/components/SEO";
import { Eye, Download, TrendingUp, FileText, Globe, RefreshCw, Clock } from "lucide-react";

function StatCard({ label, value, sub, color, icon: Icon }: {
  label: string; value: string | number; sub?: string; color: string; icon: any;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 space-y-2">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4" style={{ color }} />
        <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">{label}</span>
      </div>
      <p className="text-3xl font-black font-mono text-white">{typeof value === "number" ? value.toLocaleString() : value}</p>
      {sub && <p className="text-zinc-600 text-xs">{sub}</p>}
    </div>
  );
}

function MiniBar({ data, valueKey, color }: { data: any[]; valueKey: string; color: string }) {
  if (!data?.length) return <div className="h-24 flex items-center justify-center text-zinc-700 text-xs">No data</div>;
  const max = Math.max(...data.map(d => d[valueKey] ?? 0), 1);
  return (
    <div className="flex items-end gap-1 h-24">
      {data.map((d, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
          <div
            className="w-full rounded-t transition-all"
            style={{ height: `${Math.max(4, ((d[valueKey] ?? 0) / max) * 80)}px`, background: color, opacity: 0.8 }}
            title={`${d.date ?? d.hour}: ${d[valueKey]}`}
          />
        </div>
      ))}
    </div>
  );
}

export default function AdminAnalytics() {
  const { data: pvTotal, refetch: refetchAll, isFetching } = useQuery<{ total: number }>({
    queryKey: ["/api/pageviews/total"],
    staleTime: 30_000,
  });

  const { data: pvRecent24 } = useQuery<{ count: number }>({
    queryKey: ["/api/pageviews/recent"],
    queryFn: () => fetch("/api/pageviews/recent?hours=24").then(r => r.json()),
    staleTime: 30_000,
  });

  const { data: pvRecent1 } = useQuery<{ count: number }>({
    queryKey: ["/api/pageviews/recent/1h"],
    queryFn: () => fetch("/api/pageviews/recent?hours=1").then(r => r.json()),
    staleTime: 30_000,
  });

  const { data: pvRecent6 } = useQuery<{ count: number }>({
    queryKey: ["/api/pageviews/recent/6h"],
    queryFn: () => fetch("/api/pageviews/recent?hours=6").then(r => r.json()),
    staleTime: 30_000,
  });

  const { data: pvDaily } = useQuery<{ daily: { date: string; hits: number }[] }>({
    queryKey: ["/api/pageviews/daily"],
    queryFn: () => fetch("/api/pageviews/daily?days=30").then(r => r.json()),
    staleTime: 60_000,
  });

  const { data: topPages } = useQuery<{ data: { path: string; count: number }[] }>({
    queryKey: ["/api/pageviews/top-pages"],
    queryFn: () => fetch("/api/pageviews/top-pages?days=7&limit=20").then(r => r.json()),
    staleTime: 60_000,
  });

  const { data: dlStats } = useQuery<{ allTime: number; last24h: number; last30d: number }>({
    queryKey: ["/api/download-stats"],
    staleTime: 30_000,
  });

  const { data: dlDaily } = useQuery<{ daily: { date: string; downloads: number }[] }>({
    queryKey: ["/api/analytics/daily"],
    staleTime: 60_000,
  });

  const { data: topDocs } = useQuery<{ data: { slug: string; title: string; count: number }[] }>({
    queryKey: ["/api/analytics/top-documents"],
    staleTime: 60_000,
  });

  const now = new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney", dateStyle: "medium", timeStyle: "short" });

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SEO title="Analytics Dashboard | Barran Dodger" description="Internal analytics dashboard" path="/admin/analytics" />

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">

        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest mb-1">Admin · Internal</p>
            <h1 className="text-2xl font-serif font-black text-white">Analytics Dashboard</h1>
            <p className="text-zinc-500 text-xs mt-1">Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-600 text-xs font-mono flex items-center gap-1">
              <Clock className="h-3 w-3" /> {now} AEST
            </span>
            <button
              onClick={() => refetchAll()}
              className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold px-3 py-2 rounded-lg transition-colors"
              data-testid="button-refresh-analytics"
            >
              <RefreshCw className={`h-3 w-3 ${isFetching ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>
        </div>

        {/* Page View Stats */}
        <div>
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2">
            <Eye className="h-3 w-3" /> Page Views
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <StatCard label="Last Hour" value={pvRecent1?.count ?? "—"} icon={Eye} color="#a78bfa" />
            <StatCard label="Last 6 Hours" value={pvRecent6?.count ?? "—"} icon={Eye} color="#818cf8" />
            <StatCard label="Last 24 Hours" value={pvRecent24?.count ?? "—"} icon={Eye} color="#6366f1" />
            <StatCard label="All Time" value={pvTotal?.total ?? "—"} sub="since launch" icon={Globe} color="#4f46e5" />
          </div>
        </div>

        {/* Page Views Chart */}
        {pvDaily?.daily && pvDaily.daily.length > 0 && (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 space-y-3">
            <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest">30-Day Page Views</p>
            <MiniBar data={pvDaily.daily} valueKey="hits" color="#818cf8" />
            <div className="flex justify-between text-zinc-700 text-[10px] font-mono">
              <span>{pvDaily.daily[0]?.date?.slice(5)}</span>
              <span>{pvDaily.daily[pvDaily.daily.length - 1]?.date?.slice(5)}</span>
            </div>
          </div>
        )}

        {/* Download Stats */}
        <div>
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2">
            <Download className="h-3 w-3" /> Document Downloads
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <StatCard label="Last 24 Hours" value={dlStats?.last24h ?? "—"} icon={TrendingUp} color="#f59e0b" />
            <StatCard label="Last 30 Days" value={dlStats?.last30d ?? "—"} icon={Download} color="#f97316" />
            <StatCard label="All Time" value={dlStats?.allTime ?? "—"} sub="across 6 continents" icon={Globe} color="#ef4444" />
          </div>
        </div>

        {/* Downloads Chart */}
        {dlDaily?.daily && dlDaily.daily.length > 0 && (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 space-y-3">
            <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest">30-Day Downloads</p>
            <MiniBar data={dlDaily.daily} valueKey="downloads" color="#f59e0b" />
            <div className="flex justify-between text-zinc-700 text-[10px] font-mono">
              <span>{dlDaily.daily[0]?.date?.slice(5)}</span>
              <span>{dlDaily.daily[dlDaily.daily.length - 1]?.date?.slice(5)}</span>
            </div>
          </div>
        )}

        {/* Top Pages + Top Docs side by side */}
        <div className="grid md:grid-cols-2 gap-4">

          {/* Top Pages */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 space-y-3">
            <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest flex items-center gap-2">
              <Eye className="h-3 w-3" /> Top Pages — Last 7 Days
            </p>
            <div className="space-y-2">
              {topPages?.data?.slice(0, 15).map((p, i) => {
                const max = topPages.data[0]?.count ?? 1;
                return (
                  <div key={p.path} className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-zinc-300 text-xs truncate flex-1 font-mono">{p.path}</span>
                      <span className="text-white text-xs font-black font-mono shrink-0">{p.count.toLocaleString()}</span>
                    </div>
                    <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${(p.count / max) * 100}%`, background: i === 0 ? "#818cf8" : "#4f46e540" }}
                      />
                    </div>
                  </div>
                );
              })}
              {(!topPages?.data || topPages.data.length === 0) && (
                <p className="text-zinc-700 text-xs">No data yet</p>
              )}
            </div>
          </div>

          {/* Top Documents */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 space-y-3">
            <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest flex items-center gap-2">
              <FileText className="h-3 w-3" /> Top Documents — All Time
            </p>
            <div className="space-y-2">
              {topDocs?.data?.slice(0, 15).map((d, i) => {
                const max = topDocs.data[0]?.count ?? 1;
                const label = d.title || d.slug;
                return (
                  <div key={d.slug} className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-zinc-300 text-xs truncate flex-1">{label}</span>
                      <span className="text-white text-xs font-black font-mono shrink-0">{d.count.toLocaleString()}</span>
                    </div>
                    <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${(d.count / max) * 100}%`, background: i === 0 ? "#f59e0b" : "#f59e0b40" }}
                      />
                    </div>
                  </div>
                );
              })}
              {(!topDocs?.topDocuments || topDocs.topDocuments.length === 0) && (
                <p className="text-zinc-700 text-xs">No data yet</p>
              )}
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-zinc-700 text-xs font-mono text-center">
          Data from production PostgreSQL · Page views tracked since launch · Downloads tracked from site-wide counter · Not publicly indexed
        </p>

      </div>
    </div>
  );
}
