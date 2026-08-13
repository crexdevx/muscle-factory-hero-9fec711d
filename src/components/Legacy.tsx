import { useEffect, useRef, useState, type ReactNode } from "react";
import p1 from "@/assets/IMG-20260813-WA0001.jpg.asset.json";
import p2 from "@/assets/IMG-20260813-WA0004.jpg.asset.json";
import p4 from "@/assets/IMG-20260813-WA0002.jpg.asset.json";

const TAN_GOLD = "#C4A47C";
const BLACK = "#000000";
const LIGHT_TEXT = "#e5e5e5";
const SEPIA_FILTER = "sepia(0.75) saturate(1.3) brightness(0.82) contrast(1.05)";

function Reveal({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={`transition-all duration-[900ms] ease-out will-change-transform ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Legacy({ heading = "h1" }: { heading?: "h1" | "h2" } = {}) {
  const Heading = heading;
  return (
    <section
      id="legacy"
      aria-labelledby="legacy-title"
      className="font-body"
      style={{ backgroundColor: BLACK }}
    >
      <div className="grid grid-cols-2 gap-0">
        {/* Top Left — LEGACY title */}
        <Reveal className="flex min-h-0 items-center justify-center px-4 py-10 md:px-10 md:py-20">
          <Heading
            id="legacy-title"
            className="font-display text-[11vw] leading-[0.85] font-black uppercase tracking-tight lg:text-[10rem]"
            style={{ color: TAN_GOLD }}
          >
            Legacy
          </Heading>
        </Reveal>

        {/* Top Right — first shirtless man */}
        <Reveal delay={80} className="relative min-h-[220px] overflow-hidden md:min-h-full">
          <img
            src={p1.url}
            alt="Muscle Factory Gym athlete posing inside the training floor"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: SEPIA_FILTER }}
          />
        </Reveal>

        {/* Middle Left — description */}
        <Reveal delay={120} className="flex min-h-0 items-end px-4 py-10 md:px-10 md:py-20">
          <p
            className="max-w-md text-xs leading-relaxed md:text-base"
            style={{ color: LIGHT_TEXT }}
          >
            The story of Muscle Factory Gym — the people, the iron and the
            discipline that built a training culture in Sandheli, Nalbari.
          </p>
        </Reveal>

        {/* Middle Right — bearded man */}
        <Reveal delay={160} className="relative min-h-[220px] overflow-hidden md:min-h-full">
          <img
            src={p2.url}
            alt="Bearded Muscle Factory Gym athlete stretching after a session"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: SEPIA_FILTER }}
          />
        </Reveal>

        {/* Bottom spanning row — weight rack & barbells */}
        <Reveal delay={200} className="relative col-span-2 min-h-[180px] overflow-hidden md:min-h-[360px]">
          <img
            src={p4.url}
            alt="Barbell and weight rack on the Muscle Factory Gym training floor"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: SEPIA_FILTER }}
          />
        </Reveal>

        {/* Footer banner */}
        <Reveal delay={240} className="col-span-2 flex items-center justify-center px-4 py-6 md:py-10" style={{ backgroundColor: TAN_GOLD }}>
          <p
            className="font-display text-2xl font-black uppercase tracking-tight md:text-5xl"
            style={{ color: BLACK }}
          >
            12 June 2025
          </p>
        </Reveal>
      </div>
    </section>
  );
}
