import { getSupportedLanguages, Language } from "@/lib/articles";

export function generateStaticParams() {
  return getSupportedLanguages().map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang = (["bg", "en"] as Language[]).includes(lang as Language) ? lang : "bg";

  return (
    <div lang={validLang} data-lang={validLang}>
      {children}
    </div>
  );
}
