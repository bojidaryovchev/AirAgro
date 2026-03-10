"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center">
            <Image src="/air-agro-logo.png" alt="AirAgro" width={120} height={72} className="h-18 w-auto shrink-0" />
          </div>

          <div className="text-background/70 flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="/#services" className="hover:text-primary transition-colors">
              {t("nav.services")}
            </Link>
            <Link href="/#features" className="hover:text-primary transition-colors">
              {t("nav.features")}
            </Link>
            <Link href="/#benefits" className="hover:text-primary transition-colors">
              {t("nav.benefits")}
            </Link>
            <Link href="/#contact" className="hover:text-primary transition-colors">
              {t("nav.contact")}
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              {t("footer.privacy")}
            </Link>
          </div>
        </div>

        <div className="border-background/10 text-background/50 mt-8 border-t pt-8 text-center text-sm">
          <p className="text-background/70 mb-2 font-medium">📢 Обслужваме цяла България – реакция за 24-48 часа</p>©{" "}
          {new Date().getFullYear()} {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
