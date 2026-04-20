import { getServiceBySlug, slugify, servicesData } from '@/data/services';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import DiferenciaisSection from '@/components/DiferenciaisSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TeamSection from '@/components/TeamSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import BrandLogos from '@/components/BrandLogos';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return {
    title: service.seoTitle,
    description: service.metaDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} em ${service.city}`,
    description: service.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Assistência Técnica Premium Maringá',
      address: { 
        '@type': 'PostalAddress', 
        streetAddress: 'Av. Brasil, Centro', 
        addressLocality: 'Maringá', 
        addressRegion: 'PR', 
        postalCode: '87013-000', 
        addressCountry: 'BR' 
      },
      telephone: '+5544997398826',
    },
    areaServed: { '@type': 'City', name: 'Maringá' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://consertodegeladeira.maringa.br/' },
      { '@type': 'ListItem', position: 2, name: service.title, item: `https://consertodegeladeira.maringa.br/${service.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />
      <main>
        {/* Hero */}
        <HeroSection customTitle={`${service.title} em ${service.city}`} />

        {/* Breadcrumb */}
        <section className="bg-muted/50 py-4 border-b border-border">
          <div className="container-custom">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link href="/">Início</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{service.title} em {service.city}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Long Content */}
        <section className="py-16 lg:py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {service.longContent.map((section, i) => (
                <div key={i} className="mb-10">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Intermediário */}
        <section className="py-10 md:py-12 bg-primary text-primary-foreground">
          <div className="container-custom text-center px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">
              Precisa de {service.titleShort.toLowerCase()} consertada em {service.city}?
            </h2>
            <p className="text-primary-foreground/80 mb-5 md:mb-6 text-base md:text-lg">
              Orçamento gratuito e sem compromisso. Atendimento em domicílio com garantia de 90 dias.
            </p>
            <a
              href={`https://wa.me/5544997398826?text=Olá! Preciso de orçamento para ${service.title.toLowerCase()} em ${service.city}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              <Phone className="w-5 h-5" />
              Solicitar Orçamento Grátis
            </a>
          </div>
        </section>

        {/* Brands */}
        <BrandLogos brands={service.brands} city={service.city} />

        {/* Child Pages - Topic Cluster */}
        {service.childPages.length > 0 && (
          <section className="py-16">
            <div className="container-custom">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-center text-foreground mb-4">
                Serviços Especializados
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                Conheça nossos serviços especializados em {service.titleShort.toLowerCase()} em {service.city}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {service.childPages.map((child) => (
                  <Link
                    key={child.slug}
                    href={`/${service.slug}/${child.slug}`}
                    className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all group"
                  >
                    <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {child.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {child.metaDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm">
                      Saiba Mais <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Neighborhoods */}
        <section className="py-16 bg-muted/50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-center text-foreground mb-4">
              <MapPin className="inline w-7 h-7 text-primary mr-2" />
              Bairros Atendidos em {service.city}
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Atendemos em domicílio em todos os bairros de Maringá e região metropolitana
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {service.neighborhoods.map((n) => (
                <Link
                  key={n}
                  href={`/${service.slug}/${slugify(n)}`}
                  className="bg-card border border-border rounded-xl px-5 py-4 text-sm text-foreground font-medium hover:shadow-md hover:border-primary/30 transition-all group"
                >
                  <CheckCircle className="inline w-4 h-4 text-primary mr-2" />
                  <span className="group-hover:text-primary transition-colors">
                    {service.title} no {n}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-center text-foreground mb-10">
              Perguntas Frequentes
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {service.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Final WhatsApp */}
        <section className="py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">
              Agende seu {service.title.toLowerCase()} em {service.city}
            </h2>
            <p className="text-primary-foreground/80 mb-6 md:mb-8 text-base md:text-lg max-w-2xl mx-auto">
              Não fique com seu equipamento parado! Entre em contato agora pelo WhatsApp e receba orçamento gratuito com atendimento em domicílio.
            </p>
            <a
              href={`https://wa.me/5544997398826?text=Olá! Preciso de orçamento para ${service.title.toLowerCase()} em ${service.city}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              <Phone className="w-5 h-5" />
              Falar no WhatsApp Agora
            </a>
          </div>
        </section>

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
