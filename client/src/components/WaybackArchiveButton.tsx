interface WaybackArchiveButtonProps {
  path?: string;
  label?: string;
  className?: string;
}

export function WaybackArchiveButton({ path = "", label = "Save to Internet Archive", className = "" }: WaybackArchiveButtonProps) {
  const fullUrl = `https://barrandodger.com${path}`;
  const waybackUrl = `https://web.archive.org/save/${fullUrl}`;

  return (
    <a
      href={waybackUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors ${className}`}
      title="Save this page permanently to the Internet Archive / Wayback Machine"
      data-testid="link-wayback-archive"
    >
      <span className="text-[10px]">🏛</span>
      {label}
    </a>
  );
}

export function WaybackBulkArchiver({ urls }: { urls: string[] }) {
  const handleArchiveAll = () => {
    urls.forEach((url, i) => {
      setTimeout(() => {
        window.open(`https://web.archive.org/save/${url}`, "_blank");
      }, i * 800);
    });
  };

  return (
    <button
      onClick={handleArchiveAll}
      className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold px-4 py-2 rounded-lg transition-colors"
      data-testid="button-wayback-bulk"
    >
      🏛 Archive {urls.length} Pages to Wayback Machine
    </button>
  );
}
