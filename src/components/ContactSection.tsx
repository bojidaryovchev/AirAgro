"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactFormData, contactFormSchema, serviceOptions } from "@/lib/schemas/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactSection = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      fieldSize: "",
      cropType: "",
      serviceType: "",
      message: "",
    },
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

      toast.success("Съобщението е изпратено успешно! Ще се свържем с вас скоро.");

      reset();
    } catch {
      toast.error("Грешка при изпращане. Моля, опитайте отново или се свържете директно с нас.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0, translateZ: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-2 text-sm font-medium">
              {t("contact.badge")}
            </span>
            <h2 className="font-display text-foreground text-4xl font-bold md:text-5xl">
              {t("contact.title1")}
              <br />
              {t("contact.title2")}
            </h2>
            <p className="text-muted-foreground mt-6 text-lg">{t("contact.description")}</p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">{t("contact.call")}</div>
                  <a
                    href="tel:+359888123456"
                    className="text-foreground hover:text-primary font-semibold transition-colors"
                  >
                    +359 888 123 456
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">{t("contact.email")}</div>
                  <a
                    href="mailto:info@agroair.bg"
                    className="text-foreground hover:text-primary font-semibold transition-colors"
                  >
                    info@agroair.bg
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">{t("contact.visit")}</div>
                  <div className="text-foreground font-semibold">София, България</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0, translateZ: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="border-border bg-card rounded-3xl border p-8 shadow-xl md:p-10"
          >
            <h3 className="font-display text-foreground mb-6 text-2xl font-bold">{t("contact.formTitle")}</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-foreground mb-2 block text-sm font-medium">
                    {t("contact.firstName")} <span className="text-destructive">*</span>
                  </label>
                  <Input {...register("firstName")} placeholder="Иван" className="h-12" />
                  {errors.firstName && <p className="text-destructive mt-1 text-xs">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="text-foreground mb-2 block text-sm font-medium">
                    {t("contact.lastName")} <span className="text-destructive">*</span>
                  </label>
                  <Input {...register("lastName")} placeholder="Петров" className="h-12" />
                  {errors.lastName && <p className="text-destructive mt-1 text-xs">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-foreground mb-2 block text-sm font-medium">
                    {t("contact.emailLabel")} <span className="text-destructive">*</span>
                  </label>
                  <Input {...register("email")} type="email" placeholder="ivan@example.com" className="h-12" />
                  {errors.email && <p className="text-destructive mt-1 text-xs">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="text-foreground mb-2 block text-sm font-medium">
                    {t("contact.phone")} <span className="text-destructive">*</span>
                  </label>
                  <Input {...register("phone")} type="tel" placeholder="+359 888 000 000" className="h-12" />
                  {errors.phone && <p className="text-destructive mt-1 text-xs">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label className="text-foreground mb-2 block text-sm font-medium">
                  {t("contact.location")} <span className="text-destructive">*</span>
                </label>
                <Input {...register("location")} placeholder={t("contact.locationPlaceholder")} className="h-12" />
                {errors.location && <p className="text-destructive mt-1 text-xs">{errors.location.message}</p>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-foreground mb-2 block text-sm font-medium">
                    {t("contact.fieldSize")} <span className="text-destructive">*</span>
                  </label>
                  <Input {...register("fieldSize")} type="number" placeholder="100" className="h-12" />
                  {errors.fieldSize && <p className="text-destructive mt-1 text-xs">{errors.fieldSize.message}</p>}
                </div>
                <div>
                  <label className="text-foreground mb-2 block text-sm font-medium">
                    {t("contact.cropType")} <span className="text-destructive">*</span>
                  </label>
                  <Input {...register("cropType")} placeholder={t("contact.cropPlaceholder")} className="h-12" />
                  {errors.cropType && <p className="text-destructive mt-1 text-xs">{errors.cropType.message}</p>}
                </div>
              </div>

              <div>
                <label className="text-foreground mb-2 block text-sm font-medium">
                  {t("contact.serviceType")} <span className="text-destructive">*</span>
                </label>
                <Controller
                  name="serviceType"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder={t("contact.selectService")} />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {t(option.labelKey)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.serviceType && <p className="text-destructive mt-1 text-xs">{errors.serviceType.message}</p>}
              </div>

              <div>
                <label className="text-foreground mb-2 block text-sm font-medium">
                  {t("contact.message")} <span className="text-destructive">*</span>
                </label>
                <Textarea
                  {...register("message")}
                  placeholder={t("contact.messagePlaceholder")}
                  className="min-h-25 resize-none"
                />
                {errors.message && <p className="text-destructive mt-1 text-xs">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="hero-gradient shadow-primary/30 w-full border-0 py-6 text-lg font-semibold text-white shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? "Изпращане..." : t("contact.submit")}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
