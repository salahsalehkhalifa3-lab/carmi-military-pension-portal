"use client";

import { useState } from "react";
import type { Bilingual } from "@/lib/editorial";
import { Container, useTranslation } from "./layout";

const files = [
  { id: "DEMO-01", kind: "retirement", title: ["Retraite", "التقاعد"], detail: ["Vérifier la lisibilité du parcours de préparation et du relevé fictif.", "راجع وضوح مسار الإعداد والكشف الافتراضي."] },
  { id: "DEMO-02", kind: "family", title: ["Réversion", "معاش المستحقين"], detail: ["Relire la fiche d’orientation dédiée aux familles.", "راجع بطاقة التوجيه الخاصة بالأسر."] },
  { id: "DEMO-03", kind: "retirement", title: ["Orientation", "التوجيه"], detail: ["Contrôler les liens entre les services de démonstration.", "تحقق من الروابط بين الخدمات التجريبية."] },
] as const;

const documents = [
  { id: "DOC-01", title: ["Aide-mémoire pensionné", "مذكرة للمتقاعد"] },
  { id: "DOC-02", title: ["Fiche d’orientation famille", "بطاقة توجيه الأسرة"] },
] as const;

const drafts = [
  { id: "ACT-01", title: ["Présentation des parcours", "عرض المسارات"], body: ["Proposition de contenu pour expliquer les espaces fictifs aux visiteurs.", "مقترح محتوى لشرح المساحات التجريبية للزوار."] },
  { id: "ACT-02", title: ["Guide des ressources", "دليل الموارد"], body: ["Proposition de présentation du centre documentaire et des textes de référence.", "مقترح للتعريف بمركز الوثائق والنصوص المرجعية."] },
] as const;

const sections = [
  { id: "cases", title: ["Dossiers", "الملفات"] },
  { id: "documents", title: ["Documents", "الوثائق"] },
  { id: "drafts", title: ["Brouillons", "المسودات"] },
  { id: "activity", title: ["Journal d’activité", "سجل النشاط"] },
] as const;

const initialReviews = ["DEMO-03"];

