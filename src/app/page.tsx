import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { Features } from "@/components/landing/Features";
import { InstructorCarousel } from "@/components/landing/InstructorCarousel";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CertificationCTA } from "@/components/landing/CertificationCTA";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent overflow-x-hidden text-zinc-50 font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <InstructorCarousel />
      <HowItWorks />
      <CertificationCTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
