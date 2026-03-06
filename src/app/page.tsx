import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PortfolioSections from "@/components/PortfolioSections";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <PortfolioSections />
      <Contact />
    </main>
  );
}
