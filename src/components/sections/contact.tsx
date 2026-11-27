"use client";

import { SuspendedLink } from "@/components/suspended-link";
import { useState } from "react";
import { usePortal } from "@/lib/i18n";
import { suspended } from "@/lib/suspended";
import {
  CircleAlert,
  Clock,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import type { MilitaryRegion, PensionService } from "@/db/schema";
import { CONTACT } from "@/lib/institution";
import { Reveal, SectionHeading } from "@/components/ui";

export function Contact({
  regions,
  services,
}: {
  regions: MilitaryRegion[];
  services: PensionService[];
}) {
  const { lang } = usePortal();
  const [attempted, setAttempted] = useState(false);
  const errors = attempted ? [suspended[lang]] : [];

  function submit(event: React.FormEvent) {
    event.preventDefault();
    setAttempted(true);
  }

  const field =
    "tap-target mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3 text-[0.9rem] font-medium text-slate-800 dark:border-white/15 dark:bg-tactical-950 dark:text-white";
  const label =
    "text-[0.72rem] font-bold uppercase tracking-wide text-army-900 dark:text-slate-200";

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-slate-200 bg-white py-10 sm:py-14 dark:border-white/10 dark:bg-tactical-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact & Suivi"
          title="Déposez votre demande de suivi de pension"
          intro="Vérification de matricule, suivi de dossier, solde non versée ou ayants droit : le guichet numérique CARMI transmet votre demande à l'antenne de votre région militaire."
        />

        <div className="mt-6 grid gap-4 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
              <form
                onSubmit={submit}
                className="rounded-2xl border border-slate-200 p-4 sm:p-5 dark:border-white/10"
                noValidate
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className={label}>Nom &amp; prénoms du demandeur</span>
                    <input disabled



                      className={field}
                      placeholder="Ex. Brahim Adoum Djibrine"

                    />
                  </label>
                  <label className="block">
                    <span className={label}>Matricule ANT / Pensionné</span>
                    <input disabled



                      className={field}
                      placeholder="Ex. 08-M-014725"
                      inputMode="text"
                    />
                  </label>
                  <label className="block">
                    <span className={label}>Téléphone mobile (SMS / WhatsApp)</span>
                    <input disabled



                      className={field}
                      placeholder="+235 66 00 00 00"
                      inputMode="tel"

                    />
                  </label>
                  <label className="block">
                    <span className={label}>Région militaire d&apos;attache</span>
                    <select disabled


                      className={field}
                    >
                      {regions.map((region) => (
                        <option key={region.code} value={region.code}>
                          {region.code} — {region.city}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className={label}>Objet de la demande</span>
                    <select disabled


                      className={field}
                    >
                      {services.map((service) => (
                        <option key={service.slug} value={service.slug}>
                          {service.title}
                        </option>
                      ))}
                      <option value="suivi-paiement">
                        Suivi d&apos;un paiement non reçu
                      </option>
                      <option value="autre">Autre réclamation</option>
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className={label}>Détail de votre demande</span>
                    <textarea disabled


                      rows={4}
                      className={`${field} py-2`}
                      placeholder="Précisez votre situation : solde non versée, contrôle de vie, réversion, bancarisation…"
                    />
                  </label>
                </div>

                {errors.length > 0 ? (
                  <ul role="status" className="mt-3 space-y-1 rounded-xl border border-flag-red/40 bg-flag-red/10 p-3">
                    {errors.map((error) => (
                      <li
                        key={error}
                        className="inline-flex items-start gap-2 text-[0.78rem] font-semibold text-flag-red"
                      >
                        <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.2} />
                        {error}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <button
                  type="submit"

                  className="tap-target mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-4 text-sm font-black text-army-950 transition hover:bg-gold-400 disabled:opacity-60"
                >
                  <Send className="h-5 w-5" strokeWidth={2.2} />
                  Transmettre au guichet CARMI
                </button>
                <p className="mt-2 text-center text-[0.68rem] leading-snug text-slate-500 dark:text-slate-400">
                  Données traitées par la Direction des Pensions — usage strictement
                  administratif.
                </p>
              </form>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-2.5">
              <SuspendedLink
                className="tap-target flex items-center gap-3 rounded-2xl border border-slate-200 bg-tactical-50 px-4 py-3 dark:border-white/10 dark:bg-white/5"
              >
                <Phone className="h-6 w-6 shrink-0 text-gold-600" strokeWidth={2.2} />
                <span>
                  <span className="block text-[0.68rem] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Standard Direction Générale
                  </span>
                  <span className="block text-[0.95rem] font-black text-army-900 dark:text-white">
                    {CONTACT.phoneDisplay}
                  </span>
                </span>
              </SuspendedLink>
              <SuspendedLink
                className="tap-target flex items-center gap-3 rounded-2xl bg-emerald-600 px-4 py-3 text-white"
              >
                <MessageCircle className="h-6 w-6 shrink-0" strokeWidth={2.2} />
                <span>
                  <span className="block text-[0.68rem] font-bold uppercase tracking-wide opacity-90">
                    Assistance WhatsApp pensionnés
                  </span>
                  <span className="block text-[0.95rem] font-black">
                    {CONTACT.whatsappDisplay}
                  </span>
                </span>
              </SuspendedLink>
              <SuspendedLink
                className="tap-target flex items-center gap-3 rounded-2xl border border-slate-200 bg-tactical-50 px-4 py-3 dark:border-white/10 dark:bg-white/5"
              >
                <Mail className="h-6 w-6 shrink-0 text-gold-600" strokeWidth={2.2} />
                <span>
                  <span className="block text-[0.68rem] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Direction des Pensions
                  </span>
                  <span className="block break-all text-[0.9rem] font-black text-army-900 dark:text-white">
                    {CONTACT.pensionsEmail}
                  </span>
                </span>
              </SuspendedLink>

              <div className="rounded-2xl border border-slate-200 bg-tactical-50 p-4 dark:border-white/10 dark:bg-white/5">
                <p className="inline-flex items-center gap-2 text-[0.72rem] font-black uppercase tracking-wide text-army-900 dark:text-white">
                  <Landmark className="h-4 w-4 text-gold-600" strokeWidth={2.2} />
                  Siège de la Caisse
                </p>
                <p className="mt-2 inline-flex items-start gap-2 text-[0.82rem] leading-snug text-slate-600 dark:text-slate-300">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" strokeWidth={2.1} />
                  {CONTACT.address}
                </p>
                <p className="mt-2 inline-flex items-start gap-2 text-[0.82rem] leading-snug text-slate-600 dark:text-slate-300">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" strokeWidth={2.1} />
                  {CONTACT.hours}
                </p>
                <p className="mt-2 inline-flex items-start gap-2 text-[0.78rem] leading-snug font-semibold text-navy-700 dark:text-navy-300">
                  Tutelle : {CONTACT.ministry}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
