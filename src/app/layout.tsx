import CookieConsent from "@/components/CookieConsent";
import { LanguageProvider } from "@/contexts/LanguageContext";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
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
  title: "Пръскане с Дрон DJI Agras T50 | Агро Дрон Услуги България | AirAgro",
  description:
    "Професионално пръскане, засяване и торене с агро дрон в цяла България. DJI Agras T50 с RTK прецизност. Спестете 30% препарати. Над 25,000 дка опит. ☎ 0884-242-406",
  keywords: [
    "пръскане с дрон",
    "агро дрон",
    "земеделски дрон",
    "агро дрон България",
    "DJI Agras T50",
    "пръскане с агро дрон",
    "услуга пръскане с дрон",
    "цена пръскане с дрон",
    "засяване с дрон",
    "торене с дрон",
    "листно торене",
    "прецизно земеделие",
    "RTK точност",
    "селскостопански дрон",
    "дрон за земеделие",
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
    title: "Пръскане с Дрон DJI Agras T50 | Професионални Услуги в Цяла България",
    description:
      "Професионално пръскане с агро дрон в цяла България. DJI Agras T50 с RTK прецизност. Спестете 30% препарати. Над 25,000 дка опит. Обадете се: 0884-242-406",
    images: [
      {
        url: "/air-agro-logo.png",
        width: 1024,
        height: 1024,
        type: "image/png",
        alt: "AirAgro - Пръскане с агро дрон България",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Пръскане с Дрон DJI Agras | AirAgro България",
    description:
      "Професионално пръскане, засяване и торене с агро дрон. RTK точност, спестяване на ресурси. Над 25,000 дка опит.",
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
    google: "rDchfqaojsWa0XUGGWCpYC0hWiOnqzgn3v",
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
        {/* Google Consent Mode v2 — must run before GTM */}
        <Script id="consent-defaults" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
        <Script id="gtm" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5LL6DTSW');`}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18017278458" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18017278458');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`} suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LL6DTSW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <LanguageProvider>
          {children}
          <CookieConsent />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
