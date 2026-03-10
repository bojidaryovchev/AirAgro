"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: Record<string, FAQItem[]> = {
  bg: [
    {
      question: "Колко струва пръскането с дрон?",
      answer:
        "Цената зависи от площта на обработка, вида на културата и типа третиране. При площи над 100 дка предлагаме специални отстъпки. Свържете се с нас за индивидуална оферта, адаптирана към вашите нужди.",
    },
    {
      question: "Какви култури можете да обработвате?",
      answer:
        "Обработваме всички видове земеделски култури - слънчоглед, царевица, пшеница, ечемик, рапица, соя, лозя, овошки и оранжерийни култури. DJI Agras дроновете са универсални и се адаптират към всяка култура и терен.",
    },
    {
      question: "Колко бързо можете да обработите полето ми?",
      answer:
        "С DJI Agras T50 обработваме до 700-1000 декара на ден, в зависимост от културата и терена. За 100 дка време за обработка е около 30-45 минути. Работим бързо, за да спазим оптималните агрономически срокове.",
    },
    {
      question: "При какви метеорологични условия можете да работите?",
      answer:
        "Работим при температури от 5°C до 35°C, вятър до 8 м/сек и без активни валежи. Дроновете са снабдени с метео сензори и автоматично спират при неблагоприятни условия, гарантирайки безопасност и качество.",
    },
    {
      question: "Трябва ли да предоставя препаратите или вие ги осигурявате?",
      answer:
        "Работим с препарати, предоставени от клиента. Това ви дава пълна свобода да изберете продуктите според вашата агрономическа програма и бюджет. Помагаме с препоръки за оптимални норми при дрон приложение.",
    },
    {
      question: "Как дронът постига по-добро покритие от наземната техника?",
      answer:
        "Въздушният поток от винтовете на дрона (downwash) прониква дълбоко в растенията, достигайки долната страна на листата където традиционната техника не може. RTK GPS осигурява точност ±10 см, елиминирайки припокривания и пропуски.",
    },
    {
      question: "Можете ли да работите при високи култури или влажна почва?",
      answer:
        "Да! Това е едно от най-големите предимства на дрона. Работим над култури до 3-4 м височина без да ги увреждаме. При мека или кална почва дронът не утъпква и не уплътнява, като позволява навременно третиране когато наземната техника не може да влезе.",
    },
    {
      question: "Как се гарантира качеството на обработката?",
      answer:
        "Всяка обработка се документира с GPS запис, който показва реалното покритие на сантиметър. Получавате KML/KMZ файл с пълния маршрут, който може да видите в Google Earth. Използваме RTK корекция за максимална точност.",
    },
    {
      question: "Колко вода и препарат се използват при дрон пръскане?",
      answer:
        "Използваме 10-15 л/дка работен разтвор - 3-4 пъти по-малко от традиционната техника, благодарение на ултрамалообемната технология и центробежните дюзи. Това води до значителна икономия на ресурси без компромис с ефективността.",
    },
    {
      question: "Колко предварително трябва да резервирам дата?",
      answer:
        "При спешни случаи можем да реагираме за 24-48 часа. За планови обработки препоръчваме резервация 5-7 дни предварително, особено през пиковите месеци (май-юли). За сезонни пакети предлагаме приоритетно обслужване.",
    },
    {
      question: "Има ли минимална площ за обработка?",
      answer:
        "Не, няма минимална площ. Работим както с малки стопанства от 10-20 дка, така и с големи ферми над 1000 дка. Всяка заявка получава индивидуална оферта според площта и културата.",
    },
  ],
  en: [
    {
      question: "How much does drone spraying cost?",
      answer:
        "The price depends on the area, crop type, and treatment type. For areas over 100 decares, we offer special discounts. Contact us for a customized quote tailored to your needs.",
    },
    {
      question: "What crops can you treat?",
      answer:
        "We treat all types of agricultural crops - sunflower, corn, wheat, barley, rapeseed, soybeans, vineyards, orchards, and greenhouse crops. DJI Agras drones are universal and adapt to any crop and terrain.",
    },
    {
      question: "How quickly can you treat my field?",
      answer:
        "With the DJI Agras T50, we treat up to 700-1000 decares per day, depending on the crop and terrain. For 100 decares, treatment time is about 30-45 minutes. We work quickly to meet optimal agronomic timing.",
    },
    {
      question: "What weather conditions can you work in?",
      answer:
        "We work in temperatures from 5°C to 35°C, wind up to 8 m/s, and without active precipitation. Drones are equipped with weather sensors and automatically stop in unfavorable conditions, ensuring safety and quality.",
    },
    {
      question: "Do I need to provide the chemicals or do you supply them?",
      answer:
        "We work with client-provided products. This gives you complete freedom to choose products according to your agronomic program and budget. We help with recommendations for optimal rates for drone application.",
    },
    {
      question: "How does the drone achieve better coverage than ground equipment?",
      answer:
        "The airflow from the drone's propellers (downwash) penetrates deep into the plants, reaching the underside of leaves where traditional equipment cannot. RTK GPS provides ±10 cm accuracy, eliminating overlaps and gaps.",
    },
    {
      question: "Can you work with tall crops or wet soil?",
      answer:
        "Yes! This is one of the drone's biggest advantages. We work over crops up to 3-4 m tall without damaging them. With soft or muddy soil, the drone doesn't trample or compact, allowing timely treatment when ground equipment cannot enter.",
    },
    {
      question: "How is treatment quality guaranteed?",
      answer:
        "Every treatment is documented with GPS recording showing actual coverage down to the centimeter. You receive a KML/KMZ file with the complete route, viewable in Google Earth. We use RTK correction for maximum accuracy.",
    },
    {
      question: "How much water and product are used in drone spraying?",
      answer:
        "We use 10-15 L/decare working solution - 3-4 times less than traditional equipment, thanks to ultra-low volume technology and centrifugal nozzles. This leads to significant resource savings without compromising effectiveness.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "For emergencies, we can respond within 24-48 hours. For planned treatments, we recommend booking 5-7 days in advance, especially during peak months (May-July). Seasonal packages offer priority service.",
    },
    {
      question: "Is there a minimum area for treatment?",
      answer:
        "No, there is no minimum area. We work with small farms from 10-20 decares as well as large farms over 1000 decares. Every request receives an individual quote based on the area and crop type.",
    },
  ],
};

