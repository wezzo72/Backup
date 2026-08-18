interface SiteDividerProps {
  src: string;
  alt?: string;
  overlay?: string;
  caption?: string;
  height?: string;
  fullBleed?: boolean;
  className?: string;
}

export function SiteDivider({
  src,
  alt = "",
  overlay,
  caption,
  height = "h-[40vh] md:h-[52vh]",
  fullBleed = false,
  className = "",
}: SiteDividerProps) {
  const bleedStyle: React.CSSProperties = fullBleed
    ? { width: "100vw", transform: "translateX(calc(50% - 50vw))" }
    : {};

  return (
    <div
      className={`relative overflow-hidden ${height} ${className}`}
      style={bleedStyle}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      {overlay && (
        <div className="absolute inset-0 bg-black/55 flex items-center justify-center px-6">
          <p className="text-white text-xl md:text-3xl font-serif font-bold text-center leading-snug max-w-3xl drop-shadow-lg">
            {overlay}
          </p>
        </div>
      )}
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
          <p className="text-white/55 text-[11px] text-center tracking-wide">{caption}</p>
        </div>
      )}
    </div>
  );
}
