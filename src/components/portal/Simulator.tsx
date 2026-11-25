"use client";
import { Container, useTranslation, SectionTitle } from "./layout";
import { ScanLine } from "lucide-react";
import { usePortal } from "@/lib/i18n";
import { useState } from "react";
import { computeEstimate, DISABILITY_RATES, RANKS, UNITS, type EstimateInput } from "@/lib/demo-pension";

const ranks = ["جندي / عريف", "رقيب / مساعد", "ملازم / نقيب", "رائد / عقيد", "ضابط عام"];
const units = ["الجيش الوطني التشادي", "الدرك الوطني", "الشرطة الوطنية", "الحرس الوطني والبدوي", "المحاربون القدامى وضحايا الحرب"];

export function Simulator() {
  const tr = useTranslation();
  const isArabic = usePortal().lang === "ar";
  const [scenario, setScenario] = useState<EstimateInput>({
    rank: RANKS[1].value, unit: UNITS[0].value, years: 22, disabilityRate: 0, survivor: "non",
  });
  const result = computeEstimate(scenario);
  const number = new Intl.NumberFormat(isArabic ? "ar" : "fr-FR", { maximumFractionDigits: 1 });
  const field = "mt-2 min-h-11 w-full rounded-lg border border-slate-400 bg-white px-3 text-army-950 dark:border-slate-500 dark:bg-tactical-950 dark:text-white";
  return (
    <>
      <section id="simulateur" className="premium-section">
        <Container>
          <SectionTitle label={tr(["Calcul local", "حساب على الجهاز"])} title={tr(["Simulateur de retraite", "محاكي التقاعد"])} description={tr(["Simulation fictive et indicative — ne constitue pas un calcul réglementaire de pension.", "محاكاة افتراضية تقريبية — لا تشكّل حساباً نظامياً للمعاش."])} />
          <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
            <div className="premium-card grid content-start gap-5 p-5 sm:grid-cols-2 sm:p-7">
              <label className="min-w-0 text-sm font-semibold">
                {tr(["Grade fictif", "رتبة افتراضية"])}
                <select className={field} value={scenario.rank} onChange={(e) => setScenario({ ...scenario, rank: e.target.value })}>
                  {RANKS.map((rank, i) => <option key={rank.value} value={rank.value}>{isArabic ? ranks[i] : rank.label}</option>)}
                </select>
              </label>
              <label className="min-w-0 text-sm font-semibold">
                {tr(["Unité fictive", "وحدة افتراضية"])}
                <select className={field} value={scenario.unit} onChange={(e) => setScenario({ ...scenario, unit: e.target.value })}>
                  {UNITS.map((unit, i) => <option key={unit.value} value={unit.value}>{isArabic ? units[i] : unit.label}</option>)}
                </select>
              </label>
              <label className="min-w-0 text-sm font-semibold">
                {tr(["Situation fictive", "حالة افتراضية"])}
                <select className={field} value={scenario.survivor} onChange={(e) => setScenario({ ...scenario, survivor: e.target.value as EstimateInput["survivor"] })}>
                  <option value="non">{tr(["Retraite personnelle", "تقاعد شخصي"])}</option>
                  <option value="veuve">{tr(["Réversion · conjoint", "معاش المستحقين · الزوج أو الزوجة"])}</option>
                  <option value="orphelin">{tr(["Réversion · orphelin", "معاش المستحقين · يتيم"])}</option>
                </select>
              </label>
              <label className="min-w-0 text-sm font-semibold">
                {tr(["Taux d’invalidité fictif", "نسبة عجز افتراضية"])}
                <select className={field} value={scenario.disabilityRate} onChange={(e) => setScenario({ ...scenario, disabilityRate: Number(e.target.value) })}>
                  {DISABILITY_RATES.map((rate) => <option key={rate} value={rate}>{number.format(rate)} %</option>)}
                </select>
              </label>
              <label className="text-sm font-semibold sm:col-span-2">
                {tr(["Années de service fictives", "سنوات خدمة افتراضية"])} · {number.format(scenario.years)}
                <input type="range" className="mt-2 block min-h-11 w-full accent-gold-500" min={0} max={50} value={scenario.years} onChange={(e) => setScenario({ ...scenario, years: Number(e.target.value) })} />
              </label>
            </div>
            <div className="rounded-xl bg-army-950 p-6 text-white sm:p-8">
              <p className="flex items-center gap-2 text-sm font-bold text-gold-300"><ScanLine aria-hidden="true" size={20} /> {tr(["Résultat fictif", "نتيجة افتراضية"])}</p>
              <div aria-live="polite" aria-atomic="true">
                <p className="premium-heading mt-5 text-4xl font-semibold text-white">{number.format(result.monthlyXaf)} <span className="text-xl">{tr(["FCFA", "فرنك إفريقي"])}</span></p>
                <p className="mt-2 text-slate-200">{result.eligible ? tr(["Exemple mensuel, taux indicatif", "مثال شهري، نسبة تقريبية"]) + ` · ${number.format(result.ratePercent)} %` : tr(["Seuil illustratif non atteint.", "لم يتحقق الحدّ التوضيحي."])}</p>
              </div>
              <p className="mt-6 border-t border-white/25 pt-4 text-sm text-slate-200">{tr(["Les paramètres et le résultat restent dans ce navigateur.", "تبقى المعطيات والنتيجة داخل هذا المتصفح."])}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
