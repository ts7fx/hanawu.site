import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PortfolioSections from "@/components/PortfolioSections";
import Contact from "@/components/Contact";
import PageLoader from "@/components/PageLoader";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <BackToTop />
      <Navigation />
      <Hero />
      <About />
      <PortfolioSections />
      <Contact />
    </main>
  );
}
