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
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out will-change-transform ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

const photos = [
  { src: p1.url, alt: "Muscle Factory Gym athlete posing inside the training floor" },
  { src: p2.url, alt: "Bearded Muscle Factory Gym athlete stretching after a session" },
  { src: p3.url, alt: "Muscle Factory Gym members standing together in the studio" },
];

export function Legacy({ heading = "h1" }: { heading?: "h1" | "h2" } = {}) {
  const Heading = heading;
  return (
    <section
      id="legacy"
      aria-labelledby="legacy-title"
      className="bg-background py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-[0.65rem] font-black uppercase tracking-[0.45em] text-primary md:text-xs">
            Est. Nalbari
          </p>
          <Heading
            id="legacy-title"
            className="mt-4 font-display text-[22vw] leading-[0.82] font-black uppercase tracking-tight text-foreground sm:text-[16vw] md:text-[13rem]"
          >
            Legacy
          </Heading>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:mt-8 md:text-base">
            The story of Muscle Factory Gym — the people, the iron and the discipline that
            built a training culture in Sandheli, Nalbari.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:mt-24 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7 md:col-start-1">
            <Reveal>
              <figure>
                <img
                  src={photos[0]!.src}
                  alt={photos[0]!.alt}
                  loading="lazy"
                  className="w-full object-cover"
                />
                <figcaption className="mt-3 text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                  01 — The Founder
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8 md:mt-24">
            <Reveal delay={100}>
              <figure>
                <img
                  src={photos[1]!.src}
                  alt={photos[1]!.alt}
                  loading="lazy"
                  className="w-full object-cover"
                />
                <figcaption className="mt-3 text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                  02 — The Discipline
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-4">
            <Reveal delay={150}>
              <figure>
                <img
                  src={photos[2]!.src}
                  alt={photos[2]!.alt}
                  loading="lazy"
                  className="w-full object-cover"
                />
                <figcaption className="mt-3 text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                  03 — The Community
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <figure className="mt-14 md:mt-28">
            <img
              src={p4.url}
              alt="Barbell and weight rack on the Muscle Factory Gym training floor"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover md:aspect-[21/9]"
            />
          </figure>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-6 w-full bg-gold-soft px-6 py-10 md:mt-8 md:px-14 md:py-16">
            <p className="text-[0.6rem] uppercase tracking-[0.4em] text-primary-foreground/70">
              Doors Opened
            </p>
            <p className="mt-3 font-display text-5xl leading-[0.9] font-black uppercase tracking-tight text-primary-foreground sm:text-7xl md:text-8xl">
              12 June 2025
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
