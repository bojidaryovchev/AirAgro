import bg from "@/locales/bg.json";
import en from "@/locales/en.json";
import { Language } from "./articles";

const translations: Record<Language, Record<string, string>> = { en, bg };

export type TFunction = (key: string) => string;

/**
 * Server-side translation accessor. Mirrors the `t()` from LanguageContext but works in
 * Server Components (which can't read React context). Falls back to the key if missing.
 */
export function getTranslations(lang: Language): TFunction {
  const dict = translations[lang] ?? translations.bg;
  return (key: string): string => dict[key] ?? translations.bg[key] ?? key;
}