export function Administration() {
  const tr = useTranslation();
  const [active, setActive] = useState<(typeof sections)[number]["id"]>("cases");
  const [reviewed, setReviewed] = useState(initialReviews);
  const [checked, setChecked] = useState<string[]>([]);
  const [draftsReady, setDraftsReady] = useState<string[]>([]);
  const [status, setStatus] = useState("all");
  const [kind, setKind] = useState("all");
  const [activity, setActivity] = useState<Array<{ id: string; label: Bilingual }>>([]);

  const visible = files.filter((file) =>
    (kind === "all" || file.kind === kind) &&
    (status === "all" || reviewed.includes(file.id) === (status === "reviewed"))
  );

  function toggle(list: string[], setList: (value: string[]) => void, id: string, done: Bilingual, undone: Bilingual) {
    const wasDone = list.includes(id);
    setList(wasDone ? list.filter((entry) => entry !== id) : [...list, id]);
    setActivity((entries) => [{ id, label: wasDone ? undone : done }, ...entries]);
  }

  return <section className="premium-section"><Container>
    <div className="premium-card p-5 sm:p-8">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          { value: files.length - reviewed.length, label: ["Dossiers à examiner", "ملفات للمراجعة"] },
          { value: reviewed.length, label: ["Dossiers revus", "ملفات تمت مراجعتها"] },
          { value: checked.length, label: ["Documents vérifiés", "وثائق تم التحقق منها"] },
          { value: draftsReady.length, label: ["Brouillons relus", "مسودات تمت مراجعتها"] },
        ].map(({ value, label }) => <div key={label[0]} className="rounded-lg bg-army-900 p-4 text-white">
          <strong className="block text-2xl">{value}</strong><span className="text-sm">{tr(label as [string, string])}</span>
        </div>)}
      </div>
      <div className="my-5 flex flex-wrap gap-2">
        {sections.map(({ id, title }) => <button key={id} type="button" aria-pressed={active === id} aria-controls="admin-panel"
          className="premium-button border aria-pressed:bg-army-900 aria-pressed:text-white" onClick={() => setActive(id)}>{tr(title)}</button>)}
      </div>
      <div id="admin-panel" className="rounded-xl border p-4">
        {active === "cases" && <>
          <div className="flex flex-wrap gap-4">
            <label className="grid gap-1">{tr(["Statut", "الحالة"])}
              <select className="premium-card min-h-11 px-3" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="all">{tr(["Tous les statuts", "كل الحالات"])}</option>
                <option value="pending">{tr(["À examiner", "قيد المراجعة"])}</option>
                <option value="reviewed">{tr(["Revu", "تمت المراجعة"])}</option>
              </select>
            </label>
            <label className="grid gap-1">{tr(["Type de parcours", "نوع المسار"])}
              <select className="premium-card min-h-11 px-3" value={kind} onChange={(e) => setKind(e.target.value)}>
                <option value="all">{tr(["Tous les types", "كل الأنواع"])}</option>
                <option value="retirement">{tr(["Pensionné", "متقاعد"])}</option>
                <option value="family">{tr(["Ayant droit", "مستحق"])}</option>
              </select>
            </label>
          </div>
          <p className="my-3 text-sm" role="status">{visible.length} {tr(["exemple(s) affiché(s)", "من الأمثلة المعروضة"])}</p>
          <div className="space-y-3">
            {visible.map((file) => <details className="rounded-lg border p-3" key={file.id}>
              <summary className="cursor-pointer font-semibold"><bdi>{file.id}</bdi> · {tr(file.title)} · {tr(reviewed.includes(file.id) ? ["Revu", "تمت المراجعة"] : ["À examiner", "قيد المراجعة"])}</summary>
              <p className="mt-3">{tr(file.detail)}</p>
              <button type="button" className="premium-button mt-2 border" onClick={() => toggle(reviewed, setReviewed, file.id, ["Dossier revu", "تمت مراجعة الملف"], ["Dossier remis en examen", "أعيد الملف للمراجعة"])}>
                {tr(reviewed.includes(file.id) ? ["Remettre en examen", "إعادة للمراجعة"] : ["Marquer comme revu", "تحديد كمراجَع"])}
              </button>
            </details>)}
          </div>
        </>}
        {active === "documents" && <ul className="grid gap-3 md:grid-cols-2">
          {documents.map(({ id, title }) => <li className="rounded-lg border p-3" key={id}>
            <h2 className="font-bold"><bdi>{id}</bdi> · {tr(title)}</h2>
            <p className="mt-2">{tr(checked.includes(id) ? ["Exemple vérifié", "مثال تم التحقق منه"] : ["Exemple à vérifier", "مثال للتحقق"])}</p>
            <button type="button" className="premium-button mt-2 border" onClick={() => toggle(checked, setChecked, id, ["Document vérifié", "تم التحقق من الوثيقة"], ["Vérification annulée", "أُلغي التحقق"])}>
              {tr(checked.includes(id) ? ["Annuler la vérification", "إلغاء التحقق"] : ["Marquer comme vérifié", "تحديد كمتحقق منه"])}
            </button>
          </li>)}
        </ul>}
        {active === "drafts" && <div className="space-y-3">
          {drafts.map(({ id, title, body }) => <details className="rounded-lg border p-3" key={id}>
            <summary className="cursor-pointer font-bold"><bdi>{id}</bdi> · {tr(title)}</summary>
            <p className="mt-2">{tr(body)}</p>
            <button type="button" className="premium-button mt-2 border" onClick={() => toggle(draftsReady, setDraftsReady, id, ["Brouillon relu", "تمت مراجعة المسودة"], ["Brouillon remis en relecture", "أعيدت المسودة للمراجعة"])}>
              {tr(draftsReady.includes(id) ? ["Remettre en relecture", "إعادة للمراجعة"] : ["Marquer comme relu", "تحديد كمراجَع"])}
            </button>
          </details>)}
        </div>}
        {active === "activity" && <>
          {activity.length === 0 ? <p>{tr(["Aucune action dans cette session.", "لا توجد إجراءات في هذه الجلسة."])}</p> :
            <ol className="list-decimal space-y-2 ps-5">{activity.map((entry, index) => <li key={activity.length - index}><bdi>{entry.id}</bdi> · {tr(entry.label)}</li>)}</ol>}
        </>}
      </div>
    </div>
  </Container></section>;
}
