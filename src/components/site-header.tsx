"use client";

import { SuspendedLink } from "@/components/suspended-link";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Landmark,
  Languages,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  ShieldCheck,
  Sun,
  X,
} from "lucide-react";
import { CONTACT, NAV_LINKS, SITE_SHORT } from "@/lib/institution";
import { usePortal } from "@/lib/i18n";

export function SiteHeader() {
  const { t, lang, toggleLang, theme, toggleTheme } = usePortal();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 shadow-md shadow-black/5">
        <div className="flag-lisere h-1.5 w-full" aria-hidden="true" />
        <div className="bg-army-950 text-center text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gold-300 sm:text-[0.7rem]">
          <span className="px-2 py-1.5 block leading-tight">{t("ribbon")}</span>
        </div>

        <div className="border-b border-white/10 bg-army-900/98 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-3 sm:h-[4.5rem] sm:px-5">
            <Link
              href="/"
              className="flex min-w-0 flex-1 items-center gap-2.5"
              aria-label={`${SITE_SHORT} — Accueil`}
            >
              <Image
                src="/image/logocarmi.jpg"
                alt="Sceau officiel de la Caisse de Retraite des Militaires"
                width={56}
                height={56}
                priority
                className="h-11 w-11 shrink-0 rounded-lg bg-white object-contain p-0.5 sm:h-12 sm:w-12"
              />
              <span className="min-w-0">
                <span className="block truncate text-base font-black leading-none tracking-tight text-white sm:text-xl">
                  C.A.R.M.I.
                </span>
                <span className="mt-1 block truncate text-[0.62rem] font-medium uppercase leading-tight tracking-[0.09em] text-gold-300 sm:text-[0.7rem]">
                  Caisse de Retraite des Militaires
                </span>
              </span>
            </Link>

            <nav
              aria-label="Navigation principale"
              className="hidden items-center gap-1 lg:flex"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-gold-300"
                >
                  {t(link.key, link.label)}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1.5">
              <SuspendedLink
                className="tap-target inline-flex items-center justify-center rounded-xl bg-gold-500 px-3 text-army-950 transition hover:bg-gold-400 lg:hidden"
                aria-label={`Appeler la CARMI au ${CONTACT.phoneDisplay}`}
              >
                <Phone className="h-5 w-5" strokeWidth={2.1} />
              </SuspendedLink>
              <SuspendedLink
                className="tap-target hidden items-center gap-2 rounded-xl bg-emerald-600 px-3 text-sm font-bold text-white transition hover:bg-emerald-500 sm:inline-flex"
                aria-label="Assistance WhatsApp CARMI"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2.1} />
                <span className="hidden xl:inline">{t("helpdesk")}</span>
              </SuspendedLink>
              <button
                type="button"
                onClick={toggleLang}
                className="tap-target inline-flex items-center gap-1.5 rounded-xl border border-white/20 px-3 text-xs font-bold text-white transition hover:bg-white/10"
                aria-label={lang === "fr" ? "التبديل إلى العربية" : "Switch to French"}
              >
                <Languages className="h-4 w-4" strokeWidth={2} />
                {t("lang_toggle")}
              </button>
              <button
                type="button"
                onClick={toggleTheme}
                className="tap-target inline-flex items-center justify-center rounded-xl border border-white/20 px-3 text-white transition hover:bg-white/10"
                aria-label={t("theme_toggle")}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" strokeWidth={2} />
                ) : (
                  <Moon className="h-5 w-5" strokeWidth={2} />
                )}
              </button>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="tap-target inline-flex items-center justify-center rounded-xl bg-white/10 px-3 text-white transition hover:bg-white/20 lg:hidden"
                aria-label={t("menu")}
                aria-expanded={open}
              >
                <Menu className="h-6 w-6" strokeWidth={2.1} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <button
              type="button"
              aria-label={t("close")}
              className="absolute inset-0 bg-army-950/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="absolute end-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-army-900 text-white shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label={t("menu")}
            >
              <div className="flag-lisere h-1.5 w-full" aria-hidden="true" />
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-gold-300">
                  <Landmark className="h-5 w-5" strokeWidth={2} />
                  {SITE_SHORT}
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="tap-target inline-flex items-center justify-center rounded-xl border border-white/20 px-3"
                  aria-label={t("close")}
                >
                  <X className="h-6 w-6" strokeWidth={2.1} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 p-3" aria-label="Menu mobile">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="tap-target flex items-center justify-between rounded-xl px-4 text-base font-bold text-slate-100 transition hover:bg-white/10 hover:text-gold-300"
                  >
                    {t(link.key, link.label)}
                    <ShieldCheck className="h-4 w-4 text-gold-500" strokeWidth={2} />
                  </Link>
                ))}
              </nav>

              <div className="mt-auto space-y-2 border-t border-white/10 p-3">
                <SuspendedLink
                  className="tap-target flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-4 text-sm font-black text-army-950"
                >
                  <Phone className="h-5 w-5" strokeWidth={2.1} />
                  {CONTACT.phoneDisplay}
                </SuspendedLink>
                <SuspendedLink
                  className="tap-target flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 text-sm font-black text-white"
                >
                  <MessageCircle className="h-5 w-5" strokeWidth={2.1} />
                  Assistance WhatsApp
                </SuspendedLink>
                <SuspendedLink
                  className="tap-target flex items-center justify-center gap-2 rounded-xl border border-gold-500/50 px-4 text-xs font-bold text-gold-300"
                >
                  Canal officiel WhatsApp CARMI
                </SuspendedLink>
                <p className="pt-1 text-center text-[0.65rem] leading-relaxed text-slate-400">
                  {CONTACT.address}
                </p>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
