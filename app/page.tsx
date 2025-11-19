import About from "@/components/about";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import LandingPageCTA from "@/components/landing-page-cta";
import LandingPageStats from "@/components/landing-page-stats";
import Navbar from "@/components/navbar";
import PainPointSection from "@/components/pain-point-section";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PainPointSection />
        <HowItWorks />
        <Features />
        <LandingPageStats />
        <About />
        <LandingPageCTA />
      </main>
      <Footer />
    </div>
  );
}
