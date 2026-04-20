import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Política de Privacidade | TechPremium Assistência Técnica",
  description: "Política de privacidade e proteção de dados (LGPD) da TechPremium Assistência Técnica em Maringá - PR. Saiba como tratamos seus dados pessoais.",
  alternates: {
    canonical: "https://consertodegeladeira.maringa.br/politica-de-privacidade",
  },
};

export default function PoliticaDePrivacidade() {
  const updateDate = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">Política de Privacidade</h1>
          <p className="text-sm text-muted-foreground mb-8">Última atualização: {updateDate} — Em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</p>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">1. Introdução</h2>
              <p className="text-muted-foreground leading-relaxed">
                A TechPremium Assistência Técnica, inscrita sob CNPJ [número], com sede na Av. Brasil, Centro, Maringá - PR, 87013-000, está comprometida com a proteção dos dados pessoais de seus clientes e visitantes. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">2. Dados Coletados</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Podemos coletar os seguintes dados pessoais:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Dados de identificação:</strong> nome completo, CPF, telefone, e-mail e endereço.</li>
                <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas acessadas, tempo de permanência e cookies.</li>
                <li><strong>Dados de contato via WhatsApp:</strong> número de telefone e conteúdo das mensagens trocadas para fins de atendimento.</li>
                <li><strong>Dados de serviço:</strong> informações sobre o equipamento, defeito relatado e histórico de atendimentos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">3. Finalidade do Tratamento</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Seus dados pessoais são tratados para as seguintes finalidades:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Prestação dos serviços de assistência técnica contratados;</li>
                <li>Comunicação sobre orçamentos, andamento e conclusão dos serviços;</li>
                <li>Envio de informações promocionais (mediante consentimento prévio);</li>
                <li>Cumprimento de obrigações legais e regulatórias;</li>
                <li>Melhoria contínua dos nossos serviços e experiência do usuário no site;</li>
                <li>Análise estatística e de desempenho do site.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">4. Base Legal</h2>
              <p className="text-muted-foreground leading-relaxed">
                O tratamento dos dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD: execução de contrato (Art. 7º, V), consentimento do titular (Art. 7º, I), cumprimento de obrigação legal (Art. 7º, II) e legítimo interesse do controlador (Art. 7º, IX).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">5. Compartilhamento de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                A TechPremium não comercializa dados pessoais. Os dados poderão ser compartilhados apenas com: prestadores de serviços essenciais (como hospedagem do site e ferramentas de análise), autoridades competentes quando exigido por lei, e parceiros comerciais estritamente necessários à prestação do serviço, sempre observando a confidencialidade e segurança.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">6. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies e tecnologias semelhantes para melhorar a experiência de navegação, analisar o tráfego do site e personalizar conteúdo. Você pode configurar seu navegador para recusar cookies, porém isso pode afetar algumas funcionalidades do site. Ao aceitar nossa notificação de cookies, você consente com o uso conforme descrito nesta política.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">7. Segurança dos Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acessos não autorizados, destruição, perda, alteração ou qualquer forma de tratamento inadequado. Utilizamos conexão segura (HTTPS/SSL), controle de acesso e demais práticas recomendadas de segurança da informação.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">8. Seus Direitos (LGPD)</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Como titular dos dados, você tem os seguintes direitos:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Confirmar a existência de tratamento de dados;</li>
                <li>Acessar seus dados pessoais;</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Solicitar a portabilidade dos dados;</li>
                <li>Revogar o consentimento a qualquer momento;</li>
                <li>Obter informações sobre o compartilhamento dos dados.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">9. Retenção dos Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Os dados pessoais serão mantidos pelo período necessário para o cumprimento das finalidades descritas nesta política, respeitando os prazos legais de retenção. Após o término do tratamento, os dados serão eliminados de forma segura, salvo quando houver obrigação legal de mantê-los.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">10. Contato do Encarregado (DPO)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados:<br />
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
