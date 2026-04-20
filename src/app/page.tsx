import type { Metadata } from 'next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import DiferenciaisSection from '@/components/DiferenciaisSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TeamSection from '@/components/TeamSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export const metadata: Metadata = {
  title: "Assistência Técnica Premium Maringá | Conserto de Celulares, TVs e Eletrodomésticos",
  description: "Assistência técnica especializada em Maringá-PR. Conserto de celulares, Smart TVs, geladeiras, máquinas de lavar e fogões. Orçamento grátis via WhatsApp. Garantia de 90 dias!",
  alternates: {
    canonical: 'https://consertodegeladeira.maringa.br/',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <DiferenciaisSection />
        <TestimonialsSection />
        <TeamSection />
        <MapSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
