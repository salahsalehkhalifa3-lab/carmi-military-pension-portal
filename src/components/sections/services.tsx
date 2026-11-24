"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Clock,
  CreditCard,
  FileCheck,
  FileText,
  Flame,
  ListChecks,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import type { PensionService } from "@/db/schema";
import { useDialogKeyboard } from "@/lib/use-dialog-keyboard";
import { IconBadge, Reveal, SectionHeading } from "@/components/ui";

const ICONS: Record<string, LucideIcon> = {
  award: Award,
  flame: Flame,
  users: Users,
  filecheck: FileCheck,
  creditcard: CreditCard,
};

const TONES: Record<string, "army" | "gold" | "navy"> = {
  army: "army",
  gold: "gold",
  navy: "navy",
};

export function Services({ services }: { services: PensionService[] }) {
  const [active, setActive] = useState<PensionService | null>(null);
  const closeService = useCallback(() => setActive(null), []);
  const dialogRef = useDialogKeyboard(active !== null, closeService);

  return (
    <section id="prestations" className="scroll-mt-24 bg-tactical-50 py-10 sm:py-14 dark:bg-tactical-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Prestations & Solde CARMI"
          title="Les prestations souveraines de la Caisse de Retraite des Militaires"
          intro="Cinq filières de service pour les militaires en activité, les vétérans de l'ANT, les blessés de guerre et les familles des Martyrs de la Nation. Touchez une prestation pour ouvrir la procédure complète."
        />

        {services.length === 0 && <p className="mt-4 text-slate-600 dark:text-slate-300">Les fiches de prestations sont actuellement indisponibles.</p>}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon] ?? Award;
            return (
              <Reveal key={service.slug} delay={index * 0.04}>
                <button
                  id={`service-${service.slug}`}
                  type="button"
                  onClick={() => setActive(service)}
                  className="group flex h-full scroll-mt-28 w-full flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-start transition hover:-translate-y-0.5 hover:border-gold-500/60 hover:shadow-lg sm:p-5 dark:border-white/10 dark:bg-tactical-900/70 dark:hover:border-gold-500/50"
                  aria-haspopup="dialog"
                >
                  <div className="flex w-full items-start justify-between gap-3">
                    <IconBadge
                      icon={Icon}
                      tone={TONES[service.accent] ?? "army"}
                      size="lg"
                    />
                    <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-2 py-1 text-[0.62rem] font-bold uppercase tracking-wide text-slate-500 dark:border-white/15 dark:text-slate-400">
                      <Clock className="h-3.5 w-3.5" strokeWidth={2.2} />
                      {service.processingDays} j
                    </span>
                  </div>
                  <h3 className="text-[1.05rem] font-black leading-tight text-army-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-[0.85rem] leading-relaxed text-slate-600 dark:text-slate-300">
                    {service.tagline}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[0.72rem] font-bold uppercase tracking-wide text-gold-600 group-hover:text-gold-700 dark:text-gold-300 dark:group-hover:text-gold-300">
                    Procédure & pièces exigées
                  </span>
                </button>
              </Reveal>
            );
          })}

          <Reveal delay={0.2}>
            <div
              id="prestations-bancarisation"
              className="flex h-full flex-col justify-between gap-3 rounded-2xl border border-gold-500/40 bg-army-900 p-4 text-white sm:p-5"
            >
              <div>
                <h3 className="text-[1.05rem] font-black leading-tight text-gold-300">
                  Guide de bancarisation des militaires
                </h3>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-slate-200">
                  Exemple de rubrique pour expliquer les étapes de bancarisation.
                  Les conditions et les partenaires pourront être renseignés après validation.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            ref={dialogRef}
            className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <button
              type="button"
              aria-label="Fermer"
              tabIndex={-1}
              className="absolute inset-0 bg-army-950/75 backdrop-blur-sm"
              onClick={closeService}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "tween", duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[88vh] w-full overflow-y-auto rounded-t-3xl border border-slate-200 bg-white p-4 pb-24 sm:max-w-2xl sm:rounded-3xl sm:p-6 dark:border-white/10 dark:bg-tactical-900"
            >
              <div className="flag-lisere absolute inset-x-0 top-0 h-1.5" aria-hidden="true" />
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <IconBadge
                    icon={ICONS[active.icon] ?? Award}
                    tone={TONES[active.accent] ?? "army"}
                    size="lg"
                  />
                  <div>
                    <h3 className="text-lg font-black leading-tight text-army-900 sm:text-xl dark:text-white">
                      {active.title}
                    </h3>
                    <p className="mt-1 text-[0.8rem] font-medium text-gold-600 dark:text-gold-300">
                      Délai moyen : {active.processingDays} jours
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeService}
                  className="tap-target inline-flex items-center justify-center rounded-xl border border-slate-200 px-3 text-slate-600 dark:border-white/15 dark:text-slate-200"
                  aria-label="Fermer"
                >
                  <X className="h-5 w-5" strokeWidth={2.2} />
                </button>
              </div>

              <p className="mt-4 text-[0.88rem] leading-relaxed text-slate-700 dark:text-slate-300">
                {active.description}
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-3 dark:border-white/10">
                  <h4 className="inline-flex items-center gap-2 text-[0.8rem] font-black uppercase tracking-wide text-army-900 dark:text-white">
                    <FileText className="h-4 w-4 text-gold-600 dark:text-gold-300" strokeWidth={2.2} />
                    Pièces exigées
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {active.documents.map((doc) => (
                      <li
                        key={doc}
                        className="flex gap-2 text-[0.8rem] leading-snug text-slate-700 dark:text-slate-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-3 dark:border-white/10">
                  <h4 className="inline-flex items-center gap-2 text-[0.8rem] font-black uppercase tracking-wide text-army-900 dark:text-white">
                    <ListChecks className="h-4 w-4 text-gold-600 dark:text-gold-300" strokeWidth={2.2} />
                    Étapes de la procédure
                  </h4>
                  <ol className="mt-2 space-y-1.5">
                    {active.steps.map((step, i) => (
                      <li
                        key={step}
                        className="flex gap-2 text-[0.8rem] leading-snug text-slate-700 dark:text-slate-300"
                      >
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-army-900 text-[0.62rem] font-black text-gold-400">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
