export default function AnnouncementBar() {
  const message =
    "Fast, reliable document services — PAN Card, Aadhaar, Passport & more. Apply online in minutes.";

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-navy-900 via-brand-600 to-navy-900">
      <style>{`
        @keyframes announce-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .announce-track {
          display: flex;
          width: max-content;
          animation: announce-scroll 28s linear infinite;
        }
        .announce-bar:hover .announce-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .announce-track { animation: none; }
        }
      `}</style>

      <div className="announce-bar py-2">
        <div className="announce-track">
          {[0, 1].map((i) => (
            <div key={i} className="flex shrink-0" aria-hidden={i === 1}>
              {Array.from({ length: 3 }).map((_, j) => (
                <span
                  key={j}
                  className="px-8 text-xs sm:text-sm font-medium tracking-wide text-white whitespace-nowrap"
                >
                  {message}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}