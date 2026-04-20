"use client";

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Clock, MapPin, Refrigerator, WashingMachine, Snowflake, Wind } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pathname = usePathname();
  const isHome = pathname === '/';

  const serviceCategories = [
    { name: 'Linha Branca', icon: Refrigerator, items: [
      { label: 'Geladeiras', to: '/conserto-de-geladeira-em-maringa' },
      { label: 'Máquinas de Lavar', to: '/conserto-de-maquina-de-lavar-em-maringa' },
      { label: 'Freezers', to: '/conserto-de-freezer-em-maringa' },
      { label: 'Lava-louças', to: '/conserto-de-lava-louca-em-maringa' },
    ]},
    { name: 'Climatização', icon: Snowflake, items: [
      { label: 'Ar-condicionado', to: '/conserto-de-ar-condicionado-em-maringa' },
      { label: 'Ventiladores', to: '/conserto-de-ventilador-em-maringa' },
      { label: 'Purificadores', to: '/conserto-de-purificador-de-agua-em-maringa' },
    ]},
    { name: 'Pequenos Eletro', icon: Wind, items: [
      { label: 'Micro-ondas', to: '/conserto-de-micro-ondas-em-maringa' },
      { label: 'Airfryers', to: '/conserto-de-airfryer-em-maringa' },
      { label: 'Cafeteiras', to: '/conserto-de-cafeteira-em-maringa' },
    ]},
  ];

  const menuItems = [
    { name: 'Início', href: isHome ? '#inicio' : '/' },
    { name: 'Serviços', href: isHome ? '#servicos' : '/#servicos', submenu: serviceCategories },
    { name: 'Diferenciais', href: isHome ? '#diferenciais' : '/#diferenciais' },
    { name: 'Depoimentos', href: isHome ? '#depoimentos' : '/#depoimentos' },
    { name: 'Equipe', href: isHome ? '#equipe' : '/#equipe' },
    { name: 'Contato', href: isHome ? '#contato' : '/#contato' },
  ];

  return (
    <>
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /><span>(44) 99739-8826</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>Seg-Sex: 8h-18h | Sáb: 8h-13h</span></div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>Maringá - PR</span></div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-accent font-semibold">✓ Orçamento Grátis</span>
            <span className="text-accent font-semibold">✓ Garantia 90 dias</span>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-card/95 backdrop-blur-md shadow-custom-lg' : 'bg-card shadow-custom-sm'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-custom-md group-hover:shadow-custom-lg transition-shadow">
                <span className="text-primary-foreground font-bold text-lg md:text-xl font-display">TP</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-lg md:text-xl text-foreground block">TechPremium</span>
                <p className="text-xs text-muted-foreground">Assistência Técnica</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <div key={item.name} className="relative" onMouseEnter={() => item.submenu && setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                  <a href={item.href} className="flex items-center gap-1 px-4 py-2 text-foreground hover:text-primary font-medium transition-colors rounded-lg hover:bg-muted">
                    {item.name}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </a>
                  {item.submenu && activeDropdown === item.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 animate-fade-in">
                      <div className="bg-card rounded-2xl shadow-custom-xl border border-border p-6 min-w-[540px]">
                        <div className="grid grid-cols-3 gap-6">
                          {item.submenu.map((category) => (
                            <div key={category.name}>
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                  <category.icon className="w-4 h-4 text-primary" />
                                </div>
                                <span className="font-semibold text-foreground text-sm">{category.name}</span>
                              </div>
                              <ul className="space-y-2">
                                {category.items.map((subItem) => (
                                  <li key={subItem.label}>
                                    <Link href={subItem.to} className="text-muted-foreground hover:text-primary transition-colors text-sm">{subItem.label}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-border">
                          <a href="https://wa.me/5544997398826?text=Olá! Gostaria de um orçamento para conserto." target="_blank" rel="noopener noreferrer" className="btn-cta w-full justify-center text-sm">
                            Solicitar Orçamento Grátis
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a href="https://wa.me/5544997398826?text=Olá! Gostaria de um orçamento." target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-slide-up">
            <nav className="container-custom py-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <a href={item.href} className="flex items-center justify-between py-3 text-foreground hover:text-primary font-medium transition-colors" onClick={() => !item.submenu && setIsMobileMenuOpen(false)}>
                    {item.name}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </a>
                  {item.submenu && (
                    <div className="pl-4 pb-2">
                      {item.submenu.map((category) => (
                        <div key={category.name} className="py-2">
                          <span className="text-sm font-semibold text-primary flex items-center gap-2">
                            <category.icon className="w-4 h-4" />
                            {category.name}
                          </span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {category.items.map((subItem) => (
                              <Link key={subItem.label} href={subItem.to} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href="https://wa.me/5544997398826?text=Olá! Gostaria de um orçamento." target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center mt-4">
                <Phone className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
