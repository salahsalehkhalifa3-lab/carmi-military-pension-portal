"use client";

import { useState } from "react";
import {
  BadgeCheck,
  CircleAlert,
  LoaderCircle,
  QrCode,
  Search,
  ShieldCheck,
} from "lucide-react";
import { ShareRow } from "@/components/share";
import { SectionHeading } from "@/components/ui";

type ClaimView = {
  trackingCode: string;
  status: string;
  serviceSlug: string;
  regionCode: string;
  createdAt: string;
};

type VerifyResponse = {
  ok: boolean;
  errors?: string[];
  matricule?: string;
  found?: boolean;
  claims?: ClaimView[];
  region?: { code: string; label: string; city: string } | null;
  registry?: { stage: string; progress: number; detail: string };
};

const STATUS_LABEL: Record<string, string> = {
  recu: "Dossier reçu au guichet",
  instruit: "En cours d'instruction",
  valide: "Validé — mise en paiement",
  rejete: "Pièces manquantes",
};

export function MatriculeTracker() {
  const [matricule, setMatricule] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerifyResponse | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setErrors([]);
    setResult(null);
    try {
      const res = await fetch("/api/verify-matricule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ matricule }),
      });
      const data = (await res.json()) as VerifyResponse;
      if (!data.ok) {
        setErrors(data.errors ?? ["Vérification impossible."]);
      } else {
        setResult(data);
      }
    } catch {
      setErrors(["Réseau indisponible. Appelez le +235 22 51 44 20."]);
    } finally {
      setLoading(false);
    }
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
                <input
                  required
                  value={matricule}
                  onChange={(e) => setMatricule(e.target.value.toUpperCase())}
                  placeholder="Ex. 08-M-014725"
                  className="tap-target w-full rounded-xl border border-slate-300 bg-white ps-11 pe-3 text-[0.95rem] font-bold tracking-wide text-slate-800 dark:border-white/15 dark:bg-tactical-950 dark:text-white"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="tap-target inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-5 text-sm font-black text-army-950 transition hover:bg-gold-400 disabled:opacity-60"
              >
                {loading ? (
                  <LoaderCircle className="h-5 w-5 animate-spin" strokeWidth={2.2} />
                ) : (
                  <Search className="h-5 w-5" strokeWidth={2.2} />
                )}
                Vérifier
              </button>
            </div>
          </label>

          {errors.length > 0 ? (
            <ul className="mt-3 space-y-1">
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

        {result?.registry ? (
          <div className="mt-4 rounded-2xl border border-gold-500/40 bg-army-900 p-4 text-white sm:p-5">
            <p className="inline-flex items-center gap-2 text-[0.7rem] font-black uppercase tracking-wide text-gold-300">
              <ShieldCheck className="h-4 w-4" strokeWidth={2.2} />
              Matricule {result.matricule} — registre consulté
            </p>
            <p className="mt-2 text-[1.05rem] font-black leading-tight">
              {result.registry.stage}
            </p>
            <p className="mt-1.5 text-[0.84rem] leading-relaxed text-slate-300">
              {result.registry.detail}
            </p>
            <div
              className="mt-3 h-3 w-full overflow-hidden rounded-full bg-white/15"
              role="progressbar"
              aria-valuenow={result.registry.progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full bg-gold-500 transition-[width] duration-500"
                style={{ width: `${result.registry.progress}%` }}
              />
            </div>
            <p className="mt-1.5 text-[0.72rem] font-bold uppercase tracking-wide text-slate-400">
              Avancement : {result.registry.progress} %
              {result.region ? ` · ${result.region.label} (${result.region.city})` : ""}
            </p>

            {result.found && result.claims && result.claims.length > 0 ? (
              <ul className="mt-4 space-y-2 border-t border-white/10 pt-3">
                {result.claims.map((claim) => (
                  <li
                    key={claim.trackingCode}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-white/5 px-3 py-2"
                  >
                    <span className="inline-flex items-center gap-2 text-[0.8rem] font-bold text-white">
                      <BadgeCheck className="h-4 w-4 text-emerald-400" strokeWidth={2.2} />
                      {claim.trackingCode}
                    </span>
                    <span className="text-[0.72rem] font-semibold uppercase tracking-wide text-gold-300">
                      {STATUS_LABEL[claim.status] ?? claim.status}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 border-t border-white/10 pt-3 text-[0.78rem] leading-relaxed text-slate-300">
                Aucune réclamation déposée depuis le portail pour ce matricule. Pour toute
                solde non versée, déposez une demande depuis la section Contact.
              </p>
            )}

            <div className="mt-4 border-t border-white/10 pt-3">
              <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-wide text-slate-400">
                Informer votre famille ou votre association de vétérans
              </p>
              <ShareRow
                title={`Suivi CARMI — matricule ${result.matricule}`}
                target="suivi-matricule"
                label="Partager"
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
