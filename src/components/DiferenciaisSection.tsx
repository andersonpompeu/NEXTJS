import { Zap, Award, Shield, MapPin, Clock, HeartHandshake, CheckCircle } from 'lucide-react';

const diferenciais = [
  {
    icon: Zap,
    title: 'Rapidez no Atendimento',
    description: 'Conserto no mesmo dia para a maioria dos serviços. Seu tempo é valioso para nós.',
    highlight: 'Mesmo Dia',
  },
  {
    icon: Award,
    title: 'Técnicos Certificados',
    description: 'Profissionais com anos de experiência e certificações das principais marcas.',
    highlight: '+12 Anos',
  },
  {
    icon: Shield,
    title: 'Garantia Estendida',
    description: '90 dias de garantia em todos os serviços. Peças originais e procedência garantida.',
    highlight: '90 Dias',
  },
  {
    icon: MapPin,
    title: 'Atendimento Local',
    description: 'Atendemos Maringá e toda a região metropolitana com deslocamento rápido.',
    highlight: 'Maringá e Região',
  },
  {
    icon: Clock,
    title: 'Horário Flexível',
    description: 'Atendimento de segunda a sábado com horários que se adaptam à sua rotina.',
    highlight: 'Seg a Sáb',
  },
  {
    icon: HeartHandshake,
    title: 'Preço Justo',
    description: 'Orçamento transparente e sem surpresas. Você aprova antes de começarmos.',
    highlight: 'Sem Surpresas',
  },
];

const DiferenciaisSection = () => {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-card relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Por que nos escolher
          </span>
          <h2 className="section-title">
            Nossos <span className="text-gradient-accent">Diferenciais</span>
          </h2>
          <p className="section-subtitle">
            Compromisso com qualidade, transparência e a satisfação total dos nossos clientes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => (
            <div
              key={item.title}
              className="group relative p-6 rounded-2xl border border-border bg-gradient-to-b from-card to-muted/30 hover:border-primary/30 transition-all duration-300 hover:shadow-custom-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Highlight Badge */}
              <div className="absolute -top-3 right-4 bg-gradient-to-r from-accent to-orange-400 text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                {item.highlight}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12">
          {[
            { icon: CheckCircle, text: 'Orçamento Grátis' },
            { icon: Shield, text: 'Garantia de Serviço' },
            { icon: Award, text: 'Técnicos Experientes' },
            { icon: HeartHandshake, text: '+10.000 Clientes Satisfeitos' },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-muted-foreground">
              <badge.icon className="w-5 h-5 text-success" />
              <span className="font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
