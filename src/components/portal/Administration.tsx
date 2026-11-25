"use client";

import { useState } from "react";
import { Container, useTranslation } from "./layout";

const initial = [
  { id: "DEMO-01", subject: ["Retraite", "التقاعد"], reviewed: false },
  { id: "DEMO-02", subject: ["Réversion", "معاش المستحقين"], reviewed: false },
  { id: "DEMO-03", subject: ["Orientation", "التوجيه"], reviewed: true },
] as const;

export function Administration() {
  const tr = useTranslation();
  const [cases, setCases] = useState<Array<{ id: string; subject: readonly [string, string]; reviewed: boolean }>>([...initial]);
  const [pendingOnly, setPendingOnly] = useState(false);
  const pending = cases.filter((item) => !item.reviewed);
  const visible = pendingOnly ? pending : cases;

  return <section className="premium-section"><Container>
    <div className="premium-card p-5 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <label className="flex min-h-11 items-center gap-2">
          <input type="checkbox" checked={pendingOnly} onChange={(event) => setPendingOnly(event.target.checked)} />
          {tr(["À examiner uniquement", "عرض ما يحتاج إلى المراجعة فقط"])}
        </label>
        <button type="button" className="premium-button border" onClick={() => setCases([...initial])}>{tr(["Réinitialiser", "إعادة التعيين"])}</button>
      </div>
      <p className="my-3" role="status">{pending.length} {tr(["à examiner", "قيد المراجعة"])}</p>
      {visible.length === 0 && <p>{tr(["Aucun exemple à examiner.", "لا توجد أمثلة للمراجعة."])}</p>}
      <ul className="grid gap-3 md:grid-cols-3">
        {visible.map((item) => <li className="rounded-lg border p-4" key={item.id}>
          <h2 className="font-bold"><bdi>{item.id}</bdi> · {tr(item.subject)}</h2>
          <p className="mt-2">{item.reviewed ? tr(["Revu", "تمت المراجعة"]) : tr(["À examiner", "قيد المراجعة"])}</p>
          <button type="button" className="mt-2 min-h-11 underline" onClick={() => setCases(cases.map((entry) => entry.id === item.id ? { ...entry, reviewed: !entry.reviewed } : entry))}>
            {item.reviewed ? tr(["Remettre en examen", "إعادة للمراجعة"]) : tr(["Marquer comme revu", "تحديد كمراجَع"])}
          </button>
        </li>)}
      </ul>
    </div>
  </Container></section>;
}
