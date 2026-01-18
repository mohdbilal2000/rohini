import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heritageartisans.com"),
  title: {
    default: "Heritage Artisans | Jewellery, Pashmina, Clothing & Fragrances",
    template: "%s | Heritage Artisans",
  },
  description:
    "Shop exquisite handcrafted jewellery, Pashmina shawls, ethnic clothing, essential oils, and luxury perfumes. Authentic Indian craftsmanship delivered worldwide.",
  keywords: [
    "Indian jewellery",
    "Pashmina shawls",
    "ethnic clothing",
    "essential oils",
    "luxury perfumes",
    "attars",
    "Kashmiri Pashmina",
    "handcrafted jewellery",
    "Indian ethnic wear",
  ],
  authors: [{ name: "Heritage Artisans" }],
  creator: "Heritage Artisans",
  publisher: "Heritage Artisans",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heritageartisans.com",
    siteName: "Heritage Artisans",
    title: "Heritage Artisans | Jewellery, Pashmina, Clothing & Fragrances",
    description:
      "Shop exquisite handcrafted jewellery, Pashmina shawls, ethnic clothing, essential oils, and luxury perfumes. Authentic Indian craftsmanship.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Heritage Artisans - Authentic Indian Craftsmanship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heritage Artisans | Jewellery, Pashmina, Clothing & Fragrances",
    description:
      "Shop exquisite handcrafted jewellery, Pashmina shawls, ethnic clothing, essential oils, and luxury perfumes.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#6B2D3C" />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Heritage Artisans",
              url: "https://heritageartisans.com",
              logo: "https://heritageartisans.com/logo.png",
              description:
                "Authentic Indian craftsmanship - Jewellery, Pashmina shawls, ethnic clothing, and luxury fragrances",
              sameAs: [
                "https://www.facebook.com/heritageartisans",
                "https://www.instagram.com/heritageartisans",
                "https://www.pinterest.com/heritageartisans",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-XXXXXXXXXX",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi"],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
