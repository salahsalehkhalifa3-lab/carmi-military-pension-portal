"use client";

import { useState } from "react";
import {
  BadgeCheck,
  CircleAlert,
  Clock,
  Landmark,
  LoaderCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import type { MilitaryRegion, PensionService } from "@/db/schema";
import { CONTACT } from "@/lib/institution";
import { Reveal, SectionHeading } from "@/components/ui";

type FormState = {
  fullName: string;
  matricule: string;
  phone: string;
  regionCode: string;
  serviceSlug: string;
  message: string;
};

export function Contact({
  regions,
  services,
}: {
  regions: MilitaryRegion[];
  services: PensionService[];
}) {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    matricule: "",
    phone: "",
    regionCode: regions[0]?.code ?? "",
    serviceSlug: services[0]?.slug ?? "suivi-paiement",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [errors, setErrors] = useState<string[]>([]);
  const [tracking, setTracking] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (status === "sending" || regions.length === 0) return;
    setStatus("sending");
    setErrors([]);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, channel: "web" }),
      });
      const data = (await res.json()) as {
        ok: boolean;
        errors?: string[];
        trackingCode?: string;
      };
      if (!res.ok || !data.ok || !data.trackingCode) {
        setErrors(data.errors ?? ["Erreur inconnue."]);
        setStatus("idle");
        return;
      }
      setTracking(data.trackingCode ?? null);
      setStatus("done");
    } catch {
      setErrors(["Réseau indisponible. Appelez le standard CARMI."]);
      setStatus("idle");
    }
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
          intro="Enregistrez une demande liée à votre pension ou contactez la CARMI par les canaux indiqués."
        />

        <div className="mt-6 grid gap-4 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            {regions.length === 0 ? (
              <p className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                Le formulaire est actuellement indisponible. Contactez le standard CARMI.
              </p>
            ) : status === "done" ? (
              <div role="status" className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5">
                <p className="inline-flex items-center gap-2 text-[0.75rem] font-black uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                  <BadgeCheck className="h-5 w-5" strokeWidth={2.2} />
                  Demande enregistrée
                </p>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-emerald-900 dark:text-emerald-100">
                  Votre dossier a été transmis à l&apos;antenne de la{" "}
                  {regions.find((r) => r.code === form.regionCode)?.label}. Conservez votre
                  numéro de suivi.
                </p>
                <p className="mt-3 rounded-xl bg-white/70 px-3 py-2 text-center text-lg font-black tracking-wider text-army-900 dark:bg-black/30 dark:text-white">
                  {tracking}
                </p>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="tap-target inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-army-900 px-4 text-sm font-bold text-white"
                  >
                    <Phone className="h-4 w-4" strokeWidth={2.2} />
                    Appeler le guichet
                  </a>
                  <a
                    href="/suivi"
                    className="tap-target inline-flex flex-1 items-center justify-center rounded-xl border border-emerald-600/50 px-4 text-sm font-bold text-emerald-800 dark:text-emerald-200"
                  >
                    Suivre mon dossier
                  </a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="rounded-2xl border border-slate-200 p-4 sm:p-5 dark:border-white/10"
                aria-busy={status === "sending"}
              >
                <fieldset disabled={status === "sending"} className="grid min-w-0 gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className={label}>Nom &amp; prénoms du demandeur</span>
                    <input
                      required
                      minLength={3}
                      maxLength={140}
                      value={form.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      className={field}
                      placeholder="Votre nom complet"
                      autoComplete="name"
                    />
                  </label>
                  <label className="block">
                    <span className={label}>Matricule ANT / Pensionné</span>
                    <input
                      required
                      minLength={4}
                      maxLength={32}
                      value={form.matricule}
                      onChange={(e) => update("matricule", e.target.value.toUpperCase())}
                      className={field}
                      placeholder="Votre matricule"
                      inputMode="text"
                    />
                  </label>
                  <label className="block">
                    <span className={label}>Téléphone mobile (SMS / WhatsApp)</span>
                    <input
                      required
                      type="tel"
                      maxLength={40}
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={field}
                      placeholder="Votre numéro de téléphone"
                      inputMode="tel"
                      autoComplete="tel"
                    />
                  </label>
                  <label className="block">
                    <span className={label}>Région militaire d&apos;attache</span>
                    <select
                      value={form.regionCode}
                      onChange={(e) => update("regionCode", e.target.value)}
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
                    <select
                      value={form.serviceSlug}
                      onChange={(e) => update("serviceSlug", e.target.value)}
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
                    <textarea
                      maxLength={2000}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      rows={4}
                      className={`${field} py-2`}
                      placeholder="Précisez votre situation : solde non versée, contrôle de vie, réversion, bancarisation…"
                    />
                  </label>
                </fieldset>

                {errors.length > 0 ? (
                  <ul role="alert" className="mt-3 space-y-1 rounded-xl border border-flag-red/40 bg-flag-red/10 p-3">
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
                  disabled={status === "sending"}
                  className="tap-target mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-4 text-sm font-black text-army-950 transition hover:bg-gold-400 disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <LoaderCircle className="h-5 w-5 animate-spin" strokeWidth={2.2} />
                  ) : (
                    <Send className="h-5 w-5" strokeWidth={2.2} />
                  )}
                  Transmettre au guichet CARMI
                </button>
                <p className="mt-2 text-center text-[0.68rem] leading-snug text-slate-500 dark:text-slate-400">
                  Données traitées par la Direction des Pensions — usage strictement
                  administratif.
                </p>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-2.5">
              <a
                href={`tel:${CONTACT.phone}`}
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
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
              <a
                href={`mailto:${CONTACT.pensionsEmail}?subject=${encodeURIComponent(
                  "Demande de suivi de pension — CARMI",
                )}`}
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
              </a>

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
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
