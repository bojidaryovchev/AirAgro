'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

const LanguageSwitcher = ({ isScrolled = false }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border/30 bg-background/10 p-1 backdrop-blur-sm">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={cn(
          "h-7 rounded-full px-3 text-xs font-medium transition-all",
          language === 'en'
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : isScrolled
            ? "text-foreground hover:bg-muted"
            : "text-white/80 hover:bg-white/10 hover:text-white"
        )}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('bg')}
        className={cn(
          "h-7 rounded-full px-3 text-xs font-medium transition-all",
          language === 'bg'
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : isScrolled
            ? "text-foreground hover:bg-muted"
            : "text-white/80 hover:bg-white/10 hover:text-white"
        )}
      >
        BG
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
