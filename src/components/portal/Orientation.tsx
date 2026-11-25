"use client";

import Link from "next/link";
import { useState } from "react";
import { Container, useTranslation } from "./layout";

const options = [
  { label: ["Préparer ma retraite", "الاستعداد للتقاعد"], detail: ["Explorez le parcours pensionné et les informations à faire confirmer avant un dépôt.", "استكشف مسار المتقاعد والمعلومات التي يلزم التحقق منها قبل الإيداع."], href: "/pensionne" },
  { label: ["M’orienter après un décès", "التوجيه بعد الوفاة"], detail: ["Consultez l’exemple de parcours pour les ayants droit.", "اطّلع على المسار التجريبي للمستحقين."], href: "/ayants-droit" },
  { label: ["Consulter un document", "الاطّلاع على وثيقة"], detail: ["Accédez au texte de création et aux ressources de démonstration.", "اطّلع على قانون الإنشاء والموارد التجريبية."], href: "/ressources" },
  { label: ["Comprendre le suivi", "فهم المتابعة"], detail: ["Consultez l’état du service et accédez au parcours fictif proposé.", "اطّلع على حالة الخدمة والمسار التجريبي المتاح."], href: "/suivi" },
] as const;

export function Orientation() {
  const tr = useTranslation();
  const [selection, setSelection] = useState<number | null>(null);
  const result = selection === null ? null : options[selection];

  return <section className="premium-section"><Container>
    <div className="premium-card max-w-3xl p-5 sm:p-8">
      <fieldset>
        <legend className="mb-3 font-bold">{tr(["Quel est votre besoin ?", "ما الذي تحتاج إليه؟"])}</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {options.map(({ label }, index) => <label key={label[0]} className="flex min-h-12 items-center gap-3 rounded-lg border p-3">
            <input type="radio" name="orientation" checked={selection === index} onChange={() => setSelection(index)} />
            {tr(label)}
          </label>)}
        </div>
      </fieldset>
      <p className="mt-5" role="status">{result ? tr(result.detail) : tr(["Choisissez une option pour afficher le parcours conseillé.", "اختر حاجة لعرض المسار المقترح."])}</p>
      {result && <Link className="premium-button mt-3 bg-army-900 text-white" href={result.href}>
        {tr(["Ouvrir le parcours conseillé", "فتح المسار المقترح"])}
      </Link>}
    </div>
  </Container></section>;
}
