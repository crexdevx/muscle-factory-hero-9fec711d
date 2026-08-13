import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Legacy } from "@/components/Legacy";

const title = "Legacy | Muscle Factory Gym, Nalbari";
const description =
  "The heritage of Muscle Factory Gym in Sandheli, Nalbari — the people, the iron and the training culture built since 12 June 2025.";

export const Route = createFileRoute("/legacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LegacyPage,
});

function LegacyPage() {
  return (
    <main className="min-h-screen bg-background font-body">
      <Navbar />
      <div className="pt-16">
        <Legacy />
      </div>
    </main>
  );
}
