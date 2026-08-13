import { useEffect, useRef, useState, type ReactNode } from "react";
import p1 from "@/assets/IMG-20260813-WA0001.jpg.asset.json";
import p2 from "@/assets/IMG-20260813-WA0004.jpg.asset.json";
import p3 from "@/assets/IMG-20260813-WA0003.jpg.asset.json";
import p4 from "@/assets/IMG-20260813-WA0002.jpg.asset.json";

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
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
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out will-change-transform ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

const stack = [
  { src: p1.url, alt: "Muscle Factory Gym founder posing on the training floor" },
  { src: p2.url, alt: "Bearded Muscle Factory Gym athlete stretching after a session" },
  { src: p3.url, alt: "Muscle Factory Gym members standing together in the studio" },
];

export function Legacy({ heading = "h1" }: { heading?: "h1" | "h2" } = {}) {
  const Heading = heading;
  return (
    <section
      id="legacy"
      aria-labelledby="legacy-title"
      className="w-full bg-black py-14 md:py-20"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10">
        {/* Editorial grid: LEGACY word + 3 stacked photos */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
          <Reveal>
            <div className="flex h-full items-center justify-center py-6 md:justify-start md:py-0">
              <Heading
                id="legacy-title"
                className="font-display text-[24vw] leading-[0.8] font-black uppercase tracking-tight text-gold sm:text-[20vw] md:text-[13vw] lg:text-[11rem]"
              >
                Legacy
              </Heading>
            </div>
          </Reveal>

          <div className="flex flex-col gap-2 sm:gap-3">
            {stack.map((photo, i) => (
              <Reveal key={photo.src} delay={i * 120}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover md:aspect-[16/9]"
                />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Wide 4th photo */}
        <Reveal delay={80}>
          <img
            src={p4.url}
            alt="Barbell and weight rack on the Muscle Factory Gym training floor"
            loading="lazy"
            className="mt-2 aspect-[16/10] w-full object-cover sm:mt-3 md:aspect-[21/9]"
          />
        </Reveal>

        {/* Date card */}
        <Reveal delay={120}>
          <div className="mt-2 w-full bg-gold-soft px-4 py-5 text-center sm:mt-3 md:py-8">
            <p className="font-display text-[11vw] leading-none font-black uppercase tracking-tight text-black sm:text-6xl md:text-7xl lg:text-8xl">
              12 June 2025
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
