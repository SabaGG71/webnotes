import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/general/Header";
import LocalFont from "next/font/local";
import Footer from "../components/general/Footer";
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
  return (
    <html lang="ka-GE">
      <body className={`${sf_georgia.className} ${manrope.variable} antialiased`}>
        <Header />
        <div className="pt-[90px]"> {children}</div>
        <Footer />
      </body>
    </html>
  );
}
