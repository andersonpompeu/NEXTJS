import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Política de Garantia | TechPremium Assistência Técnica",
  description: "Política de garantia da TechPremium Assistência Técnica. Garantia de 90 dias em todos os serviços de conserto de eletrodomésticos em Maringá - PR.",
  alternates: {
    canonical: "https://consertodegeladeira.maringa.br/politica-de-garantia",
  },
};

export default function PoliticaDeGarantia() {
  const updateDate = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">Política de Garantia</h1>
          <p className="text-sm text-muted-foreground mb-8">Última atualização: {updateDate}</p>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">1. Garantia dos Serviços</h2>
              <p className="text-muted-foreground leading-relaxed">
                A TechPremium Assistência Técnica oferece garantia de 90 (noventa) dias corridos em todos os serviços de conserto realizados. A garantia abrange a mão de obra empregada e as peças substituídas durante o reparo. O prazo de garantia começa a contar a partir da data de entrega do equipamento consertado ao cliente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">2. Abrangência da Garantia</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">A garantia cobre exclusivamente:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>O defeito original que motivou o conserto;</li>
                <li>As peças substituídas durante o serviço;</li>
                <li>A mão de obra empregada no reparo;</li>
                <li>Falhas decorrentes do serviço realizado pela TechPremium.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">3. Exclusões da Garantia</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">A garantia NÃO cobre:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Defeitos diferentes do problema original consertado;</li>
                <li>Danos causados por mau uso, quedas, variação de tensão ou fenômenos naturais;</li>
                <li>Equipamentos que tenham sido manipulados por terceiros após o conserto;</li>
                <li>Peças de desgaste natural (filtros, borrachas, correias) quando informado no orçamento;</li>
                <li>Equipamentos com número de série adulterado ou removido;</li>
                <li>Danos causados por instalação elétrica inadequada;</li>
                <li>Uso do equipamento em desacordo com as instruções do fabricante.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">4. Como Acionar a Garantia</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Para acionar a garantia, o cliente deve:</p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Entrar em contato pelo WhatsApp (44) 99739-8826 ou e-mail contato@consertodegeladeira.maringa.br;</li>
                <li>Informar o número da ordem de serviço ou nota fiscal;</li>
                <li>Descrever o problema apresentado pelo equipamento;</li>
                <li>Agendar a visita técnica ou levar o equipamento ao nosso endereço.</li>
              </ol>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Após a análise técnica, caso o problema esteja coberto pela garantia, o reparo será realizado sem custo adicional. O prazo para resolução será de até 5 (cinco) dias úteis após a confirmação da cobertura.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">5. Peças Utilizadas</h2>
              <p className="text-muted-foreground leading-relaxed">
                A TechPremium utiliza peças originais ou compatíveis de alta qualidade em todos os reparos. A procedência das peças é informada ao cliente no momento do orçamento. Todas as peças substituídas possuem garantia do fabricante, além da garantia de 90 dias do nosso serviço.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">6. Orçamento Prévio</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo serviço é precedido de diagnóstico e orçamento detalhado, apresentado ao cliente para aprovação antes do início do reparo. O orçamento especifica as peças necessárias, valores de mão de obra e prazo estimado. Caso o cliente não aprove o orçamento, não será cobrada nenhuma taxa pelo diagnóstico.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">7. Responsabilidades do Cliente</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Para manutenção da garantia, o cliente deve:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Utilizar o equipamento de acordo com as instruções do fabricante;</li>
                <li>Não permitir que terceiros realizem reparos ou modificações no equipamento;</li>
                <li>Manter a instalação elétrica em conformidade com as normas técnicas;</li>
                <li>Guardar a ordem de serviço ou nota fiscal como comprovante;</li>
                <li>Comunicar qualquer problema dentro do prazo de garantia.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">8. Prazo de Garantia por Serviço</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-display font-bold text-foreground">Serviço</th>
                      <th className="text-left py-3 px-4 font-display font-bold text-foreground">Garantia</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50"><td className="py-3 px-4">Conserto de Geladeiras</td><td className="py-3 px-4">90 dias</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4">Conserto de Máquinas de Lavar</td><td className="py-3 px-4">90 dias</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4">Conserto de Micro-ondas</td><td className="py-3 px-4">90 dias</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4">Conserto de Freezers</td><td className="py-3 px-4">90 dias</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4">Conserto de Airfryers</td><td className="py-3 px-4">90 dias</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4">Conserto de Purificadores</td><td className="py-3 px-4">90 dias</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4">Conserto de Ventiladores</td><td className="py-3 px-4">90 dias</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4">Conserto de Ar-condicionado</td><td className="py-3 px-4">90 dias</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4">Conserto de Cafeteiras</td><td className="py-3 px-4">90 dias</td></tr>
                    <tr><td className="py-3 px-4">Conserto de Lava-louças</td><td className="py-3 px-4">90 dias</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">9. Disposições Gerais</h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Garantia complementa o Código de Defesa do Consumidor (Lei nº 8.078/90). Em caso de divergência, prevalecerão as disposições legais mais favoráveis ao consumidor. A TechPremium reserva-se o direito de atualizar esta política, comunicando as alterações nesta página.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">10. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para dúvidas sobre nossa Política de Garantia:<br />
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
