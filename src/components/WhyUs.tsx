import trainingImg from "@/assets/why-personal-training.jpg";
import interiorImg from "@/assets/why-interior.jpg";
import equipmentImg from "@/assets/why-equipment.jpg";

const cards = [
  {
    title: "Personal Training",
    img: trainingImg,
    alt: "Professional personal trainer coaching a member through a weight training set in a premium gym",
  },
  {
    title: "Premium Interior Design",
    img: interiorImg,
    alt: "Cinematic modern gym interior with dramatic lighting, mirrors and premium fitness machines",
  },
  {
    title: "Gym Equipment For Every Goal",
    img: equipmentImg,
    alt: "Gym floor with free weights, dumbbell racks, squat racks and strength machines for every training goal",
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        backgroundColor: "#285E60",
        backgroundImage:
          "radial-gradient(circle at 25% 20%, rgba(255,255,255,0.08) 0%, transparent 45%), radial-gradient(circle at 80% 75%, rgba(0,0,0,0.18) 0%, transparent 50%), repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 5px)",
      }}
    >
      <div className="mx-auto max-w-6xl px-5">
        <header className="text-center">
          <h2
            id="why-us-heading"
            className="font-display text-4xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl uppercase"
          >
            Why <span className="text-gold">Muscle Factory</span> Gym?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-white/75 sm:text-base">
            Premium coaching, world-class space and equipment built for every goal.
          </p>
          <span className="mx-auto mt-7 block h-1 w-24 rounded-full bg-gold" />
        </header>

        <ul className="mt-14 grid grid-cols-1 gap-8 sm:mt-20 md:grid-cols-3">
          {cards.map((c) => (
            <li key={c.title}>
              <article className="group relative overflow-hidden rounded-none ring-1 ring-white/15 shadow-2xl transition-transform duration-500 hover:-translate-y-2">
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110 md:h-72"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <h3 className="absolute inset-x-0 bottom-0 p-5 font-display text-xl uppercase tracking-wide text-white sm:text-2xl">
                  <span className="block h-0.5 w-10 bg-gold mb-3 transition-all duration-500 group-hover:w-20" />
                  {c.title}
                </h3>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
