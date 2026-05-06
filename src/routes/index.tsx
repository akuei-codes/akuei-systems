import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Identity } from "@/components/Identity";
import { Projects } from "@/components/Projects";
import { Startups } from "@/components/Startups";
import { Capabilities } from "@/components/Capabilities";
import { VoiceInterface } from "@/components/VoiceInterface";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Identity />
        <Projects />
        <Startups />
        <Capabilities />
        <VoiceInterface />
      </main>
      <Footer />
    </div>
  );
}
