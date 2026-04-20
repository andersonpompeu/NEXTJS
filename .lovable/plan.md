

## Plano: Criar 5 Páginas de Serviços Específicos para Sarandi

### Resumo

Criar 5 páginas internas de serviços focadas em Sarandi, cada uma com SEO local, hero com imagem SVG ilustrativa, seção de marcas atendidas, e estrutura mobile-first. Atualizar os links na seção de serviços da Index e no Header/Footer.

### Páginas a criar

| Rota (URL amigável) | Título SEO |
|---|---|
| `/conserto-maquina-de-lavar-sarandi` | Conserto de Máquinas de Lavar em Sarandi - TechPremium |
| `/conserto-geladeira-sarandi` | Conserto de Geladeiras em Sarandi - TechPremium |
| `/conserto-micro-ondas-sarandi` | Conserto de Micro-ondas em Sarandi - TechPremium |
| `/conserto-smart-tv-sarandi` | Conserto de Smart TVs em Sarandi - TechPremium |
| `/conserto-celular-sarandi` | Conserto de Celulares em Sarandi - TechPremium |

### Arquivos a criar/editar

**1. Dados centralizados** - `src/data/services.ts`
- Objeto com dados de cada serviço: título, descrição SEO, meta description, slug, ícone, cor, marcas (com logos), FAQ, features, hero text

**2. Componente de página reutilizável** - `src/pages/ServicePage.tsx`
- Componente genérico que recebe os dados do serviço e renderiza:
  - **Hero**: fundo gradiente com título H1 otimizado ("Conserto de [Serviço] em Sarandi"), subtítulo, CTA WhatsApp, e imagem SVG ilustrativa gerada via componente React (ícone grande estilizado)
  - **Seção Marcas**: grid de marcas atendidas com cards (ex: Brastemp, Electrolux, LG, Samsung, etc.)
  - **Seção "Como Funciona"**: 3 passos simples
  - **Diferenciais**: reutiliza estilo do DiferenciaisSection
  - **FAQ**: perguntas frequentes com Accordion (SEO structured data)
  - **CTA final**: botão WhatsApp

**3. Componentes de imagem hero** - `src/components/ServiceHeroImage.tsx`
- Componente que renderiza ilustrações SVG inline para cada tipo de serviço (máquina de lavar, geladeira, micro-ondas, TV, celular) usando ícones Lucide em composição estilizada

**4. Rotas** - `src/App.tsx`
- Adicionar 5 rotas com os slugs amigáveis

**5. Links na Index** - `src/components/ServicesSection.tsx`
- Trocar os links dos cards de WhatsApp para `<Link to="/conserto-...">` com botão "Saiba Mais" + manter CTA WhatsApp

**6. Header** - `src/components/Header.tsx`
- Atualizar mega menu com links internos para as novas páginas
- Usar `<Link>` do react-router-dom ao invés de `<a href="#">`

**7. Footer** - `src/components/Footer.tsx`
- Atualizar lista de serviços com links para as páginas internas

**8. SEO** - Cada página terá:
- `document.title` e meta description via `useEffect`
- Schema markup JSON-LD (LocalBusiness + Service)
- H1 otimizado com cidade "Sarandi"
- Breadcrumbs

### Design Mobile-First
- Hero com imagem em coluna única (imagem acima, texto abaixo)
- Seção de marcas em grid 2 colunas no mobile, 4 no desktop
- Botões CTA full-width no mobile
- FAQ com accordion touch-friendly
- Tipografia grande e legível

### Seção de Marcas por Serviço
- **Máquinas de Lavar**: Brastemp, Electrolux, LG, Samsung, Consul, Mueller
- **Geladeiras**: Brastemp, Electrolux, Consul, LG, Samsung, Panasonic
- **Micro-ondas**: Panasonic, Electrolux, Brastemp, LG, Midea, Consul
- **Smart TVs**: Samsung, LG, Sony, TCL, Philips, AOC
- **Celulares**: Apple (iPhone), Samsung, Motorola, Xiaomi, Realme, Poco

