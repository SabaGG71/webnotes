import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/general/Header";
import LocalFont from "next/font/local";
import Footer from "../components/general/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.searchParams.delete("fbclid");
  return NextResponse.rewrite(url);
}

export const metadata: Metadata = {
  title: "webnotes - ვებსაიტების დამზადება",
  description:
    "გაიგეთ რა ღირს ვებსაიტის დამზადება webnotes-ში, იხილეთ ჩვენი ნამუშევრები, მოგვწერეთ და მიიღეთ თქვენზე მორგებული გადაწყვეტილება.",
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
    sameAs: ["https://www.facebook.com/webnotes.ge/", "https://www.instagram.com/yourprofile"],
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
        "https://www.instagram.com/webnotes.ge",
        "https://www.linkedin.com/company/webnotes-ge",
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
        <GoogleAnalytics gaId="G-16K0BNK5DV" />
        <Header />
        <div className="pt-[90px]"> {children}</div>
        <Footer />
      </body>
    </html>
  );
}
