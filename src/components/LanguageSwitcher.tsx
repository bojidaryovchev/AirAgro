"use client";

import { Button } from "@/components/ui/button";
import { Language } from "@/lib/articles";
import { swapLangInPath } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

const LANGS: Language[] = ["en", "bg"];

const LanguageSwitcher = ({ isScrolled = false }: LanguageSwitcherProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const current: Language = pathname.split("/")[1] === "en" ? "en" : "bg";

  const switchTo = (lang: Language) => {
    if (lang === current) return;
    router.push(swapLangInPath(pathname, lang));
  };

  return (
    <div className="border-border/30 bg-background/10 flex items-center gap-1 rounded-full border p-1 backdrop-blur-sm">
      {LANGS.map((lang) => {
        const active = current === lang;
        return (
          <Button
            key={lang}
            variant="ghost"
            size="sm"
            onClick={() => switchTo(lang)}
            className={cn(
              "h-7 rounded-full px-3 text-xs font-medium transition-all",
              active
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : isScrolled
                  ? "text-foreground hover:bg-muted hover:text-black"
                  : "text-white/80 hover:bg-white/10 hover:text-black",
            )}
          >
            {lang.toUpperCase()}
          </Button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
