'use client';

import { AnimatePresence, motion } from "framer-motion";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useState } from "react";

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, "Въведете поне 2 символа"),
  lastName: z.string().min(2, "Въведете поне 2 символа"),
  email: z.string().email("Невалиден имейл адрес"),
  phone: z.string().min(10, "Въведете валиден телефонен номер"),
  location: z.string().min(3, "Въведете локация"),
  fieldSize: z.string().min(1, "Въведете площ на имота"),
  cropType: z.string().min(2, "Въведете тип култура"),
  serviceType: z.string().min(1, "Изберете услуга"),
  message: z.string().min(10, "Въведете поне 10 символа"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setShowSuccess(true);
      
      reset();
    } catch (error) {
      toast.error("Грешка при изпращане", {
        description: "Моля, опитайте отново или се свържете директно с нас.",
        position: "top-center",
        duration: 5000,
        className: "mx-auto w-full max-w-lg rounded-2xl px-6 py-5 text-center text-base md:text-lg",
        descriptionClassName: "text-center text-sm md:text-base",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceType = watch("serviceType");

  return (
    <section id="contact" className="section-padding bg-secondary">
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="relative mx-6 w-full max-w-xl overflow-hidden rounded-3xl border border-primary/20 bg-primary/20 p-8 text-center shadow-2xl shadow-primary/20"
            >
              <div className="absolute inset-0 opacity-40">
                <div className="absolute left-6 top-6 h-3 w-3 animate-pulse rounded-full bg-primary/70" />
                <div className="absolute right-10 top-10 h-2.5 w-2.5 animate-pulse rounded-full bg-lime-400/70" />
                <div className="absolute bottom-10 left-12 h-2 w-2 animate-pulse rounded-full bg-emerald-300/70" />
                <div className="absolute bottom-12 right-16 h-3 w-3 animate-pulse rounded-full bg-primary/60" />
              </div>

              <div className="relative z-10">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                  ✓
                </div>
                <h4 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  Съобщението е изпратено успешно!
                </h4>
                <p className="mt-3 text-base text-foreground/80 md:text-lg">
                  Ще се свържем с вас скоро.
                </p>
                <Button
                  type="button"
                  className="hero-gradient mt-6 border-0 px-6 py-3 text-white"
                  onClick={() => setShowSuccess(false)}
                >
                  Добре
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {t('contact.firstName')} <span className="text-destructive">*</span>
                  </label>
                  <Input 
                    {...register("firstName")}
                    placeholder="Иван" 
                    className="h-12" 
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-destructive">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {t('contact.lastName')} <span className="text-destructive">*</span>
                  </label>
                  <Input 
                    {...register("lastName")}
                    placeholder="Петров" 
                    className="h-12" 
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-destructive">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {t('contact.emailLabel')} <span className="text-destructive">*</span>
                  </label>
                  <Input 
                    {...register("email")}
                    type="email" 
                    placeholder="ivan@example.com" 
                    className="h-12" 
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {t('contact.phone')} <span className="text-destructive">*</span>
                  </label>
                  <Input 
                    {...register("phone")}
                    type="tel" 
                    placeholder="+359 888 000 000" 
                    className="h-12" 
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  {t('contact.location')} <span className="text-destructive">*</span>
                </label>
                <Input 
                  {...register("location")}
                  placeholder={t('contact.locationPlaceholder')} 
                  className="h-12" 
                />
                {errors.location && (
                  <p className="mt-1 text-xs text-destructive">{errors.location.message}</p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {t('contact.fieldSize')} <span className="text-destructive">*</span>
                  </label>
                  <Input 
                    {...register("fieldSize")}
                    type="number" 
                    placeholder="100" 
                    className="h-12" 
                  />
                  {errors.fieldSize && (
                    <p className="mt-1 text-xs text-destructive">{errors.fieldSize.message}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {t('contact.cropType')} <span className="text-destructive">*</span>
                  </label>
                  <Input 
                    {...register("cropType")}
                    placeholder={t('contact.cropPlaceholder')} 
                    className="h-12" 
                  />
                  {errors.cropType && (
                    <p className="mt-1 text-xs text-destructive">{errors.cropType.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  {t('contact.serviceType')} <span className="text-destructive">*</span>
                </label>
                <Select 
                  value={serviceType} 
                  onValueChange={(value) => setValue("serviceType", value)}
                  modal={false}
                >
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
                {errors.serviceType && (
                  <p className="mt-1 text-xs text-destructive">{errors.serviceType.message}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  {t('contact.message')} <span className="text-destructive">*</span>
                </label>
                <Textarea
                  {...register("message")}
                  placeholder={t('contact.messagePlaceholder')}
                  className="min-h-[100px] resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="hero-gradient w-full border-0 py-6 text-lg font-semibold text-white shadow-lg shadow-primary/30 disabled:opacity-50"
              >
                {isSubmitting ? "Изпращане..." : t('contact.submit')}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
