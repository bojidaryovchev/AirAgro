"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { useEffect, useState } from "react";

type ConsentState = {
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "airagro_cookie_consent";

function applyConsent(consent: ConsentState) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
  });
}

function loadSavedConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

function saveConsent(consent: ConsentState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
}

export default function CookieConsent() {
  const { t, language } = useLanguage();
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return loadSavedConsent() === null;
  });
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = loadSavedConsent();
    if (saved) {
      applyConsent(saved);
    }
  }, []);

  function acceptAll() {
    const c: ConsentState = { analytics: true, marketing: true };
    saveConsent(c);
    applyConsent(c);
    setVisible(false);
  }

  function rejectAll() {
    const c: ConsentState = { analytics: false, marketing: false };
    saveConsent(c);
    applyConsent(c);
    setVisible(false);
  }

  function saveCustom() {
    saveConsent(consent);
    applyConsent(consent);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t("cookies.banner.title")}
      className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white shadow-2xl md:right-auto md:bottom-4 md:left-4 md:max-w-md md:rounded-2xl md:border"
    >
      <div className="p-5">
        <h2 className="mb-2 text-base font-semibold text-gray-900">{t("cookies.banner.title")}</h2>
        <p className="mb-4 text-sm text-gray-600">
          {t("cookies.banner.description")}{" "}
          <Link href={`/${language}/privacy-policy`} className="text-primary underline underline-offset-2">
            {t("cookies.privacyPolicy")}
          </Link>
          .
        </p>

        {showDetails && (
          <div className="mb-4 space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
            {/* Necessary */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-gray-900">{t("cookies.necessary.title")}</p>
                <p className="text-xs text-gray-500">{t("cookies.necessary.description")}</p>
              </div>
              <span className="text-primary mt-0.5 shrink-0 text-xs font-medium">{t("cookies.alwaysOn")}</span>
            </div>

            {/* Analytics */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-gray-900">{t("cookies.analytics.title")}</p>
                <p className="text-xs text-gray-500">{t("cookies.analytics.description")}</p>
              </div>
              <button
                role="switch"
                aria-checked={consent.analytics}
                onClick={() => setConsent((prev) => ({ ...prev, analytics: !prev.analytics }))}
                className={`focus-visible:ring-primary relative mt-0.5 h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors focus-visible:ring-2 focus-visible:outline-none ${
                  consent.analytics ? "bg-primary" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${
                    consent.analytics ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Marketing */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-gray-900">{t("cookies.marketing.title")}</p>
                <p className="text-xs text-gray-500">{t("cookies.marketing.description")}</p>
              </div>
              <button
                role="switch"
                aria-checked={consent.marketing}
                onClick={() => setConsent((prev) => ({ ...prev, marketing: !prev.marketing }))}
                className={`focus-visible:ring-primary relative mt-0.5 h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors focus-visible:ring-2 focus-visible:outline-none ${
                  consent.marketing ? "bg-primary" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${
                    consent.marketing ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <button
            onClick={acceptAll}
            className="bg-primary hover:bg-primary/90 flex-1 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
          >
            {t("cookies.acceptAll")}
          </button>
          <button
            onClick={rejectAll}
            className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            {t("cookies.rejectAll")}
          </button>
          {showDetails ? (
            <button
              onClick={saveCustom}
              className="border-primary text-primary hover:bg-primary/5 w-full rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
            >
              {t("cookies.save")}
            </button>
          ) : (
            <button
              onClick={() => setShowDetails(true)}
              className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
            >
              {t("cookies.customize")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
