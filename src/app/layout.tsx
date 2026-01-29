import { LanguageProvider } from "@/contexts/LanguageContext";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://airagro.bg"),
  title: "Пръскане с Дрон DJI Agras T40 | Агро Дрон Услуги България | AirAgro",
  description:
    "Професионално пръскане, засяване и торене с агро дрон в цяла България. DJI Agras T40 & T50 с RTK прецизност. Спестете 30% препарати. Над 25,000 дка опит. ☎ 0876-543-546",
  keywords: [
    "пръскане с дрон",
    "агро дрон",
    "земеделски дрон",
    "агро дрон България",
    "DJI Agras T40",
    "DJI Agras T50",
    "пръскане с агро дрон",
    "услуга пръскане с дрон",
    "цена пръскане с дрон",
    "засяване с дрон",
    "торене с дрон",
    "листно торене",
    "прецизно земеделие",
    "RTK точност",
    "NDVI анализ",
    "картографиране с дрон",
    "селскостопански дрон",
    "дрон за земеделие"
  ],
  authors: [{ name: "AirAgro" }],
  creator: "AirAgro",
  publisher: "AirAgro",
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
    url: "https://airagro.bg",
    siteName: "AirAgro - Агро Дрон България",
    title: "Пръскане с Дрон DJI Agras T40 | Професионални Услуги в Цяла България",
    description:
      "Професионално пръскане с агро дрон в цяла България. DJI Agras T40 & T50 с RTK прецизност. Спестете 30% препарати. Над 25,000 дка опит. Обадете се: 0876-543-546",
    images: [
      {
        url: "/air-agro-logo.png",
        width: 1200,
        height: 630,
        alt: "AirAgro - Пръскане с агро дрон България",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Пръскане с Дрон DJI Agras | AirAgro България",
    description: "Професионално пръскане, засяване и торене с агро дрон. RTK точност, спестяване на ресурси. Над 25,000 дка опит.",
    images: ["/air-agro-logo.png"],
  },
  alternates: {
    canonical: "https://airagro.bg",
    languages: {
      "bg-BG": "https://airagro.bg",
      "en-US": "https://airagro.bg/en",
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
    <html lang="bg" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Preload hero video with high priority */}
        <link rel="preload" href="/videos/drone-bg.webm" as="video" type="video/webm" fetchPriority="high" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          {children}
          <Toaster position="top-center" />
        </LanguageProvider>
      </body>
    </html>
  );
}
