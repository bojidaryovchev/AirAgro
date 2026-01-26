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
  title: "AgroAir - Professional Drone Spraying Services | DJI Agras T50",
  description: "Professional drone spraying services powered by cutting-edge DJI Agras T50 technology. Maximize your crop yield with precision aerial application in Bulgaria.",
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
