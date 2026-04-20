import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Termos de Uso | TechPremium Assistência Técnica em Maringá",
  description: "Termos de uso do site TechPremium Assistência Técnica. Conheça as condições de utilização dos nossos serviços de conserto de eletrodomésticos em Maringá - PR.",
  alternates: {
    canonical: "https://consertodegeladeira.maringa.br/termos-de-uso",
  },
};

export default function TermosDeUso() {
  const updateDate = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">Termos de Uso</h1>
          <p className="text-sm text-muted-foreground mb-8">Última atualização: {updateDate}</p>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e utilizar o site da TechPremium Assistência Técnica (consertodegeladeira.maringa.br), você concorda com estes Termos de Uso. Caso não concorde com alguma das condições aqui descritas, pedimos que não utilize nosso site. A utilização do site implica na aceitação integral destes termos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">2. Descrição dos Serviços</h2>
              <p className="text-muted-foreground leading-relaxed">
                A TechPremium oferece serviços de assistência técnica especializada para conserto de eletrodomésticos em Maringá - PR e região, incluindo: geladeiras, máquinas de lavar, micro-ondas, freezers, airfryers, purificadores de água, ventiladores, ar-condicionado, cafeteiras e lava-louças. Os serviços são prestados por técnicos qualificados, com atendimento em domicílio ou em nosso estabelecimento localizado na Av. Brasil, Centro, Maringá - PR, 87013-000.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">3. Orçamento e Aprovação</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo serviço é precedido de diagnóstico e orçamento prévio, sem compromisso. O orçamento é gratuito e o serviço só será iniciado após aprovação expressa do cliente. Os valores apresentados no orçamento são válidos por 7 (sete) dias corridos a partir da data de emissão.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">4. Garantia dos Serviços</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todos os serviços realizados pela TechPremium possuem garantia de 90 (noventa) dias, conforme nossa Política de Garantia. A garantia cobre a mão de obra e as peças substituídas durante o conserto. Para mais detalhes, consulte nossa Política de Garantia.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">5. Uso do Site</h2>
              <p className="text-muted-foreground leading-relaxed">
                O conteúdo deste site é disponibilizado apenas para fins informativos. É proibido reproduzir, distribuir ou utilizar comercialmente qualquer conteúdo sem autorização prévia por escrito. O usuário compromete-se a utilizar o site de forma lícita, respeitando a legislação brasileira vigente e os direitos de terceiros.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">6. Propriedade Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo o conteúdo do site, incluindo textos, images, logotipos, marcas e design, são de propriedade da TechPremium ou licenciados para uso. É vedada a reprodução total ou parcial sem autorização expressa. As marcas de terceiros mencionadas são de propriedade de seus respectivos detentores.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">7. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                A TechPremium não se responsabiliza por danos decorrentes do uso indevido do site, falhas de conexão, vírus ou outros problemas técnicos alheios ao nosso controle. As informações são fornecidas "como estão", sem garantias de qualquer natureza, expressas ou implícitas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">8. Alterações nos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                A TechPremium reserva-se o direito de alterar estes Termos de Uso a qualquer momento, sem aviso prévio. Recomendamos que consulte esta página periodicamente para verificar eventuais atualizações.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">9. Foro</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fica eleito o foro da Comarca de Maringá - PR para dirimir quaisquer questões decorrentes da utilização deste site, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">10. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco:<br />
                <strong>E-mail:</strong> contato@consertodegeladeira.maringa.br<br />
                <strong>WhatsApp:</strong> (44) 99739-8826<br />
                <strong>Endereço:</strong> Av. Brasil, Centro, Maringá - PR, 87013-000
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
