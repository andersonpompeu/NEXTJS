import { WashingMachine, Refrigerator, Microwave, Tv, Smartphone, Snowflake, Wind, Droplets, Fan, Coffee, Utensils } from 'lucide-react';

export interface ServiceBrand {
  name: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ChildPageData {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  keyword: string;
  content: ContentSection[];
  faqs: ServiceFAQ[];
}

export interface ContentSection {
  heading: string;
  text: string;
}

export interface ServiceData {
  slug: string;
  icon: typeof WashingMachine;
  title: string;
  titleShort: string;
  city: string;
  seoTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  description: string;
  color: string;
  brands: ServiceBrand[];
  features: string[];
  faqs: ServiceFAQ[];
  neighborhoods: string[];
  longContent: ContentSection[];
  childPages: ChildPageData[];
}

const NEIGHBORHOODS = [
  'Centro',
  'Conjunto Floresta',
  'Conjunto Residencial Mauá',
  'Conjunto Vale Azul',
  'Ecovalley Ecologic City',
  'Jardim Alphaville',
  'Jardim Ana Elisa',
  'Jardim Aurora',
  'Jardim Aurora II',
  'Jardim Canadá',
  'Jardim Califórnia',
  'Jardim Castelo',
  'Jardim Cometa',
  'Jardim Cruzeiro',
  'Jardim das Torres',
  'Jardim Dom Bosco',
  'Jardim Escala',
  'Jardim Esperança I',
  'Jardim Esperança II',
  'Jardim Esperança III',
  'Jardim Esperança IV',
  'Jardim Esplanada',
  'Jardim Europa',
  'Jardim Gralha Azul',
  'Jardim Higienópolis',
  'Jardim Ibirapuera',
  'Jardim Imperial',
  'Jardim Independência',
  'Jardim Independência II',
  'Jardim Independência III',
  'Jardim Ipanema',
  'Jardim Itamarati',
  'Jardim Jaqueline',
  'Jardim Kusumoto',
  'Jardim Mercúrio',
  'Jardim Monte Libano',
  'Jardim Monterey',
  'Jardim Nova Independência',
  'Jardim Nova Paulista',
  'Jardim Nova Maringá II',
  'Jardim Nova Maringá III',
  'Jardim Novo Bertioga',
  'Jardim Novo Mundo',
  'Jardim Ouro Verde II',
  'Jardim Ouro Verde III',
  'Jardim Panorama',
  'Jardim Perimetral',
  'Jardim Primavera',
  'Jardim Primaverão',
  'Jardim Rio de Janeiro',
  'Jardim França',
  'Jardim Maringá I',
  'Jardim São Paulo',
  'Jardim São Paulo II',
  'Jardim Triângulo',
  'Jardim Tropical',
  'Jardim Universal',
  'Jardim Verão',
  'Novo Panorama',
  'Parque Alvamar',
  'Parque Alvamar II',
  'Parque Industrial',
  'Parque Industrial IV',
  'Parque Pioneiros',
  'Parque Residencial Bela Vista',
  'Parque Residencial Bela Vista II',
  'Parque Residencial Nova Aliança',
  'Parque Residencial Novo Centro',
  'Parque Residencial Santana',
  'Residencial Governador José Richa',
  'Residencial São José III',
  'Santa Tereza',
  'Vera Cruz',
];

export const servicesData: ServiceData[] = [
  // ===================== GELADEIRA =====================
  {
    slug: 'conserto-de-geladeira-em-maringa',
    icon: Refrigerator,
    title: 'Conserto de Geladeiras',
    titleShort: 'Geladeiras',
    city: 'Maringá',
    seoTitle: 'Conserto de Geladeira em Maringá | Assistência Técnica Especializada',
    metaDescription: 'Conserto de geladeira em Maringá com atendimento rápido, orçamento gratuito e atendimento em domicílio. Todas as marcas: Brastemp, Electrolux, Consul, LG, Samsung. Garantia de 90 dias.',
    heroSubtitle: 'Especialistas em refrigeração doméstica com mais de 12 anos de experiência em Maringá e região.',
    description: 'Reparos em sistemas de refrigeração, compressores, termostatos, vedações, placas eletrônicas, ventiladores e sistemas de degelo automático.',
    color: 'from-cyan-500 to-cyan-600',
    brands: [{ name: 'Brastemp' }, { name: 'Electrolux' }, { name: 'Consul' }, { name: 'LG' }, { name: 'Samsung' }, { name: 'Panasonic' }],
    features: ['Compressor', 'Termostato', 'Vedação de porta', 'Placa eletrônica', 'Sistema de degelo', 'Ventilador interno'],
    neighborhoods: NEIGHBORHOODS,
    longContent: [
      {
        heading: 'Por que escolher a TechPremium para conserto de geladeira em Maringá?',
        text: 'A TechPremium é referência em assistência técnica de geladeiras em Maringá e região metropolitana de Maringá. Com mais de 12 anos de experiência no mercado, nossos técnicos são altamente qualificados para realizar o reparo, a manutenção preventiva e o conserto completo de refrigeradores de todas as marcas e modelos. Trabalhamos com geladeiras Frost Free, Duplex, Side by Side, Inverse e modelos convencionais, sempre utilizando peças de qualidade e oferecendo garantia de 90 dias em todos os serviços. Nosso diferencial está no atendimento rápido e humanizado: oferecemos orçamento gratuito e sem compromisso, com diagnóstico detalhado do problema. Sabemos que ficar sem geladeira é um grande transtorno, por isso priorizamos a agilidade no atendimento, realizando a maioria dos reparos no mesmo dia da visita técnica. Se você está procurando um técnico de geladeira em Maringá que seja confiável, experiente e com preço justo, a TechPremium é a sua melhor escolha. Atendemos em domicílio em todos os bairros de Maringá, com horários flexíveis para sua comodidade.',
      },
      {
        heading: 'Problemas mais comuns em geladeiras',
        text: 'Ao longo dos nossos anos de atuação em Maringá, identificamos os problemas mais frequentes em geladeiras e refrigeradores. A geladeira que não gela é uma das queixas mais recorrentes e pode ter diversas causas, como falha no compressor, vazamento de gás refrigerante, termostato defeituoso ou problemas no sistema de degelo automático. Outro problema comum é a geladeira que faz barulho excessivo, geralmente relacionado a desgaste nos rolamentos do motor do ventilador, compressor com defeito ou peças soltas. A formação excessiva de gelo no congelador é outro sintoma frequente, normalmente causado por falha no sistema de degelo, borracha de vedação danificada ou sensor de temperatura com defeito. Vazamento de água na parte inferior da geladeira pode indicar problemas no dreno de degelo entupido, bandeja de evaporação danificada ou válvula de água defeituosa. Geladeira que liga e desliga constantemente pode ter problemas no relé de partida, capacitor ou termostato. Em todos esses casos, nossa equipe técnica em Maringá está preparada para realizar o diagnóstico preciso e o reparo eficiente.',
      },
      {
        heading: 'Marcas que atendemos em Maringá',
        text: 'A TechPremium possui técnicos especializados e treinados para realizar o conserto de geladeiras de todas as marcas comercializadas no Brasil. Trabalhamos com Brastemp, Electrolux, Consul, LG, Samsung, Panasonic, Midea, Philco, Continental, Bosch, Dako, GE e muitas outras. Cada fabricante possui suas particularidades técnicas, e nossa equipe está constantemente atualizada sobre as novas tecnologias e componentes de cada marca. Utilizamos peças originais ou compatíveis de alta qualidade, sempre com garantia, para assegurar a durabilidade do reparo. Se a sua geladeira apresentou defeito e você precisa de uma assistência técnica confiável em Maringá, entre em contato conosco pelo WhatsApp e agende uma visita.',
      },
      {
        heading: 'Como funciona nosso atendimento em Maringá',
        text: 'Nosso processo de atendimento em Maringá é simples e descomplicado. Primeiro, você entra em contato conosco pelo WhatsApp ou telefone e descreve o problema da sua geladeira. Em seguida, agendamos uma visita técnica no melhor horário para você, com atendimento em domicílio em toda Maringá. O técnico realiza o diagnóstico completo e apresenta o orçamento detalhado, sem nenhum compromisso. Com o orçamento aprovado, realizamos o reparo imediatamente, sempre que possível no mesmo dia. Ao final, você recebe a garantia de 90 dias por escrito, cobrindo tanto a mão de obra quanto as peças utilizadas. Nosso objetivo é proporcionar tranquilidade e confiança em cada conserto realizado.',
      },
    ],
    faqs: [
      { question: 'Quanto custa o conserto de geladeira em Maringá?', answer: 'O valor varia conforme o tipo de defeito e o modelo da geladeira. Oferecemos orçamento gratuito e sem compromisso. Entre em contato pelo WhatsApp para agendar uma avaliação técnica.' },
      { question: 'Minha geladeira não está gelando, o que pode ser?', answer: 'Pode ser problema no compressor, vazamento de gás refrigerante, termostato defeituoso ou falha no sistema de degelo. Nossos técnicos fazem o diagnóstico completo com orçamento grátis.' },
      { question: 'Vocês fazem recarga de gás em geladeira em Maringá?', answer: 'Sim, realizamos recarga de gás refrigerante R134a e R600a com equipamentos profissionais, detector de vazamento e garantia de 90 dias no serviço.' },
      { question: 'Qual o prazo de garantia do conserto de geladeira?', answer: 'Todos os nossos serviços possuem garantia de 90 dias, cobrindo mão de obra e peças utilizadas no reparo.' },
      { question: 'Vocês consertam geladeira Frost Free em Maringá?', answer: 'Sim! Somos especialistas em geladeiras Frost Free de todas as marcas, incluindo reparo de sistema de degelo automático, sensores e placas eletrônicas.' },
      { question: 'Atendem em domicílio em Maringá?', answer: 'Sim, realizamos atendimento em domicílio em todos os bairros de Maringá, além de Maringá e região metropolitana.' },
    ],
    childPages: [
      {
        slug: 'brastemp',
        title: 'Conserto de Geladeira Brastemp em Maringá',
        seoTitle: 'Conserto de Geladeira Brastemp em Maringá | Assistência Técnica',
        metaDescription: 'Assistência técnica especializada em geladeiras Brastemp em Maringá. Conserto de Frost Free, Inverse, Duplex. Orçamento grátis e garantia de 90 dias.',
        keyword: 'conserto geladeira brastemp maringa',
        content: [
          {
            heading: 'Assistência técnica especializada em geladeiras Brastemp em Maringá',
            text: 'A TechPremium é referência no conserto de geladeiras Brastemp em Maringá e região metropolitana de Maringá. Nossos técnicos possuem ampla experiência com todos os modelos da linha Brastemp, incluindo as geladeiras Frost Free, Inverse, Side by Side, Duplex e os modelos convencionais. A Brastemp é uma das marcas mais tradicionais e confiáveis do mercado brasileiro de eletrodomésticos, conhecida pela qualidade e inovação tecnológica em seus refrigeradores. No entanto, como qualquer equipamento eletrônico, as geladeiras Brastemp podem apresentar defeitos ao longo do tempo, necessitando de manutenção profissional especializada. Contamos com ferramentas adequadas e peças de reposição originais e compatíveis para garantir um reparo de qualidade. Nosso compromisso é devolver o funcionamento perfeito da sua geladeira Brastemp com o menor tempo possível e garantia total de 90 dias.'
          },
          {
            heading: 'Principais modelos Brastemp que consertamos',
            text: 'Atendemos toda a linha de refrigeradores Brastemp, desde os modelos mais antigos até os lançamentos mais recentes. Entre os modelos mais atendidos estão: Brastemp BRM44, BRM54, BRM56, BRE57, BRE80, BRS62, BRO80, BRO85, entre outros. Cada modelo possui características técnicas específicas, como sistemas de refrigeração distintos, placas eletrônicas proprietárias e componentes exclusivos. Nossa equipe técnica em Maringá está preparada para diagnosticar e reparar qualquer modelo Brastemp, independentemente do ano de fabricação. Trabalhamos com geladeiras Brastemp Frost Free que apresentam problemas no sistema de degelo automático, modelos Inverse com falhas na placa eletrônica e geladeiras Side by Side com defeitos no dispenser de água e gelo.'
          },
          {
            heading: 'Defeitos mais comuns em geladeiras Brastemp',
            text: 'Os defeitos mais frequentes que atendemos em geladeiras Brastemp incluem: placa eletrônica queimada ou com mau funcionamento, que é responsável por controlar todas as funções do refrigerador; compressor com defeito, que pode causar a geladeira a não gelar adequadamente; sistema de degelo automático com falha, resultando em acúmulo excessivo de gelo no evaporador; vazamento de gás refrigerante, que compromete a capacidade de refrigeração; borracha de vedação da porta desgastada, permitindo entrada de ar quente; motor do ventilador do evaporador com ruído ou parado; e sensor de temperatura defeituoso. Em todos esses casos, realizamos o reparo com peças de qualidade e garantia.'
          },
          {
            heading: 'Processo de conserto de geladeira Brastemp em Maringá',
            text: 'O processo de conserto da sua geladeira Brastemp em Maringá começa com o contato pelo WhatsApp, onde você descreve o problema observado. Agendamos uma visita técnica no melhor horário para você, com atendimento em domicílio. O técnico realiza uma avaliação minuciosa do equipamento, verificando todos os componentes elétricos, eletrônicos e mecânicos. Após o diagnóstico, apresentamos um orçamento detalhado e transparente, sem custos ocultos. Com a aprovação, iniciamos o reparo imediatamente, utilizando peças adequadas para o modelo específico da sua geladeira Brastemp. Todo o serviço é acompanhado de garantia de 90 dias por escrito. Não deixe sua geladeira Brastemp parada — entre em contato agora e resolva o problema com quem entende.'
          },
        ],
        faqs: [
          { question: 'Vocês são autorizados Brastemp em Maringá?', answer: 'Somos uma assistência técnica independente especializada em geladeiras Brastemp. Trabalhamos com peças originais e compatíveis de alta qualidade, oferecendo garantia de 90 dias.' },
          { question: 'Quanto custa consertar uma geladeira Brastemp Frost Free?', answer: 'O valor depende do defeito específico. Oferecemos orçamento gratuito em domicílio. Entre em contato pelo WhatsApp para agendar.' },
          { question: 'Minha geladeira Brastemp está fazendo barulho, o que pode ser?', answer: 'Barulho na geladeira Brastemp pode indicar problemas no motor do ventilador, compressor ou peças soltas. Realizamos diagnóstico completo gratuito.' },
          { question: 'Vocês têm peças para geladeira Brastemp?', answer: 'Sim, trabalhamos com amplo estoque de peças originais e compatíveis para todos os modelos Brastemp.' },
        ],
      },
      {
        slug: 'consul',
        title: 'Conserto de Geladeira Consul em Maringá',
        seoTitle: 'Conserto de Geladeira Consul em Maringá | Técnico Especializado',
        metaDescription: 'Conserto de geladeira Consul em Maringá. Frost Free, Duplex, Degelo Seco. Técnicos especializados, orçamento grátis e garantia de 90 dias.',
        keyword: 'conserto geladeira consul maringa',
        content: [
          {
            heading: 'Conserto especializado de geladeiras Consul em Maringá',
            text: 'A TechPremium oferece serviço especializado de conserto de geladeiras Consul em Maringá e toda região metropolitana de Maringá. A marca Consul é uma das mais populares no Brasil, presente em milhões de lares brasileiros, e nossos técnicos possuem vasta experiência com todos os seus modelos e tecnologias. Realizamos desde reparos simples, como troca de borracha de vedação e termostatos, até consertos mais complexos envolvendo compressores, placas eletrônicas e sistemas de refrigeração completos. Nosso compromisso com a qualidade e satisfação do cliente é o que nos diferencia como referência em assistência técnica de geladeiras Consul em Maringá.'
          },
          {
            heading: 'Modelos Consul que atendemos',
            text: 'Consertamos todos os modelos de geladeiras Consul, incluindo a linha CRM, CRD, CRG, CRP e outros. Atendemos geladeiras Consul Frost Free, Degelo Seco, Duplex e modelos de uma porta. Cada modelo possui características técnicas próprias, e nossos profissionais estão atualizados sobre as especificações de cada um. Seja uma geladeira Consul antiga ou um modelo recém-lançado, temos a expertise necessária para realizar o conserto com eficiência e segurança em Maringá.'
          },
          {
            heading: 'Problemas frequentes em geladeiras Consul',
            text: 'Entre os problemas mais comuns em geladeiras Consul que atendemos em Maringá estão: geladeira Consul não gela adequadamente, que pode ser causado por falta de gás, compressor com defeito ou termostato desregulado; formação excessiva de gelo no freezer, indicando problemas no sistema de degelo ou borracha da porta; ruídos anormais durante o funcionamento; luz interna não acende; geladeira desliga sozinha ou não liga; vazamento de água na parte inferior; e porta que não fecha corretamente. Para cada um desses problemas, oferecemos soluções rápidas e com garantia em Maringá.'
          },
          {
            heading: 'Vantagens de consertar sua geladeira Consul na TechPremium',
            text: 'Ao escolher a TechPremium para o conserto da sua geladeira Consul em Maringá, você conta com diversas vantagens: atendimento em domicílio em todos os bairros da cidade; orçamento gratuito e detalhado antes de qualquer serviço; técnicos experientes e qualificados; peças de qualidade com garantia; prazo de garantia de 90 dias; atendimento ágil com possibilidade de reparo no mesmo dia; e preços justos e competitivos. Valorizamos a confiança dos nossos clientes e trabalhamos para manter sua geladeira Consul funcionando perfeitamente por muito mais tempo.'
          },
        ],
        faqs: [
          { question: 'Quanto custa consertar uma geladeira Consul em Maringá?', answer: 'O valor varia conforme o defeito. Oferecemos diagnóstico e orçamento grátis em domicílio. Ligue ou mande mensagem pelo WhatsApp.' },
          { question: 'Minha geladeira Consul não gela, vocês consertam?', answer: 'Sim! Geladeira Consul que não gela pode ter diversos problemas e nossos técnicos são especializados em diagnosticar e reparar esse tipo de defeito.' },
          { question: 'Vocês fazem troca de compressor de geladeira Consul?', answer: 'Sim, realizamos troca de compressor com peças novas e garantia de 90 dias no serviço completo.' },
        ],
      },
      {
        slug: 'geladeira-nao-gela',
        title: 'Geladeira Não Gela em Maringá - Diagnóstico e Reparo',
        seoTitle: 'Geladeira Não Gela em Maringá | Diagnóstico e Conserto Rápido',
        metaDescription: 'Sua geladeira não gela em Maringá? Diagnóstico gratuito e conserto rápido. Identificamos o problema: gás, compressor, termostato. Garantia de 90 dias.',
        keyword: 'geladeira não gela maringa',
        content: [
          {
            heading: 'Geladeira não gela em Maringá? Nós resolvemos!',
            text: 'Quando a geladeira para de gelar, a preocupação é imediata: alimentos podem estragar, medicamentos podem perder a validade e toda a rotina da casa é afetada. Se você está em Maringá e sua geladeira não está gelando corretamente, a TechPremium tem a solução. Nossos técnicos especializados em refrigeração realizam o diagnóstico completo do problema, identificando com precisão a causa da falha e apresentando a melhor solução com orçamento gratuito. Atendemos todas as marcas de geladeira — Brastemp, Consul, Electrolux, LG, Samsung e outras — com rapidez e eficiência. Na maioria dos casos, o reparo é realizado no mesmo dia da visita técnica, devolvendo o conforto e a tranquilidade para sua família.'
          },
          {
            heading: 'Principais causas para a geladeira não gelar',
            text: 'Existem diversas razões pelas quais uma geladeira pode parar de gelar ou gelar de forma insuficiente. A causa mais comum é o vazamento de gás refrigerante, que ocorre quando há microfuros no sistema de tubulação, comprometendo a capacidade de refrigeração. Outro motivo frequente é o compressor com defeito — o compressor é o "coração" da geladeira, responsável por fazer o gás circular pelo sistema. Quando ele falha, a geladeira simplesmente não consegue manter a temperatura adequada. O termostato defeituoso também é uma causa comum: ele é responsável por regular a temperatura interna, e quando não funciona corretamente, pode impedir o acionamento do compressor. Problemas no sistema de degelo automático, especialmente em geladeiras Frost Free, podem causar acúmulo de gelo no evaporador, bloqueando a circulação de ar frio. O ventilador do evaporador com defeito impede a distribuição adequada do ar frio dentro do refrigerador. A borracha de vedação da porta, quando desgastada, permite a entrada constante de ar quente, forçando o compressor a trabalhar mais e comprometendo a refrigeração.'
          },
          {
            heading: 'Como identificar o problema na sua geladeira',
            text: 'Antes de chamar o técnico, você pode observar alguns sinais que ajudam a identificar o problema. Se a geladeira não gela nada e o compressor não liga (motor não faz barulho), o problema pode estar no relé de partida, capacitor ou no próprio compressor. Se o compressor liga normalmente mas a geladeira não gela, provavelmente há vazamento de gás ou obstrução no sistema. Se a geladeira gela pouco ou apenas o freezer gela, o problema pode estar no ventilador do evaporador ou no sistema de degelo. Se há acúmulo de gelo no fundo do congelador, o sistema de degelo automático pode estar com defeito. Em todos esses cenários, nossos técnicos em Maringá estão preparados para realizar o diagnóstico preciso e o reparo eficiente.'
          },
          {
            heading: 'Reparo rápido e garantido em Maringá',
            text: 'Na TechPremium, entendemos a urgência de ter a geladeira funcionando. Por isso, oferecemos atendimento prioritário para casos de geladeira que não gela em Maringá. Nosso processo é simples: você entra em contato pelo WhatsApp, descreve o problema e agendamos a visita técnica o mais rápido possível. O técnico vai até sua residência com as ferramentas e peças mais comuns, possibilitando o reparo imediato na maioria dos casos. Realizamos recarga de gás refrigerante, troca de compressor, reparo de termostatos, conserto de sistemas de degelo e substituição de ventiladores, sempre com peças de qualidade e garantia de 90 dias. Não fique sem sua geladeira — ligue agora para a TechPremium!'
          },
        ],
        faqs: [
          { question: 'Quanto custa consertar uma geladeira que não gela?', answer: 'O valor depende da causa do problema. Pode ser desde uma recarga de gás até troca de compressor. Oferecemos orçamento gratuito para identificar o problema.' },
          { question: 'Geladeira que não gela tem conserto?', answer: 'Na grande maioria dos casos sim! Os problemas mais comuns como falta de gás, termostato e compressor são reparáveis com excelente custo-benefício.' },
          { question: 'Em quanto tempo vocês consertam?', answer: 'A maioria dos reparos é realizada no mesmo dia. Casos que necessitam de peças específicas podem levar de 1 a 3 dias úteis.' },
          { question: 'Vocês atendem no mesmo dia em Maringá?', answer: 'Sim, oferecemos atendimento no mesmo dia para urgências. Entre em contato pelo WhatsApp e verificamos a disponibilidade.' },
        ],
      },
      {
        slug: 'recarga-de-gas',
        title: 'Recarga de Gás de Geladeira em Maringá',
        seoTitle: 'Recarga de Gás de Geladeira em Maringá | Técnico Certificado',
        metaDescription: 'Recarga de gás de geladeira em Maringá. Técnicos certificados, gás R134a e R600a. Detecção de vazamento inclusa. Orçamento grátis e garantia.',
        keyword: 'recarga gás geladeira maringa',
        content: [
          {
            heading: 'Recarga de gás de geladeira em Maringá com técnicos certificados',
            text: 'A recarga de gás refrigerante é um dos serviços mais procurados em Maringá quando a geladeira para de gelar. A TechPremium é especialista neste tipo de serviço, contando com técnicos certificados que utilizam equipamentos profissionais de última geração para garantir uma recarga precisa e duradoura. Trabalhamos com os gases refrigerantes R134a e R600a, que são os mais utilizados em geladeiras domésticas modernas. Antes de realizar a recarga, fazemos uma inspeção completa no sistema de refrigeração para identificar e corrigir qualquer vazamento, garantindo que o serviço tenha durabilidade e você não precise de nova recarga em pouco tempo.'
          },
          {
            heading: 'Quando a geladeira precisa de recarga de gás?',
            text: 'A geladeira precisa de recarga de gás quando apresenta sinais específicos de perda de refrigerante. Os principais sintomas incluem: a geladeira gela pouco ou não gela nada; o motor (compressor) funciona continuamente sem parar; o freezer não congela adequadamente; há formação de gelo apenas em parte do evaporador; a parte traseira da geladeira não esquenta como deveria; e o consumo de energia elétrica aumenta consideravelmente. É importante ressaltar que a geladeira é um sistema fechado e, em condições normais, não perde gás. Quando há necessidade de recarga, significa que existe um vazamento no sistema que precisa ser localizado e reparado antes da recarga. Nossos técnicos em Maringá utilizam detectores eletrônicos de vazamento para localizar o ponto exato do problema.'
          },
          {
            heading: 'Processo de recarga de gás em Maringá',
            text: 'O processo de recarga de gás na TechPremium em Maringá segue um protocolo rigoroso para garantir qualidade e segurança. Primeiro, realizamos a evacuação completa do sistema para remover umidade e impurezas. Em seguida, utilizamos o detector de vazamento para localizar qualquer ponto de fuga no sistema. Identificado o vazamento, realizamos o reparo com soldagem adequada. Após o reparo, fazemos o teste de estanqueidade para confirmar que não há mais vazamento. Finalmente, realizamos a carga de gás na quantidade exata especificada pelo fabricante, verificando a pressão e temperatura de trabalho. Todo o serviço inclui garantia de 90 dias.'
          },
          {
            heading: 'Tipos de gás refrigerante para geladeiras',
            text: 'Existem diferentes tipos de gás refrigerante utilizados em geladeiras, e é fundamental utilizar o tipo correto para cada modelo. O R134a é um dos gases mais comuns, utilizado em geladeiras fabricadas a partir dos anos 1990. É um gás seguro, não inflamável e com bom desempenho de refrigeração. O R600a (isobutano) é um gás mais recente e ecologicamente correto, utilizado em geladeiras mais modernas por ter menor impacto ambiental. Alguns modelos mais antigos podem utilizar R12 ou outros gases. Na TechPremium em Maringá, identificamos o gás correto para cada modelo e realizamos a recarga com a quantidade exata especificada pelo fabricante, garantindo o funcionamento perfeito da sua geladeira.'
          },
        ],
        faqs: [
          { question: 'Quanto custa a recarga de gás de geladeira em Maringá?', answer: 'O valor da recarga de gás varia conforme o modelo da geladeira e tipo de gás. Oferecemos orçamento gratuito em domicílio.' },
          { question: 'A recarga de gás resolve o problema da geladeira?', answer: 'A recarga resolve quando o problema é falta de gás. Porém, é essencial identificar e reparar o vazamento para que a solução seja definitiva.' },
          { question: 'Quanto tempo dura a recarga de gás?', answer: 'Com o vazamento devidamente reparado, a recarga de gás pode durar muitos anos, já que o sistema é fechado.' },
          { question: 'Vocês detectam vazamento de gás na geladeira?', answer: 'Sim, utilizamos detector eletrônico de vazamento profissional para localizar o ponto exato do problema antes de realizar a recarga.' },
        ],
      },
      {
        slug: 'troca-de-compressor',
        title: 'Troca de Compressor de Geladeira em Maringá',
        seoTitle: 'Troca de Compressor de Geladeira em Maringá | Garantia 90 Dias',
        metaDescription: 'Troca de compressor de geladeira em Maringá. Compressores novos com garantia. Todas as marcas. Atendimento em domicílio e orçamento grátis.',
        keyword: 'troca compressor geladeira maringa',
        content: [
          {
            heading: 'Troca de compressor de geladeira em Maringá com garantia',
            text: 'O compressor é o componente mais importante da sua geladeira — é o responsável por fazer circular o gás refrigerante pelo sistema, possibilitando a refrigeração dos alimentos. Quando o compressor apresenta defeito, a geladeira para de gelar completamente ou gela de forma insuficiente. A TechPremium em Maringá é especialista na troca de compressor de geladeiras de todas as marcas e modelos, utilizando compressores novos e de qualidade, com garantia de 90 dias tanto na peça quanto na mão de obra. Nossos técnicos possuem experiência e equipamentos adequados para realizar a substituição com segurança e eficiência.'
          },
          {
            heading: 'Sinais de que o compressor da geladeira está com defeito',
            text: 'Identificar um compressor com defeito é fundamental para evitar danos maiores à geladeira. Os principais sinais incluem: a geladeira não gela e o motor não liga; o motor tenta ligar e desliga em seguida (estalos); barulho alto e anormal vindo da parte traseira da geladeira; o compressor esquenta excessivamente; a geladeira gela pouco mesmo com o termostato no máximo; e aumento significativo na conta de energia elétrica. Se você identificar qualquer um desses sintomas na sua geladeira em Maringá, entre em contato com a TechPremium para uma avaliação técnica gratuita.'
          },
          {
            heading: 'Como é feita a troca de compressor',
            text: 'A troca de compressor de geladeira é um serviço técnico que exige profissional qualificado e equipamentos específicos. Na TechPremium, o processo inclui: diagnóstico confirmando que o compressor é realmente o problema; seleção do compressor adequado para o modelo da geladeira; remoção do compressor antigo com descarte ambientalmente correto; instalação do novo compressor com soldagem adequada das tubulações; troca do filtro secador; realização de vácuo no sistema para remoção de umidade; carga do gás refrigerante na quantidade exata; e teste completo de funcionamento. Todo o serviço é realizado em domicílio em Maringá.'
          },
          {
            heading: 'Vale a pena trocar o compressor da geladeira?',
            text: 'Uma dúvida muito comum entre nossos clientes em Maringá é se vale a pena trocar o compressor ou comprar uma geladeira nova. Na maioria dos casos, a troca do compressor é vantajosa economicamente, pois custa uma fração do valor de uma geladeira nova e pode prolongar a vida útil do equipamento por muitos anos. Geladeiras com menos de 10 anos geralmente compensam o reparo. Já para modelos muito antigos, com outros componentes desgastados, pode ser mais vantajoso investir em um equipamento novo. Nossos técnicos em Maringá avaliam cada caso individualmente e orientam sobre a melhor decisão, sempre com transparência e honestidade.'
          },
        ],
        faqs: [
          { question: 'Quanto custa trocar o compressor da geladeira em Maringá?', answer: 'O valor varia conforme o modelo da geladeira e potência do compressor. Oferecemos orçamento gratuito em domicílio sem compromisso.' },
          { question: 'Quanto tempo leva para trocar o compressor?', answer: 'A troca de compressor geralmente é realizada em 2 a 4 horas, dependendo do modelo e condições do sistema.' },
          { question: 'Qual a garantia na troca de compressor?', answer: 'Oferecemos garantia de 90 dias cobrindo a peça (compressor novo) e a mão de obra do serviço.' },
          { question: 'Vocês trocam compressor de qualquer marca?', answer: 'Sim, realizamos troca de compressor de geladeiras de todas as marcas: Brastemp, Consul, Electrolux, LG, Samsung e outras.' },
        ],
      },
    ],
  },

  // ===================== MÁQUINA DE LAVAR =====================
  {
    slug: 'conserto-de-maquina-de-lavar-em-maringa',
    icon: WashingMachine,
    title: 'Conserto de Máquinas de Lavar',
    titleShort: 'Máquinas de Lavar',
    city: 'Maringá',
    seoTitle: 'Conserto de Máquina de Lavar em Maringá | Assistência Técnica Especializada',
    metaDescription: 'Conserto de máquina de lavar em Maringá com atendimento rápido e orçamento gratuito. Brastemp, Electrolux, LG, Samsung. Garantia de 90 dias e atendimento em domicílio.',
    heroSubtitle: 'Técnicos especializados em reparo de lavadoras de todas as marcas com atendimento em domicílio em Maringá.',
    description: 'Realizamos consertos em máquinas de lavar de todas as marcas e modelos. Problemas com motor, placa eletrônica, tambor, bomba d\'água e mais.',
    color: 'from-blue-500 to-blue-600',
    brands: [{ name: 'Brastemp' }, { name: 'Electrolux' }, { name: 'LG' }, { name: 'Samsung' }, { name: 'Consul' }, { name: 'Mueller' }],
    features: ['Motor e rolamentos', 'Placa eletrônica', 'Tambor e eixo', 'Bomba d\'água', 'Válvula de entrada', 'Timer e programador'],
    neighborhoods: NEIGHBORHOODS,
    longContent: [
      {
        heading: 'Por que escolher a TechPremium para conserto de máquina de lavar em Maringá?',
        text: 'A TechPremium é a assistência técnica mais confiável de Maringá para conserto de máquinas de lavar. Com mais de 12 anos de experiência, nossos técnicos são especialistas em lavadoras de todas as marcas e modelos, incluindo máquinas automáticas, semiautomáticas, lava e seca e lavadoras de alta capacidade. Oferecemos atendimento em domicílio em toda Maringá, com orçamento gratuito e garantia de 90 dias em todos os serviços. Sabemos que ficar sem máquina de lavar é um grande inconveniente no dia a dia, por isso priorizamos a rapidez no atendimento e na execução do reparo. Nossa equipe está preparada para resolver desde problemas simples, como troca de correias e mangueiras, até reparos complexos envolvendo placas eletrônicas, motores e sistemas de transmissão.',
      },
      {
        heading: 'Problemas mais comuns em máquinas de lavar',
        text: 'Ao longo dos anos atendendo clientes em Maringá, identificamos os defeitos mais frequentes em máquinas de lavar. A máquina que não centrifuga é uma das queixas mais comuns, podendo ser causada por problemas no motor, capacitor, correia, placa eletrônica ou sensor de tampa. Máquina de lavar que não enche de água pode ter válvula de entrada defeituosa, pressostato com problema ou mangueira de entrada obstruída. Vazamento de água é outro problema recorrente, geralmente causado por manguerias danificadas, retentor do eixo gasto, ou tanque com trinca. Máquina que faz barulho excessivo durante a lavagem ou centrifugação pode indicar rolamentos desgastados, amortecedores vencidos ou objetos presos no tambor. Problemas na placa eletrônica também são frequentes, causando comportamentos erráticos como travamento no meio do ciclo ou não ligar.',
      },
      {
        heading: 'Marcas que consertamos em Maringá',
        text: 'A TechPremium trabalha com todas as marcas de máquinas de lavar disponíveis no mercado brasileiro. Somos especialistas em Brastemp, Electrolux, LG, Samsung, Consul, Mueller, Colormaq, Midea, Panasonic e outras. Cada marca possui suas particularidades técnicas, e nossa equipe está constantemente atualizada sobre as novidades e componentes de cada fabricante. Trabalhamos com lavadoras de carga superior e frontal, modelos com diferentes capacidades e tecnologias. Utilizamos peças originais ou compatíveis de alta qualidade para garantir a durabilidade do reparo e a satisfação dos nossos clientes em Maringá.',
      },
      {
        heading: 'Como funciona nosso atendimento em Maringá',
        text: 'O processo de atendimento da TechPremium em Maringá é descomplicado e transparente. Você entra em contato pelo WhatsApp ou telefone informando o problema da sua máquina de lavar. Agendamos a visita técnica em domicílio no melhor horário para você. O técnico realiza o diagnóstico completo, verificando todos os componentes da lavadora, e apresenta o orçamento detalhado sem compromisso. Após a aprovação, o reparo é iniciado imediatamente, com a maioria dos serviços concluídos no mesmo dia. Ao final, você recebe a garantia de 90 dias cobrindo mão de obra e peças. Atendemos em todos os bairros de Maringá e região.',
      },
    ],
    faqs: [
      { question: 'Quanto custa consertar máquina de lavar em Maringá?', answer: 'O valor depende do defeito. Oferecemos orçamento gratuito em domicílio. Entre em contato pelo WhatsApp para agendar.' },
      { question: 'Minha máquina de lavar não centrifuga, o que pode ser?', answer: 'Pode ser problema no motor, capacitor, correia, placa eletrônica ou sensor de tampa. Fazemos diagnóstico completo gratuito.' },
      { question: 'Vocês consertam todas as marcas de máquina de lavar?', answer: 'Sim! Brastemp, Electrolux, LG, Samsung, Consul, Mueller e todas as outras marcas.' },
      { question: 'Vocês atendem em domicílio em Maringá?', answer: 'Sim, realizamos atendimento em domicílio em todos os bairros de Maringá e região metropolitana de Maringá.' },
    ],
    childPages: [
      {
        slug: 'brastemp',
        title: 'Conserto de Máquina de Lavar Brastemp em Maringá',
        seoTitle: 'Conserto de Máquina de Lavar Brastemp em Maringá | Assistência Técnica',
        metaDescription: 'Conserto de máquina de lavar Brastemp em Maringá. Técnicos especializados, orçamento grátis e garantia de 90 dias.',
        keyword: 'conserto máquina de lavar brastemp maringa',
        content: [
          { heading: 'Especialistas em máquinas de lavar Brastemp em Maringá', text: 'A TechPremium é referência no conserto de máquinas de lavar Brastemp em Maringá. Nossos técnicos possuem ampla experiência com todos os modelos da linha Brastemp, incluindo as lavadoras BWL, BWK, BWH, BWN e outras séries. A Brastemp é reconhecida pela qualidade e tecnologia avançada em suas lavadoras, mas como qualquer eletrodoméstico, podem apresentar defeitos ao longo do uso. Contamos com ferramentas adequadas e peças de reposição para garantir um reparo de qualidade com garantia de 90 dias. Atendemos em domicílio em todos os bairros de Maringá.' },
          { heading: 'Defeitos comuns em lavadoras Brastemp', text: 'Os problemas mais frequentes em máquinas de lavar Brastemp incluem: placa eletrônica com defeito, causando travamento ou erro no display; motor que não funciona ou funciona com ruído; problemas na centrifugação; válvula de entrada de água defeituosa; bomba de drenagem entupida ou queimada; sensor de nível com falha; pressostatodefeituoso; e problemas no sistema de freio. Nossa equipe em Maringá está preparada para diagnosticar e reparar todos esses defeitos com rapidez e eficiência.' },
          { heading: 'Processo de conserto e garantia', text: 'O conserto da sua máquina de lavar Brastemp em Maringá começa com o contato pelo WhatsApp. Agendamos a visita técnica em domicílio, realizamos o diagnóstico completo e apresentamos o orçamento transparente. Com a aprovação, efetuamos o reparo no mesmo dia sempre que possível. Utilizamos peças de qualidade e oferecemos garantia de 90 dias em todo o serviço.' },
        ],
        faqs: [
          { question: 'Vocês consertam máquina de lavar Brastemp 11kg em Maringá?', answer: 'Sim, consertamos todos os modelos de máquinas de lavar Brastemp, de qualquer capacidade.' },
          { question: 'Minha Brastemp está com erro no painel, vocês resolvem?', answer: 'Sim, somos especialistas em diagnóstico e reparo de placas eletrônicas de lavadoras Brastemp.' },
        ],
      },
      {
        slug: 'electrolux',
        title: 'Conserto de Máquina de Lavar Electrolux em Maringá',
        seoTitle: 'Conserto de Máquina de Lavar Electrolux em Maringá | Técnico',
        metaDescription: 'Conserto de máquina de lavar Electrolux em Maringá. Técnicos especializados, peças de qualidade e garantia de 90 dias.',
        keyword: 'conserto máquina lavar electrolux maringa',
        content: [
          { heading: 'Conserto de máquina de lavar Electrolux em Maringá', text: 'A TechPremium oferece assistência técnica especializada em máquinas de lavar Electrolux em Maringá. Atendemos todos os modelos da linha Electrolux, incluindo as lavadoras LAC, LT, LTC, LTE, LTD, LEI e outras séries. Com mais de 12 anos de experiência, nossos técnicos conhecem profundamente as particularidades de cada modelo Electrolux. Realizamos desde reparos simples até consertos complexos em placas, motores e sistemas de transmissão. Atendimento em domicílio com orçamento gratuito.' },
          { heading: 'Problemas frequentes em lavadoras Electrolux', text: 'As máquinas de lavar Electrolux podem apresentar diversos problemas ao longo do tempo. Os mais comuns incluem: máquina que não centrifuga corretamente; placa eletrônica queimada; motor com defeito; vazamento de água pelo retentor; bomba de drenagem entupida; e problemas com o sensor de nível de água. Para cada um desses defeitos, oferecemos soluções rápidas e com garantia de 90 dias em Maringá.' },
          { heading: 'Por que escolher a TechPremium para sua Electrolux', text: 'Somos uma assistência técnica independente com vasta experiência em lavadoras Electrolux. Oferecemos atendimento em domicílio em todos os bairros de Maringá, orçamento gratuito, peças de qualidade e garantia de 90 dias. Nosso compromisso é devolver sua máquina de lavar Electrolux ao funcionamento perfeito com agilidade e preço justo.' },
        ],
        faqs: [
          { question: 'Vocês consertam lava e seca Electrolux?', answer: 'Sim, consertamos todos os modelos de lava e seca Electrolux com garantia.' },
          { question: 'Minha Electrolux não está drenando a água, o que fazer?', answer: 'Pode ser bomba de drenagem entupida ou mangueira obstruída. Nossos técnicos resolvem esse problema rapidamente.' },
        ],
      },
      {
        slug: 'nao-centrifuga',
        title: 'Máquina de Lavar Não Centrifuga em Maringá',
        seoTitle: 'Máquina de Lavar Não Centrifuga em Maringá | Conserto Rápido',
        metaDescription: 'Máquina de lavar não centrifuga em Maringá? Diagnóstico grátis e conserto rápido. Motor, placa, correia. Garantia de 90 dias.',
        keyword: 'máquina de lavar não centrifuga maringa',
        content: [
          { heading: 'Máquina de lavar não centrifuga? Resolvemos em Maringá!', text: 'Quando a máquina de lavar para de centrifugar, as roupas saem encharcadas e a lavagem fica comprometida. Se você está em Maringá e sua lavadora não centrifuga, a TechPremium tem a solução. Nossos técnicos são especialistas em diagnosticar e reparar problemas de centrifugação em todas as marcas de máquinas de lavar. O problema pode ter diversas causas, desde um simples capacitor queimado até defeitos mais complexos na placa eletrônica ou motor. Oferecemos diagnóstico gratuito em domicílio e reparo rápido com garantia de 90 dias.' },
          { heading: 'Causas para a máquina não centrifugar', text: 'As principais causas para uma máquina de lavar não centrifugar incluem: capacitor do motor defeituoso; correia solta ou rompida; motor com problema nos enrolamentos; placa eletrônica com defeito; sensor de tampa ou trava da porta com falha; amortecedores desgastados (máquina detecta desbalanceamento); e excesso de roupas. Nossos técnicos em Maringá avaliam cada caso e identificam a causa exata do problema.' },
          { heading: 'Conserto rápido e garantido', text: 'Na TechPremium, priorizamos a agilidade no atendimento. A maioria dos problemas de centrifugação são resolvidos no mesmo dia da visita técnica em Maringá. Trabalhamos com peças de qualidade e oferecemos garantia de 90 dias em todos os serviços. Entre em contato pelo WhatsApp e agende sua visita técnica.' },
        ],
        faqs: [
          { question: 'Quanto custa consertar a centrifugação da máquina de lavar?', answer: 'Depende da causa do problema. Oferecemos orçamento gratuito em domicílio em Maringá.' },
          { question: 'Pode ser o motor que está com problema?', answer: 'Sim, o motor é uma das possíveis causas. Também pode ser capacitor, correia, placa eletrônica ou sensor.' },
        ],
      },
    ],
  },

  // ===================== MICRO-ONDAS =====================
  {
    slug: 'conserto-de-micro-ondas-em-maringa',
    icon: Microwave,
    title: 'Conserto de Micro-ondas',
    titleShort: 'Micro-ondas',
    city: 'Maringá',
    seoTitle: 'Conserto de Micro-ondas em Maringá | Assistência Técnica Especializada',
    metaDescription: 'Conserto de micro-ondas em Maringá com orçamento gratuito e atendimento rápido. Panasonic, Electrolux, Brastemp, LG. Garantia de 90 dias.',
    heroSubtitle: 'Reparo profissional de micro-ondas com diagnóstico preciso e garantia em Maringá.',
    description: 'Consertamos micro-ondas de todas as marcas: magnetrons, capacitores, placas, portas e painéis touch.',
    color: 'from-violet-500 to-purple-600',
    brands: [{ name: 'Panasonic' }, { name: 'Electrolux' }, { name: 'Brastemp' }, { name: 'LG' }, { name: 'Midea' }, { name: 'Consul' }],
    features: ['Magnetron', 'Placa eletrônica', 'Painel touch', 'Porta e travas', 'Capacitor', 'Motor do prato'],
    neighborhoods: NEIGHBORHOODS,
    longContent: [
      {
        heading: 'Por que escolher a TechPremium para conserto de micro-ondas em Maringá?',
        text: 'A TechPremium é referência em conserto de micro-ondas em Maringá e região metropolitana de Maringá. Com mais de 12 anos de experiência, nossos técnicos são capacitados para realizar reparos em micro-ondas de todas as marcas e modelos com total segurança. O micro-ondas trabalha com alta tensão e componentes que podem representar risco se manuseados incorretamente, por isso é fundamental contar com profissionais qualificados. Oferecemos orçamento gratuito, atendimento ágil e garantia de 90 dias em todos os serviços. Se o seu micro-ondas parou de esquentar, está com o painel travado ou apresenta qualquer outro defeito, entre em contato conosco e resolva o problema com segurança e qualidade.',
      },
      {
        heading: 'Problemas mais comuns em micro-ondas',
        text: 'Os defeitos mais frequentes em micro-ondas que atendemos em Maringá incluem: micro-ondas que não esquenta os alimentos, geralmente causado por magnetron queimado ou capacitor de alta tensão defeituoso; painel de controle que não responde, indicando problemas na membrana do teclado ou placa de controle; micro-ondas que não liga, podendo ser fusível queimado, problema na chave da porta ou defeito na fonte de alimentação; prato giratório que não gira, causado por motor do prato ou acoplamento quebrado; faíscas internas, que podem indicar problema na mica protetora ou no revestimento interno; e porta que não fecha corretamente, comprometendo as travas de segurança. Cada um desses problemas requer diagnóstico profissional e reparo especializado.',
      },
      {
        heading: 'Marcas de micro-ondas que consertamos',
        text: 'Atendemos todas as principais marcas de micro-ondas em Maringá: Panasonic, Electrolux, Brastemp, LG, Midea, Consul, Philco, Britânia, Mondial e outras. Cada fabricante possui suas particularidades técnicas, e nossa equipe está preparada para trabalhar com todas elas. Utilizamos peças originais e compatíveis de qualidade para garantir a durabilidade do reparo. Se o seu micro-ondas apresentou qualquer problema, não tente consertar sozinho — é perigoso. Conte com os técnicos da TechPremium em Maringá.',
      },
      {
        heading: 'Como funciona nosso atendimento',
        text: 'Nosso processo de atendimento para conserto de micro-ondas em Maringá é simples: entre em contato pelo WhatsApp descrevendo o problema, agendamos a melhor forma de atendimento, realizamos o diagnóstico completo com orçamento gratuito e, após aprovação, efetuamos o reparo com garantia de 90 dias. Para micro-ondas, dependendo do defeito, o reparo pode ser realizado em nossa oficina ou em domicílio. Priorizamos a segurança e qualidade em cada conserto.',
      },
    ],
    faqs: [
      { question: 'Meu micro-ondas não esquenta, vale a pena consertar?', answer: 'Na maioria dos casos sim! O problema geralmente está no magnetron ou capacitor, e o conserto tem ótimo custo-benefício.' },
      { question: 'Conserto de micro-ondas é seguro?', answer: 'Sim, nossos técnicos são certificados e seguem protocolos de segurança rigorosos para reparos em micro-ondas.' },
      { question: 'Vocês consertam painel touch de micro-ondas?', answer: 'Sim! Realizamos troca e reparo de painéis touch e membranas de todas as marcas.' },
      { question: 'Atendem em Maringá?', answer: 'Sim! Atendemos em toda Maringá, Maringá e região metropolitana.' },
    ],
    childPages: [
      {
        slug: 'panasonic',
        title: 'Conserto de Micro-ondas Panasonic em Maringá',
        seoTitle: 'Conserto de Micro-ondas Panasonic em Maringá | Assistência Técnica',
        metaDescription: 'Conserto de micro-ondas Panasonic em Maringá. Técnicos especializados, orçamento grátis e garantia de 90 dias.',
        keyword: 'conserto micro-ondas panasonic maringa',
        content: [
          { heading: 'Assistência técnica Panasonic em Maringá', text: 'A TechPremium é especialista no conserto de micro-ondas Panasonic em Maringá. A Panasonic é uma das marcas mais confiáveis e tecnologicamente avançadas em micro-ondas, com modelos que vão desde os compactos até os de alta capacidade com tecnologia Inverter. Nossos técnicos possuem conhecimento aprofundado sobre todos os modelos Panasonic, incluindo a tecnologia Inverter que permite um aquecimento mais uniforme e eficiente. Realizamos reparos em magnetrons, placas Inverter, painéis de controle, portas e todos os demais componentes.' },
          { heading: 'Defeitos comuns em micro-ondas Panasonic', text: 'Os problemas mais comuns em micro-ondas Panasonic incluem: falha na placa Inverter, painel de controle com teclas não responsivas, magnetron queimado, fusível de alta tensão aberto e problema nas travas da porta. Cada modelo Panasonic possui características próprias e nossos técnicos estão preparados para lidar com todas elas em Maringá.' },
          { heading: 'Reparo com garantia', text: 'Todo conserto de micro-ondas Panasonic realizado pela TechPremium em Maringá inclui garantia de 90 dias para mão de obra e peças. Utilizamos componentes de qualidade compatíveis com os padrões Panasonic. Entre em contato pelo WhatsApp para agendar seu orçamento gratuito.' },
        ],
        faqs: [
          { question: 'Vocês consertam micro-ondas Panasonic Inverter?', answer: 'Sim, somos especialistas na tecnologia Inverter da Panasonic e realizamos reparos na placa Inverter e demais componentes.' },
          { question: 'Quanto custa consertar micro-ondas Panasonic?', answer: 'O valor depende do defeito. Oferecemos orçamento gratuito. Entre em contato pelo WhatsApp.' },
        ],
      },
      {
        slug: 'nao-esquenta',
        title: 'Micro-ondas Não Esquenta em Maringá',
        seoTitle: 'Micro-ondas Não Esquenta em Maringá | Diagnóstico e Reparo',
        metaDescription: 'Micro-ondas não esquenta em Maringá? Diagnóstico grátis. Magnetron, capacitor, diodo. Conserto rápido com garantia de 90 dias.',
        keyword: 'micro-ondas não esquenta maringa',
        content: [
          { heading: 'Micro-ondas não esquenta? Resolvemos em Maringá!', text: 'Quando o micro-ondas liga normalmente mas não esquenta os alimentos, o problema geralmente está relacionado aos componentes de alta tensão do aparelho. As causas mais comuns são: magnetron queimado (componente responsável por gerar as micro-ondas), capacitor de alta tensão defeituoso, diodo de alta tensão aberto ou em curto, e fusível de alta tensão queimado. Estes componentes trabalham com tensões muito altas e devem ser manuseados apenas por técnicos qualificados. A TechPremium em Maringá possui profissionais capacitados para diagnosticar e reparar esses problemas com segurança e garantia.' },
          { heading: 'Diagnóstico profissional', text: 'Nosso diagnóstico inclui verificação completa de todos os componentes: magnetron, capacitor, diodo, fusíveis, transformador e placa de controle. Identificamos a causa exata do problema e apresentamos o orçamento antes de qualquer reparo. O diagnóstico é gratuito em Maringá.' },
          { heading: 'Conserto rápido com garantia', text: 'A maioria dos reparos em micro-ondas que não esquenta é realizada em 1 a 2 dias úteis. Trabalhamos com peças de qualidade e oferecemos garantia de 90 dias. Não tente abrir o micro-ondas sozinho — os capacitores armazenam carga elétrica perigosa mesmo com o aparelho desligado.' },
        ],
        faqs: [
          { question: 'É perigoso abrir o micro-ondas?', answer: 'Sim, muito perigoso! O capacitor de alta tensão pode manter carga elétrica mesmo desligado. Sempre procure um técnico qualificado.' },
          { question: 'Quanto custa trocar o magnetron?', answer: 'O valor depende do modelo do micro-ondas. Oferecemos orçamento gratuito em Maringá.' },
        ],
      },
    ],
  },

  // ===================== FREEZER =====================
  {
    slug: 'conserto-de-freezer-em-maringa',
    icon: Snowflake,
    title: 'Conserto de Freezers',
    titleShort: 'Freezers',
    city: 'Maringá',
    seoTitle: 'Conserto de Freezer em Maringá | Assistência Técnica Especializada',
    metaDescription: 'Conserto de freezer em Maringá com atendimento rápido e orçamento gratuito. Freezer vertical, horizontal. Brastemp, Consul, Electrolux, Metalfrio. Garantia 90 dias.',
    heroSubtitle: 'Especialistas em conserto de freezers verticais e horizontais de todas as marcas em Maringá.',
    description: 'Reparo de freezers verticais, horizontais e comerciais. Compressores, termostatos, vedações e sistemas de refrigeração.',
    color: 'from-sky-500 to-blue-600',
    brands: [{ name: 'Brastemp' }, { name: 'Consul' }, { name: 'Electrolux' }, { name: 'Metalfrio' }, { name: 'Gelopar' }, { name: 'Fricon' }],
    features: ['Compressor', 'Termostato', 'Vedação', 'Gás refrigerante', 'Placa eletrônica', 'Motor ventilador'],
    neighborhoods: NEIGHBORHOODS,
    longContent: [
      {
        heading: 'Conserto de freezer em Maringá: especialistas em refrigeração',
        text: 'A TechPremium é a assistência técnica ideal para conserto de freezers em Maringá. Atendemos freezers verticais, horizontais e comerciais de todas as marcas, como Brastemp, Consul, Electrolux, Metalfrio, Gelopar e Fricon. Nossos técnicos são especializados em sistemas de refrigeração e possuem mais de 12 anos de experiência no mercado. Oferecemos orçamento gratuito, atendimento em domicílio e garantia de 90 dias em todos os serviços. Se o seu freezer parou de congelar, está fazendo barulho ou apresenta qualquer outro problema, entre em contato conosco pelo WhatsApp e agende uma visita técnica.',
      },
      {
        heading: 'Problemas mais comuns em freezers',
        text: 'Os problemas mais frequentes em freezers incluem: freezer que não congela adequadamente, causado por falta de gás, compressor com defeito ou termostato desregulado; formação excessiva de gelo nas paredes internas; freezer que não liga; barulho excessivo durante o funcionamento; vazamento de água; porta que não veda corretamente; e consumo elevado de energia. Muitos desses problemas são simples de resolver quando diagnosticados por um técnico especializado. Outros, como troca de compressor ou recarga de gás, exigem equipamentos específicos que nossa equipe possui.',
      },
      {
        heading: 'Freezers comerciais e residenciais',
        text: 'Atendemos tanto freezers residenciais quanto comerciais em Maringá. Freezers comerciais de marcas como Metalfrio, Gelopar e Fricon são essenciais para comércios, restaurantes e mercados, e qualquer tempo parado significa prejuízo. Por isso, oferecemos atendimento prioritário para estabelecimentos comerciais, com possibilidade de atendimento emergencial. Para freezers residenciais, atendemos todas as marcas com a mesma qualidade e garantia.',
      },
      {
        heading: 'Atendimento rápido em Maringá',
        text: 'Sabemos que um freezer com defeito pode causar grandes prejuízos, especialmente com alimentos congelados. Por isso, priorizamos a agilidade no atendimento em Maringá. Entre em contato pelo WhatsApp, descreva o problema e agendamos a visita técnica o mais rápido possível. A maioria dos reparos é realizada no mesmo dia, e todos os serviços incluem garantia de 90 dias.',
      },
    ],
    faqs: [
      { question: 'Vocês consertam freezer horizontal em Maringá?', answer: 'Sim, consertamos freezers horizontais e verticais de todas as marcas em Maringá.' },
      { question: 'Meu freezer não está congelando, o que pode ser?', answer: 'Pode ser falta de gás, compressor defeituoso, termostato ou vedação da porta. Fazemos diagnóstico gratuito.' },
      { question: 'Atendem freezer comercial?', answer: 'Sim, atendemos freezers comerciais de marcas como Metalfrio, Gelopar e Fricon com atendimento prioritário.' },
      { question: 'Qual a garantia do conserto?', answer: 'Todos os serviços possuem garantia de 90 dias para mão de obra e peças.' },
    ],
    childPages: [
      {
        slug: 'freezer-nao-congela',
        title: 'Freezer Não Congela em Maringá - Diagnóstico e Reparo',
        seoTitle: 'Freezer Não Congela em Maringá | Conserto Rápido com Garantia',
        metaDescription: 'Freezer não congela em Maringá? Diagnóstico gratuito e conserto rápido. Gás, compressor, termostato. Garantia de 90 dias.',
        keyword: 'freezer não congela maringa',
        content: [
          { heading: 'Freezer não congela em Maringá? Nós resolvemos!', text: 'Se o seu freezer parou de congelar em Maringá, a TechPremium tem a solução. Os motivos mais comuns para um freezer não congelar incluem: vazamento de gás refrigerante, compressor com defeito, termostato desregulado, borracha de vedação danificada e problemas no sistema elétrico. Nossos técnicos realizam diagnóstico completo e gratuito em domicílio, identificando a causa exata do problema e apresentando o melhor orçamento para o reparo.' },
          { heading: 'Causas e soluções', text: 'A falta de gás refrigerante é a causa mais comum de freezer que não congela. Quando há vazamento no sistema, o gás escapa gradualmente e o freezer perde capacidade de congelamento. Nossos técnicos utilizam detectores de vazamento para localizar o problema, realizam o reparo e efetuam a recarga de gás com garantia. O compressor defeituoso é outra causa frequente — realizamos troca com compressores novos e garantia.' },
          { heading: 'Atendimento rápido em Maringá', text: 'Não deixe seus alimentos estragarem! Entre em contato pelo WhatsApp e agende uma visita técnica urgente. Atendemos em todos os bairros de Maringá com possibilidade de reparo no mesmo dia.' },
        ],
        faqs: [
          { question: 'Quanto custa consertar freezer que não congela?', answer: 'Depende da causa do problema. Oferecemos orçamento gratuito em domicílio em Maringá.' },
          { question: 'Vocês fazem recarga de gás em freezer?', answer: 'Sim, realizamos recarga de gás com detecção de vazamento e garantia de 90 dias.' },
        ],
      },
      {
        slug: 'metalfrio',
        title: 'Conserto de Freezer Metalfrio em Maringá',
        seoTitle: 'Conserto de Freezer Metalfrio em Maringá | Assistência Técnica',
        metaDescription: 'Conserto de freezer Metalfrio em Maringá. Freezers comerciais e expositores. Orçamento grátis e garantia de 90 dias.',
        keyword: 'conserto freezer metalfrio maringa',
        content: [
          { heading: 'Assistência técnica Metalfrio em Maringá', text: 'A TechPremium é especialista no conserto de freezers e expositores Metalfrio em Maringá. A Metalfrio é líder em equipamentos de refrigeração comercial no Brasil, e nossos técnicos possuem ampla experiência com todos os modelos da marca. Atendemos freezers horizontais, verticais, expositores e câmaras frias Metalfrio com agilidade e qualidade.' },
          { heading: 'Atendimento comercial prioritário', text: 'Sabemos que para comércios, restaurantes e mercados, um freezer Metalfrio parado significa prejuízo financeiro. Por isso, oferecemos atendimento prioritário e emergencial para estabelecimentos comerciais em Maringá. Entre em contato pelo WhatsApp e resolvemos o problema da sua Metalfrio com a máxima agilidade.' },
          { heading: 'Garantia e qualidade', text: 'Todos os consertos de freezer Metalfrio realizados pela TechPremium incluem garantia de 90 dias. Utilizamos peças compatíveis de qualidade e nossos técnicos seguem os procedimentos técnicos adequados para cada modelo.' },
        ],
        faqs: [
          { question: 'Vocês consertam expositor Metalfrio?', answer: 'Sim, consertamos todos os tipos de equipamentos Metalfrio: freezers, expositores e câmaras frias.' },
          { question: 'Atendem comércios em Maringá?', answer: 'Sim, oferecemos atendimento prioritário para estabelecimentos comerciais.' },
        ],
      },
    ],
  },

  // ===================== AIRFRYER =====================
  {
    slug: 'conserto-de-airfryer-em-maringa',
    icon: Wind,
    title: 'Conserto de Airfryer',
    titleShort: 'Airfryers',
    city: 'Maringá',
    seoTitle: 'Conserto de Airfryer em Maringá | Assistência Técnica Especializada',
    metaDescription: 'Conserto de airfryer em Maringá. Philips, Mondial, Britânia, Midea. Resistência, painel, ventilador. Orçamento grátis e garantia de 90 dias.',
    heroSubtitle: 'Reparo profissional de fritadeiras elétricas com diagnóstico preciso em Maringá.',
    description: 'Consertamos airfryers de todas as marcas: resistências, ventiladores, painéis digitais, termostatos e conexões elétricas.',
    color: 'from-amber-500 to-orange-600',
    brands: [{ name: 'Philips Walita' }, { name: 'Mondial' }, { name: 'Britânia' }, { name: 'Midea' }, { name: 'Arno' }, { name: 'Cadence' }],
    features: ['Resistência', 'Ventilador', 'Painel digital', 'Termostato', 'Fiação elétrica', 'Cesto e bandeja'],
    neighborhoods: NEIGHBORHOODS,
    longContent: [
      {
        heading: 'Conserto de airfryer em Maringá: sua fritadeira como nova',
        text: 'A airfryer se tornou um dos eletrodomésticos mais populares nas cozinhas brasileiras, e em Maringá não é diferente. Se a sua fritadeira elétrica apresentou defeito, a TechPremium oferece conserto especializado com orçamento gratuito e garantia de 90 dias. Nossos técnicos são capacitados para reparar airfryers de todas as marcas: Philips Walita, Mondial, Britânia, Midea, Arno, Cadence e outras. Seja um problema na resistência, ventilador, painel digital ou qualquer outro componente, temos a solução.',
      },
      {
        heading: 'Problemas mais comuns em airfryers',
        text: 'Os defeitos mais frequentes em fritadeiras elétricas incluem: airfryer que não esquenta, geralmente causado por resistência queimada ou termostato defeituoso; ventilador que não funciona, comprometendo a circulação de ar quente; painel digital com defeito, não respondendo aos comandos; airfryer que desliga sozinha durante o uso; cheiro de queimado ou fumaça; cesto ou bandeja com revestimento danificado; e problemas na fiação elétrica. Cada um desses defeitos requer diagnóstico profissional para determinar a melhor solução.',
      },
      {
        heading: 'Marcas que atendemos',
        text: 'Consertamos todas as principais marcas de airfryer em Maringá: Philips Walita (linha Airfryer XXL, Essential, Viva), Mondial (linha Family, Grand), Britânia (linha Air Fry), Midea, Arno, Cadence, Mallory, Oster e outras. Cada marca e modelo possui características técnicas específicas, e nossos técnicos estão preparados para todas elas.',
      },
      {
        heading: 'Orçamento grátis e garantia',
        text: 'Na TechPremium, você tem orçamento gratuito e sem compromisso para conserto de airfryer em Maringá. Após o diagnóstico, apresentamos o valor do reparo e, com sua aprovação, realizamos o serviço com garantia de 90 dias. Entre em contato pelo WhatsApp e resolva o problema da sua fritadeira elétrica.',
      },
    ],
    faqs: [
      { question: 'Vale a pena consertar airfryer?', answer: 'Na maioria dos casos sim, especialmente para modelos de marcas premium. O conserto geralmente custa uma fração do valor de uma nova.' },
      { question: 'Minha airfryer não esquenta, o que pode ser?', answer: 'Pode ser resistência queimada, termostato defeituoso ou problema na fiação. Fazemos diagnóstico gratuito.' },
      { question: 'Vocês trocam resistência de airfryer?', answer: 'Sim, realizamos troca de resistência de airfryers de todas as marcas com garantia.' },
      { question: 'Atendem em Maringá?', answer: 'Sim, atendemos em toda Maringá e região metropolitana de Maringá.' },
    ],
    childPages: [
      {
        slug: 'philips-walita',
        title: 'Conserto de Airfryer Philips Walita em Maringá',
        seoTitle: 'Conserto de Airfryer Philips Walita em Maringá | Assistência Técnica',
        metaDescription: 'Conserto de airfryer Philips Walita em Maringá. Modelos XXL, Essential, Viva. Orçamento grátis e garantia 90 dias.',
        keyword: 'conserto airfryer philips walita maringa',
        content: [
          { heading: 'Especialistas em Airfryer Philips Walita em Maringá', text: 'A TechPremium é referência no conserto de airfryers Philips Walita em Maringá. A Philips Walita é a marca pioneira e líder em fritadeiras elétricas, conhecida pela qualidade e tecnologia Rapid Air. Consertamos todos os modelos: Airfryer XXL, Essential, Viva Collection e Daily Collection. Os problemas mais comuns incluem resistência queimada, ventilador com defeito, painel digital não responsivo e problemas no termostato.' },
          { heading: 'Reparo com garantia de 90 dias', text: 'Todo conserto de Airfryer Philips Walita na TechPremium inclui garantia de 90 dias. Utilizamos peças compatíveis de qualidade e nossos técnicos possuem experiência específica com a tecnologia Philips. Entre em contato pelo WhatsApp para agendar seu orçamento gratuito em Maringá.' },
        ],
        faqs: [
          { question: 'Vocês consertam Airfryer Philips XXL?', answer: 'Sim, consertamos todos os modelos da linha Philips Walita, incluindo XXL, com garantia.' },
        ],
      },
      {
        slug: 'mondial',
        title: 'Conserto de Airfryer Mondial em Maringá',
        seoTitle: 'Conserto de Airfryer Mondial em Maringá | Técnico Especializado',
        metaDescription: 'Conserto de airfryer Mondial em Maringá. Modelos Family, Grand. Resistência, ventilador, painel. Orçamento grátis.',
        keyword: 'conserto airfryer mondial maringa',
        content: [
          { heading: 'Conserto de Airfryer Mondial em Maringá', text: 'A Mondial é uma das marcas mais populares de airfryers no Brasil, oferecendo modelos com excelente custo-benefício. A TechPremium em Maringá é especialista no conserto de fritadeiras elétricas Mondial, incluindo as linhas Family, Grand, Digital e Premium. Os problemas mais comuns incluem resistência queimada, ventilador travado, painel digital com falha e problemas no timer.' },
          { heading: 'Orçamento grátis e garantia', text: 'Oferecemos diagnóstico e orçamento gratuito para conserto de Airfryer Mondial em Maringá. Todos os reparos incluem garantia de 90 dias. Entre em contato pelo WhatsApp.' },
        ],
        faqs: [
          { question: 'Vale a pena consertar Airfryer Mondial?', answer: 'Depende do defeito e modelo. Muitas vezes o conserto tem excelente custo-benefício. Oferecemos orçamento grátis para avaliar.' },
        ],
      },
    ],
  },

  // ===================== PURIFICADOR DE ÁGUA =====================
  {
    slug: 'conserto-de-purificador-de-agua-em-maringa',
    icon: Droplets,
    title: 'Conserto de Purificadores de Água',
    titleShort: 'Purificadores',
    city: 'Maringá',
    seoTitle: 'Conserto de Purificador de Água em Maringá | Assistência Técnica',
    metaDescription: 'Conserto de purificador de água em Maringá. IBBL, Electrolux, Colormaq, Latina. Troca de filtro, compressor, vazamento. Orçamento grátis e garantia.',
    heroSubtitle: 'Assistência técnica para purificadores e bebedouros de água em Maringá com garantia.',
    description: 'Consertamos purificadores de água refrigerados e naturais. Compressores, filtros, válvulas e sistemas de refrigeração.',
    color: 'from-teal-500 to-emerald-600',
    brands: [{ name: 'IBBL' }, { name: 'Electrolux' }, { name: 'Colormaq' }, { name: 'Latina' }, { name: 'Consul' }, { name: 'Libell' }],
    features: ['Compressor', 'Filtro/refil', 'Válvula solenóide', 'Torneira', 'Sistema refrigeração', 'Placa eletrônica'],
    neighborhoods: NEIGHBORHOODS,
    longContent: [
      {
        heading: 'Conserto de purificador de água em Maringá',
        text: 'A TechPremium oferece assistência técnica especializada em conserto de purificadores de água em Maringá e região. Atendemos todas as marcas: IBBL, Electrolux, Colormaq, Latina, Consul, Libell, Soft e outras. Purificadores de água são essenciais para a saúde da sua família, garantindo água limpa e filtrada. Quando apresentam defeitos, é importante contar com técnicos qualificados para realizar o reparo corretamente. Oferecemos orçamento gratuito, atendimento em domicílio e garantia de 90 dias.',
      },
      {
        heading: 'Problemas comuns em purificadores',
        text: 'Os defeitos mais frequentes em purificadores de água incluem: água não gelando (problema no compressor ou gás refrigerante); vazamento de água pela torneira ou conexões; filtro ou refil vencido precisando de troca; água com gosto ou odor estranho; torneira travada ou gotejando; barulho excessivo no funcionamento; e luz indicadora de troca de filtro acesa. Nossos técnicos em Maringá diagnosticam e resolvem todos esses problemas.',
      },
      {
        heading: 'Troca de filtro e refil',
        text: 'Além dos reparos, realizamos troca de filtros e refis de purificadores de todas as marcas em Maringá. A troca regular do filtro é essencial para garantir a qualidade da água. Cada marca e modelo possui seu tipo específico de refil, e trabalhamos com todos eles. Consulte-nos para saber o refil correto para o seu purificador.',
      },
      {
        heading: 'Atendimento em Maringá',
        text: 'Atendemos em todos os bairros de Maringá com agilidade e profissionalismo. Entre em contato pelo WhatsApp, descreva o problema do seu purificador e agendamos a visita técnica. Orçamento gratuito e garantia de 90 dias em todos os serviços.',
      },
    ],
    faqs: [
      { question: 'Meu purificador não gela a água, vocês consertam?', answer: 'Sim! Pode ser problema no compressor, gás ou termostato. Fazemos diagnóstico gratuito em Maringá.' },
      { question: 'Vocês fazem troca de filtro de purificador?', answer: 'Sim, trocamos filtros e refis de todas as marcas de purificadores.' },
      { question: 'Consertam purificador IBBL em Maringá?', answer: 'Sim, somos especialistas em purificadores IBBL e todas as outras marcas.' },
      { question: 'Qual a garantia do conserto?', answer: 'Garantia de 90 dias em todos os serviços de reparo de purificadores.' },
    ],
    childPages: [
      {
        slug: 'ibbl',
        title: 'Conserto de Purificador IBBL em Maringá',
        seoTitle: 'Conserto de Purificador IBBL em Maringá | Assistência Técnica',
        metaDescription: 'Conserto de purificador IBBL em Maringá. Troca de refil, compressor, vazamento. Orçamento grátis e garantia 90 dias.',
        keyword: 'conserto purificador ibbl maringa',
        content: [
          { heading: 'Especialistas em purificadores IBBL em Maringá', text: 'A IBBL é a marca líder em purificadores de água no Brasil, e a TechPremium em Maringá é especialista no conserto de todos os modelos da marca. Atendemos os modelos Avanti, Evolux, Speciale, Due, Mio e outros. Realizamos troca de refil, reparo de compressor, conserto de vazamentos, troca de torneiras e reparo de placas eletrônicas. Orçamento gratuito e garantia de 90 dias.' },
          { heading: 'Troca de refil IBBL', text: 'Realizamos a troca de refis e filtros para todos os modelos de purificadores IBBL em Maringá. É recomendada a troca a cada 6 meses ou conforme indicação do fabricante. Utilizamos refis originais e compatíveis de qualidade.' },
        ],
        faqs: [
          { question: 'Vocês têm refil para purificador IBBL?', answer: 'Sim, trabalhamos com refis originais e compatíveis para todos os modelos IBBL.' },
        ],
      },
      {
        slug: 'nao-gela',
        title: 'Purificador Não Gela a Água em Maringá',
        seoTitle: 'Purificador Não Gela em Maringá | Diagnóstico e Conserto',
        metaDescription: 'Purificador de água não gela em Maringá? Diagnóstico grátis. Compressor, gás, termostato. Conserto rápido com garantia.',
        keyword: 'purificador não gela maringa',
        content: [
          { heading: 'Purificador não gela? Resolvemos em Maringá!', text: 'Se o seu purificador de água parou de gelar em Maringá, as causas mais comuns são: compressor defeituoso, falta de gás refrigerante, termostato com problema ou ventilador do condensador bloqueado. A TechPremium possui técnicos especializados em refrigeração que diagnosticam e reparam esses problemas com agilidade. Oferecemos orçamento gratuito em domicílio.' },
          { heading: 'Reparo rápido e garantido', text: 'A maioria dos reparos em purificadores que não gelam é realizada no mesmo dia em Maringá. Realizamos recarga de gás, troca de compressor, reparo de termostatos e outros serviços com garantia de 90 dias.' },
        ],
        faqs: [
          { question: 'Quanto custa consertar purificador que não gela?', answer: 'Depende da causa. Oferecemos orçamento gratuito em domicílio em Maringá.' },
        ],
      },
    ],
  },

  // ===================== VENTILADOR =====================
  {
    slug: 'conserto-de-ventilador-em-maringa',
    icon: Fan,
    title: 'Conserto de Ventiladores',
    titleShort: 'Ventiladores',
    city: 'Maringá',
    seoTitle: 'Conserto de Ventilador em Maringá | Assistência Técnica Especializada',
    metaDescription: 'Conserto de ventilador em Maringá. Ventilador de teto, coluna, mesa, parede. Arno, Mondial, Britânia, Ventisol. Orçamento grátis e garantia.',
    heroSubtitle: 'Reparo de ventiladores de teto, coluna, mesa e parede em Maringá com garantia.',
    description: 'Consertamos ventiladores de todos os tipos e marcas: motor, capacitor, chave de velocidade, hélice e sistemas elétricos.',
    color: 'from-green-500 to-emerald-600',
    brands: [{ name: 'Arno' }, { name: 'Mondial' }, { name: 'Britânia' }, { name: 'Ventisol' }, { name: 'Mallory' }, { name: 'Venti-Delta' }],
    features: ['Motor', 'Capacitor', 'Chave velocidade', 'Hélice', 'Controle remoto', 'Instalação teto'],
    neighborhoods: NEIGHBORHOODS,
    longContent: [
      {
        heading: 'Conserto de ventilador em Maringá',
        text: 'A TechPremium oferece conserto profissional de ventiladores em Maringá. Atendemos todos os tipos: ventiladores de teto, coluna, mesa, parede e climatizadores. Trabalhamos com todas as marcas: Arno, Mondial, Britânia, Ventisol, Mallory, Venti-Delta, Cadence e outras. Nossos técnicos são experientes em reparos elétricos e mecânicos, resolvendo desde problemas simples como troca de capacitor até reparos mais complexos como rebobinagem de motor. Orçamento gratuito e garantia de 90 dias.',
      },
      {
        heading: 'Problemas comuns em ventiladores',
        text: 'Os defeitos mais frequentes em ventiladores incluem: ventilador que não liga (capacitor queimado, chave de velocidade com defeito ou problema no motor); ventilador que gira lento (capacitor com capacitância reduzida ou motor desgastado); barulho excessivo ou vibração (rolamentos gastos, hélice desbalanceada ou suporte solto); ventilador de teto que não muda de velocidade (chave de velocidade ou capacitor); e controle remoto que não funciona (receptor ou transmissor com defeito). Todos esses problemas são facilmente resolvidos por nossos técnicos em Maringá.',
      },
      {
        heading: 'Instalação de ventilador de teto',
        text: 'Além de consertos, realizamos a instalação de ventiladores de teto em Maringá com segurança e garantia. A instalação correta é fundamental para evitar acidentes e garantir o bom funcionamento do equipamento. Nossos técnicos são qualificados para realizar a fixação, fiação e configuração de ventiladores de teto de qualquer marca e modelo.',
      },
      {
        heading: 'Atendimento em Maringá e região',
        text: 'Atendemos em todos os bairros de Maringá e região metropolitana de Maringá. Para ventiladores de teto, o atendimento é realizado em domicílio. Para ventiladores de mesa e coluna, o reparo pode ser feito em nossa oficina. Entre em contato pelo WhatsApp e agende seu orçamento gratuito.',
      },
    ],
    faqs: [
      { question: 'Quanto custa consertar ventilador em Maringá?', answer: 'O valor varia conforme o defeito. Problemas como troca de capacitor são rápidos e acessíveis. Oferecemos orçamento grátis.' },
      { question: 'Vocês instalam ventilador de teto?', answer: 'Sim, realizamos instalação de ventiladores de teto com segurança e garantia em Maringá.' },
      { question: 'Meu ventilador está girando lento, tem conserto?', answer: 'Sim! Geralmente é problema no capacitor, que é uma troca rápida e econômica.' },
      { question: 'Consertam ventilador de teto com controle remoto?', answer: 'Sim, reparamos ventiladores com controle remoto, incluindo o módulo receptor.' },
    ],
    childPages: [
      {
        slug: 'ventilador-de-teto',
        title: 'Conserto de Ventilador de Teto em Maringá',
        seoTitle: 'Conserto de Ventilador de Teto em Maringá | Instalação e Reparo',
        metaDescription: 'Conserto e instalação de ventilador de teto em Maringá. Todas as marcas. Orçamento grátis e garantia de 90 dias.',
        keyword: 'conserto ventilador de teto maringa',
        content: [
          { heading: 'Conserto e instalação de ventilador de teto em Maringá', text: 'O ventilador de teto é essencial para o conforto em casa, especialmente no calor de Maringá. A TechPremium oferece serviço completo de conserto e instalação de ventiladores de teto de todas as marcas. Os problemas mais comuns incluem: ventilador que não liga, velocidades que não funcionam, barulho ou vibração, lâmpada que não acende e controle remoto sem resposta. Nossos técnicos realizam o reparo em domicílio com garantia de 90 dias.' },
          { heading: 'Instalação profissional', text: 'Realizamos a instalação segura de ventiladores de teto novos em Maringá. A instalação inclui fixação adequada no teto, fiação elétrica e teste completo de funcionamento. Trabalhamos com todos os tipos de teto: laje, forro PVC, gesso e madeira.' },
        ],
        faqs: [
          { question: 'Vocês instalam ventilador de teto em forro PVC?', answer: 'Sim, instalamos em todos os tipos de forro com a fixação adequada para cada material.' },
          { question: 'Meu ventilador de teto faz barulho, o que pode ser?', answer: 'Pode ser rolamento gasto, hélice desbalanceada ou parafusos soltos. Nossos técnicos resolvem em domicílio.' },
        ],
      },
    ],
  },

  // ===================== AR-CONDICIONADO =====================
  {
    slug: 'conserto-de-ar-condicionado-em-maringa',
    icon: Snowflake,
    title: 'Conserto de Ar-condicionado',
    titleShort: 'Ar-condicionado',
    city: 'Maringá',
    seoTitle: 'Conserto de Ar-condicionado em Maringá | Assistência Técnica Especializada',
    metaDescription: 'Conserto de ar-condicionado em Maringá. Split, janela, inverter. Carrier, LG, Samsung, Midea, Daikin. Orçamento grátis, limpeza e manutenção.',
    heroSubtitle: 'Assistência técnica completa para ar-condicionado split, janela e inverter em Maringá.',
    description: 'Conserto, instalação e manutenção de ar-condicionado. Compressores, placas, gás, limpeza e higienização.',
    color: 'from-indigo-500 to-blue-600',
    brands: [{ name: 'Carrier' }, { name: 'LG' }, { name: 'Samsung' }, { name: 'Midea' }, { name: 'Daikin' }, { name: 'Elgin' }],
    features: ['Compressor', 'Placa eletrônica', 'Gás refrigerante', 'Limpeza/higienização', 'Instalação', 'Motor ventilador'],
    neighborhoods: NEIGHBORHOODS,
    longContent: [
      {
        heading: 'Conserto de ar-condicionado em Maringá: assistência completa',
        text: 'A TechPremium é a assistência técnica mais completa de Maringá para ar-condicionado. Oferecemos serviços de conserto, instalação, manutenção preventiva e limpeza de aparelhos split, janela, inverter, multi-split e portáteis de todas as marcas. Nossos técnicos são especializados em refrigeração e climatização, com mais de 12 anos de experiência no mercado. Atendemos residências, escritórios e estabelecimentos comerciais em todos os bairros de Maringá com orçamento gratuito e garantia de 90 dias.',
      },
      {
        heading: 'Problemas mais comuns em ar-condicionado',
        text: 'Os defeitos mais frequentes em aparelhos de ar-condicionado incluem: ar que não gela (falta de gás, compressor defeituoso ou filtro sujo); ar que pinga água internamente (dreno entupido ou bandeja de condensação cheia); barulho excessivo na unidade interna ou externa; ar-condicionado que não liga ou desliga sozinho; mau cheiro ao ligar o aparelho (necessidade de limpeza e higienização); ar que gela pouco (filtro sujo, gás insuficiente ou ambiente inadequado); e placa eletrônica com defeito. Nossos técnicos em Maringá diagnosticam e resolvem todos esses problemas.',
      },
      {
        heading: 'Limpeza e manutenção preventiva',
        text: 'A limpeza regular do ar-condicionado é essencial para manter a qualidade do ar, eficiência do equipamento e economia de energia. Recomendamos a limpeza a cada 3-6 meses. Nossa manutenção preventiva inclui: limpeza dos filtros, higienização do evaporador com produto bactericida, limpeza da bandeja de drenagem, verificação do dreno, limpeza do condensador (unidade externa), verificação de pressão de gás e inspeção geral do sistema elétrico.',
      },
      {
        heading: 'Instalação de ar-condicionado em Maringá',
        text: 'Além de consertos, realizamos a instalação completa de ar-condicionado split em Maringá. A instalação correta é fundamental para o bom funcionamento e eficiência do equipamento. Nosso serviço inclui: fixação das unidades interna e externa, passagem de tubulação, carga de gás, fiação elétrica e teste completo. Trabalhamos com todas as marcas e capacidades. Solicite seu orçamento pelo WhatsApp.',
      },
    ],
    faqs: [
      { question: 'Quanto custa limpar ar-condicionado em Maringá?', answer: 'O valor da limpeza varia conforme o modelo e capacidade. Oferecemos valores competitivos com garantia. Consulte pelo WhatsApp.' },
      { question: 'Meu ar não gela, o que pode ser?', answer: 'Pode ser filtro sujo, falta de gás, compressor defeituoso ou ambiente inadequado. Fazemos diagnóstico completo gratuito.' },
      { question: 'Vocês instalam ar-condicionado split?', answer: 'Sim, realizamos instalação completa de ar-condicionado split de todas as marcas em Maringá.' },
      { question: 'De quanto em quanto tempo precisa limpar o ar?', answer: 'Recomendamos limpeza a cada 3-6 meses para manter a qualidade do ar e eficiência do equipamento.' },
    ],
    childPages: [
      {
        slug: 'limpeza',
        title: 'Limpeza de Ar-condicionado em Maringá',
        seoTitle: 'Limpeza de Ar-condicionado em Maringá | Higienização Profissional',
        metaDescription: 'Limpeza e higienização de ar-condicionado em Maringá. Eliminação de fungos e bactérias. Orçamento grátis.',
        keyword: 'limpeza ar-condicionado maringa',
        content: [
          { heading: 'Limpeza profissional de ar-condicionado em Maringá', text: 'A limpeza do ar-condicionado é essencial para sua saúde e para o bom funcionamento do equipamento. Um ar-condicionado sujo pode ser responsável por alergias, problemas respiratórios e proliferação de fungos e bactérias. A TechPremium em Maringá oferece serviço completo de limpeza e higienização com produtos bactericidas profissionais. Nossa limpeza inclui: remoção e lavagem dos filtros, higienização do evaporador com produto específico, limpeza da bandeja de drenagem, desobstrução do dreno, limpeza da unidade externa (condensador) e verificação geral do sistema.' },
          { heading: 'Frequência recomendada', text: 'Para ambientes residenciais, recomendamos a limpeza a cada 6 meses. Para ambientes comerciais com uso intenso, a cada 3 meses. Casas com animais de estimação ou pessoas alérgicas devem considerar limpezas mais frequentes. Os filtros devem ser limpos pelo próprio usuário a cada 15-30 dias.' },
          { heading: 'Benefícios da limpeza', text: 'Ar-condicionado limpo proporciona: melhor qualidade do ar, maior eficiência de refrigeração, economia na conta de energia (até 30%), eliminação de mau cheiro, prevenção de problemas respiratórios e maior vida útil do equipamento. Invista na limpeza regular e economize no longo prazo.' },
        ],
        faqs: [
          { question: 'Quanto custa a limpeza de ar-condicionado em Maringá?', answer: 'Oferecemos valores competitivos. Consulte pelo WhatsApp para saber o valor para o seu modelo.' },
          { question: 'A limpeza demora quanto tempo?', answer: 'A limpeza completa leva de 1 a 2 horas, dependendo do modelo e estado do equipamento.' },
        ],
      },
      {
        slug: 'instalacao',
        title: 'Instalação de Ar-condicionado em Maringá',
        seoTitle: 'Instalação de Ar-condicionado em Maringá | Serviço Profissional',
        metaDescription: 'Instalação de ar-condicionado split em Maringá. Todas as marcas e capacidades. Serviço profissional com garantia.',
        keyword: 'instalação ar-condicionado maringa',
        content: [
          { heading: 'Instalação profissional de ar-condicionado em Maringá', text: 'A TechPremium realiza a instalação completa de ar-condicionado split em Maringá com profissionalismo e garantia. Uma instalação bem feita é fundamental para o desempenho, eficiência energética e durabilidade do equipamento. Nosso serviço inclui: avaliação do local para melhor posicionamento, fixação segura das unidades interna e externa, passagem de tubulação de cobre, instalação de dreno, carga de gás refrigerante, fiação elétrica dedicada e teste completo de funcionamento.' },
          { heading: 'Marcas e capacidades', text: 'Instalamos ar-condicionado de todas as marcas e capacidades em Maringá: 9.000 BTUs, 12.000 BTUs, 18.000 BTUs, 24.000 BTUs, 30.000 BTUs e mais. Trabalhamos com Carrier, LG, Samsung, Midea, Daikin, Elgin, Springer, Fujitsu e todas as outras marcas do mercado.' },
        ],
        faqs: [
          { question: 'Quanto custa instalar ar-condicionado split em Maringá?', answer: 'O valor depende da complexidade da instalação e capacidade do aparelho. Solicite orçamento gratuito pelo WhatsApp.' },
          { question: 'Vocês fornecem o ar-condicionado?', answer: 'Realizamos apenas a instalação. Você pode adquirir o aparelho e nós instalamos com garantia.' },
        ],
      },
    ],
  },

  // ===================== CAFETEIRA =====================
  {
    slug: 'conserto-de-cafeteira-em-maringa',
    icon: Coffee,
    title: 'Conserto de Cafeteiras',
    titleShort: 'Cafeteiras',
    city: 'Maringá',
    seoTitle: 'Conserto de Cafeteira em Maringá | Assistência Técnica Especializada',
    metaDescription: 'Conserto de cafeteira em Maringá. Nespresso, Dolce Gusto, Expresso, Italiana. Todas as marcas. Orçamento grátis e garantia de 90 dias.',
    heroSubtitle: 'Reparo profissional de cafeteiras elétricas e máquinas de café em Maringá.',
    description: 'Consertamos cafeteiras de cápsulas, expresso, italianas e elétricas. Bombas, resistências, válvulas e sistemas de infusão.',
    color: 'from-yellow-700 to-amber-800',
    brands: [{ name: 'Nespresso' }, { name: 'Dolce Gusto' }, { name: 'Três Corações' }, { name: 'Oster' }, { name: 'DeLonghi' }, { name: 'Philips Saeco' }],
    features: ['Bomba de pressão', 'Resistência', 'Válvula', 'Sistema de infusão', 'Placa eletrônica', 'Reservatório'],
    neighborhoods: NEIGHBORHOODS,
    longContent: [
      {
        heading: 'Conserto de cafeteira em Maringá: especialistas em máquinas de café',
        text: 'A TechPremium é especialista em conserto de cafeteiras e máquinas de café em Maringá. Atendemos todos os tipos: cafeteiras de cápsulas (Nespresso, Dolce Gusto, Três Corações), máquinas de café expresso, cafeteiras elétricas convencionais e cafeteiras italianas elétricas. Com o crescimento do consumo de café gourmet, as cafeteiras se tornaram equipamentos essenciais, e quando apresentam defeitos, é fundamental contar com técnicos especializados. Oferecemos orçamento gratuito e garantia de 90 dias.',
      },
      {
        heading: 'Problemas comuns em cafeteiras',
        text: 'Os defeitos mais frequentes em cafeteiras incluem: cafeteira que não esquenta a água (resistência queimada); café saindo fraco ou sem pressão (bomba de pressão com defeito); vazamento de água (vedações ou válvulas danificadas); cafeteira que não liga (placa eletrônica ou fusível); café com gosto estranho (necessidade de descalcificação); e cápsulas que não são perfuradas corretamente (agulha ou mecanismo de perfuração com defeito). Nossos técnicos em Maringá resolvem todos esses problemas.',
      },
      {
        heading: 'Descalcificação e manutenção',
        text: 'A descalcificação é fundamental para manter sua cafeteira funcionando corretamente e o café com sabor perfeito. O acúmulo de calcário proveniente da água obstrui os canais internos e reduz a pressão e temperatura da água. Oferecemos serviço de descalcificação profissional para cafeteiras de todas as marcas em Maringá.',
      },
      {
        heading: 'Orçamento grátis em Maringá',
        text: 'Entre em contato pelo WhatsApp e agende o diagnóstico gratuito da sua cafeteira em Maringá. Atendemos com agilidade e garantia de 90 dias em todos os reparos.',
      },
    ],
    faqs: [
      { question: 'Vocês consertam cafeteira Nespresso em Maringá?', answer: 'Sim, somos especialistas em conserto de cafeteiras Nespresso de todos os modelos.' },
      { question: 'Minha cafeteira não está saindo café, o que pode ser?', answer: 'Pode ser bomba de pressão com defeito, obstrução por calcário ou problema na válvula. Fazemos diagnóstico gratuito.' },
      { question: 'Vale a pena consertar cafeteira?', answer: 'Na maioria dos casos sim, especialmente para cafeteiras de cápsulas e expresso de boa qualidade.' },
      { question: 'Vocês fazem descalcificação?', answer: 'Sim, realizamos descalcificação profissional de cafeteiras de todas as marcas.' },
    ],
    childPages: [
      {
        slug: 'nespresso',
        title: 'Conserto de Cafeteira Nespresso em Maringá',
        seoTitle: 'Conserto de Cafeteira Nespresso em Maringá | Assistência Técnica',
        metaDescription: 'Conserto de cafeteira Nespresso em Maringá. Todos os modelos. Bomba, pressão, vazamento. Orçamento grátis e garantia.',
        keyword: 'conserto cafeteira nespresso maringa',
        content: [
          { heading: 'Especialistas em cafeteiras Nespresso em Maringá', text: 'A TechPremium é referência no conserto de cafeteiras Nespresso em Maringá. Atendemos todos os modelos da linha Nespresso: Essenza Mini, Inissia, Pixie, CitiZ, Lattissima, Expert e Creatista. Os problemas mais comuns incluem: café saindo fraco ou sem pressão (bomba desgastada), vazamento de água, cafeteira que não esquenta, cápsula não perfurada e luzes de erro piscando. Nossos técnicos possuem experiência específica com a tecnologia Nespresso e realizam o reparo com garantia de 90 dias.' },
          { heading: 'Descalcificação Nespresso', text: 'A descalcificação é essencial para manter o sabor do café e a pressão adequada na sua Nespresso. Oferecemos serviço profissional de descalcificação em Maringá. O calcário acumulado reduz a pressão da bomba e pode danificar componentes internos. Recomendamos a descalcificação a cada 3-6 meses.' },
        ],
        faqs: [
          { question: 'Minha Nespresso saindo café fraco, vocês consertam?', answer: 'Sim! Geralmente é necessário descalcificação ou troca da bomba de pressão. Diagnosticamos gratuitamente.' },
          { question: 'Vocês consertam Nespresso Essenza Mini?', answer: 'Sim, consertamos todos os modelos Nespresso com garantia de 90 dias.' },
        ],
      },
      {
        slug: 'dolce-gusto',
        title: 'Conserto de Cafeteira Dolce Gusto em Maringá',
        seoTitle: 'Conserto de Cafeteira Dolce Gusto em Maringá | Técnico',
        metaDescription: 'Conserto de cafeteira Dolce Gusto em Maringá. Todos os modelos. Orçamento grátis e garantia de 90 dias.',
        keyword: 'conserto dolce gusto maringa',
        content: [
          { heading: 'Conserto de Dolce Gusto em Maringá', text: 'A TechPremium oferece conserto especializado de cafeteiras Dolce Gusto em Maringá. Atendemos todos os modelos: Mini Me, Genio, Colors, Drop, Eclipse, Movenza e outros. As cafeteiras Dolce Gusto são práticas e populares, mas podem apresentar defeitos como bomba de pressão fraca, vazamento de água, problema no aquecimento e capsuleiro com defeito. Nossos técnicos diagnosticam e reparam com garantia de 90 dias.' },
          { heading: 'Problemas comuns e soluções', text: 'Os problemas mais frequentes em Dolce Gusto incluem: café saindo sem pressão, água não esquentando, vazamento na parte inferior, e máquina que não reconhece a cápsula. Cada defeito tem uma solução específica, e nossos técnicos em Maringá são especialistas em identificar e reparar cada um deles.' },
        ],
        faqs: [
          { question: 'Vocês consertam Dolce Gusto Mini Me?', answer: 'Sim, consertamos todos os modelos Dolce Gusto com garantia.' },
        ],
      },
    ],
  },

  // ===================== LAVA-LOUÇA =====================
  {
    slug: 'conserto-de-lava-louca-em-maringa',
    icon: Utensils,
    title: 'Conserto de Lava-louças',
    titleShort: 'Lava-louças',
    city: 'Maringá',
    seoTitle: 'Conserto de Lava-louça em Maringá | Assistência Técnica Especializada',
    metaDescription: 'Conserto de lava-louças em Maringá. Brastemp, Electrolux, Midea. Não lava, vazamento, não drena. Orçamento grátis e garantia de 90 dias.',
    heroSubtitle: 'Assistência técnica especializada em lava-louças de todas as marcas em Maringá.',
    description: 'Consertamos lava-louças de todas as marcas: bombas, aquecedores, placas eletrônicas, vedações e sistemas de drenagem.',
    color: 'from-slate-500 to-gray-600',
    brands: [{ name: 'Brastemp' }, { name: 'Electrolux' }, { name: 'Midea' }, { name: 'LG' }, { name: 'Samsung' }, { name: 'Bosch' }],
    features: ['Bomba de lavagem', 'Aquecedor', 'Placa eletrônica', 'Bomba de drenagem', 'Vedação porta', 'Braços aspersores'],
    neighborhoods: NEIGHBORHOODS,
    longContent: [
      {
        heading: 'Conserto de lava-louças em Maringá',
        text: 'A TechPremium é a assistência técnica ideal para conserto de lava-louças em Maringá. As máquinas de lavar louça estão cada vez mais presentes nos lares brasileiros, e quando apresentam defeitos, é fundamental contar com técnicos especializados. Atendemos todas as marcas: Brastemp, Electrolux, Midea, LG, Samsung, Bosch e outras. Oferecemos orçamento gratuito em domicílio e garantia de 90 dias em todos os serviços.',
      },
      {
        heading: 'Problemas comuns em lava-louças',
        text: 'Os defeitos mais frequentes em lava-louças incluem: louça saindo suja (braços aspersores entupidos, bomba de lavagem fraca ou filtro sujo); vazamento de água (vedação da porta danificada ou mangueira furada); lava-louça que não drena a água (bomba de drenagem com defeito ou dreno entupido); máquina que não liga (placa eletrônica ou trava da porta); lava-louça que não esquenta a água (resistência do aquecedor queimada); e ruídos estranhos durante o funcionamento. Todos esses problemas são resolvidos por nossos técnicos em Maringá.',
      },
      {
        heading: 'Marcas que atendemos',
        text: 'Consertamos lava-louças de todas as marcas disponíveis no mercado brasileiro: Brastemp (linha Ative, BLF), Electrolux (linha Blue Touch, Home Pro), Midea, LG, Samsung e Bosch. Cada marca possui suas particularidades técnicas e nossos técnicos estão preparados para todas elas. Utilizamos peças de qualidade e oferecemos garantia de 90 dias.',
      },
      {
        heading: 'Atendimento em domicílio em Maringá',
        text: 'Realizamos atendimento em domicílio para conserto de lava-louças em todos os bairros de Maringá. O processo é simples: entre em contato pelo WhatsApp, descreva o problema, agendamos a visita, realizamos o diagnóstico gratuito e, com aprovação, efetuamos o reparo com garantia.',
      },
    ],
    faqs: [
      { question: 'Vocês consertam lava-louças Brastemp em Maringá?', answer: 'Sim, somos especialistas em lava-louças Brastemp e todas as outras marcas.' },
      { question: 'Minha lava-louça não está lavando bem, o que pode ser?', answer: 'Pode ser braços aspersores entupidos, bomba de lavagem fraca ou filtro sujo. Fazemos diagnóstico gratuito.' },
      { question: 'Quanto custa consertar lava-louça?', answer: 'O valor depende do defeito. Oferecemos orçamento gratuito em domicílio em Maringá.' },
      { question: 'Atendem em domicílio?', answer: 'Sim, atendemos em domicílio em todos os bairros de Maringá.' },
    ],
    childPages: [
      {
        slug: 'brastemp',
        title: 'Conserto de Lava-louça Brastemp em Maringá',
        seoTitle: 'Conserto de Lava-louça Brastemp em Maringá | Assistência Técnica',
        metaDescription: 'Conserto de lava-louça Brastemp em Maringá. Modelos Ative, BLF. Orçamento grátis e garantia de 90 dias.',
        keyword: 'conserto lava-louça brastemp maringa',
        content: [
          { heading: 'Especialistas em lava-louças Brastemp em Maringá', text: 'A TechPremium é referência no conserto de lava-louças Brastemp em Maringá. Atendemos todos os modelos da linha Brastemp, incluindo Ative, BLF08, BLF10, BLF12 e outros. A Brastemp é líder no segmento de lava-louças no Brasil, com tecnologias avançadas como ciclos personalizados e eficiência energética. Nossos técnicos são especializados e realizam reparos com garantia de 90 dias. Oferecemos orçamento gratuito em domicílio em Maringá.' },
          { heading: 'Defeitos comuns em lava-louças Brastemp', text: 'Os problemas mais frequentes em lava-louças Brastemp incluem: erro no display, louça saindo suja, vazamento de água, máquina que não drena, porta que não trava e aquecedor que não funciona. Para cada um desses defeitos, nossos técnicos possuem a experiência e as peças necessárias para o reparo eficiente.' },
        ],
        faqs: [
          { question: 'Vocês consertam lava-louça Brastemp Ative?', answer: 'Sim, consertamos todos os modelos da linha Brastemp, incluindo Ative, com garantia.' },
        ],
      },
      {
        slug: 'nao-drena',
        title: 'Lava-louça Não Drena em Maringá',
        seoTitle: 'Lava-louça Não Drena em Maringá | Diagnóstico e Conserto',
        metaDescription: 'Lava-louça não drena a água em Maringá? Diagnóstico grátis e conserto rápido. Bomba, dreno, mangueira. Garantia de 90 dias.',
        keyword: 'lava-louça não drena maringa',
        content: [
          { heading: 'Lava-louça não drena? Resolvemos em Maringá!', text: 'Quando a lava-louça não drena a água adequadamente, o problema pode estar na bomba de drenagem, no dreno entupido ou na mangueira de saída. A TechPremium em Maringá é especialista em diagnosticar e resolver problemas de drenagem em lava-louças de todas as marcas. Oferecemos diagnóstico gratuito em domicílio e reparo rápido com garantia de 90 dias. As causas mais comuns incluem: bomba de drenagem queimada ou travada, filtro de detritos entupido, mangueira de drenagem obstruída ou dobrada, e placa eletrônica com defeito no comando da bomba.' },
          { heading: 'Solução rápida e garantida', text: 'Nossos técnicos em Maringá resolvem problemas de drenagem em lava-louças rapidamente. Após o diagnóstico, apresentamos o orçamento e realizamos o reparo, normalmente no mesmo dia. Todos os serviços incluem garantia de 90 dias.' },
        ],
        faqs: [
          { question: 'Por que minha lava-louça não drena?', answer: 'As causas mais comuns são bomba de drenagem com defeito, dreno entupido ou mangueira obstruída. Fazemos diagnóstico gratuito.' },
        ],
      },
    ],
  },
];

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
}

export const NEIGHBORHOOD_SLUGS = NEIGHBORHOODS.map((n) => ({ name: n, slug: slugify(n) }));

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getChildPage(parentSlug: string, childSlug: string): { parent: ServiceData; child: ChildPageData } | undefined {
  const parent = getServiceBySlug(parentSlug);
  if (!parent) return undefined;
  const child = parent.childPages.find((c) => c.slug === childSlug);
  if (!child) return undefined;
  return { parent, child };
}

export function getNeighborhoodData(parentSlug: string, neighborhoodSlug: string): { parent: ServiceData; neighborhood: string } | undefined {
  const parent = getServiceBySlug(parentSlug);
  if (!parent) return undefined;
  const found = NEIGHBORHOOD_SLUGS.find((n) => n.slug === neighborhoodSlug);
  if (!found) return undefined;
  return { parent, neighborhood: found.name };
}
