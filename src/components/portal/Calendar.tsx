"use client";

import { useState } from "react";
import { Container, useTranslation } from "./layout";

const dates = [
  ["Janvier · 2–3 janvier 2030", "يناير · ٢–٣ يناير ٢٠٣٠"],
  ["Février · 4–5 février 2030", "فبراير · ٤–٥ فبراير ٢٠٣٠"],
  ["Mars · 6–7 mars 2030", "مارس · ٦–٧ مارس ٢٠٣٠"],
] as const;

export function Calendar() {
  const tr = useTranslation();
  const [month, setMonth] = useState("");
  const filtered = dates.filter((_, i) => month === "" || Number(month) === i);
  return (
    <section className="premium-section bg-army-50 dark:bg-tactical-900">
      <Container>
        <label className="block font-bold">
          {tr(["Filtrer par mois fictif", "التصفية حسب الشهر الافتراضي"])}
          <select className="premium-card mt-2 block min-h-11 max-w-full px-3" value={month} onChange={(e) => setMonth(e.target.value)}>
            <option value="">{tr(["Tous les mois", "جميع الأشهر"])}</option>
            {dates.map((label,i) => <option key={label[0]} value={i}>{tr(label)}</option>)}
          </select>
        </label>
        <p className="my-3" role="status">{filtered.length} {tr(["fenêtre(s) fictive(s)", "نافذة افتراضية"])}</p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((label) => <li className="premium-card p-5" key={label[0]}><h2 className="font-bold">{tr(label)}</h2><p className="mt-2">{tr(["Statut fictif · Planifié", "حالة افتراضية · مجدول"])}</p></li>)}
        </ul>
      </Container>
    </section>
  );
}
