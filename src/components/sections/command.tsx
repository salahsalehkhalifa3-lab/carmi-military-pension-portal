"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Quote, ShieldCheck, Target } from "lucide-react";
import { FAQ, LEADERSHIP } from "@/lib/institution";
import { Reveal, SectionHeading } from "@/components/ui";

export function Command() {
  return (
    <section
      id="commandement"
      className="scroll-mt-24 border-y border-slate-200 bg-white py-10 sm:py-14 dark:border-white/10 dark:bg-tactical-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Commandement & Réformes"
          title="Direction Générale — vision de modernisation souveraine"
          intro="Le commandement de la CARMI pilote la dématérialisation des pensions, la sécurisation du registre biométrique et la transparence totale des décaissements."
        />

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
              <div className="relative aspect-[4/3] w-full bg-army-900">
                <Image
                  src="/image/dgcarmi.jpg"
                  alt="Directeur Général de la Caisse de Retraite des Militaires"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-army-950 via-army-950/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-gold-400">
                    {LEADERSHIP.rank}
                  </p>
                  <p className="text-lg font-black leading-tight text-white">
                    {LEADERSHIP.name}
                  </p>
                  <p className="mt-0.5 text-[0.72rem] font-medium leading-tight text-slate-200">
                    {LEADERSHIP.role}
                  </p>
                </div>
                <div className="flag-lisere absolute inset-x-0 top-0 h-1.5" aria-hidden="true" />
              </div>
              <blockquote className="border-t border-slate-200 bg-tactical-50 p-4 dark:border-white/10 dark:bg-white/5">
                <Quote className="h-5 w-5 text-gold-500" strokeWidth={2.1} />
                <p className="mt-1.5 text-[0.85rem] italic leading-relaxed text-slate-700 dark:text-slate-200">
                  {LEADERSHIP.citation}
                </p>
              </blockquote>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2">
            {LEADERSHIP.priorities.map((priority, index) => (
              <Reveal key={priority.title} delay={index * 0.05}>
                <article className="flex h-full flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-tactical-950/60">
                  <span className="inline-flex items-center gap-2 text-[0.72rem] font-black uppercase tracking-wide text-gold-600 dark:text-gold-300">
                    {index % 2 === 0 ? (
                      <ShieldCheck className="h-4 w-4" strokeWidth={2.2} />
                    ) : (
                      <Target className="h-4 w-4" strokeWidth={2.2} />
                    )}
                    Axe prioritaire {index + 1}
                  </span>
                  <h3 className="text-[1rem] font-black leading-tight text-army-900 dark:text-white">
                    {priority.title}
                  </h3>
                  <p className="text-[0.82rem] leading-relaxed text-slate-600 dark:text-slate-300">
                    {priority.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
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
                    className={`mt-0.5 h-5 w-5 shrink-0 text-gold-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
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