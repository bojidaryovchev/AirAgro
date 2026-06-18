import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getSupportedLanguages, Language } from "@/lib/articles";
import { localizedPath } from "@/lib/routes";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return getSupportedLanguages().map((lang) => ({ lang }));
}

const content = {
  bg: {
    metaTitle: "Политика за Поверителност | AirAgro",
    metaDescription: "Научете как AirAgro събира, обработва и защитава вашите лични данни и бисквитки.",
    title: "Политика за Поверителност",
    updated: "Последна актуализация: 22 април 2026 г.",
    sections: [
      {
        heading: "1. За нас",
        body: "AirAgro е дружество, предоставящо услуги за пръскане, засяване и торене с агро дрон в България. Администратор на личните данни е AirAgro (контакт: contact.airagro@gmail.com, тел. 0884-242-406).",
      },
      {
        heading: "2. Какви данни събираме",
        body: "Събираме данни само когато вие ни ги предоставяте доброволно чрез контактната форма (три имена, имейл, телефон, населено място, вид услуга и съобщение). Не събираме чувствителни лични данни.",
      },
      {
        heading: "3. Цел на обработката",
        body: "Данните от контактната форма се обработват единствено за отговор на вашето запитване и изпращане на оферта. Не продаваме и не споделяме данните ви с трети страни, освен с доставчиците на услуги посочени по-долу.",
      },
      {
        heading: "4. Бисквитки и проследяване",
        body: `Използваме следните категории бисквитки:

• Задължителни – необходими за функционирането на сайта. Не могат да бъдат изключени.

• Аналитични (Google Analytics) – помагат ни да разберем как посетителите използват сайта (брой посещения, изходни страници и др.). Активират се само с ваше съгласие.

• Маркетингови (Google Ads / Google Tag Manager) – използват се за показване на персонализирани реклами и измерване на ефективността на рекламните кампании. Активират се само с ваше съгласие.

Прилагаме Google Consent Mode v2 — аналитичните и маркетинговите бисквитки са блокирани до получаване на вашето изрично съгласие чрез банера за бисквитки.`,
      },
      {
        heading: "5. Оттегляне на съгласие",
        body: "Можете да оттеглите или промените съгласието си по всяко време, като изчистите бисквитките на браузъра си или се свържете с нас на contact.airagro@gmail.com. При следващото посещение банерът за бисквитки ще се покаже отново и ще можете да направите нов избор.",
      },
      {
        heading: "6. Съхранение на данните",
        body: "Данните от контактната форма се съхраняват за период, необходим за обработка на запитването, след което се изтриват. Бисквитките се съхраняват съгласно политиката на съответния доставчик (Google Analytics — до 14 месеца, Google Ads — до 13 месеца).",
      },
      {
        heading: "7. Вашите права",
        body: "Съгласно GDPR имате право на достъп, коригиране, изтриване, ограничаване на обработката и преносимост на данните, както и право на жалба до Комисията за защита на личните данни (www.cpdp.bg). За упражняване на правата си пишете на contact.airagro@gmail.com.",
      },
      {
        heading: "8. Промени в политиката",
        body: "Запазваме правото да актуализираме тази политика. При съществени промени ще поставим видимо известие на сайта. Датата на последна актуализация е посочена в началото на документа.",
      },
      {
        heading: "9. Контакт",
        body: "За въпроси относно защитата на личните ви данни: contact.airagro@gmail.com | 0884-242-406",
      },
    ],
  },
  en: {
    metaTitle: "Privacy Policy | AirAgro",
    metaDescription: "Learn how AirAgro collects, processes and protects your personal data and cookies.",
    title: "Privacy Policy",
    updated: "Last updated: 22 April 2026",
    sections: [
      {
        heading: "1. About Us",
        body: "AirAgro is a company providing drone spraying, seeding and fertilisation services across Bulgaria. The data controller is AirAgro (contact: contact.airagro@gmail.com, tel. 0884-242-406).",
      },
      {
        heading: "2. What Data We Collect",
        body: "We only collect data you voluntarily provide through the contact form (name, email, phone, location, service type and message). We do not collect sensitive personal data.",
      },
      {
        heading: "3. Purpose of Processing",
        body: "Contact form data is processed solely to respond to your enquiry and send a quote. We do not sell or share your data with third parties, except with the service providers listed below.",
      },
      {
        heading: "4. Cookies & Tracking",
        body: `We use the following cookie categories:

• Necessary – required for the website to function. Cannot be disabled.

• Analytics (Google Analytics) – help us understand how visitors use the site (page views, exit pages, etc.). Activated only with your consent.

• Marketing (Google Ads / Google Tag Manager) – used to show personalised advertisements and measure campaign effectiveness. Activated only with your consent.

We implement Google Consent Mode v2 — analytics and marketing cookies are blocked until you give explicit consent via the cookie banner.`,
      },
      {
        heading: "5. Withdrawing Consent",
        body: "You can withdraw or change your consent at any time by clearing your browser cookies or contacting us at contact.airagro@gmail.com. On your next visit the cookie banner will reappear so you can make a new choice.",
      },
      {
        heading: "6. Data Retention",
        body: "Contact form data is retained only as long as needed to handle your enquiry, then deleted. Cookies are stored according to each provider's policy (Google Analytics — up to 14 months, Google Ads — up to 13 months).",
      },
      {
        heading: "7. Your Rights",
        body: "Under GDPR you have the right to access, rectify, erase, restrict processing and port your data, as well as the right to lodge a complaint with your national data protection authority. To exercise your rights write to contact.airagro@gmail.com.",
      },
      {
        heading: "8. Policy Changes",
        body: "We reserve the right to update this policy. For material changes we will place a prominent notice on the site. The date of the last update is shown at the top of this document.",
      },
      {
        heading: "9. Contact",
        body: "For data protection enquiries: contact.airagro@gmail.com | 0884-242-406",
      },
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const c = content[lang as Language] ?? content.bg;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    robots: { index: false, follow: false },
    alternates: {
      canonical: `https://airagro.bg${localizedPath("privacy", (lang as Language) ?? "bg")}`,
      languages: {
        "bg-BG": `https://airagro.bg${localizedPath("privacy", "bg")}`,
        "en-US": `https://airagro.bg${localizedPath("privacy", "en")}`,
        "x-default": `https://airagro.bg${localizedPath("privacy", "bg")}`,
      },
    },
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { lang } = await params;
  if (!getSupportedLanguages().includes(lang as Language)) notFound();

  const c = content[lang as Language];

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">{c.title}</h1>
        <p className="mb-10 text-sm text-gray-500">{c.updated}</p>

        <div className="space-y-8">
          {c.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-2 text-lg font-semibold text-gray-900">{section.heading}</h2>
              <p className="text-sm leading-relaxed whitespace-pre-line text-gray-600">{section.body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
