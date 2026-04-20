"use client";

import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, X } from 'lucide-react';

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);
  const [isWhatsAppPulsing, setIsWhatsAppPulsing] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stop pulsing after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWhatsAppPulsing(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Tooltip */}
          {showWhatsAppTooltip && (
            <div className="absolute bottom-full right-0 mb-3 animate-fade-in">
              <div className="bg-card rounded-xl shadow-custom-lg p-4 max-w-[280px] border border-border">
                <button
                  onClick={() => setShowWhatsAppTooltip(false)}
                  className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                  aria-label="Fechar"
                >
                  <X className="w-4 h-4" />
                </button>
                <p className="text-sm text-foreground font-medium mb-2">
                  Precisa de ajuda? 💬
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  Nossos técnicos estão prontos para atender você!
                </p>
                <a
                  href="https://wa.me/5544997398826?text=Olá! Preciso de um orçamento para conserto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-sm py-2 rounded-lg bg-whatsapp text-white font-medium hover:bg-whatsapp-hover transition-colors"
                >
                  Iniciar Conversa
                </a>
              </div>
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-card border-r border-b border-border transform rotate-45" />
            </div>
          )}

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/5544997398826?text=Olá! Preciso de um orçamento para conserto."
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-center w-16 h-16 rounded-full bg-whatsapp hover:bg-whatsapp-hover shadow-custom-lg hover:shadow-custom-xl transition-all duration-300 hover:scale-110 ${
              isWhatsAppPulsing ? 'animate-pulse-glow' : ''
            }`}
            onMouseEnter={() => setShowWhatsAppTooltip(true)}
            onMouseLeave={() => setShowWhatsAppTooltip(false)}
            aria-label="Falar no WhatsApp"
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </a>

          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
            1
          </span>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-custom-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-custom-xl ${
          showBackToTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};

export default FloatingButtons;
