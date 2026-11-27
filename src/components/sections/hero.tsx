"use client";

import { CalendarDays, CreditCard, Share2, ShieldCheck } from "lucide-react";
import { usePortal } from "@/lib/i18n";
import { useState } from "react";
import { suspended } from "@/lib/suspended";
import { CONTACT } from "@/lib/institution";

const STATS = [
  { value: "52 000+", label: "Pensionnés & ayants droit servis" },
  { value: "8", label: "Régions militaires couvertes" },
  { value: "23", label: "Provinces — recensement biométrique" },
  { value: "5", label: "Banques partenaires (BCC, UBA, Ecobank, CBT…)" },
];

export function Hero({ period, pensioners }: { period: string; pensioners: number }) {
  const { t } = usePortal();

  const { lang } = usePortal();
  const [shareNotice, setShareNotice] = useState(false);
  const shareNative = () => setShareNotice(!shareNotice);

  return (
    <section className="relative isolate overflow-hidden bg-army-950 text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-army-900 to-army-950" />
      {shareNotice && <p role="status" className="fixed inset-x-4 bottom-24 z-[100] mx-auto w-fit rounded-lg bg-army-950 p-2 text-xs text-white">{suspended[lang]}</p>}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-army-950/95 via-army-900/90 to-army-950"
        aria-hidden="true"
      />
      <div className="sovereign-grid absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 sm:pb-12 sm:pt-12">
        <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-army-950/70 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-gold-300">
          <ShieldCheck className="h-4 w-4" strokeWidth={2.2} />
          Institution souveraine — {CONTACT.ministry}
        </p>

        <h1 className="mt-4 text-balance text-[1.75rem] font-black leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
          {t("hero_title")}
        </h1>

        <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-slate-200 sm:text-lg">
          {t("hero_sub")}
        </p>

        <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
          <a
            href="#calendrier"
            className="tap-target flex items-center gap-3 rounded-xl bg-gold-500 px-4 py-3 text-start text-sm font-black leading-tight text-army-950 transition hover:bg-gold-400 active:scale-[0.99]"
          >
            <CalendarDays className="h-6 w-6 shrink-0" strokeWidth={2.2} />
            <span>
              {t("cta_calendar")}
              <span className="mt-0.5 block text-[0.68rem] font-semibold uppercase tracking-wide opacity-80">
                Cycle {period}
              </span>
            </span>
          </a>
          <a
            href="#prestations-bancarisation"
            className="tap-target flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3 text-start text-sm font-black leading-tight text-army-900 transition hover:bg-white active:scale-[0.99]"
          >
            <CreditCard className="h-6 w-6 shrink-0" strokeWidth={2.2} />
            <span>
              {t("cta_bank")}
              <span className="mt-0.5 block text-[0.68rem] font-semibold uppercase tracking-wide opacity-70">
                BCC · UBA · Ecobank · CBT
              </span>
            </span>
          </a>
          <button
            type="button"
            onClick={shareNative}
            className="tap-target flex items-center gap-3 rounded-xl border border-gold-500/50 bg-army-900/80 px-4 py-3 text-start text-sm font-black leading-tight text-gold-300 transition hover:bg-army-900 active:scale-[0.99]"
          >
            <Share2 className="h-6 w-6 shrink-0" strokeWidth={2.2} />
            <span>
              {t("cta_share")}
              <span className="mt-0.5 block text-[0.68rem] font-semibold uppercase tracking-wide opacity-80">
                WhatsApp · Facebook · Telegram · X
              </span>
            </span>
          </button>
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur-sm"
            >
              <dt className="text-lg font-black text-gold-400 sm:text-xl">
                {index === 0 && pensioners > 0
                  ? `${new Intl.NumberFormat("fr-FR").format(pensioners)}`
                  : stat.value}
              </dt>
              <dd className="mt-0.5 text-[0.66rem] font-medium leading-tight text-slate-300 sm:text-xs">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flag-lisere mt-6 h-1 w-24 rounded-full" aria-hidden="true" />
      </div>
    </section>
  );
}