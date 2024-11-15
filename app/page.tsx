import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";

export default function Home() {
  return (
    <main className="min-h-screen pb-16">
      <Navigation />
      <div className="bento-grid">
        <Hero />
        <Features />
      </div>
    </main>
  );
}