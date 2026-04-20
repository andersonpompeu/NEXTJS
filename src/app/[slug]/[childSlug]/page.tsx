import { getChildPage, getNeighborhoodData, slugify, NEIGHBORHOOD_SLUGS, servicesData } from '@/data/services';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Phone, ArrowLeft, CheckCircle, MapPin, ArrowRight, Clock, Shield, Wrench } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';

interface Props {
  params: Promise<{ slug: string; childSlug: string }>;
}

export async function generateStaticParams() {
  const paths: { slug: string; childSlug: string }[] = [];

  servicesData.forEach((service) => {
    // Add child pages
    service.childPages.forEach((child) => {
      paths.push({
        slug: service.slug,
        childSlug: child.slug,
      });
    });

    // Add neighborhoods
    NEIGHBORHOOD_SLUGS.forEach((n) => {
      paths.push({
        slug: service.slug,
        childSlug: n.slug,
      });
    });
  });

  return paths;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug, childSlug } = await params;
  const childData = getChildPage(slug, childSlug);
  const neighborhoodData = getNeighborhoodData(slug, childSlug);

  if (childData) {
    return {
      title: childData.child.seoTitle,
      description: childData.child.metaDescription,
    };
  }

  if (neighborhoodData) {
    const { parent, neighborhood } = neighborhoodData;
    return {
      title: `${parent.title} no ${neighborhood} em ${parent.city} | TechPremium`,
      description: `${parent.title} no ${neighborhood} em ${parent.city}. Atendimento em domicílio, orçamento gratuito e garantia de 90 dias. Técnicos especializados em todas as marcas.`,
    };
  }

  return {};
}

export default async function Page({ params }: Props) {
  const { slug, childSlug } = await params;
  const childData = getChildPage(slug, childSlug);
  const neighborhoodData = getNeighborhoodData(slug, childSlug);

  if (childData) {
    return <ChildPageContent data={childData} slug={slug} />;
  }

  if (neighborhoodData) {
    return <NeighborhoodPageContent data={neighborhoodData} childSlug={childSlug} />;
  }

  notFound();
}

