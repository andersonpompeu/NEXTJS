import { MetadataRoute } from 'next';
import { servicesData, NEIGHBORHOOD_SLUGS } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://consertodegeladeira.maringa.br';

  // Páginas principais
  const routes = [
    '',
    '/politica-de-garantia',
    '/politica-de-privacidade',
    '/termos-de-uso',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Páginas de serviços (ex: /conserto-de-geladeira-em-maringa)
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Páginas de sub-serviços e bairros (ex: /geladeira/brastemp ou /geladeira/jardim-alvorada)
  const dynamicRoutes: any[] = [];
  
  servicesData.forEach((service) => {
    // Adiciona páginas de marcas/específicas
    service.childPages.forEach((child) => {
      dynamicRoutes.push({
        url: `${baseUrl}/${service.slug}/${child.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      });
    });

    // Adiciona todos os bairros
    NEIGHBORHOOD_SLUGS.forEach((n) => {
      dynamicRoutes.push({
        url: `${baseUrl}/${service.slug}/${n.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    });
  });

  return [...routes, ...serviceRoutes, ...dynamicRoutes];
}
