"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Banknote,
  Building2,
  CalendarDays,
  ChevronDown,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Truck,
  Users,
} from "lucide-react";
import type { MilitaryRegion, PayoutCycle, RegionalAgency } from "@/db/schema";
import { formatXaf, PAYOUT_STATUS } from "@/lib/institution";
import { Reveal, SectionHeading, StatusChip } from "@/components/ui";

type PayoutsProps = {
  period: string;
  regions: MilitaryRegion[];
  payouts: PayoutCycle[];
};

export function Payouts({ period, regions, payouts }: PayoutsProps) {
  const [region, setRegion] = useState<string>("ALL");
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<PayoutCycle[]>(payouts);

  const filtered = useMemo(
    () => (region === "ALL" ? rows : rows.filter((r) => r.regionCode === region)),
    [region, rows],
  );

  const totals = useMemo(
    () => ({
      pensioners: filtered.reduce((acc, r) => acc + r.pensioners, 0),
      amount: filtered.reduce((acc, r) => acc + r.amountXaf, 0),
      open: filtered.filter((r) => r.status === "en_cours").length,
    }),
    [filtered],
  );

  async function selectRegion(code: string) {
    setRegion(code);
    setLoading(true);
    try {
      const res = await fetch(
        `/api/payouts${code === "ALL" ? "" : `?region=${encodeURIComponent(code)}`}`,
        { cache: "no-store" },
      );
      const data = (await res.json()) as { payouts: PayoutCycle[] };
      setRows(data.payouts ?? []);
    } catch {
      setRows(payouts);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="calendrier"
      className="scroll-mt-24 border-y border-slate-200 bg-white py-10 sm:py-14 dark:border-white/10 dark:bg-tactical-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Calendrier & Paiements"
          title={`Statut en temps réel du paiement des soldes — ${period}`}
          intro="Filtrez par région militaire pour connaître l'ouverture des guichets, la date de virement, l'unité mobile de paie et le nombre de pensionnés servis."
        />

        <div className="no-scrollbar -mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          <RegionChip
            active={region === "ALL"}
            onClick={() => selectRegion("ALL")}
            label="Toutes les régions"
          />
          {regions.map((r) => (
            <RegionChip
              key={r.code}
              active={region === r.code}
              onClick={() => selectRegion(r.code)}
              label={`${r.code} · ${r.city}`}
            />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="rounded-xl border border-slate-200 bg-tactical-50 p-3 text-center dark:border-white/10 dark:bg-white/5">
            <p className="text-base font-black text-army-900 sm:text-xl dark:text-white">
              {new Intl.NumberFormat("fr-FR").format(totals.pensioners)}
            </p>
            <p className="mt-0.5 text-[0.62rem] font-semibold uppercase leading-tight tracking-wide text-slate-500 dark:text-slate-400">
              Pensionnés concernés
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-tactical-50 p-3 text-center dark:border-white/10 dark:bg-white/5">
            <p className="text-base font-black text-army-900 sm:text-xl dark:text-white">
              {formatXaf(totals.amount).replace(" FCFA", "")}
            </p>
            <p className="mt-0.5 text-[0.62rem] font-semibold uppercase leading-tight tracking-wide text-slate-500 dark:text-slate-400">
              FCFA à décaisser
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-tactical-50 p-3 text-center dark:border-white/10 dark:bg-white/5">
            <p className="text-base font-black text-emerald-600 sm:text-xl dark:text-emerald-400">
              {totals.open}
            </p>
            <p className="mt-0.5 text-[0.62rem] font-semibold uppercase leading-tight tracking-wide text-slate-500 dark:text-slate-400">
              Guichets ouverts
            </p>
          </div>
        </div>

        <div
          className={`mt-4 grid gap-3 transition-opacity sm:grid-cols-2 lg:grid-cols-3 ${loading ? "opacity-50" : ""}`}
          aria-busy={loading}
        >
          {filtered.map((cycle, index) => {
            const status = PAYOUT_STATUS[cycle.status] ?? PAYOUT_STATUS.planifie;
            const regionMeta = regions.find((r) => r.code === cycle.regionCode);
            return (
              <Reveal key={`${cycle.regionCode}-${cycle.id}`} delay={index * 0.03}>
                <article className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-tactical-950/60">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[0.7rem] font-bold uppercase tracking-wide text-gold-600 dark:text-gold-300">
                        {regionMeta?.label ?? cycle.regionCode}
                      </p>
                      <h3 className="mt-0.5 text-lg font-black leading-tight text-army-900 dark:text-white">
                        {regionMeta?.city ?? cycle.regionCode}
                      </h3>
                      <p className="mt-0.5 inline-flex items-center gap-1 text-[0.68rem] text-slate-500 dark:text-slate-400">
                        <MapPin className="h-3.5 w-3.5" strokeWidth={2.1} />
                        {regionMeta?.zone ?? "—"}
                      </p>
                    </div>
                    <StatusChip {...status} />
                  </div>

                  <dl className="space-y-1.5 text-[0.8rem]">
                    <div className="flex items-center justify-between gap-2 border-t border-dashed border-slate-200 pt-2 dark:border-white/10">
                      <dt className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                        <CalendarDays className="h-4 w-4" strokeWidth={2.1} />
                        Guichets ouverts
                      </dt>
                      <dd className="font-bold text-army-900 dark:text-white">
                        {cycle.counterOpenFrom}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <dt className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                        <Banknote className="h-4 w-4" strokeWidth={2.1} />
                        Virement solde
                      </dt>
                      <dd className="font-bold text-emerald-600 dark:text-emerald-400">
                        {cycle.payDate}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <dt className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                        <Users className="h-4 w-4" strokeWidth={2.1} />
                        Pensionnés
                      </dt>
                      <dd className="font-bold text-army-900 dark:text-white">
                        {new Intl.NumberFormat("fr-FR").format(cycle.pensioners)}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <dt className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                        <Truck className="h-4 w-4" strokeWidth={2.1} />
                        Canaux
                      </dt>
                      <dd className="text-end font-bold text-army-900 dark:text-white">
                        {cycle.channel}
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-auto rounded-lg bg-army-900/5 px-3 py-2 text-[0.75rem] leading-snug text-slate-700 dark:bg-white/5 dark:text-slate-300">
                    {cycle.note}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RegionChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`tap-target shrink-0 rounded-xl border px-3 text-[0.75rem] font-bold transition ${
        active
          ? "border-gold-500 bg-army-900 text-gold-300"
          : "border-slate-200 bg-white text-slate-600 hover:border-gold-500/60 dark:border-white/10 dark:bg-tactical-950 dark:text-slate-300"
      }`}
    >
      {label}
    </button>
  );
}

export function Agencies({ agencies }: { agencies: RegionalAgency[] }) {
  const [open, setOpen] = useState<number | null>(agencies[0]?.id ?? null);

  return (
    <section
      id="agences"
      className="scroll-mt-24 bg-tactical-50 py-10 sm:py-14 dark:bg-tactical-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Agences régionales"
          title="Guichets CARMI et unités mobiles de paie"
          intro="Coordonnées des antennes régionales, horaires d'ouverture des guichets et passages des colonnes mobiles pour les garnisons éloignées."
        />

        <Reveal className="mt-5">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
            <div className="relative aspect-[16/9] w-full bg-army-900 sm:aspect-[21/9]">
              <Image
                src="/images/military-payout.jpg"
                alt="Paiement des soldes de retraite au guichet mobile d'une région militaire"
                fill
                sizes="(max-width: 1024px) 100vw, 1152px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-army-950/95 via-army-950/40 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-[0.78rem] font-semibold leading-snug text-white sm:text-sm">
                Unité mobile de paie et guichet bancaire — les pensionnés sont servis par
                virement puis retrait contrôlé sur présentation de la carte biométrique.
              </figcaption>
              <div className="flag-lisere absolute inset-x-0 top-0 h-1.5" aria-hidden="true" />
            </div>
          </figure>
        </Reveal>

        <div className="mt-6 space-y-2">
          {agencies.map((agency) => {
            const isOpen = open === agency.id;
            return (
              <div
                key={agency.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-tactical-900/70"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : agency.id)}
                  aria-expanded={isOpen}
                  className="tap-target flex w-full items-center justify-between gap-3 px-4 py-3 text-start"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-army-900 text-[0.68rem] font-black text-gold-400">
                      {agency.regionCode.replace("RM", "RM")}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[0.92rem] font-black leading-tight text-army-900 dark:text-white">
                        {agency.name}
                      </span>
                      <span className="mt-0.5 block truncate text-[0.7rem] font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {agency.city}
                      </span>
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    strokeWidth={2.2}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 border-t border-slate-200 px-4 py-3 dark:border-white/10">
                        <p className="inline-flex items-start gap-2 text-[0.8rem] leading-snug text-slate-700 dark:text-slate-300">
                          <Truck className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" strokeWidth={2.1} />
                          {agency.mobileUnit}
                        </p>
                        <p className="inline-flex items-start gap-2 text-[0.8rem] leading-snug text-slate-700 dark:text-slate-300">
                          <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" strokeWidth={2.1} />
                          Banques partenaires : {agency.bankPartners}
                        </p>
                        <p className="inline-flex items-start gap-2 text-[0.8rem] leading-snug text-slate-700 dark:text-slate-300">
                          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" strokeWidth={2.1} />
                          {agency.hours}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <a
                            href={`tel:${agency.phone.replace(/\s/g, "")}`}
                            className="tap-target inline-flex items-center gap-2 rounded-xl bg-army-900 px-4 text-xs font-bold text-white"
                          >
                            <Phone className="h-4 w-4" strokeWidth={2.2} />
                            {agency.phone}
                          </a>
                          <a
                            href={`https://wa.me/${agency.whatsapp.replace(/\s/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tap-target inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 text-xs font-bold text-white"
                          >
                            <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
                            WhatsApp guichet
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
