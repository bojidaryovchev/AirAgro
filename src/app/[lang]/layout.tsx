import { getSupportedLanguages, Language } from "@/lib/articles";
import { notFound } from "next/navigation";

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

  if (!getSupportedLanguages().includes(lang as Language)) {
    notFound();
  }

  return (
    <div lang={lang} data-lang={lang}>
      {children}
    </div>
  );
}
