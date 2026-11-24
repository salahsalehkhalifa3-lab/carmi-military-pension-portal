import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Suivi de dossier de pension",
  description: "Présentation du parcours de suivi, actuellement désactivé.",
};

export default function SuiviPage() {
  return (
    <>
      <section className="bg-army-950 text-white">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 text-[0.78rem] font-bold uppercase tracking-wide text-gold-300"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.2} />
            Retour au portail CARMI
          </Link>
          <h1 className="mt-3 text-balance text-2xl font-black leading-tight sm:text-4xl">
            Suivi de dossier de pension
          </h1>
          <p className="mt-3 max-w-2xl text-[0.92rem] leading-relaxed text-slate-200">
            La consultation de dossiers est désactivée dans cette démonstration.
            Aucun matricule ni renseignement personnel n’est demandé.
          </p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <Link
              href="/#calendrier"
              className="tap-target inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-4 text-sm font-black text-army-950"
            >
              <CalendarDays className="h-5 w-5" strokeWidth={2.2} />
              Calendrier de paiement
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-8 dark:border-white/10 dark:bg-tactical-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-lg font-black text-army-900 dark:text-white">
            Autres démarches
          </h2>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <Link
              href="/#contact"
              className="tap-target inline-flex items-center justify-center rounded-xl bg-army-900 px-4 text-sm font-bold text-white"
            >
              Voir le parcours de contact
            </Link>
            <Link
              href="/#simulateur"
              className="tap-target inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 text-sm font-bold text-army-900 dark:border-white/20 dark:text-white"
            >
              Simuler ma pension
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
