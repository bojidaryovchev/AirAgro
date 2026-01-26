"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type Language = "en" | "bg";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.features": "Technology",
    "nav.benefits": "Benefits",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",

    // Hero
    "hero.badge": "DJI Agras T50 Professional Services",
    "hero.title1": "Precision Agriculture",
    "hero.title2": "From Above",
    "hero.description":
      "Professional drone spraying services powered by cutting-edge DJI technology. Maximize your crop yield with precision aerial application.",
    "hero.getQuote": "Get a Quote",
    "hero.watchDemo": "Watch Demo",
    "hero.scroll": "Scroll to explore",

    // Services
    "services.badge": "Our Services",
    "services.title": "Professional Drone Solutions",
    "services.description":
      "Leveraging the power of DJI Agras T50 to deliver precise, efficient, and cost-effective agricultural services.",
    "services.spraying.title": "Precision Spraying",
    "services.spraying.description":
      "40kg capacity with 24L/min flow rate for efficient, targeted application of pesticides and fertilizers.",
    "services.fertilization.title": "Crop Fertilization",
    "services.fertilization.description":
      "50kg spreading capacity ensures even distribution of granular fertilizers and seeds up to 5mm across your fields.",
    "services.mapping.title": "Field Mapping",
    "services.mapping.description":
      "Advanced terrain mapping and route planning for optimized coverage of irregularly shaped fields.",
    "services.pest.title": "Pest Control",
    "services.pest.description":
      "Rapid response aerial pest treatment to protect your crops before infestations spread.",
    "services.herbicide.title": "Herbicide Spraying",
    "services.herbicide.description": "Precise herbicide application for weed control without damaging your crops.",
    "services.greenhouse.title": "Greenhouse Shading",
    "services.greenhouse.description":
      "Specialized shading application for greenhouses to regulate temperature and light.",

    // Features
    "features.badge": "DJI Agras T50",
    "features.title1": "Industry-Leading",
    "features.title2": "Technology",
    "features.description":
      "The DJI Agras T50 represents the pinnacle of agricultural drone technology. With its coaxial twin-rotor propulsion and split-type torque resistant structure, it delivers unmatched stability and performance.",
    "features.capacity": "40kg spraying / 50kg spreading capacity",
    "features.radar": "Dual radar + binocular vision safety",
    "features.transmission": "O3 transmission for robust signal",
    "features.coverage": "21 hectares/hour coverage rate",
    "features.terrain": "Intelligent terrain following",
    "features.weather": "All-weather operation capability",

    // Benefits
    "benefits.badge": "Why Choose Us",
    "benefits.title": "Advantages of Drone Spraying",
    "benefits.subtitle":
      "Fast, efficient, economical, and safe way to reduce consumption and increase your production.",
    "benefits.speed": "Fast & Easy Operation",
    "benefits.speed.desc": "3x faster than tractors and 60x faster than manual labor",
    "benefits.savings": "Cost Savings",
    "benefits.savings.desc": "Reduces water and solution consumption, and eliminates crop damage from tractor tracks",
    "benefits.weather": "Weather Independent",
    "benefits.weather.desc": "Can operate even after rain when terrain is inaccessible to other machines",
    "benefits.height": "Any Crop Height",
    "benefits.height.desc": "Treats plants of any height - from grass to trees and vineyards",
    "benefits.precision": "GPS Precision",
    "benefits.precision.desc": "Terrain is evenly sprayed thanks to 3D mapping and satellite GPS technology",
    "benefits.eco": "Environmentally Friendly",
    "benefits.eco.desc": "Reduces environmental pollution through precise, targeted application",
    "benefits.safety": "Operator Safety",
    "benefits.safety.desc": "Drones minimize human risk by eliminating direct contact with chemicals",

    // Stats
    "stats.spray": "Spray Capacity",
    "stats.coverage": "Coverage Rate",
    "stats.flow": "Flow Rate",
    "stats.spread": "Spread Capacity",

    // Video Section
    "video.badge": "See It In Action",
    "video.title": "Drone Spraying in Action",
    "video.description":
      "Watch how our DJI Agras T50 drone efficiently covers fields with precision spraying technology.",

    // Contact
    "contact.badge": "Contact Us",
    "contact.title1": "Ready to Transform",
    "contact.title2": "Your Operations?",
    "contact.description":
      "Get in touch for a free consultation and quote. We'll assess your needs and provide a tailored solution for your agricultural operations.",
    "contact.call": "Call us",
    "contact.email": "Email us",
    "contact.visit": "Visit us",
    "contact.formTitle": "Request a Quote",
    "contact.firstName": "First Name",
    "contact.lastName": "Last Name",
    "contact.emailLabel": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location / Settlement",
    "contact.locationPlaceholder": "City or village name",
    "contact.fieldSize": "Field Size (decares)",
    "contact.cropType": "Crop Type",
    "contact.cropPlaceholder": "e.g., wheat, sunflower, vineyard...",
    "contact.serviceType": "Service Type",
    "contact.selectService": "Select a service",
    "contact.service.spraying": "Pesticide Spraying",
    "contact.service.fertilizing": "Fertilization",
    "contact.service.herbicide": "Herbicide Application",
    "contact.service.seeding": "Seed Spreading",
    "contact.service.other": "Other",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell us about your needs...",
    "contact.submit": "Send Request",

    // Footer
    "footer.privacy": "Privacy Policy",
    "footer.copyright": "AgroAir Drone Services. Powered by DJI Agras T50.",
  },
  bg: {
    // Navbar
    "nav.services": "Услуги",
    "nav.features": "Технология",
    "nav.benefits": "Предимства",
    "nav.about": "За нас",
    "nav.contact": "Контакти",
    "nav.getStarted": "Започнете",

    // Hero
    "hero.badge": "Професионални услуги с DJI Agras T50",
    "hero.title1": "Прецизно Земеделие",
    "hero.title2": "От Въздуха",
    "hero.description":
      "Професионални услуги за пръскане с дрон, задвижвани от най-съвременната технология на DJI. Максимизирайте добива си с прецизно аерозолно приложение.",
    "hero.getQuote": "Поискайте Оферта",
    "hero.watchDemo": "Гледайте Видео",
    "hero.scroll": "Превъртете за повече",

    // Services
    "services.badge": "Нашите Услуги",
    "services.title": "Професионални Дрон Решения",
    "services.description":
      "Използваме силата на DJI Agras T50 за доставяне на прецизни, ефективни и рентабилни земеделски услуги.",
    "services.spraying.title": "Прецизно Пръскане",
    "services.spraying.description":
      "40kg капацитет с 24L/min дебит за ефективно, целево приложение на пестициди и торове.",
    "services.fertilization.title": "Торене на Култури",
    "services.fertilization.description":
      "50kg капацитет за разпръскване осигурява равномерно разпределение на гранулирани торове и семена до 5мм.",
    "services.mapping.title": "Картографиране",
    "services.mapping.description":
      "Усъвършенствано картографиране на терена и планиране на маршрути за оптимално покритие.",
    "services.pest.title": "Контрол на Вредители",
    "services.pest.description": "Бърза реакция за въздушно третиране срещу вредители преди разпространението им.",
    "services.herbicide.title": "Пръскане с Хербициди",
    "services.herbicide.description":
      "Прецизно приложение на хербициди за контрол на плевелите без да се увреждат културите.",
    "services.greenhouse.title": "Засенчване на Оранжерии",
    "services.greenhouse.description":
      "Специализирано засенчване за оранжерии за регулиране на температурата и светлината.",

    // Features
    "features.badge": "DJI Agras T50",
    "features.title1": "Водеща в Индустрията",
    "features.title2": "Технология",
    "features.description":
      "DJI Agras T50 представлява върха на земеделската дрон технология. С коаксиална двуроторна система и устойчива на въртящ момент конструкция, осигурява несравнима стабилност.",
    "features.capacity": "40kg пръскане / 50kg разпръскване",
    "features.radar": "Двоен радар + бинокулярно зрение",
    "features.transmission": "O3 предаване за стабилен сигнал",
    "features.coverage": "21 хектара/час покритие",
    "features.terrain": "Интелигентно следване на терена",
    "features.weather": "Работа при всякакви условия",

    // Benefits
    "benefits.badge": "Защо Да Ни Изберете",
    "benefits.title": "Предимства на Дрон Пръскането",
    "benefits.subtitle":
      "Бърз, ефективен, икономичен и безопасен начин да намалите потреблението и да увеличите производството си.",
    "benefits.speed": "Бърза и Лесна Работа",
    "benefits.speed.desc": "3 пъти по-бързо от тракторите и 60 пъти по-бързо от ръчния труд",
    "benefits.savings": "Спестяване на Разходи",
    "benefits.savings.desc": "Намалява потреблението на вода и разтвор, елиминира щетите от следите на трактора",
    "benefits.weather": "Независимост от Времето",
    "benefits.weather.desc": "Може да работи дори след дъжд, когато теренът е недостъпен за други машини",
    "benefits.height": "Всякаква Височина на Културите",
    "benefits.height.desc": "Обработва растения с всякаква височина - от тревни до дървесни и лозя",
    "benefits.precision": "GPS Прецизност",
    "benefits.precision.desc": "Теренът е равномерно напръскан благодарение на 3D картата и GPS технология",
    "benefits.eco": "Екологично Чисто",
    "benefits.eco.desc": "Намалява замърсяването на околната среда чрез прецизно, целево приложение",
    "benefits.safety": "Безопасност за Оператора",
    "benefits.safety.desc": "Дроновете минимизират риска за хората, елиминирайки директен контакт с химикалите",

    // Stats
    "stats.spray": "Капацитет Пръскане",
    "stats.coverage": "Покритие",
    "stats.flow": "Дебит",
    "stats.spread": "Капацитет Разпръскване",

    // Video Section
    "video.badge": "Вижте в Действие",
    "video.title": "Дрон Пръскане в Действие",
    "video.description":
      "Гледайте как нашият DJI Agras T50 дрон ефективно покрива полетата с прецизна технология за пръскане.",

    // Contact
    "contact.badge": "Свържете се с Нас",
    "contact.title1": "Готови ли сте да Трансформирате",
    "contact.title2": "Вашите Операции?",
    "contact.description":
      "Свържете се с нас за безплатна консултация и оферта. Ще оценим нуждите ви и ще предоставим персонализирано решение.",
    "contact.call": "Обадете ни се",
    "contact.email": "Пишете ни",
    "contact.visit": "Посетете ни",
    "contact.formTitle": "Заявка за Оферта",
    "contact.firstName": "Име",
    "contact.lastName": "Фамилия",
    "contact.emailLabel": "Имейл",
    "contact.phone": "Телефон",
    "contact.location": "Населено Място",
    "contact.locationPlaceholder": "Град или село",
    "contact.fieldSize": "Площ (декари)",
    "contact.cropType": "Вид Култура",
    "contact.cropPlaceholder": "напр. пшеница, слънчоглед, лозе...",
    "contact.serviceType": "Вид Услуга",
    "contact.selectService": "Изберете услуга",
    "contact.service.spraying": "Пръскане с Пестициди",
    "contact.service.fertilizing": "Торене",
    "contact.service.herbicide": "Пръскане с Хербициди",
    "contact.service.seeding": "Разпръскване на Семена",
    "contact.service.other": "Друго",
    "contact.message": "Съобщение",
    "contact.messagePlaceholder": "Разкажете ни за вашите нужди...",
    "contact.submit": "Изпрати Заявка",

    // Footer
    "footer.privacy": "Политика за Поверителност",
    "footer.copyright": "AgroAir Дрон Услуги. Задвижван от DJI Agras T50.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("bg");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
