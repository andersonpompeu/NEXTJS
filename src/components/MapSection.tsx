import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

const MapSection = () => {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-muted/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Localização
          </span>
          <h2 className="section-title">
            Onde <span className="text-gradient">Estamos</span>
          </h2>
          <p className="section-subtitle">
            Localização privilegiada em Maringá. Fácil acesso e estacionamento disponível.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-custom-sm hover:shadow-custom-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Av. Brasil, Centro<br />
                    Maringá - PR, 87013-000
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-custom-sm hover:shadow-custom-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 13h<br />
                    <span className="text-accent font-medium">Domingo: Fechado</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-custom-sm hover:shadow-custom-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Telefones</h3>
                  <p className="text-muted-foreground">
                    WhatsApp: (44) 99739-8826
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-custom-sm hover:shadow-custom-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">E-mail</h3>
                  <p className="text-muted-foreground">
                    contato@consertodegeladeira.maringa.br
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Av.+Brasil,+Centro+-+Maringá+-+PR,+87013-000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta w-full justify-center"
            >
              <Navigation className="w-5 h-5" />
              Como Chegar
            </a>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl overflow-hidden shadow-custom-lg h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.7!2d-51.93!3d-23.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+Brasil%2C+Centro%2C+Maring%C3%A1+-+PR!5e0!3m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Assistência Técnica - Maringá PR"
              />
            </div>
          </div>
        </div>

        {/* Areas Atendidas */}
        <div className="mt-12 p-6 bg-card rounded-2xl shadow-custom-sm">
          <h3 className="font-bold text-foreground text-center mb-4">Áreas Atendidas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Maringá', 'Sarandi', 'Paiçandu', 'Marialva', 'Mandaguari', 'Astorga', 'Iguaraçu', 'Floresta'].map((city) => (
              <span
                key={city}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
