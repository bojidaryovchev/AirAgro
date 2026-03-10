"use client";

import bg from "@/locales/bg.json";
import en from "@/locales/en.json";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Language = "en" | "bg";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en,
  bg,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectLanguageFromPath(): Language {
  if (typeof window !== "undefined") {
    const path = window.location.pathname;
    if (path.startsWith("/en/") || path === "/en") return "en";
  }
  return "bg";
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(detectLanguageFromPath);

  // Sync <html lang="..."> attribute whenever language changes
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Detect language from URL on route changes
  useEffect(() => {
    const detected = detectLanguageFromPath();
    if (detected !== language) {
      setLanguage(detected);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeof window !== "undefined" ? window.location.pathname : ""]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
