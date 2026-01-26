import * as z from "zod";

// Shared contact form validation schema
export const contactFormSchema = z.object({
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

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Service type options for reuse
export const serviceOptions = [
  { value: "spraying", labelKey: "contact.service.spraying" },
  { value: "fertilizing", labelKey: "contact.service.fertilizing" },
  { value: "herbicide", labelKey: "contact.service.herbicide" },
  { value: "seeding", labelKey: "contact.service.seeding" },
  { value: "other", labelKey: "contact.service.other" },
] as const;

export const serviceNames: Record<string, string> = {
  spraying: "Пръскане",
  fertilizing: "Торене",
  herbicide: "Хербициди",
  seeding: "Сеитба",
  other: "Друго",
};
