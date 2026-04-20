import React from 'react';

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TechPremium Maringá | Assistência Técnica Premium",
    "image": "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/aa54a1a9-23a4-40ae-b753-f83d04b0da8f/id-preview-1fd16414--35f07eca-edf3-45e2-bb3c-b501d77884e8.lovable.app-1772537591279.png",
    "@id": "https://consertodegeladeira.maringa.br",
    "url": "https://consertodegeladeira.maringa.br",
    "telephone": "+5544997398826",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Atendimento em Domicílio",
      "addressLocality": "Maringá",
      "addressRegion": "PR",
      "postalCode": "87000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.4209,
      "longitude": -51.9331
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://wa.me/5544997398826"
    ],
    "priceRange": "$$",
    "description": "Assistência técnica especializada em Maringá-PR. Conserto de geladeiras, máquinas de lavar, micro-ondas, ar-condicionado e purificadores de água."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
