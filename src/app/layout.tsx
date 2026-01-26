import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster } from "@/components/ui/toaster";
import { SonnerToaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "AgroAir - Професионални Дрон Услуги за Третиране | DJI Agras T50",
  description: "Професионални дрон услуги за пръскане и торене, захранвани от DJI Agras T50. Максимизирайте добива на вашите култури с прецизно въздушно третиране в България.",
  keywords: [
    "дрон услуги",
    "дрон пръскане",
    "агро дрон",
    "DJI Agras T50",
    "прецизно земеделие",
    "въздушно третиране",
    "агро услуги България",
    "дрон торене",
    "селско стопанство",
    "precision agriculture"
  ],
  authors: [{ name: "AgroAir" }],
  creator: "AgroAir",
  publisher: "AgroAir",
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
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://agroair.bg",
    siteName: "AgroAir",
    title: "AgroAir - Професионални Дрон Услуги за Третиране",
    description: "Професионални дрон услуги за пръскане и торене с DJI Agras T50. Прецизно въздушно третиране на земеделски култури в България.",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "AgroAir Drone Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgroAir - Професионални Дрон Услуги",
    description: "Професионални дрон услуги за пръскане и торене с DJI Agras T50",
    images: ["/hero-bg.jpg"],
  },
  alternates: {
    canonical: "https://agroair.bg",
    languages: {
      "bg-BG": "https://agroair.bg",
      "en-US": "https://agroair.bg/en",
    },
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
          <Toaster />
          <SonnerToaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