function ChildPageContent({ data, slug }: { data: any; slug: string }) {
  const { parent, child } = data;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-14 md:py-20 lg:py-28 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 md:w-64 h-32 md:h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-48 md:w-96 h-48 md:h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
          <div className="container-custom relative z-10 px-6">
            <div className="max-w-3xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-3 md:mb-4 leading-tight">
                {child.title}
              </h1>
              <p className="text-sm md:text-lg text-primary-foreground/80 mb-6 md:mb-8">
                {child.metaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href={`https://wa.me/5544997398826?text=Olá! Preciso de orçamento para ${child.title.toLowerCase()}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta"
                >
                  <Phone className="w-5 h-5" />
                  Orçamento Grátis via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

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
                  <BreadcrumbLink asChild><Link href={`/${parent.slug}`}>{parent.title}</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{child.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {child.content.map((section: any, i: number) => (
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

        {/* CTA */}
        <section className="py-10 md:py-12 bg-primary text-primary-foreground">
          <div className="container-custom text-center px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">
              {child.title}
            </h2>
            <p className="text-primary-foreground/80 mb-5 md:mb-6 text-base md:text-lg">
              Orçamento gratuito e sem compromisso. Atendimento em domicílio com garantia de 90 dias.
            </p>
            <a
              href={`https://wa.me/5544997398826?text=Olá! Preciso de orçamento para ${child.title.toLowerCase()}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              <Phone className="w-5 h-5" />
              Falar no WhatsApp Agora
            </a>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="py-16 bg-muted/50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-center text-foreground mb-4">
              <MapPin className="inline w-7 h-7 text-primary mr-2" />
              Bairros Atendidos em {parent.city}
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Realizamos {child.title.toLowerCase()} com atendimento em domicílio em todos os bairros de {parent.city}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {parent.neighborhoods.map((n: string) => (
                <Link
                  key={n}
                  href={`/${parent.slug}/${slugify(n)}`}
                  className="bg-card border border-border rounded-xl px-5 py-4 text-sm text-foreground font-medium hover:shadow-md hover:border-primary/30 transition-all group"
                >
                  <CheckCircle className="inline w-4 h-4 text-primary mr-2" />
                  <span className="group-hover:text-primary transition-colors">
                    {child.title} no {n}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {child.faqs.length > 0 && (
          <section className="py-16">
            <div className="container-custom">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-center text-foreground mb-10">
                Perguntas Frequentes
              </h2>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-3">
                  {child.faqs.map((faq: any, i: number) => (
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
        )}

        {/* Back to parent */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <Link
                href={`/${parent.slug}`}
                className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para {parent.title} em {parent.city}
              </Link>

              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Outros serviços de {parent.titleShort.toLowerCase()}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {parent.childPages
                  .filter((c: any) => c.slug !== child.slug)
                  .map((sibling: any) => (
                    <Link
                      key={sibling.slug}
                      href={`/${parent.slug}/${sibling.slug}`}
                      className="bg-card rounded-xl p-4 border border-border hover:shadow-md transition-all text-foreground font-medium hover:text-primary"
                    >
                      {sibling.title}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

function NeighborhoodPageContent({ data, childSlug }: { data: any; childSlug: string }) {
  const { parent, neighborhood } = data;
  const titleWithCity = `${parent.title} no ${neighborhood} em ${parent.city}`;
  const whatsappMsg = `Olá! Preciso de ${parent.title.toLowerCase()} no ${neighborhood} em ${parent.city}.`;

  const faqItems = [
    {
      question: `Vocês atendem no ${neighborhood} em ${parent.city}?`,
      answer: `Sim! A TechPremium atende no ${neighborhood} e em todos os bairros de ${parent.city}. Realizamos ${parent.title.toLowerCase()} com atendimento em domicílio, orçamento gratuito e garantia de 90 dias.`,
    },
    {
      question: `Qual o prazo para ${parent.title.toLowerCase()} no ${neighborhood}?`,
      answer: `Na maioria dos casos, realizamos o atendimento no mesmo dia ou em até 24 horas após o contato. No ${neighborhood}, nosso tempo médio de deslocamento é muito rápido por estarmos localizados em ${parent.city}.`,
    },
    {
      question: `Quanto custa ${parent.title.toLowerCase()} no ${neighborhood}?`,
      answer: `O orçamento é gratuito e sem compromisso. O valor varia conforme o problema e a marca do equipamento. Oferecemos preço justo e transparente, com garantia de 90 dias em todos os serviços no ${neighborhood}.`,
    },
    {
      question: `Quais marcas vocês consertam no ${neighborhood}?`,
      answer: `Consertamos todas as principais marcas: ${parent.brands.map((b: any) => b.name).join(', ')}. Nossos técnicos são especializados e atendem no ${neighborhood} com peças de qualidade.`,
    },
    {
      question: `O atendimento no ${neighborhood} é em domicílio?`,
      answer: `Sim! Todo nosso atendimento para ${parent.title.toLowerCase()} no ${neighborhood} é realizado em domicílio, para sua comodidade. O técnico vai até sua casa com as ferramentas e peças necessárias.`,
    },
  ];

  const otherNeighborhoods = NEIGHBORHOOD_SLUGS.filter(n => n.name !== neighborhood).slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-14 md:py-20 lg:py-28 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 md:w-64 h-32 md:h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-48 md:w-96 h-48 md:h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
          <div className="container-custom relative z-10 text-center px-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-3 md:mb-4 leading-tight">
              {titleWithCity}
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/80 mb-6 md:mb-8 max-w-2xl mx-auto">
              Orçamento gratuito e sem compromisso. Atendimento em domicílio com garantia de 90 dias.
            </p>
            <a
              href={`https://wa.me/5544997398826?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              <Phone className="w-5 h-5" />
              Falar no WhatsApp Agora
            </a>
          </div>
        </section>

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
                  <BreadcrumbLink asChild><Link href={`/${parent.slug}`}>{parent.title}</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{neighborhood}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Assistência técnica especializada no {neighborhood}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A TechPremium é referência em {parent.title.toLowerCase()} no {neighborhood} em {parent.city}. 
                  Com mais de 12 anos de experiência, nossos técnicos oferecem atendimento em domicílio 
                  diretamente no {neighborhood}, com orçamento gratuito e sem compromisso. Trabalhamos com 
                  todas as marcas — {parent.brands.map((b: any) => b.name).join(', ')} — e garantimos 90 dias em 
                  todos os serviços realizados. Se você mora no {neighborhood} e precisa de reparo, 
                  manutenção preventiva ou conserto completo, conte com a TechPremium para resolver seu 
                  problema com agilidade e profissionalismo.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Por que somos a melhor escolha no {neighborhood}?
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Moradores do {neighborhood} em {parent.city} já confiam na TechPremium para {parent.title.toLowerCase()}. 
                  Nossa equipe técnica é altamente qualificada e realiza o diagnóstico completo do problema no 
                  conforto da sua residência. Utilizamos peças de qualidade, ferramentas profissionais e técnicas 
                  atualizadas para garantir o melhor resultado. Nosso diferencial é o atendimento humanizado: 
                  explicamos o problema, apresentamos as opções de reparo e só iniciamos o serviço após sua aprovação.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-card rounded-xl p-5 border border-border text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">Atendimento Rápido</h3>
                    <p className="text-sm text-muted-foreground">Visita no mesmo dia no {neighborhood}</p>
                  </div>
                  <div className="bg-card rounded-xl p-5 border border-border text-center">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">Garantia de 90 Dias</h3>
                    <p className="text-sm text-muted-foreground">Em todos os serviços realizados</p>
                  </div>
                  <div className="bg-card rounded-xl p-5 border border-border text-center">
                    <Wrench className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">Técnicos Especializados</h3>
                    <p className="text-sm text-muted-foreground">Mais de 12 anos de experiência</p>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Problemas que resolvemos no {neighborhood}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  No {neighborhood}, os problemas mais comuns que atendemos incluem equipamentos que não funcionam 
                  corretamente, barulhos estranhos, vazamentos, falhas elétricas e desgaste de peças. 
                  Nossos técnicos estão preparados para diagnosticar e resolver qualquer tipo de defeito em 
                  {parent.titleShort.toLowerCase()} de todas as marcas e modelos. O processo é simples: 
                  entre em contato pelo WhatsApp, agende a visita técnica no {neighborhood} e receba o 
                  orçamento gratuito em domicílio.
                </p>
                <ul className="space-y-2">
                  {parent.features.map((f: string) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Reparo de {f.toLowerCase()} no {neighborhood}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Marcas que atendemos no {neighborhood}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  No {neighborhood} em {parent.city}, realizamos {parent.title.toLowerCase()} de todas as 
                  principais marcas do mercado. Nossos técnicos possuem treinamento específico e utilizam 
                  peças compatíveis de alta qualidade para cada fabricante.
                </p>
                <div className="flex flex-wrap gap-3">
                  {parent.brands.map((brand: any) => (
                    <span key={brand.name} className="bg-card rounded-xl px-5 py-3 shadow-sm border border-border text-foreground font-semibold">
                      {brand.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Como funciona o atendimento no {neighborhood}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  O atendimento no {neighborhood} é simples e prático. Primeiro, entre em contato pelo WhatsApp 
                  e descreva o problema. Em seguida, agendamos a visita técnica no horário mais conveniente 
                  para você. O técnico vai até sua residência no {neighborhood}, realiza o diagnóstico 
                  completo e apresenta o orçamento detalhado. Após sua aprovação, o reparo é iniciado 
                  imediatamente — na maioria dos casos, finalizamos no mesmo dia. Todos os serviços 
                  incluem garantia de 90 dias e nota fiscal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-12 bg-primary text-primary-foreground">
          <div className="container-custom text-center px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">
              {titleWithCity}
            </h2>
            <p className="text-primary-foreground/80 mb-5 md:mb-6 text-base md:text-lg">
              Orçamento gratuito e sem compromisso. Atendimento em domicílio com garantia de 90 dias.
            </p>
            <a
              href={`https://wa.me/5544997398826?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              <Phone className="w-5 h-5" />
              Falar no WhatsApp Agora
            </a>
          </div>
        </section>

        {/* Outros Bairros */}
        <section className="py-16 bg-muted/50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-center text-foreground mb-4">
              <MapPin className="inline w-7 h-7 text-primary mr-2" />
              {parent.title} em Outros Bairros de {parent.city}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mt-8">
              {otherNeighborhoods.map((n) => (
                <Link
                  key={n.slug}
                  href={`/${parent.slug}/${n.slug}`}
                  className="bg-card border border-border rounded-xl px-5 py-4 text-sm text-foreground font-medium hover:shadow-md hover:border-primary/30 transition-all group"
                >
                  <CheckCircle className="inline w-4 h-4 text-primary mr-2" />
                  <span className="group-hover:text-primary transition-colors">
                    {parent.title} no {n.name}
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
              Perguntas Frequentes — {neighborhood}
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((faq, i) => (
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

        {/* Back to parent */}
        <section className="py-12 bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <Link
                href={`/${parent.slug}`}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para {parent.title} em {parent.city}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
