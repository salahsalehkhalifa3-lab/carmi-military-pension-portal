"use client";
import { Container, useTranslation, SectionTitle } from "./layout";
import { Banknote, ChevronDown, FileCheck2, HeartPulse, Landmark, LifeBuoy, Users } from "lucide-react";

const services = [
  { icon: Landmark, title: ["Retraite militaire", "التقاعد العسكري"], detail: ["Découvrir comment un parcours numérique pourrait guider la préparation d’une demande.", "مثال لمسار رقمي يوضّح كيفية التحضير لطلب التقاعد."] },
  { icon: HeartPulse, title: ["Pension d’invalidité", "معاش العجز"], detail: ["Visualiser les étapes d’information et d’orientation d’un futur service.", "مثال لمراحل الإرشاد والتوجيه في خدمة مستقبلية."] },
  { icon: Users, title: ["Ayants droit", "ذوو الحقوق"], detail: ["Consulter un exemple de fiche d’information destinée aux familles.", "معاينة نموذج بطاقة معلومات موجّهة إلى الأسر."] },
  { icon: FileCheck2, title: ["Réversion", "معاش المستحقين"], detail: ["Comprendre la structure d’un parcours d’orientation après un décès.", "التعرّف على شكل مسار التوجيه بعد الوفاة."] },
  { icon: Banknote, title: ["Bancarisation", "الخدمات المصرفية"], detail: ["Explorer une fiche destinée à expliquer les modalités de versement après validation.", "استكشاف بطاقة تشرح آليات الصرف بعد اعتمادها."] },
  { icon: LifeBuoy, title: ["Assistance administrative", "المساعدة الإدارية"], detail: ["Repérer les rubriques d’aide et les futurs canaux d’accompagnement.", "التعرّف على أقسام المساعدة وقنوات الدعم المستقبلية."] },
] as const;

export function Benefits() {
  const tr = useTranslation();

  return (
    <>
      <section id="prestations" className="premium-section">
        <Container>
          <SectionTitle label={tr(["Services proposés", "الخدمات المقترحة"])} title={tr(["Les prestations, parcours par parcours", "الخدمات ومساراتها"])} description={tr(["Six exemples de fiches pour illustrer le futur portail. Les conditions et pièces officielles restent à valider.", "ستة نماذج لتوضيح شكل البوابة المستقبلية. تبقى الشروط والوثائق الرسمية رهناً بالاعتماد."])} />
          <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, detail }) => (
              <details key={title[0]} className="premium-card group">
                <summary className="flex min-h-24 cursor-pointer list-none items-center gap-4 p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-army-50 text-army-900"><Icon aria-hidden="true" size={22} /></span>
                  <span className="min-w-0 flex-1 font-bold">{tr(title)}</span>
                  <ChevronDown aria-hidden="true" size={18} className="shrink-0 group-open:rotate-180" />
                </summary>
                <div className="border-t border-slate-200 p-5 text-sm leading-relaxed dark:border-white/15">
                  <p>{tr(detail)}</p>
                  <ol className="mt-3 list-decimal space-y-1 ps-5 text-slate-700 dark:text-slate-200">
                    <li>{tr(["Lire la fiche illustrative.", "قراءة النموذج التوضيحي."])}</li>
                    <li>{tr(["Repérer les rubriques et les étapes proposées.", "مراجعة الأقسام والخطوات المقترحة."])}</li>
                    <li>{tr(["Consulter les voies d’accompagnement après validation.", "مراجعة قنوات المساعدة بعد اعتمادها."])}</li>
                  </ol>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
