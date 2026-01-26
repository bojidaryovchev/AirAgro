'use client';

import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground py-12 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="font-display text-xl font-bold text-primary-foreground">
                A
              </span>
            </div>
            <span className="font-display text-xl font-bold">AgroAir</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-background/70">
            <a href="#services" className="transition-colors hover:text-primary">
              {t('nav.services')}
            </a>
            <a href="#features" className="transition-colors hover:text-primary">
              {t('nav.features')}
            </a>
            <a href="#benefits" className="transition-colors hover:text-primary">
              {t('nav.benefits')}
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              {t('nav.contact')}
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              {t('footer.privacy')}
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-background/10 pt-8 text-center text-sm text-background/50">
          © {new Date().getFullYear()} {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
