import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/general/Header";
import LocalFont from "next/font/local";
import Footer from "../components/general/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import FbclidCleaner from "../components/general/FbClidCleaner";
import Chatbot from "../components/general/ChatBot";

export const metadata: Metadata = {
  title: "webnotes - ვებსაიტების დამზადება",
  description:
    "გაიგეთ რა ღირს ვებსაიტის დამზადება webnotes-ში, იხილეთ ჩვენი ნამუშევრები, მოგვწერეთ და მიიღეთ თქვენზე მორგებული გადაწყვეტილება.",
  keywords: ["ვებსაიტების დამზადება", "ვებსაიტი", "ვებდიზაინი", "SEO ოპტიმიზაცია", "webnotes"],

  // Open Graph ძირითადი პარამეტრები
  openGraph: {
    title: "webnotes - ვებსაიტების დამზადება",
    description:
      "გაიგეთ რა ღირს ვებსაიტის დამზადება webnotes-ში და მიიღეთ თქვენზე მორგებული გადაწყვეტილება.",
    url: "https://webnotes.ge",
    siteName: "webnotes",
    images: [
      {
        url: "https://webnotes.ge/open-graph.jpg", // რეკომენდებული JPG, 1200x630px
        width: 1200,
        height: 630,
        alt: "webnotes - ვებსაიტების დამზადება",
      },
    ],
    locale: "ka_GE",
    type: "website",
  },

  other: {
    "og:image:alt": "webnotes - ვებსაიტების დამზადება",
    "og:image:type": "image/jpeg",
    "og:image:width": "1200",
    "og:image:height": "630",
    "twitter:card": "summary_large_image",
    "twitter:title": "webnotes - ვებსაიტების დამზადება",
    "twitter:description":
      "გაიგეთ რა ღირს ვებსაიტის დამზადება webnotes-ში, იხილეთ ჩვენი ნამუშევრები, მოგვწერეთ და მიიღეთ თქვენზე მორგებული გადაწყვეტილება.",
    "twitter:image": "https://webnotes.ge/open-graph.jpg",
  },
};

const sf_georgia = LocalFont({
  src: [{ path: "./(fonts)/SF-Georgian-Rounded.ttf", weight: "400", style: "normal" }],
});

const manrope = LocalFont({
  src: [{ path: "./(fonts)/Manrope-Medium.ttf", weight: "500", style: "normal" }],
  variable: "--manrope",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Webnotes",
    url: "https://webnotes.ge",
    logo: "https://webnotes.ge/logo.svg",
    sameAs: [
      "https://www.facebook.com/webnotes.ge/",
      "https://www.instagram.com/webnotes_official/",
      "https://www.linkedin.com/company/webnotes-official/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+995511199826",
      contactType: "customer service",
      areaServed: "GE",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://webnotes.ge",
    name: "webnotes - ვებსაიტების დამზადება",
    description:
      "გაიგეთ რა ღირს ვებსაიტის დამზადება webnotes-ში, იხილეთ ჩვენი ნამუშევრები, მოგვწერეთ და მიიღეთ თქვენზე მორგებული გადაწყვეტილება",
    publisher: {
      "@type": "Organization",
      name: "webnotes",
      logo: {
        "@type": "ImageObject",
        url: "https://webnotes.ge/logo.svg",
      },
      sameAs: [
        "https://www.facebook.com/webnotes.ge/",
        "https://www.instagram.com/webnotes_official/",
        "https://www.linkedin.com/company/webnotes-official/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+995 511 199 826",
        contactType: "customer service",
        areaServed: "GE",
        availableLanguage: ["Georgian"],
      },
    },
  };

  return (
    <html lang="ka-GE">
      <head>
        <link rel="canonical" href="https://webnotes.ge" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>

      <body className={`${sf_georgia.className} ${manrope.variable} antialiased`}>
        <FbclidCleaner />
        <GoogleAnalytics gaId="G-16K0BNK5DV" />
        <Header />
        <Chatbot />
        <div className="pt-[90px]"> {children}</div>
        <Footer />
      </body>
    </html>
  );
}
