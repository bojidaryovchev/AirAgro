"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollThreshold, setScrollThreshold] = useState(50);
  const { t } = useLanguage();

  useEffect(() => {
    const updateThreshold = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        setScrollThreshold(Math.max(0, hero.offsetHeight - 80));
      } else {
        setScrollThreshold(50);
      }
    };

    updateThreshold();
    window.addEventListener("resize", updateThreshold);
    return () => window.removeEventListener("resize", updateThreshold);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  const navLinks = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.benefits"), href: "#benefits" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 right-0 left-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? "bg-background/45 shadow-lg" : "bg-background/5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-0">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image src="/air-agro-logo.png" alt="AgroAir" width={120} height={80} className="h-20 w-auto shrink-0" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`hover:text-primary text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher isScrolled={isScrolled} />
          <Button className="hero-gradient shadow-primary/20 border-0 text-white shadow-md" asChild>
            <a href="#contact">{t("nav.getStarted")}</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher isScrolled={isScrolled} />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${isScrolled ? "text-foreground" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-border bg-background/95 border-t backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-primary text-lg font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button className="hero-gradient mt-2 w-full border-0 text-white" asChild>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.getStarted")}
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
