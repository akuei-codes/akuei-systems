import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Identity } from "@/components/Identity";
import { Projects } from "@/components/Projects";
import { Startups } from "@/components/Startups";
import { Capabilities } from "@/components/Capabilities";
import { Experience } from "@/components/Experience";
import { VoiceInterface } from "@/components/VoiceInterface";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { ScrollProgress } from "@/components/SiteChrome";
import { QuantumBalls } from "@/components/QuantumBalls";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <QuantumBalls />
      <ScrollProgress />
      <Cursor />
      <Nav />
      <main className="site-main relative z-[15] bg-transparent">
        <Hero />
        <Identity />
        <Startups />
        <Projects />
        <Experience />
        <Capabilities />
        <VoiceInterface />
      </main>
      <Footer />
    </div>
  );
}
