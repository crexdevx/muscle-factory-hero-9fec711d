import { MapPin } from "lucide-react";
import videoUrl from "@/assets/mfg-promo.mp4";
import posterUrl from "@/assets/mfg-poster.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.28_0_0),transparent_70%)]"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-5 md:px-8">
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-primary md:text-sm">
            Muscle Factory Gym
          </p>

          <h1
            id="hero-title"
            className="mt-3 font-display text-5xl leading-[0.9] font-black uppercase tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            Build Yourself
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Strength training, functional fitness and expert coaching at Muscle Factory Gym —
            the premium fitness destination in Sandheli, Nalbari, Assam.
          </p>

          <p className="mt-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>Sandheli, Nalbari, Assam</span>
          </p>
        </div>

        <div className="relative w-full max-w-3xl">
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(50%_50%_at_50%_50%,oklch(0.82_0.16_88/0.18),transparent_70%)]"
          />
          <div className="relative aspect-[850/478] w-full overflow-hidden rounded-2xl bg-secondary">
            <video
              src={videoUrl}
              poster={posterUrl}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Muscle Factory Gym promotional video in Sandheli, Nalbari, Assam"
              className="absolute left-1/2 top-1/2 h-[177.82%] w-[56.235%] -translate-x-1/2 -translate-y-1/2 -rotate-90 object-contain grayscale contrast-125 brightness-95"
            />
          </div>
        </div>

        <a
          href="#membership"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-gold to-gold-deep px-9 py-4 text-sm font-black uppercase tracking-[0.22em] text-primary-foreground shadow-[0_16px_40px_-14px_oklch(0.82_0.16_88/0.7)] transition-transform hover:scale-[1.04]"
        >
          Join Now
        </a>
      </div>
    </section>
  );
}