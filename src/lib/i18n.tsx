"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "fr" | "ar";

type Dict = Record<string, { fr: string; ar: string }>;

const DICT: Dict = {
  ribbon: {
    fr: "RÉPUBLIQUE DU TCHAD • MINISTÈRE DES ARMÉES | C.A.R.M.I.",
    ar: "جمهورية تشاد • وزارة القوات المسلحة | صندوق تقاعد العسكريين",
  },
  nav_services: { fr: "Prestations", ar: "الخدمات" },
  nav_calendar: { fr: "Calendrier", ar: "التقويم" },
  nav_agencies: { fr: "Agences", ar: "الوكالات" },
  nav_calculator: { fr: "Simulateur", ar: "المحاكي" },
  nav_news: { fr: "Actualités", ar: "الأخبار" },
  nav_command: { fr: "Commandement", ar: "القيادة" },
  nav_contact: { fr: "Contact", ar: "اتصل بنا" },
  nav_tracking: { fr: "Suivi de dossier", ar: "متابعة الملف" },
  menu: { fr: "Menu", ar: "القائمة" },
  call: { fr: "Appeler", ar: "اتصال" },
  helpdesk: { fr: "Assistance WhatsApp", ar: "دعم واتساب" },
  hero_title: {
    fr: "Honneur, Dignité et Protection pour les Combattants de la Nation.",
    ar: "شرف وكرامة وحماية ل مقاتلي الأمة.",
  },
  hero_sub: {
    fr: "La Caisse de Retraite des Militaires (CARMI) garantit la gestion moderne, la bancarisation et le paiement sécurisé des soldes de retraite de nos héros nationaux.",
    ar: "يضمن صندوق تقاعد العسكريين الإدارة الحديثة والخدمات المصرفية والدفع الآمن لمعاشات أبطالنا الوطنيين.",
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

export function PortalProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedLang = window.localStorage.getItem("carmi-lang");
    const storedTheme = window.localStorage.getItem("carmi-theme");
    if (storedLang === "ar" || storedLang === "fr") setLang(storedLang);
    if (storedTheme === "dark" || storedTheme === "light") setTheme(storedTheme);
    else if (
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem("carmi-theme", theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("carmi-lang", lang);
  }, [lang]);

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
      toggleLang: () => setLang((prev) => (prev === "fr" ? "ar" : "fr")),
      toggleTheme: () => setTheme((prev) => (prev === "light" ? "dark" : "light")),
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
