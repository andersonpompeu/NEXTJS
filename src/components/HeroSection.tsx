"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Shield, Clock, CheckCircle, Star } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Conserto no Mesmo Dia',
    subtitle: 'Seu equipamento funcionando rapidamente',
    description: 'Técnicos especializados prontos para resolver seu problema com agilidade e eficiência.',
    badge: 'Mais Rápido da Região',
    features: ['Diagnóstico em 30 min', 'Peças originais', 'Atendimento imediato'],
  },
  {
    id: 2,
    title: 'Garantia de 90 Dias',
    subtitle: 'Segurança total no seu conserto',
    description: 'Trabalhamos com peças de qualidade e oferecemos garantia estendida em todos os serviços.',
    badge: 'Mais Confiança',
    features: ['Peças certificadas', 'Técnicos experientes', 'Suporte pós-serviço'],
  },
  {
    id: 3,
    title: 'Especialistas em Eletrônicos',
    subtitle: 'Celulares, TVs e eletrodomésticos',
    description: 'Mais de 10 anos de experiência consertando smartphones, Smart TVs e linha branca.',
    badge: '+10.000 Consertos',
    features: ['iPhone e Android', 'Todas as marcas de TV', 'Linha branca completa'],
  },
];

interface HeroSectionProps {
  customTitle?: string;
}

const HeroSection = ({ customTitle }: HeroSectionProps = {}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isServicePage = !!customTitle;

  useEffect(() => {
    if (isServicePage) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isServicePage]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const activeSlide = slides[0];

  return (
    <section id="inicio" className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 transition-all duration-1000"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 md:w-64 h-32 md:h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 md:w-96 h-48 md:h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-foreground/10 rounded-full" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/5 rounded-full" />
      </div>

      <div className="container-custom relative z-10 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground text-center lg:text-left">
            {isServicePage ? (
              /* Static hero for service pages */
              <div className="opacity-100 translate-y-0">
                <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 animate-fade-in">
                  <Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent fill-accent" />
                  <span className="text-xs md:text-sm font-semibold text-accent">{activeSlide.badge}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  {customTitle}
                </h1>

                <p className="text-base md:text-xl lg:text-2xl text-primary-foreground/80 mb-3 md:mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  {activeSlide.subtitle}
                </p>

                <p className="text-sm md:text-lg text-primary-foreground/70 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  {activeSlide.description}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-4 mb-6 md:mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  {activeSlide.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-1.5 md:gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2">
                      <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
                      <span className="text-xs md:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in sm:justify-center lg:justify-start" style={{ animationDelay: '0.5s' }}>
                  <a
                    href="https://wa.me/5544997398826?text=Olá! Preciso de um orçamento para conserto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta"
                  >
                    <Phone className="w-5 h-5" />
                    Orçamento Grátis via WhatsApp
                  </a>
                  <a
                    href="#servicos"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-4 rounded-full font-semibold text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 transition-all text-sm md:text-base"
                  >
                    Ver Nossos Serviços
                  </a>
                </div>
              </div>
            ) : (
              /* Slider hero for Index */
              slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`transition-all duration-700 ${
                    index === currentSlide 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8 absolute'
                  }`}
                >
                  {index === currentSlide && (
                    <>
                      <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 animate-fade-in">
                        <Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent fill-accent" />
                        <span className="text-xs md:text-sm font-semibold text-accent">{slide.badge}</span>
                      </div>
                      
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        {slide.title}
                      </h2>
                      
                      <p className="text-base md:text-xl lg:text-2xl text-primary-foreground/80 mb-3 md:mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        {slide.subtitle}
                      </p>
                      
                      <p className="text-sm md:text-lg text-primary-foreground/70 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        {slide.description}
                      </p>

                      <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-4 mb-6 md:mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        {slide.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-1.5 md:gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2">
                            <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
                            <span className="text-xs md:text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in sm:justify-center lg:justify-start" style={{ animationDelay: '0.5s' }}>
                        <a
                          href="https://wa.me/5544997398826?text=Olá! Preciso de um orçamento para conserto."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-cta"
                        >
                          <Phone className="w-5 h-5" />
                          Orçamento Grátis via WhatsApp
                        </a>
                        <a
                          href="#servicos"
                          className="inline-flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-4 rounded-full font-semibold text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 transition-all text-sm md:text-base"
                        >
                          Ver Nossos Serviços
                        </a>
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-card/10 backdrop-blur-md rounded-3xl p-8 border border-primary-foreground/20 animate-scale-in">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-primary-foreground/10 rounded-2xl">
                  <div className="text-4xl font-display font-bold text-accent mb-2">+10.000</div>
                  <div className="text-primary-foreground/80">Consertos Realizados</div>
                </div>
                <div className="text-center p-6 bg-primary-foreground/10 rounded-2xl">
                  <div className="text-4xl font-display font-bold text-accent mb-2">4.9★</div>
                  <div className="text-primary-foreground/80">Avaliação Google</div>
                </div>
                <div className="text-center p-6 bg-primary-foreground/10 rounded-2xl">
                  <div className="text-4xl font-display font-bold text-accent mb-2">90</div>
                  <div className="text-primary-foreground/80">Dias de Garantia</div>
                </div>
                <div className="text-center p-6 bg-primary-foreground/10 rounded-2xl">
                  <div className="text-4xl font-display font-bold text-accent mb-2">+12</div>
                  <div className="text-primary-foreground/80">Anos de Experiência</div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-4 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>Atendimento Rápido</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls - only on Index */}
        {!isServicePage && (
          <div className="flex items-center justify-center gap-4 mt-8 md:mt-12">
            <button
              onClick={prevSlide}
              className="p-2.5 md:p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-colors"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-accent w-8' 
                      : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2.5 md:p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-colors"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
