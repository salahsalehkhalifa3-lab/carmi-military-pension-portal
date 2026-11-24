"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/lib/institution";
import { SectionHeading } from "@/components/ui";

export function Command() {
  return (
    <section
      id="commandement"
      className="scroll-mt-24 border-y border-slate-200 bg-white py-10 sm:py-14 dark:border-white/10 dark:bg-tactical-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Institution"
          title="Direction générale de la CARMI"
          intro="La Caisse gère les régimes de pensions militaires pour les affiliés et leurs ayants droit, notamment les pensions de retraite, d’invalidité et de réversion."
        />
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-tactical-50 py-10 sm:py-14 dark:bg-tactical-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Assistance aux pensionnés"
          title="Questions fréquentes des vétérans et ayants droit"
          align="center"
        />
        <div className="mt-6 space-y-2">
          {FAQ.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-tactical-900/70"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="tap-target flex w-full items-start justify-between gap-3 px-4 py-3 text-start"
                >
                  <span className="text-[0.9rem] font-black leading-snug text-army-900 dark:text-white">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`mt-0.5 h-5 w-5 shrink-0 text-gold-600 transition-transform dark:text-gold-300 ${isOpen ? "rotate-180" : ""}`}
                    strokeWidth={2.2}
                  />
                </button>
                {isOpen ? (
                  <p className="border-t border-slate-200 px-4 py-3 text-[0.85rem] leading-relaxed text-slate-600 dark:border-white/10 dark:text-slate-300">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}