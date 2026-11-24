"use client";

import { useState } from "react";
import {
  AlarmClock,
  AlarmClockOff,
  Info,
  TriangleAlert,
} from "lucide-react";
import type { Announcement } from "@/db/schema";
import { Reveal, SectionHeading } from "@/components/ui";

const SEVERITY: Record<
  string,
  { label: string; className: string; icon: typeof Info }
> = {
  critique: {
    label: "Communiqué prioritaire",
    className: "border-flag-red/50 bg-flag-red/5 text-flag-red",
    icon: AlarmClockOff,
  },
  alerte: {
    label: "Alerte de démonstration",
    className: "border-gold-500/50 bg-gold-500/10 text-gold-700 dark:text-gold-300",
    icon: TriangleAlert,
  },
  info: {
    label: "Information",
    className: "border-navy-500/40 bg-navy-700/10 text-navy-700 dark:text-navy-300",
    icon: Info,
  },
};

export function News({ news }: { news: Announcement[] }) {
  const [expanded, setExpanded] = useState<number | null>(news[0]?.id ?? null);

  return (
    <section
      id="actualites"
      className="scroll-mt-24 bg-tactical-50 py-10 sm:py-14 dark:bg-tactical-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Données fictives"
          title="Annonces et communiqués"
          intro="Exemple de rubrique pour présenter les annonces et communiqués."
        />

        {news.length === 0 && <p className="mt-4 text-slate-600 dark:text-slate-300">Aucun communiqué à afficher.</p>}
        <div className="mt-4 space-y-3">
          {news.map((item, index) => {
            const severity = SEVERITY[item.severity] ?? SEVERITY.info;
            const isOpen = expanded === item.id;
            const SeverityIcon = severity.icon;
            return (
              <Reveal key={item.id} delay={index * 0.03}>
                <article id={`annonce-${item.slug}`} className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-tactical-900/70">
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    className="w-full px-4 py-3.5 text-start"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-wide ${severity.className}`}
                      >
                        <SeverityIcon className="h-3.5 w-3.5" strokeWidth={2.2} />
                        {item.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[0.65rem] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        <AlarmClock className="h-3.5 w-3.5" strokeWidth={2.1} />
                        {item.publishedAt}
                      </span>
                    </div>
                    <h3 className="mt-2 text-[1rem] font-black leading-tight text-army-900 sm:text-lg dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[0.85rem] leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.summary}
                    </p>
                  </button>

                  {isOpen ? (
                    <div className="border-t border-slate-200 px-4 py-3 dark:border-white/10">
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Cet exemple sert à illustrer la présentation des communiqués.
                      </p>
                    </div>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
