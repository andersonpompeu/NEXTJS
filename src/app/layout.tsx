import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import LGPDConsent from "@/components/LGPDConsent";
import StructuredData from "@/components/StructuredData";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Assistência Técnica Premium Maringá | Conserto de Celulares, TVs e Eletrodomésticos",
  description: "Assistência técnica especializada em Maringá-PR. Conserto de celulares, Smart TVs, geladeiras, máquinas de lavar e fogões. Orçamento grátis via WhatsApp. Garantia de 90 dias!",
  keywords: "conserto de celular Maringá, assistência técnica geladeira Maringá, conserto de TV Maringá, assistência técnica linha branca PR, conserto smartphone Maringá, reparo eletrodomésticos Maringá",
  authors: [{ name: "TechPremium Maringá" }],
  robots: "index, follow",
  themeColor: "#1a365d",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
  openGraph: {
    type: "website",
    url: "https://consertodegeladeira.maringa.br/",
    title: "Assistência Técnica Premium Maringá | Conserto de Celulares, TVs e Eletrodomésticos",
    description: "Assistência técnica especializada em Maringá-PR. Conserto de celulares, Smart TVs, geladeiras, máquinas de lavar e fogões. Orçamento grátis via WhatsApp. Garantia de 90 dias!",
    locale: "pt_BR",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/aa54a1a9-23a4-40ae-b753-f83d04b0da8f/id-preview-1fd16414--35f07eca-edf3-45e2-bb3c-b501d77884e8.lovable.app-1772537591279.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assistência Técnica Premium Maringá | Conserto de Celulares, TVs e Eletrodomésticos",
    description: "Assistência técnica especializada em Maringá-PR. Conserto de celulares, Smart TVs, geladeiras, máquinas de lavar e fogões. Orçamento grátis via WhatsApp. Garantia de 90 dias!",
    images: ["https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/aa54a1a9-23a4-40ae-b753-f83d04b0da8f/id-preview-1fd16414--35f07eca-edf3-45e2-bb3c-b501d77884e8.lovable.app-1772537591279.png"],
  },
  alternates: {
    canonical: "https://consertodegeladeira.maringa.br/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        <Providers>
          <StructuredData />
          {children}
          <LGPDConsent />
        </Providers>
      </body>
    </html>
  );
}
