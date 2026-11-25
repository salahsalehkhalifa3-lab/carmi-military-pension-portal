"use client";

import { useState } from "react";
import { Bell, FileText, FolderOpen, Wallet } from "lucide-react";
import { Container, useTranslation } from "./layout";

const sections = [
  { id: "payments", icon: Wallet, title: ["Paiements", "المدفوعات"] },
  { id: "cases", icon: FolderOpen, title: ["Dossier et étapes", "الملف والمراحل"] },
  { id: "alerts", icon: Bell, title: ["Notifications", "الإشعارات"] },
  { id: "documents", icon: FileText, title: ["Documents", "الوثائق"] },
] as const;

const retirement = {
  reference: "DEMO-PEN-01",
  title: ["Dossier de retraite fictif", "ملف تقاعد افتراضي"],
  stages: [
    ["Préparation du dossier", "إعداد الملف"],
    ["Examen de l’exemple", "دراسة المثال"],
    ["Clôture de la simulation", "إغلاق المحاكاة"],
  ],
  documents: [
    { title: ["Aide-mémoire de préparation", "مذكرة الإعداد"], body: ["Relever les questions sur les conditions, les pièces et le canal de dépôt à confirmer auprès de la CARMI.", "دوّن الأسئلة حول الشروط والوثائق وقناة الإيداع للتحقق منها لدى الصندوق."] },
    { title: ["Relevé de paiement fictif", "كشف دفع افتراضي"], body: ["Exemple de relevé indiquant un cycle simulé et son statut.", "مثال لكشف يعرض دورة دفع افتراضية وحالتها."] },
  ],
} as const;

const survivor = {
  reference: "DEMO-FAM-02",
  title: ["Dossier familial fictif", "ملف أسري افتراضي"],
  stages: [
    ["Identifier les informations à faire confirmer", "تحديد المعلومات المطلوب تأكيدها"],
    ["Préparer les questions de la famille", "إعداد أسئلة الأسرة"],
    ["Simuler l’examen du dossier", "محاكاة دراسة الملف"],
    ["Relire la synthèse du parcours", "مراجعة ملخص المسار"],
  ],
  documents: [
    { title: ["Liste de questions pour la famille", "قائمة أسئلة للأسرة"], body: ["Demander quelles situations ouvrent droit à une prestation, quelles pièces sont requises et quel service peut renseigner la famille.", "استفسر عن الحالات المشمولة والوثائق المطلوبة والجهة التي يمكنها إرشاد الأسرة."] },
    { title: ["Fiche de suivi fictive", "بطاقة متابعة افتراضية"], body: ["Exemple de préparation du suivi d’une démarche, de la prise d’information à la relecture de la synthèse.", "مثال لتحضير متابعة الإجراء من جمع المعلومات إلى مراجعة الملخص."] },
  ],
} as const;

