import { Award, Wrench, Shield, Star } from 'lucide-react';
import tecnicoRicardo from '@/assets/team/tecnico-ricardo.jpg';
import tecnicoFernando from '@/assets/team/tecnico-fernando.jpg';
import tecnicoLucas from '@/assets/team/tecnico-lucas.jpg';
import tecnicoMarcos from '@/assets/team/tecnico-marcos.jpg';

const team = [
  {
    name: 'Ricardo Almeida',
    role: 'Técnico Especialista',
    specialty: 'Geladeiras e Freezers',
    experience: '15 anos',
    certifications: ['Brastemp', 'Electrolux', 'LG'],
    description: 'Especialista em linha branca com certificações das principais marcas. Referência em conserto de geladeiras e freezers.',
    image: tecnicoRicardo,
  },
  {
    name: 'Fernando Costa',
    role: 'Técnico Sênior',
    specialty: 'Máquinas de Lavar',
    experience: '12 anos',
    certifications: ['Consul', 'Electrolux', 'Samsung'],
    description: 'Expert em máquinas de lavar e lava-louças. Especializado em placas eletrônicas e sistemas de centrifugação.',
    image: tecnicoFernando,
  },
  {
    name: 'Lucas Ferreira',
    role: 'Técnico Especialista',
    specialty: 'Ar-condicionado',
    experience: '10 anos',
    certifications: ['LG', 'Samsung', 'Midea'],
    description: 'Especialista em climatização com foco em ar-condicionado split e inverter. Certificado para instalação e manutenção.',
    image: tecnicoLucas,
  },
  {
    name: 'Marcos Oliveira',
    role: 'Técnico Pleno',
    specialty: 'Micro-ondas e Pequenos Eletro',
    experience: '8 anos',
    certifications: ['Panasonic', 'Consul', 'Brastemp'],
    description: 'Focado em micro-ondas, airfryers, cafeteiras e purificadores. Experiência em componentes eletrônicos.',
    image: tecnicoMarcos,
  },
];

const TeamSection = () => {
  return (
    <section id="equipe" className="py-20 lg:py-28 bg-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Conheça nossa equipe
          </span>
          <h2 className="section-title">
            <span className="text-gradient">Técnicos</span> Especializados
          </h2>
          <p className="section-subtitle">
            Profissionais altamente qualificados e certificados pelas principais marcas do mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group bg-gradient-to-b from-muted/50 to-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-custom-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-custom-md group-hover:scale-105 transition-transform">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} em ${member.specialty} na TechPremium Maringá`}
                    title={`${member.name} - ${member.specialty}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={512}
                    height={512}
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {member.experience}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-display font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.specialty}</p>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {member.description}
                </p>

                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {member.certifications.map((cert) => (
                    <span key={cert} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                      {cert}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-xs">Certificado</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs">4.9</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 p-6 bg-muted/50 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-bold text-foreground">+45 Anos</div>
                <div className="text-sm text-muted-foreground">Experiência Combinada</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-bold text-foreground">+20 Certificações</div>
                <div className="text-sm text-muted-foreground">Marcas Reconhecidas</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-bold text-foreground">100% Seguros</div>
                <div className="text-sm text-muted-foreground">Serviços Garantidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
