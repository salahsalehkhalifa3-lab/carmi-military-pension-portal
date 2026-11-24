"use client";

import { useMemo, useState } from "react";
import {
  BadgeCheck,
  Calculator as CalculatorIcon,
  CircleAlert,
  FileCheck2,
  HandCoins,
  LoaderCircle,
} from "lucide-react";
import {
  computeEstimate,
  DISABILITY_RATES,
  formatXaf,
  RANKS,
  UNITS,
  type EstimateResult,
} from "@/lib/institution";
import { Reveal, SectionHeading } from "@/components/ui";

export function Calculator() {
  const [rank, setRank] = useState<string>(RANKS[1].value);
  const [unit, setUnit] = useState<string>(UNITS[0].value);
  const [years, setYears] = useState<number>(22);
  const [disabilityRate, setDisability] = useState<number>(0);
  const [survivor, setSurvivor] = useState<"non" | "veuve" | "orphelin">("non");
  const [saving, setSaving] = useState(false);
  const [savedRef, setSavedRef] = useState<string | null>(null);
  const [saveError, setSaveError] = useState(false);

  function resetSaveFeedback() {
    setSavedRef(null);
    setSaveError(false);
  }

  const result: EstimateResult = useMemo(
    () => computeEstimate({ rank, unit, years, disabilityRate, survivor }),
    [rank, unit, years, disabilityRate, survivor],
  );

  async function persist() {
    if (saving) return;
    resetSaveFeedback();
    setSaving(true);
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rank, unit, years, disabilityRate, survivor }),
      });
      const data = (await res.json()) as {
        estimate?: { reference: string };
      };
      if (!res.ok || !data.estimate?.reference) throw new Error("Enregistrement indisponible");
      setSavedRef(data.estimate.reference);
    } catch {
      setSaveError(true);
    } finally {
      setSaving(false);
    }
  }

  return (
    <section
      id="simulateur"
      className="scroll-mt-24 border-y border-slate-200 bg-white py-10 sm:py-14 dark:border-white/10 dark:bg-tactical-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Simulateur & Éligibilité"
          title="Estimez votre solde de retraite et vos pièces à fournir"
          intro="Réglez votre grade, vos années de service et votre unité (ANT, Gendarmerie, Police, GNNT) : le simulateur calcule un taux de liquidation indicatif et génère la liste des pièces exigées par la Direction des Pensions."
        />

        <div className="mt-6 grid gap-4 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 p-4 sm:p-5 dark:border-white/10">
              <fieldset disabled={saving} onChange={resetSaveFeedback} className="grid min-w-0 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[0.75rem] font-bold uppercase tracking-wide text-army-900 dark:text-slate-200">
                    Grade / index de solde
                  </span>
                  <select
                    value={rank}
                    onChange={(e) => setRank(e.target.value)}
                    className="tap-target mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3 text-[0.9rem] font-semibold text-slate-800 dark:border-white/15 dark:bg-tactical-950 dark:text-white"
                  >
                    {RANKS.map((r) => (
                      <option key={r.value} value={r.value}>
                        {r.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-[0.75rem] font-bold uppercase tracking-wide text-army-900 dark:text-slate-200">
                    Unité / corps d&apos;appartenance
                  </span>
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="tap-target mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3 text-[0.9rem] font-semibold text-slate-800 dark:border-white/15 dark:bg-tactical-950 dark:text-white"
                  >
                    {UNITS.map((u) => (
                      <option key={u.value} value={u.value}>
                        {u.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-[0.75rem] font-bold uppercase tracking-wide text-army-900 dark:text-slate-200">
                    Situation du demandeur
                  </span>
                  <select
                    value={survivor}
                    onChange={(e) =>
                      setSurvivor(e.target.value as "non" | "veuve" | "orphelin")
                    }
                    className="tap-target mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3 text-[0.9rem] font-semibold text-slate-800 dark:border-white/15 dark:bg-tactical-950 dark:text-white"
                  >
                    <option value="non">Militaire / vétéran pensionné</option>
                    <option value="veuve">Veuve — solde de réversion</option>
                    <option value="orphelin">Orphelin — pension d&apos;ayant droit</option>
                  </select>
                </label>

                <div>
                  <span className="text-[0.75rem] font-bold uppercase tracking-wide text-army-900 dark:text-slate-200">
                    Taux d&apos;invalidité (CMM)
                  </span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {DISABILITY_RATES.map((rate) => (
                      <button
                        key={rate}
                        type="button"
                        onClick={() => {
                          resetSaveFeedback();
                          setDisability(rate);
                        }}
                        aria-pressed={disabilityRate === rate}
                        className={`tap-target min-w-[3rem] rounded-xl border px-2 text-[0.8rem] font-bold transition ${
                          disabilityRate === rate
                            ? "border-gold-500 bg-army-900 text-gold-300"
                            : "border-slate-300 text-slate-600 dark:border-white/15 dark:text-slate-300"
                        }`}
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                </div>
              </fieldset>

              <div className="mt-5">
                <div className="flex items-end justify-between gap-3">
                  <span className="text-[0.75rem] font-bold uppercase tracking-wide text-army-900 dark:text-slate-200">
                    Années de service retenues
                  </span>
                  <span className="text-2xl font-black leading-none text-gold-600 dark:text-gold-300">
                    {years} ans
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={45}
                  step={1}
                  value={years}
                  disabled={saving}
                  onChange={(e) => {
                    resetSaveFeedback();
                    setYears(Number(e.target.value));
                  }}
                  aria-label="Années de service retenues"
                  className="mt-3 h-11 w-full accent-gold-500"
                />
                <div className="flex justify-between text-[0.65rem] font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
                  <span>0 an</span>
                  <span>15 ans — seuil d&apos;éligibilité</span>
                  <span>45 ans</span>
                </div>
              </div>

              <button
                type="button"
                onClick={persist}
                disabled={saving}
                className="tap-target mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-4 text-sm font-black text-army-950 transition hover:bg-gold-400"
              >
                {saving ? (
                  <LoaderCircle className="h-5 w-5 animate-spin" strokeWidth={2.2} />
                ) : (
                  <CalculatorIcon className="h-5 w-5" strokeWidth={2.2} />
                )}
                Enregistrer ma simulation
              </button>
              {saveError && (
                <p role="alert" className="mt-2 text-sm text-red-700 dark:text-red-300">
                  Enregistrement indisponible. Le calcul indicatif reste affiché.
                </p>
              )}
              {savedRef ? (
                <p role="status" className="mt-2 text-center text-[0.72rem] font-semibold text-emerald-600 dark:text-emerald-400">
                  Simulation enregistrée — référence {savedRef}
                </p>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-2">
            <div
              className={`flex h-full flex-col rounded-2xl border p-4 sm:p-5 ${
                result.eligible
                  ? "border-gold-500/40 bg-army-900 text-white"
                  : "border-flag-red/40 bg-flag-red/5 text-army-900 dark:text-white"
              }`}
            >
              {result.eligible ? (
                <>
                  <p className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-wide text-gold-300">
                    <BadgeCheck className="h-4 w-4" strokeWidth={2.2} />
                    Droit à pension estimé
                  </p>
                  <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-wide text-slate-300">
                    Solde mensuelle indicative
                  </p>
                  <p className="text-3xl font-black leading-none text-gold-400 sm:text-4xl">
                    {formatXaf(result.monthlyXaf)}
                  </p>
                  <p className="mt-1 text-[0.75rem] text-slate-300">
                    Taux de liquidation : {result.ratePercent} %
                  </p>
                </>
              ) : (
                <>
                  <p className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-wide text-flag-red">
                    <CircleAlert className="h-4 w-4" strokeWidth={2.2} />
                    Seuil de 15 ans non atteint
                  </p>
                  <p className="mt-3 text-[0.9rem] font-bold leading-snug">
                    Votre décompte d&apos;annuités est insuffisant pour la liquidation
                    immédiate. Rapprochez-vous de la Direction des Pensions pour étudier
                    les bonifications de campagne ou la retraite anticipée pour infirmité.
                  </p>
                </>
              )}

              <dl className="mt-4 space-y-1.5 border-t border-current/20 pt-3 text-[0.78rem]">
                {result.breakdown.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-3">
                    <dt className={result.eligible ? "text-slate-300" : "text-slate-600 dark:text-slate-200"}>{row.label}</dt>
                    <dd className="text-end font-bold">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-4 rounded-xl bg-black/5 p-3 dark:bg-white/5">
                <p className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-wide text-current">
                  <FileCheck2 className="h-4 w-4" strokeWidth={2.2} />
                  Checklist de votre dossier
                </p>
                <ul className="mt-2 space-y-1.5">
                  {result.documents.map((doc) => (
                    <li
                      key={doc}
                      className="flex gap-2 text-[0.78rem] leading-snug"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-col gap-2 pt-4 sm:flex-row">
                <a
                  href="#contact"
                  className="tap-target inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gold-500 px-4 text-[0.8rem] font-black text-army-950"
                >
                  <HandCoins className="h-4 w-4" strokeWidth={2.2} />
                  Déposer mon dossier
                </a>
                <a
                  href="/suivi"
                  className="tap-target inline-flex flex-1 items-center justify-center rounded-xl border border-white/30 px-4 text-[0.8rem] font-bold text-white"
                >
                  Suivi par matricule
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-4 text-[0.7rem] leading-relaxed text-slate-500 dark:text-slate-400">
          Estimation indicative fondée sur le barème simplifié du code des pensions
          militaires tchadien. Seule la décision de liquidation émise par la Direction des
          Pensions de la CARMI fait foi.
        </p>
      </div>
    </section>
  );
}
