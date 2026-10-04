import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://helumlimited.com"),
  title: {
    default: "HELUM LIMITED | Powering Progress Through Clean Energy",
    template: "%s | HELUM LIMITED",
  },
  description:
    "Helum Limited delivers reliable, affordable and scalable renewable-energy solutions—solar PV, energy storage, power electronics, engineering and after-sales support across Kenya and East Africa.",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://helumlimited.com",
    siteName: "Helum Limited",
    title: "HELUM LIMITED | Powering Progress Through Clean Energy",
    description:
      "Integrated renewable-energy solutions for homes, businesses, institutions and agriculture. Solar | Storage | Power Solutions | Engineering | Distribution.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200",
        width: 1200,
        height: 630,
        alt: "Helum Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HELUM LIMITED | Powering Progress Through Clean Energy",
    description: "Reliable, affordable and scalable clean-energy solutions across Kenya and East Africa.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://helumlimited.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Helum Limited",
  url: "https://helumlimited.com",
  description:
    "Renewable-energy and clean-technology company delivering reliable, affordable and scalable energy solutions across Kenya and the wider East African market.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Darosa Plaza, Karen Road",
    addressLocality: "Nairobi",
    postalCode: "00502",
    addressCountry: "KE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+254-710-125-685",
    contactType: "customer service",
    email: "helumlimited@gmail.com",
    areaServed: "KE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
