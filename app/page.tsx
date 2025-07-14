import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import TestimonialsSection from '@/components/testimonials-section';
import CompaniesSection from '@/components/companies-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <CompaniesSection />
      <TestimonialsSection />
    </main>
  );
}