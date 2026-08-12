import { useId } from "react";
import mriganka from "@/assets/mriganka.png.asset.json";
import siddhatha from "@/assets/siddhatha.png.asset.json";

function InstagramIcon({ className }: { className?: string }) {
  const id = useId();
  const gradientId = `instagram-gradient-${id}`;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="1.462"
          y1="22.869"
          x2="22.538"
          y2="1.793"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      />
    </svg>
  );
}

const team = [
  {
    name: "Mriganka Choudhury",
    role: "Founder & Owner",
    img: mriganka.url,
    alt: "Mriganka Choudhury, founder and owner of Muscle Factory Gym",
    bio: "Driven by a simple vision: give Nalbari a gym that matches the standards of a big-city training floor — quality equipment, a welcoming space and an atmosphere that keeps people coming back.",
    instagram: "https://www.instagram.com/transform_withmriganka",
  },
  {
    name: "Siddhatha Ghosh",
    role: "Professional Trainer",
    img: siddhatha.url,
    alt: "Siddhatha Ghosh, professional trainer at Muscle Factory Gym",
    bio: "Focused on training that actually works — clean form, steady progression and plans built around each member's goal, whatever their starting point.",
    instagram: "https://www.instagram.com/trainewith_siddhatha",
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="about-heading"
            className="font-display text-3xl uppercase leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl"
          >
            About <span className="text-gold-deep">Muscle Factory</span> Gym
          </h2>
          <span className="mx-auto mt-6 block h-1 w-20 rounded-full bg-gold" />

          <p className="mt-10 font-display text-2xl uppercase tracking-wide text-neutral-900 sm:text-3xl">
            Built for Every Goal.
          </p>
          <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
            Muscle Factory Gym brings high-quality equipment, a clean and
            female-friendly environment, and a motivating atmosphere to Nalbari.
          </p>
          <p className="mt-6 text-lg font-semibold tracking-wide text-neutral-900 sm:text-xl">
            Train better. Build yourself.
          </p>
        </header>

        <div className="mt-20 sm:mt-28">
          <h3 className="text-center font-display text-2xl uppercase tracking-[0.2em] text-neutral-900 sm:text-3xl">
            Meet the Team
          </h3>
          <span className="mx-auto mt-5 block h-0.5 w-14 rounded-full bg-gold" />

          <ul className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            {team.map((m) => (
              <li key={m.name}>
                <article className="group h-full overflow-hidden rounded-2xl border border-gold/30 bg-gold-soft shadow-[0_10px_40px_-20px_rgba(0,0,0,0.35)] transition-shadow duration-500 hover:shadow-[0_20px_60px_-25px_rgba(0,0,0,0.45)]">
                  <div className="overflow-hidden bg-neutral-950">
                    <img
                      src={m.img}
                      alt={m.alt}
                      loading="lazy"
                      className="h-[22rem] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04] sm:h-[26rem]"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-display text-xl uppercase tracking-wide text-neutral-900 sm:text-2xl">
                          {m.name}
                        </h4>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
                          {m.role}
                        </p>
                      </div>
                      <a
                        href={m.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} on Instagram`}
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-neutral-200 text-neutral-700 transition-colors hover:border-gold hover:text-gold-deep"
                      >
                        <InstagramIcon className="h-5 w-5" />
                      </a>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-neutral-600 sm:text-base">
                      {m.bio}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
