"use client";

import { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';
import Link from 'next/link';

const LGPDConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('lgpd-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('lgpd-consent', 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem('lgpd-consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-slide-up">
      <div className="container-custom">
        <div className="bg-card border border-border rounded-2xl shadow-custom-xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-foreground font-medium mb-1">Política de Privacidade (LGPD)</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site, personalizar conteúdo e analisar o tráfego. 
                Ao clicar em "Aceitar", você concorda com o uso de cookies conforme nossa{' '}
                <Link href="/politica-de-privacidade" className="text-primary underline hover:text-primary/80">Política de Privacidade</Link>.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
            <button
              onClick={reject}
              className="flex-1 md:flex-none px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-xl transition-colors"
            >
              Rejeitar
            </button>
            <button
              onClick={accept}
              className="flex-1 md:flex-none px-6 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
            >
              Aceitar
            </button>
          </div>
          <button onClick={reject} className="absolute top-3 right-3 md:hidden text-muted-foreground hover:text-foreground" aria-label="Fechar">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LGPDConsent;
