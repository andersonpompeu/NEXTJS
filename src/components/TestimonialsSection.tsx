"use client";

import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Aparecida Silva',
    location: 'Zona 7, Maringá',
    rating: 5,
    text: 'Excelente atendimento! Minha geladeira parou de funcionar e em menos de 24 horas já estava consertada. Preço justo e técnico muito educado. Super recomendo!',
    service: 'Conserto de Geladeira',
    avatar: 'MA',
  },
  {
    id: 2,
    name: 'Carlos Eduardo Santos',
    location: 'Centro, Maringá',
    rating: 5,
    text: 'Levei meu iPhone com a tela quebrada e ficou perfeito. Atendimento rápido, peça original e garantia. Melhor assistência de Maringá!',
    service: 'Troca de Tela iPhone',
    avatar: 'CE',
  },
  {
    id: 3,
    name: 'Fernanda Oliveira',
    location: 'Zona 5, Maringá',
    rating: 5,
    text: 'Minha TV Samsung tinha ficado sem imagem e achei que tinha perdido. Eles consertaram a placa e ficou como nova! Garantia de 90 dias e preço honesto.',
    service: 'Conserto Smart TV',
    avatar: 'FO',
  },
  {
    id: 4,
    name: 'Roberto Almeida',
    location: 'Maringá',
    rating: 5,
    text: 'Máquina de lavar não centrifugava. O técnico veio no mesmo dia e resolveu o problema. Atendimento profissional do início ao fim.',
    service: 'Conserto Máquina de Lavar',
    avatar: 'RA',
  },
  {
    id: 5,
    name: 'Ana Paula Costa',
    location: 'Zona 3, Maringá',
    rating: 5,
    text: 'Fogão com vazamento de gás. Chamei a TechPremium e vieram em 2 horas! Problema resolvido com segurança. Muito satisfeita!',
    service: 'Conserto de Fogão',
    avatar: 'AP',
  },
  {
    id: 6,
    name: 'Lucas Mendes',
    location: 'Paiçandu',
    rating: 5,
    text: 'Celular Samsung com problema na bateria. Trocaram rapidamente e ainda deram dicas de como preservar. Atendimento nota 10!',
    service: 'Troca de Bateria',
    avatar: 'LM',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="depoimentos" className="py-16 lg:py-28 bg-muted/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Prova Social
          </span>
          <h2 className="section-title">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="section-subtitle">
            Mais de 10.000 clientes satisfeitos em Maringá e região. Confira alguns depoimentos.
          </p>
        </div>

        {/* Google Rating */}
        <div className="flex justify-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 sm:gap-4 bg-card rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-custom-sm flex-wrap justify-center">
            <span className="text-base sm:text-lg font-semibold" style={{ fontFamily: 'Product Sans, Arial, sans-serif' }}>
              <span style={{ color: '#4285F4' }}>G</span>
              <span style={{ color: '#EA4335' }}>o</span>
              <span style={{ color: '#FBBC05' }}>o</span>
              <span style={{ color: '#4285F4' }}>g</span>
              <span style={{ color: '#34A853' }}>l</span>
              <span style={{ color: '#EA4335' }}>e</span>
            </span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-foreground text-sm sm:text-base">4.9</span>
            <span className="text-muted-foreground text-xs sm:text-sm">(847 avaliações)</span>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative px-6 md:px-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 px-2 md:px-3 ${itemsPerView === 1 ? 'w-full' : 'w-1/3'}`}
                >
                  <div className="bg-card rounded-2xl p-5 md:p-6 shadow-custom-sm hover:shadow-custom-lg transition-shadow h-full flex flex-col">
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/20 mb-3 md:mb-4" />

                    {/* Rating */}
                    <div className="flex gap-1 mb-3 md:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-foreground leading-relaxed mb-4 md:mb-6 flex-grow text-sm md:text-base">
                      "{testimonial.text}"
                    </p>

                    {/* Service Badge */}
                    <div className="mb-3 md:mb-4">
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        {testimonial.service}
                      </span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-3 md:pt-4 border-t border-border">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-primary-foreground font-bold text-xs md:text-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm md:text-base">{testimonial.name}</div>
                        <div className="text-xs md:text-sm text-muted-foreground">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 rounded-full bg-card shadow-custom-lg flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 rounded-full bg-card shadow-custom-lg flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {[...Array(maxIndex + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? 'bg-primary w-6' : 'bg-primary/30'
              }`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
