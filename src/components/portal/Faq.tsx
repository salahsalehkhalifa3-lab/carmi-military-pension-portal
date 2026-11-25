"use client";
import { Container, useTranslation, SectionTitle } from "./layout";
import { ChevronDown } from "lucide-react";

import { questions } from "@/lib/editorial";


export function Faq() {
  const tr = useTranslation();

  return (
    <>
            <div>
              <SectionTitle label={tr(["Découvrir le projet", "التعرّف على المشروع"])} title={tr(["Questions fréquentes", "الأسئلة الشائعة"])} />
              <div className="space-y-2">
                {questions.map(({ q, a }) => (
                  <details className="premium-card group" key={q[0]}>
                    <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 p-4 text-sm font-bold">
                      {tr(q)} <ChevronDown aria-hidden="true" size={18} className="shrink-0 group-open:rotate-180" />
                    </summary>
                    <p className="px-4 pb-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{tr(a)}</p>
                  </details>
                ))}
              </div>
            </div>
    </>
  );
}
