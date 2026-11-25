// Paramètres de démonstration uniquement. Aucun barème ni critère réglementaire.
export const RANKS = [
  { value: "homme-du-rang", label: "Homme du rang / Caporal", factor: 1, base: 96000 },
  { value: "sous-officier", label: "Sergent / Adjudant", factor: 1.25, base: 138000 },
  { value: "officier-subalterne", label: "Lieutenant / Capitaine", factor: 1.6, base: 210000 },
  { value: "officier-superieur", label: "Commandant / Colonel", factor: 2.1, base: 305000 },
  { value: "officier-general", label: "Général", factor: 2.8, base: 470000 },
] as const;

export const UNITS = [
  { value: "ant", label: "ANT — Armée Nationale Tchadienne", bonus: 0.05 },
  { value: "gendarmerie", label: "Gendarmerie Nationale", bonus: 0.04 },
  { value: "police", label: "Police Nationale", bonus: 0.03 },
  { value: "gnnt", label: "GNNT — Garde Nationale et Nomade", bonus: 0.05 },
  { value: "veterans", label: "Anciens Combattants / Victimes de Guerre", bonus: 0.06 },
] as const;

export const DISABILITY_RATES = [0, 10, 25, 50, 75, 100] as const;

export type EstimateInput = {
  rank: string;
  unit: string;
  years: number;
  disabilityRate: number;
  survivor: "non" | "veuve" | "orphelin";
};

export type EstimateResult = {
  eligible: boolean;
  monthlyXaf: number;
  ratePercent: number;
};

function round(n: number): number {
  return Math.round(n / 500) * 500;
}

/** Calcul fictif, indépendant du code des pensions militaires. */
export function computeEstimate(input: EstimateInput): EstimateResult {
  const rank = RANKS.find((r) => r.value === input.rank) ?? RANKS[0];
  const unit = UNITS.find((u) => u.value === input.unit) ?? UNITS[0];
  const years = Math.max(0, Math.min(50, Math.round(input.years)));
  const disability = DISABILITY_RATES.includes(
    input.disabilityRate as (typeof DISABILITY_RATES)[number],
  )
    ? input.disabilityRate
    : 0;

  const requiredYears = input.survivor === "non" ? 15 : 0;
  const eligible = years >= requiredYears;

  const ratePercent = eligible
    ? Math.min(100, years * 2 + Math.round(unit.bonus * 100) + disability / 4)
    : 0;

  const base = rank.base * rank.factor;
  const monthly = eligible ? round((base * Math.min(ratePercent, 100)) / 100) : 0;
  const survivorShare =
    input.survivor === "veuve" ? 0.5 : input.survivor === "orphelin" ? 0.3 : 1;
  const finalMonthly = round(monthly * survivorShare);

  return { eligible, monthlyXaf: finalMonthly, ratePercent: Math.round(ratePercent) };
}
