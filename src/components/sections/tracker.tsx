"use client";

import { useState } from "react";
import { usePortal } from "@/lib/i18n";
import { suspended } from "@/lib/suspended";
import {
  CircleAlert,
  QrCode,
  Search,
} from "lucide-react";
import { SectionHeading } from "@/components/ui";

export function MatriculeTracker() {
  const { lang } = usePortal();
  const [attempted, setAttempted] = useState(false);
  const errors = attempted ? [suspended[lang]] : [];

  function submit(event: React.FormEvent) {
    event.preventDefault();
    setAttempted(true);
  }

  return (
    <section className="bg-tactical-50 py-8 sm:py-12 dark:bg-tactical-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Registre national des pensions"
          title="Vérification de matricule & suivi de dossier"
          intro="Saisissez votre matricule ANT ou votre numéro de pensionné pour connaître l'avancement de votre dossier au registre de la Direction des Pensions."
        />

        <form
          onSubmit={submit}
          className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 dark:border-white/10 dark:bg-tactical-900/70"
          noValidate
        >
          <label className="block">
            <span className="text-[0.72rem] font-bold uppercase tracking-wide text-army-900 dark:text-slate-200">
              Matricule ANT / numéro de pensionné
            </span>
            <div className="mt-1.5 flex flex-col gap-2 sm:flex-row">
              <div className="relative flex-1">
                <QrCode
                  className="pointer-events-none absolute inset-y-0 start-3 my-auto h-5 w-5 text-gold-600"
                  strokeWidth={2.1}
                />
                <input disabled


                  placeholder="Ex. 08-M-014725"
                  className="tap-target w-full rounded-xl border border-slate-300 bg-white ps-11 pe-3 text-[0.95rem] font-bold tracking-wide text-slate-800 dark:border-white/15 dark:bg-tactical-950 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="tap-target inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-5 text-sm font-black text-army-950 transition hover:bg-gold-400 disabled:opacity-60"
              >
                <Search className="h-5 w-5" strokeWidth={2.2} />
                Vérifier
              </button>
            </div>
          </label>

          {errors.length > 0 ? (
            <ul role="status" className="mt-3 space-y-1">
              {errors.map((error) => (
                <li
                  key={error}
                  className="inline-flex items-start gap-2 text-[0.8rem] font-semibold text-flag-red"
                >
                  <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.2} />
                  {error}
                </li>
              ))}
            </ul>
          ) : null}
        </form>

      </div>
    </section>
  );
}
