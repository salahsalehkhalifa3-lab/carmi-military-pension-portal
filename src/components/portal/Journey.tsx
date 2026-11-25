"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, useTranslation } from "./layout";

const steps = [
  ["Choisir le parcours", "اختيار المسار"],
  ["Relire les informations à confirmer", "مراجعة المعلومات المطلوب تأكيدها"],
  ["Voir le suivi fictif", "عرض المتابعة الافتراضية"],
] as const;
const choices = {
  retraite: ["Retraite militaire", "التقاعد العسكري"],
  reversion: ["Réversion", "معاش المستحقين"],
} as const;
type Choice = keyof typeof choices;

export function Journey({ initial = "retraite", guided = false }: { initial?: Choice; guided?: boolean }) {
  const tr = useTranslation();
  const [choice, setChoice] = useState(initial);
  const [step, setStep] = useState(0);
  return (
    <section className="premium-section bg-army-50 dark:bg-tactical-900">
      <Container>
        <div className="premium-card max-w-3xl p-5 sm:p-8">
          <p className="mb-2 text-sm font-bold text-gold-700 dark:text-gold-300">{tr(["Prototype · dossier fictif · aucun enregistrement", "نموذج تجريبي · ملف افتراضي · لا حفظ للبيانات"])}</p>
          {guided && <label className="mb-5 block font-semibold">
            {tr(["Choisir une prestation", "اختر خدمة"])}
            <select className="premium-card mt-2 block min-h-11 max-w-full px-3" value={choice} onChange={(e) => { setChoice(e.target.value as Choice); setStep(0); }}>
              {Object.entries(choices).map(([value, label]) => <option key={value} value={value}>{tr(label)}</option>)}
            </select>
          </label>}
          <h2 className="premium-heading text-2xl font-semibold">{tr(choices[choice])}</h2>
          <ol className="mt-4 grid gap-2 sm:grid-cols-3">
            {(guided ? steps : [
              ["Réception fictive", "استلام افتراضي"],
              ["Examen fictif", "دراسة افتراضية"],
              ["Décision de démonstration", "قرار تجريبي"],
            ] as const).map((label, index) => (
              <li key={label[0]} aria-current={index === step ? "step" : undefined} className={index === step ? "rounded-lg bg-army-900 p-3 text-white" : "rounded-lg border border-slate-400 p-3"}>
                <button type="button" className="min-h-11 w-full text-start font-semibold" onClick={() => setStep(index)}>{index+1}. {tr(label)}</button>
              </li>
            ))}
          </ol>
          <p className="mt-4" role="status">{step === 0
            ? tr(["Le scénario commence sans matricule ni coordonnées.", "يبدأ السيناريو دون رقم تسجيل أو بيانات اتصال."])
            : step === 1 ? tr(["Vérifiez les rubriques à faire confirmer avant tout dépôt réel.", "راجع الأقسام التي تحتاج إلى تأكيد قبل أي إيداع فعلي."])
            : tr(["La décision est simulée et n’ouvre aucun droit.", "القرار افتراضي ولا ينشئ أي حق."])}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button type="button" className="premium-button border border-slate-500 disabled:opacity-50" disabled={step===0} onClick={() => setStep(step-1)}>{tr(["Précédent", "السابق"])}</button>
            <button type="button" className="premium-button bg-army-900 text-white disabled:opacity-50" disabled={step===2} onClick={() => setStep(step+1)}>{tr(["Suivant", "التالي"])}</button>
            <Link className="premium-button underline" href={guided ? (choice==="retraite" ? "/pensionne" : "/ayants-droit") : "/calendrier"}>{guided ? tr(["Ouvrir l’espace fictif", "فتح الفضاء التجريبي"]) : tr(["Calendrier fictif", "التقويم الافتراضي"])}</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
