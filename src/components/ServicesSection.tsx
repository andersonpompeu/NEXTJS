import { Refrigerator, WashingMachine, Microwave, Snowflake, Wind, Droplets, Fan, Coffee, Utensils, Flame, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const services = [
  { icon: Refrigerator, title: 'Geladeiras', description: 'Reparos em sistemas de refrigeração, compressores, termostatos e vedações.', features: ['Frost Free', 'Duplex', 'Side by Side', 'Inverse'], color: 'from-cyan-500 to-cyan-600', slug: '/conserto-de-geladeira-em-maringa' },
  { icon: WashingMachine, title: 'Máquinas de Lavar', description: 'Conserto de todas as marcas e modelos. Problemas com motor, placa, tambor e mais.', features: ['Brastemp', 'Electrolux', 'LG', 'Samsung'], color: 'from-blue-500 to-blue-600', slug: '/conserto-de-maquina-de-lavar-em-maringa' },
  { icon: Microwave, title: 'Micro-ondas', description: 'Reparo de magnetrons, placas eletrônicas, portas e painéis touch.', features: ['Panasonic', 'Electrolux', 'Brastemp', 'LG'], color: 'from-violet-500 to-purple-600', slug: '/conserto-de-micro-ondas-em-maringa' },
  { icon: Snowflake, title: 'Freezers', description: 'Conserto de freezers verticais, horizontais e comerciais de todas as marcas.', features: ['Vertical', 'Horizontal', 'Comercial'], color: 'from-sky-500 to-blue-600', slug: '/conserto-de-freezer-em-maringa' },
  { icon: Wind, title: 'Airfryers', description: 'Reparo de fritadeiras elétricas: resistências, ventiladores e painéis digitais.', features: ['Philips', 'Mondial', 'Britânia', 'Midea'], color: 'from-amber-500 to-orange-600', slug: '/conserto-de-airfryer-em-maringa' },
  { icon: Droplets, title: 'Purificadores', description: 'Conserto de purificadores de água refrigerados e naturais de todas as marcas.', features: ['IBBL', 'Electrolux', 'Colormaq', 'Latina'], color: 'from-teal-500 to-emerald-600', slug: '/conserto-de-purificador-de-agua-em-maringa' },
  { icon: Fan, title: 'Ventiladores', description: 'Conserto e instalação de ventiladores de teto, coluna, mesa e parede.', features: ['Teto', 'Coluna', 'Mesa', 'Parede'], color: 'from-green-500 to-emerald-600', slug: '/conserto-de-ventilador-em-maringa' },
  { icon: Snowflake, title: 'Ar-condicionado', description: 'Conserto, instalação, limpeza e manutenção de ar-condicionado split e janela.', features: ['Split', 'Janela', 'Inverter', 'Limpeza'], color: 'from-indigo-500 to-blue-600', slug: '/conserto-de-ar-condicionado-em-maringa' },
  { icon: Coffee, title: 'Cafeteiras', description: 'Reparo de cafeteiras de cápsulas, expresso e elétricas de todas as marcas.', features: ['Nespresso', 'Dolce Gusto', 'Expresso'], color: 'from-yellow-700 to-amber-800', slug: '/conserto-de-cafeteira-em-maringa' },
  { icon: Utensils, title: 'Lava-louças', description: 'Conserto de lava-louças: bombas, aquecedores, placas e sistemas de drenagem.', features: ['Brastemp', 'Electrolux', 'Midea', 'Bosch'], color: 'from-slate-500 to-gray-600', slug: '/conserto-de-lava-louca-em-maringa' },
  { icon: Flame, title: 'Fogões', description: 'Manutenção de queimadores, válvulas, fornos e sistemas de segurança.', features: ['5 Bocas', '4 Bocas', 'Industrial', 'Cooktop'], color: 'from-orange-500 to-red-500', slug: null },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">O que fazemos</span>
          <h2 className="section-title">Nossos <span className="text-gradient">Serviços</span></h2>
          <p className="section-subtitle">Especialistas em conserto de eletrodomésticos e eletrônicos. Atendemos todas as principais marcas do mercado.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article key={service.title} className="card-service group cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {service.features.map((feature) => (
                  <span key={feature} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{feature}</span>
                ))}
              </div>
              {service.slug ? (
                <Link href={service.slug} className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                  Saiba Mais <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <a href={`https://wa.me/5544997398826?text=Olá! Preciso de orçamento para conserto de ${service.title.toLowerCase()}.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                  Solicitar Orçamento <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-card rounded-2xl shadow-custom-md">
            <div className="flex items-center gap-2 text-success">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Orçamento sem compromisso</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <a href="https://wa.me/5544997398826?text=Olá! Gostaria de um orçamento para meu equipamento." target="_blank" rel="noopener noreferrer" className="btn-cta">
              Falar com um Técnico Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
