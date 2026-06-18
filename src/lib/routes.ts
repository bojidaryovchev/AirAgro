import { Language } from "./articles";

export type { Language };

/**
 * Logical pages that have a stable identity across languages but a localized URL slug.
 * Blog article URLs are NOT listed here — their slugs come from the markdown filenames
 * (which already differ per language) and are handled dynamically.
 */
export type PageKey = "home" | "services" | "about" | "spraying" | "seeding" | "shading" | "blog" | "privacy";

/**
 * Localized path segment(s) for each page, per language.
 * The BG segments are the *canonical* folder names under src/app/[lang]/... .
 * The EN segments are URL-facing only — middleware rewrites them to the canonical BG route.
 */
const segments: Record<PageKey, Record<Language, string>> = {
  home: { bg: "", en: "" },
  services: { bg: "uslugi", en: "services" },
  about: { bg: "za-nas", en: "about" },
  spraying: { bg: "uslugi/pruskane", en: "services/spraying" },
  seeding: { bg: "uslugi/zasyavane", en: "services/seeding" },
  shading: { bg: "uslugi/zasenchvane", en: "services/shading" },
  blog: { bg: "blog", en: "blog" },
  privacy: { bg: "privacy-policy", en: "privacy-policy" },
};

/** Static pages to emit in the sitemap, with their change frequency + priority. */
export const STATIC_PAGES: { key: PageKey; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
  { key: "home", changeFrequency: "weekly", priority: 1 },
  { key: "services", changeFrequency: "monthly", priority: 0.8 },
  { key: "spraying", changeFrequency: "monthly", priority: 0.9 },
  { key: "seeding", changeFrequency: "monthly", priority: 0.9 },
  { key: "shading", changeFrequency: "monthly", priority: 0.9 },
  { key: "about", changeFrequency: "monthly", priority: 0.7 },
];

/** Build a localized, language-prefixed path for a known page, e.g. localizedPath("services","en") -> "/en/services". */
export function localizedPath(key: PageKey, lang: Language): string {
  const seg = segments[key][lang];
  return seg ? `/${lang}/${seg}` : `/${lang}`;
}

/**
 * Map an internal (canonical, BG-named) sub-path to the URL-facing slug for `lang`.
 * Used by middleware rewrites and by swapLangInPath. Returns the longest matching
 * page's localized segment, preserving any trailing path (e.g. a blog slug).
 */
function findPageBySegment(subPath: string, fromLang: Language): { key: PageKey; rest: string } | null {
  // Normalize: no leading/trailing slash
  const clean = subPath.replace(/^\/+|\/+$/g, "");

  if (clean === "") return { key: "home", rest: "" };

  // Match the most specific (longest) segment first.
  const keys = (Object.keys(segments) as PageKey[]).filter((k) => segments[k][fromLang] !== "");
  keys.sort((a, b) => segments[b][fromLang].length - segments[a][fromLang].length);

  for (const key of keys) {
    const seg = segments[key][fromLang];
    if (clean === seg) return { key, rest: "" };
    if (clean.startsWith(`${seg}/`)) return { key, rest: clean.slice(seg.length + 1) };
  }
  return null;
}

/** Reverse lookup: which PageKey does this full pathname (e.g. "/en/services") correspond to? */
export function pageKeyFromPath(pathname: string): PageKey | null {
  const { lang, subPath } = splitLangPath(pathname);
  if (!lang) return null;
  const match = findPageBySegment(subPath, lang);
  return match ? match.key : null;
}

/** Split "/en/services/spraying" -> { lang: "en", subPath: "services/spraying" }. */
function splitLangPath(pathname: string): { lang: Language | null; subPath: string } {
  const clean = pathname.replace(/^\/+/, "");
  const [first, ...rest] = clean.split("/");
  if (first === "bg" || first === "en") {
    return { lang: first, subPath: rest.join("/") };
  }
  return { lang: null, subPath: clean };
}

/**
 * Translate the current pathname into its equivalent in `target` language — used by the switcher.
 * For blog article pages (where the slug differs per language and may not have a counterpart),
 * we fall back to the blog listing in the target language to avoid 404s.
 */
export function swapLangInPath(pathname: string, target: Language): string {
  const { lang, subPath } = splitLangPath(pathname);
  const fromLang = lang ?? "bg";

  const match = findPageBySegment(subPath, fromLang);
  if (!match) return `/${target}`;

  // Blog article page: slug has no guaranteed translation -> send to the target blog listing.
  if (match.key === "blog" && match.rest !== "") {
    return localizedPath("blog", target);
  }

  const base = localizedPath(match.key, target);
  return match.rest ? `${base}/${match.rest}` : base;
}

/**
 * Rewrite an EN URL-facing sub-path to its canonical (BG-named) folder route.
 * Returns null if no rewrite is needed (already canonical, or not an EN page).
 * e.g. mapEnSlugToCanonical("services/spraying") -> "uslugi/pruskane"
 */
export function mapEnSlugToCanonical(subPath: string): string | null {
  const match = findPageBySegment(subPath, "en");
  if (!match) return null;
  const canonical = segments[match.key].bg;
  const full = match.rest ? `${canonical}/${match.rest}` : canonical;
  // No rewrite needed if the EN slug already equals the canonical (BG) slug.
  return full === subPath ? null : full;
}

/** Legacy non-prefixed paths -> their /bg/... equivalents, for 301 redirects in middleware. */
export const LEGACY_REDIRECTS: Record<string, string> = {
  "/": "/bg",
  "/uslugi": "/bg/uslugi",
  "/uslugi/pruskane": "/bg/uslugi/pruskane",
  "/uslugi/zasyavane": "/bg/uslugi/zasyavane",
  "/uslugi/zasenchvane": "/bg/uslugi/zasenchvane",
  "/za-nas": "/bg/za-nas",
  "/blog": "/bg/blog",
  "/privacy-policy": "/bg/privacy-policy",
};
