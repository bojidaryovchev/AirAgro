'use client';

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              {t('contact.badge')}
            </span>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              {t('contact.title1')}
              <br />
              {t('contact.title2')}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              {t('contact.description')}
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t('contact.call')}</div>
                  <a href="tel:+359888123456" className="font-semibold text-foreground hover:text-primary transition-colors">
                    +359 888 123 456
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t('contact.email')}</div>
                  <a href="mailto:info@agroair.bg" className="font-semibold text-foreground hover:text-primary transition-colors">
                    info@agroair.bg
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t('contact.visit')}</div>
                  <div className="font-semibold text-foreground">
                    София, България
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border bg-card p-8 shadow-xl md:p-10"
          >
            <h3 className="mb-6 font-display text-2xl font-bold text-foreground">
              {t('contact.formTitle')}
            </h3>
            <form className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {t('contact.firstName')}
                  </label>
                  <Input placeholder="Иван" className="h-12" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {t('contact.lastName')}
                  </label>
                  <Input placeholder="Петров" className="h-12" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {t('contact.emailLabel')}
                  </label>
                  <Input type="email" placeholder="ivan@example.com" className="h-12" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {t('contact.phone')}
                  </label>
                  <Input type="tel" placeholder="+359 888 000 000" className="h-12" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  {t('contact.location')}
                </label>
                <Input placeholder={t('contact.locationPlaceholder')} className="h-12" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {t('contact.fieldSize')}
                  </label>
                  <Input type="number" placeholder="100" className="h-12" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {t('contact.cropType')}
                  </label>
                  <Input placeholder={t('contact.cropPlaceholder')} className="h-12" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  {t('contact.serviceType')}
                </label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder={t('contact.selectService')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spraying">{t('contact.service.spraying')}</SelectItem>
                    <SelectItem value="fertilizing">{t('contact.service.fertilizing')}</SelectItem>
                    <SelectItem value="herbicide">{t('contact.service.herbicide')}</SelectItem>
                    <SelectItem value="seeding">{t('contact.service.seeding')}</SelectItem>
                    <SelectItem value="other">{t('contact.service.other')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  {t('contact.message')}
                </label>
                <Textarea
                  placeholder={t('contact.messagePlaceholder')}
                  className="min-h-[100px] resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="hero-gradient w-full border-0 py-6 text-lg font-semibold text-white shadow-lg shadow-primary/30"
              >
                {t('contact.submit')}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
