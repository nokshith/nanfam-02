import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import TestimonialsSection from '@/components/testimonials-section';
import CompaniesSection from '@/components/companies-section';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900">
      <HeroSection />
      <ServicesSection />
      <CompaniesSection />
      <TestimonialsSection />
    </main>
  );
}