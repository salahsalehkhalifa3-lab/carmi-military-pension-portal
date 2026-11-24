"use client";

import { CalendarDays, CreditCard, ShieldCheck } from "lucide-react";
import { usePortal } from "@/lib/i18n";

export function Hero() {
  const { t } = usePortal();

  return (
    <section className="relative isolate overflow-hidden bg-army-950 text-white">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-army-950/95 via-army-900/90 to-army-950"
        aria-hidden="true"
      />
      <div className="sovereign-grid absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 sm:pb-12 sm:pt-12">
        <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-army-950/70 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-gold-300">
          <ShieldCheck className="h-4 w-4" strokeWidth={2.2} />
          République du Tchad
        </p>

        <h1 className="mt-4 text-balance text-[1.75rem] font-black leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
          {t("hero_title")}
        </h1>

        <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-slate-200 sm:text-lg">
          {t("hero_sub")}
        </p>

        <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
          <a
            href="#calendrier"
            className="tap-target flex items-center gap-3 rounded-xl bg-gold-500 px-4 py-3 text-start text-sm font-black leading-tight text-army-950 transition hover:bg-gold-400 active:scale-[0.99]"
          >
            <CalendarDays className="h-6 w-6 shrink-0" strokeWidth={2.2} />
            <span>
              {t("cta_calendar")}
            </span>
          </a>
          <a
            href="#prestations-bancarisation"
            className="tap-target flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3 text-start text-sm font-black leading-tight text-army-900 transition hover:bg-white active:scale-[0.99]"
          >
            <CreditCard className="h-6 w-6 shrink-0" strokeWidth={2.2} />
            <span>
              {t("cta_bank")}
            </span>
          </a>
        </div>

        <div className="flag-lisere mt-6 h-1 w-24 rounded-full" aria-hidden="true" />
      </div>
    </section>
  );
}