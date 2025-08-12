import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
