"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Lang = "fr" | "ar";

type Dict = Record<string, { fr: string; ar: string }>;

const DICT: Dict = {
  demo: {
    fr: "Démonstration commerciale — Proposition de portail institutionnel soumise à validation de la CARMI.",
    ar: "عرض تجاري تجريبي — مقترح بوابة مؤسسية يخضع لاعتماد صندوق تقاعد العسكريين.",
  },
  credit_prefix: { fr: "Une proposition de transformation numérique développée par", ar: "مقترح للتحول الرقمي من تطوير" },
  ribbon: {
    fr: "RÉPUBLIQUE DU TCHAD | C.A.R.M.I.",
    ar: "جمهورية تشاد | صندوق تقاعد العسكريين",
  },
  nav_services: { fr: "Prestations", ar: "الخدمات" },
  nav_calendar: { fr: "Calendrier", ar: "التقويم" },
  nav_agencies: { fr: "Agences", ar: "الوكالات" },
  nav_calculator: { fr: "Simulateur", ar: "المحاكي" },
  nav_news: { fr: "Actualités", ar: "الأخبار" },
  nav_command: { fr: "La CARMI", ar: "عن الصندوق" },
  nav_contact: { fr: "Proposition", ar: "المقترح" },
  nav_resources: { fr: "Ressources", ar: "الموارد" },
  nav_tracking: { fr: "Suivi de dossier", ar: "متابعة الملف" },
  menu: { fr: "Menu", ar: "القائمة" },
  call: { fr: "Appeler", ar: "اتصال" },
  helpdesk: { fr: "Assistance WhatsApp", ar: "دعم واتساب" },
  hero_title: {
    fr: "Honneur, Dignité et Protection pour les Combattants de la Nation.",
    ar: "شرف وكرامة وحماية ل مقاتلي الأمة.",
  },
  hero_sub: {
    fr: "Découvrez une proposition de portail pour la Caisse de Retraite des Militaires. Les parcours sont illustrés par des données fictives.",
    ar: "اكتشف مقترح بوابة لصندوق تقاعد العسكريين. تعرض النسخة التجريبية أمثلة ببيانات افتراضية.",
  },
  cta_calendar: { fr: "Calendrier des Solde & Paiements", ar: "تقويم الرواتب" },
  cta_bank: { fr: "Guide de Bancarisation Militaires", ar: "دليل الخدمات المصرفية" },
  cta_share: { fr: "Partager les Infos Officielles", ar: "مشاركة المعلومات الرسمية" },
  share_title: { fr: "Partager l'annonce", ar: "مشاركة الإعلان" },
  share_page: { fr: "Partager le portail", ar: "مشاركة البوابة" },
  theme_toggle: { fr: "Mode tactique", ar: "الوضع الليلي" },
  lang_toggle: { fr: "العربية", ar: "Français" },
  close: { fr: "Fermer", ar: "إغلاق" },
  emergency: { fr: "Urgence pensionnés", ar: "طوارئ المتقاعدين" },
};

type LangContextValue = {
  lang: Lang;
  dir: "ltr" | "rtl";
  theme: "light" | "dark";
  t: (key: keyof typeof DICT | string, fallback?: string) => string;
  toggleLang: () => void;
  toggleTheme: () => void;
};

const LangContext = createContext<LangContextValue | null>(null);

type Theme = LangContextValue["theme"];

let languageOverride: Lang | undefined;
let themeOverride: Theme | undefined;

function readPreference(key: string) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writePreference(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
    if (key === "carmi-lang") languageOverride = undefined;
    if (key === "carmi-theme") themeOverride = undefined;
  } catch {
    // A session override remains available when storage is blocked.
  }
  window.dispatchEvent(new Event("carmi-preferences"));
}

function subscribeToPreferences(onChange: () => void) {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener("carmi-preferences", onChange);
  window.addEventListener("storage", onChange);
  systemTheme.addEventListener("change", onChange);
  return () => {
    window.removeEventListener("carmi-preferences", onChange);
    window.removeEventListener("storage", onChange);
    systemTheme.removeEventListener("change", onChange);
  };
}

function getLanguage(): Lang {
  return languageOverride ?? (readPreference("carmi-lang") === "ar" ? "ar" : "fr");
}

function getTheme(): Theme {
  if (themeOverride) return themeOverride;
  const stored = readPreference("carmi-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function toggleLang() {
  languageOverride = getLanguage() === "fr" ? "ar" : "fr";
  writePreference("carmi-lang", languageOverride);
}

function toggleTheme() {
  themeOverride = getTheme() === "light" ? "dark" : "light";
  writePreference("carmi-theme", themeOverride);
}

export function PortalProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribeToPreferences, getLanguage, () => "fr" as const);
  const theme = useSyncExternalStore(subscribeToPreferences, getTheme, () => "light" as const);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang, theme]);

  const t = useCallback(
    (key: keyof typeof DICT | string, fallback?: string) => {
      const entry = DICT[key as keyof typeof DICT];
      if (!entry) return fallback ?? String(key);
      return entry[lang];
    },
    [lang],
  );

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      theme,
      t,
      toggleLang,
      toggleTheme,
    }),
    [lang, t, theme],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function usePortal(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    return {
      lang: "fr",
      dir: "ltr",
      theme: "light",
      t: (_key, fallback) => fallback ?? String(_key),
      toggleLang: () => undefined,
      toggleTheme: () => undefined,
    };
  }
  return ctx;
}
