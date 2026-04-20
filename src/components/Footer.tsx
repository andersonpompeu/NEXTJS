import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Shield, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerServices = [
    { label: 'Conserto de Geladeiras', to: '/conserto-de-geladeira-em-maringa' },
    { label: 'Conserto Máquina de Lavar', to: '/conserto-de-maquina-de-lavar-em-maringa' },
    { label: 'Conserto de Micro-ondas', to: '/conserto-de-micro-ondas-em-maringa' },
    { label: 'Conserto de Freezer', to: '/conserto-de-freezer-em-maringa' },
    { label: 'Conserto de Airfryer', to: '/conserto-de-airfryer-em-maringa' },
    { label: 'Conserto de Purificadores', to: '/conserto-de-purificador-de-agua-em-maringa' },
    { label: 'Conserto de Ventiladores', to: '/conserto-de-ventilador-em-maringa' },
    { label: 'Conserto de Ar-condicionado', to: '/conserto-de-ar-condicionado-em-maringa' },
    { label: 'Conserto de Cafeteiras', to: '/conserto-de-cafeteira-em-maringa' },
    { label: 'Conserto de Lava-louças', to: '/conserto-de-lava-louca-em-maringa' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">Precisa de Conserto?</h3>
              <p className="text-primary-foreground/70">Entre em contato agora e receba seu orçamento grátis!</p>
            </div>
            <a href="https://wa.me/5544997398826?text=Olá! Preciso de um orçamento para conserto." target="_blank" rel="noopener noreferrer" className="btn-cta whitespace-nowrap">
              <Phone className="w-5 h-5" /> Orçamento Grátis
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-xl font-bold">TP</span>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg">TechPremium</h4>
                <p className="text-sm text-primary-foreground/70">Assistência Técnica</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Especialistas em conserto de eletrodomésticos e eletrônicos. Mais de 12 anos de experiência em Maringá e região.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="YouTube"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Services - Column 1 */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              {footerServices.slice(0, 5).map((service) => (
                <li key={service.label}>
                  <Link href={service.to} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" /> {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Column 2 + Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Mais Serviços</h4>
            <ul className="space-y-3">
              {footerServices.slice(5).map((service) => (
                <li key={service.label}>
                  <Link href={service.to} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" /> {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Guarantee */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /><span className="text-primary-foreground/70">Av. Brasil, Centro<br />Maringá - PR, 87013-000</span></li>
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-accent flex-shrink-0" /><span className="text-primary-foreground/70">(44) 99739-8826</span></li>
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-accent flex-shrink-0" /><span className="text-primary-foreground/70">contato@consertodegeladeira.maringa.br</span></li>
              <li className="flex items-start gap-3"><Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /><span className="text-primary-foreground/70">Seg-Sex: 8h às 18h<br />Sáb: 8h às 13h</span></li>
            </ul>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-primary-foreground/5 rounded-xl">
                <Shield className="w-5 h-5 text-accent flex-shrink-0" />
                <div><h5 className="font-semibold text-sm">Garantia 90 Dias</h5></div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-primary-foreground/5 rounded-xl">
                <Award className="w-5 h-5 text-accent flex-shrink-0" />
                <div><h5 className="font-semibold text-sm">Peças de Qualidade</h5></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} TechPremium Assistência Técnica. Todos os direitos reservados.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/termos-de-uso" className="hover:text-primary-foreground transition-colors">Termos de Uso</Link>
              <Link href="/politica-de-privacidade" className="hover:text-primary-foreground transition-colors">Política de Privacidade</Link>
              <Link href="/politica-de-garantia" className="hover:text-primary-foreground transition-colors">Política de Garantia</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
