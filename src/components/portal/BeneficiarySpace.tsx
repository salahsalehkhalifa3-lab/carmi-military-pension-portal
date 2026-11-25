"use client";

import Link from "next/link";
import { Container, useTranslation } from "./layout";

const retirement = [
  { href: "/prestations", label: ["Examiner les prestations présentées", "استعراض الخدمات المعروضة"] },
  { href: "/calendrier", label: ["Consulter le calendrier fictif", "الاطّلاع على التقويم الافتراضي"] },
  { href: "/simulateur", label: ["Essayer le simulateur fictif", "تجربة المحاكي الافتراضي"] },
] as const;
const survivors = [
  { href: "/prestations", label: ["Comprendre la réversion", "فهم معاش المستحقين"] },
  { href: "/demarches", label: ["Explorer les démarches guidées", "استكشاف الإجراءات الموجّهة"] },
  { href: "/ressources", label: ["Consulter les ressources", "الاطّلاع على الموارد"] },
] as const;

export function BeneficiarySpace({ survivor = false }: { survivor?: boolean }) {
  const tr = useTranslation();

  return <section className="premium-section"><Container>
    <h2 className="premium-heading mb-4 text-2xl font-semibold">{tr(["Services à explorer", "خدمات للاستكشاف"])}</h2>
    <ul className="grid gap-3 md:grid-cols-3">
      {(survivor ? survivors : retirement).map(({ href, label }) => <li key={href}>
        <Link className="premium-card flex min-h-16 items-center p-4 font-semibold underline underline-offset-4" href={href}>{tr(label)}</Link>
      </li>)}
    </ul>
    <details className="premium-card mt-5 p-4">
      <summary className="cursor-pointer font-semibold">{tr(["Préparer mes questions à la CARMI", "إعداد أسئلتي للصندوق"])}</summary>
      <ul className="mt-3 list-disc space-y-2 ps-5">
        <li>{tr(survivor ? ["Quelles situations familiales sont couvertes ?", "ما الحالات الأسرية المشمولة؟"] : ["Quelles sont les conditions applicables à ma situation ?", "ما الشروط المنطبقة على حالتي؟"])}</li>
        <li>{tr(["Quelles pièces et quels délais sont confirmés pour mon parcours ?", "ما الوثائق والآجال المؤكدة لمساري؟"])}</li>
        <li>{tr(["Quel canal officiel utiliser pour le dépôt ou une réclamation ?", "ما القناة الرسمية للإيداع أو الشكوى؟"])}</li>
      </ul>
    </details>
  </Container></section>;
}
