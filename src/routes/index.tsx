import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyUs } from "@/components/WhyUs";

const title = "Muscle Factory Gym | Best Gym in Sandheli, Nalbari, Assam";
const description =
  "Muscle Factory Gym in Sandheli, Nalbari, Assam — strength training, functional fitness and expert coaching. Build yourself. Join now.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: "Muscle Factory Gym",
          description,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sandheli",
            addressLocality: "Nalbari",
            addressRegion: "Assam",
            addressCountry: "IN",
          },
          foundingDate: "2025",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background font-body">
      <Navbar />
      <Hero />
      <WhyUs />

    </main>
  );
}
