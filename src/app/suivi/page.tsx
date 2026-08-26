import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Phone } from "lucide-react";
import { MatriculeTracker } from "@/components/sections/tracker";
import { CONTACT } from "@/lib/institution";

export const metadata: Metadata = {
  title: "Suivi de dossier & vérification de matricule",
  description:
    "Vérifiez votre matricule ANT et suivez l'avancement de votre dossier de pension militaire auprès de la CARMI (République du Tchad).",
};

export default function SuiviPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-army-950 text-white">
        <Image
          src="/images/veterans-chad.jpg"
          alt="Vétérans et ayants droit de l'Armée Nationale Tchadienne"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-army-950/95 to-army-950"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 text-[0.78rem] font-bold uppercase tracking-wide text-gold-300"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.2} />
            Retour au portail CARMI
          </Link>
          <h1 className="mt-3 text-balance text-2xl font-black leading-tight sm:text-4xl">
            Suivi de dossier de pension &amp; contrôle de matricule
          </h1>
          <p className="mt-3 max-w-2xl text-[0.92rem] leading-relaxed text-slate-200">
            Consultez l&apos;état d&apos;avancement de votre liquidation, de votre solde de
            réversion ou de votre pension d&apos;invalidité. Le registre est mis à jour par
            la Direction des Pensions après chaque contrôle de vie.
          </p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <a
              href="#calendrier"
              className="tap-target inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-4 text-sm font-black text-army-950"
            >
              <CalendarDays className="h-5 w-5" strokeWidth={2.2} />
              Calendrier de paiement
            </a>
            <a
              href={`tel:${CONTACT.helpline}`}
              className="tap-target inline-flex items-center justify-center gap-2 rounded-xl border border-gold-500/50 px-4 text-sm font-bold text-gold-300"
            >
              <Phone className="h-5 w-5" strokeWidth={2.2} />
              {CONTACT.helplineDisplay}
            </a>
          </div>
        </div>
      </section>

      <MatriculeTracker />

      <section className="border-t border-slate-200 bg-white py-8 dark:border-white/10 dark:bg-tactical-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-lg font-black text-army-900 dark:text-white">
            Bon à savoir avant votre passage au guichet
          </h2>
          <ul className="mt-3 space-y-2 text-[0.85rem] leading-relaxed text-slate-600 dark:text-slate-300">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              Présentez-vous muni de votre carte de pensionné, de votre CNI et de votre RIB.
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              Le contrôle de vie annuel est obligatoire dans les 23 provinces avant le 31 mars.
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              Les veuves et orphelins déposent leurs dossiers au guichet prioritaire des
              ayants droit de la Direction Générale.
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              Aucun paiement en espèces à partir du 1er avril 2026 : la bancarisation est
              obligatoire.
            </li>
          </ul>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <Link
              href="/#contact"
              className="tap-target inline-flex items-center justify-center rounded-xl bg-army-900 px-4 text-sm font-bold text-white"
            >
              Déposer une réclamation
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
