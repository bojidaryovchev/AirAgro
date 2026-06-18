"use client";

import { Language } from "@/lib/articles";
import bg from "@/locales/bg.json";
import en from "@/locales/en.json";
import { usePathname } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useMemo } from "react";

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en,
  bg,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/** Language is derived solely from the URL's first path segment — the URL is the single source of truth. */
function languageFromPathname(pathname: string): Language {
  const first = pathname.split("/")[1];
  return first === "en" ? "en" : "bg";
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const language = languageFromPathname(pathname);

  // Keep <html lang="..."> in sync with the active route language.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = useMemo(() => {
    const dict = translations[language] ?? translations.bg;
    return (key: string): string => dict[key] ?? translations.bg[key] ?? key;
  }, [language]);

  return <LanguageContext.Provider value={{ language, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
