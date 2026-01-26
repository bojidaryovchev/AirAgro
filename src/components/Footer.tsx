"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center">
            <Image
              src="/air-agro-logo.png"
              alt="AgroAir"
              width={120}
              height={72}
              className="h-[72px] w-auto shrink-0"
            />
          </div>

          <div className="text-background/70 flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#services" className="hover:text-primary transition-colors">
              {t("nav.services")}
            </a>
            <a href="#features" className="hover:text-primary transition-colors">
              {t("nav.features")}
            </a>
            <a href="#benefits" className="hover:text-primary transition-colors">
              {t("nav.benefits")}
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              {t("nav.contact")}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t("footer.privacy")}
            </a>
          </div>
        </div>

        <div className="border-background/10 text-background/50 mt-8 border-t pt-8 text-center text-sm">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
