"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Landmark,
  Languages,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { SITE_SHORT } from "@/lib/institution";
import { useDialogKeyboard } from "@/lib/use-dialog-keyboard";
import { Navigation } from "@/components/portal/Navigation";
import { usePortal } from "@/lib/i18n";

export function SiteHeader() {
  const { t, lang, toggleLang, theme, toggleTheme } = usePortal();
  const [open, setOpen] = useState(false);
  const closeMenu = useCallback(() => setOpen(false), []);
  const menuRef = useDialogKeyboard(open, closeMenu);

  useEffect(() => {
    if (!open) return;

    const desktop = window.matchMedia("(min-width: 80rem)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 shadow-md shadow-black/5">
        <div className="flag-lisere h-1.5 w-full" aria-hidden="true" />
        <div className="bg-army-950 text-center text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gold-300 sm:text-[0.7rem]">
          <span className="px-2 py-1.5 block leading-tight">{t("ribbon")}</span>
        </div>

        <p className="bg-gold-100 px-3 py-2 text-center text-xs font-semibold leading-snug text-army-950">{t("demo")}</p>
        <div className="border-b border-white/10 bg-army-900/98 backdrop-blur">
          <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-2 px-3 py-2 sm:min-h-[4.5rem] sm:px-5 2xl:max-w-[90rem]">
            <Link
              href="/"
              className="flex min-w-0 flex-1 items-center gap-2.5"
            >
              <Image
                src="/image/logocarmi.jpg"
                alt=""
                width={56}
                height={56}
                priority
                className="h-11 w-11 shrink-0 rounded-lg bg-white object-contain p-0.5 sm:h-12 sm:w-12"
              />
              <span className="min-w-0">
                <span className="block whitespace-nowrap text-base font-black leading-none tracking-tight text-white sm:text-xl">
                  C.A.R.M.I.
                </span>
                <span className="mt-1 block text-[0.62rem] font-medium uppercase leading-tight tracking-[0.09em] text-gold-300 sm:text-[0.7rem]">
                  Caisse de Retraite des Militaires
                </span>
              </span>
            </Link>

            <Navigation />

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={toggleLang}
                className="tap-target inline-flex items-center gap-1.5 rounded-xl border border-white/20 px-2 text-xs font-bold text-white transition hover:bg-white/10"
                aria-label={lang === "fr" ? "التبديل إلى العربية" : "Switch to French"}
              >
                <Languages className="h-4 w-4" strokeWidth={2} />
                <span className="hidden sm:inline">{t("lang_toggle")}</span>
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
                className="tap-target inline-flex items-center justify-center rounded-xl bg-white/10 px-3 text-white transition hover:bg-white/20 xl:hidden"
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
            className="fixed inset-0 z-[60] xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <button
              type="button"
              aria-label={t("close")}
              tabIndex={-1}
              className="absolute inset-0 bg-army-950/70 backdrop-blur-sm"
              onClick={closeMenu}
            />
            <motion.div
              ref={menuRef}
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
                  onClick={closeMenu}
                  className="tap-target inline-flex items-center justify-center rounded-xl border border-white/20 px-3"
                  aria-label={t("close")}
                >
                  <X className="h-6 w-6" strokeWidth={2.1} />
                </button>
              </div>

              <Navigation mobile onNavigate={closeMenu} />

            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