export function BeneficiaryDashboard({ family = false }: { family?: boolean }) {
  const tr = useTranslation();
  const [active, setActive] = useState<(typeof sections)[number]["id"]>(family ? "cases" : "payments");
  const [stage, setStage] = useState(0);
  const [read, setRead] = useState(false);
  const demo = family ? survivor : retirement;

  return <section className="premium-section bg-army-50 dark:bg-tactical-900" aria-labelledby="dashboard-title">
    <Container>
      <div className="premium-card p-5 sm:p-8">
        <h2 id="dashboard-title" className="premium-heading text-2xl font-semibold">{tr(family ? ["Parcours de la famille", "مسار الأسرة"] : ["Tableau de bord du pensionné", "لوحة المتقاعد"])}</h2>
        <p className="mt-2 text-sm">{tr(["Exemples fictifs. Les actions restent dans cette page.", "أمثلة افتراضية. تبقى الإجراءات داخل هذه الصفحة."])}</p>
        <div className="my-5 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {sections.map(({ id, icon: Icon, title }) => <button key={id} type="button" aria-pressed={active === id} aria-controls="dashboard-panel"
            className="flex min-h-12 items-center gap-2 rounded-lg border p-3 text-start font-semibold aria-pressed:bg-army-900 aria-pressed:text-white"
            onClick={() => setActive(id)}><Icon size={18} className="shrink-0" aria-hidden="true" />{tr(title)}</button>)}
        </div>
        <div id="dashboard-panel" className="rounded-xl border p-4 sm:p-5">
          {active === "payments" && <>
            <h3 className="font-bold">{tr(["Cycles de paiement fictifs", "دورات دفع افتراضية"])}</h3>
            {family ? <p className="mt-3">{tr(["Aucun paiement dans cet exemple. La famille prépare les questions à poser au service compétent.", "لا توجد دفعة في هذا المثال. تُعد الأسرة أسئلتها للجهة المختصة."])}</p> :
              <ul className="mt-3 divide-y">
                <li className="flex flex-wrap justify-between gap-x-4 py-3">{tr(["Cycle de démonstration 01", "الدورة التجريبية ٠١"])} <strong>{tr(["Versement simulé", "دفع افتراضي"])}</strong></li>
                <li className="flex flex-wrap justify-between gap-x-4 py-3">{tr(["Cycle de démonstration 02", "الدورة التجريبية ٠٢"])} <strong>{tr(["Prévision fictive", "توقع افتراضي"])}</strong></li>
              </ul>}
          </>}
          {active === "cases" && <>
            <h3 className="font-bold">{tr(demo.title)} · <bdi>{demo.reference}</bdi></h3>
            <ol className="mt-4 space-y-2">
              {demo.stages.map((label, index) => <li key={label[0]} aria-current={index === stage ? "step" : undefined}
                className="flex flex-wrap justify-between gap-2 rounded-lg border p-3 aria-[current=step]:border-gold-600">
                <span>{tr(label)}</span>
                <span className="font-semibold">{tr(index < stage ? ["Terminée", "مكتملة"] : index === stage ? ["En cours", "قيد التنفيذ"] : ["À venir", "لاحقة"])}</span>
              </li>)}
            </ol>
            <p className="my-3 text-sm" role="status">{tr(["Étape", "المرحلة"])} {stage + 1} / {demo.stages.length}</p>
            <div className="flex flex-wrap gap-2">
              <button type="button" className="premium-button border disabled:opacity-50" disabled={stage === 0} onClick={() => setStage(stage - 1)}>{tr(["Précédente", "السابقة"])}</button>
              <button type="button" className="premium-button bg-army-900 text-white disabled:opacity-50" disabled={stage === demo.stages.length - 1} onClick={() => setStage(stage + 1)}>{tr(["Étape suivante", "المرحلة التالية"])}</button>
            </div>
          </>}
          {active === "alerts" && <>
            <h3 className="font-bold">{tr(["Notification fictive", "إشعار افتراضي"])}</h3>
            <p className="mt-3">{tr(family ? ["L’aide-mémoire de la famille peut être consulté dans Documents.", "يمكن الاطّلاع على مذكرة الأسرة في قسم الوثائق."] : ["Un relevé de démonstration est disponible dans Documents.", "يتوفر كشف تجريبي في قسم الوثائق."])}</p>
            <button type="button" className="premium-button mt-3 border" aria-pressed={read} onClick={() => setRead(!read)}>
              {tr(read ? ["Marquer comme non lue", "تحديد كغير مقروء"] : ["Marquer comme lue", "تحديد كمقروء"])}
            </button>
          </>}
          {active === "documents" && <div className="space-y-3">
            {demo.documents.map(({ title, body }) => <details key={title[0]} className="rounded-lg border p-3">
              <summary className="cursor-pointer font-semibold">{tr(title)} · {tr(["Exemple", "مثال"])}</summary>
              <p className="mt-3">{tr(body)}</p>
            </details>)}
          </div>}
        </div>
      </div>
    </Container>
  </section>;
}