export default function FAQSection() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const content = {
    bg: {
      title: "Често Задавани Въпроси",
      subtitle: "Отговори на най-честите въпроси за нашите услуги с агро дрон",
      cta: "Имате друг въпрос?",
      ctaButton: "Свържете се с нас",
    },
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to the most common questions about our agro drone services",
      cta: "Have another question?",
      ctaButton: "Contact us",
    },
  };

  const t = content[language as keyof typeof content];
  const faqList = faqs[language as keyof typeof faqs];

  return (
    <>
      <section className="bg-linear-to-b from-white to-emerald-50/30 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">{t.title}</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">{t.subtitle}</p>
          </motion.div>

          {/* FAQ Items */}
          <div className="mx-auto max-w-4xl space-y-4">
            {faqList.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="group w-full cursor-pointer rounded-2xl bg-white p-6 text-left shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="flex-1 text-lg font-semibold text-gray-900 transition-colors group-hover:text-emerald-600 md:text-xl">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`h-6 w-6 shrink-0 text-emerald-600 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 border-t border-gray-100 pt-4 leading-relaxed text-gray-600">{faq.answer}</p>
                  </motion.div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="mb-6 text-xl text-gray-700">{t.cta}</p>
            <a
              href="tel:+359884242406"
              className="hero-gradient shadow-primary/20 inline-flex items-center gap-2 rounded-full border-0 px-8 py-4 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {t.ctaButton}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
