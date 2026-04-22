declare module "*.css" {}
declare module "swiper/css" {}
declare module "swiper/css/pagination" {}
declare module "swiper/css/navigation" {}

// Google Consent Mode v2 + gtag global
interface Window {
  gtag: (
    command: "consent" | "config" | "event" | "js" | "set",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...args: any[]
  ) => void;
  dataLayer: unknown[];
}
