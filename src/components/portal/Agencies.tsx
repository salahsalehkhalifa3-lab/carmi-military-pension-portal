"use client";
import { Container, useTranslation, SectionTitle } from "./layout";
import { Building2 } from "lucide-react";



export function Agencies() {
  const tr = useTranslation();

  return (
    <>
<section className="premium-section"><Container><div className="max-w-3xl">              <SectionTitle label={tr(["Exemple fictif", "مثال افتراضي"])} title={tr(["Agences et guichets", "الفروع ومكاتب الخدمة"])} />
              <article className="premium-card p-5">
                <Building2 aria-hidden="true" className="mb-3 text-gold-700 dark:text-gold-300" />
                <h3 className="font-bold">{tr(["Guichet de démonstration", "مكتب خدمة تجريبي"])}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{tr(["Adresse, horaires, coordonnées et banques partenaires à renseigner après validation.", "يُضاف العنوان وساعات العمل وبيانات الاتصال والبنوك الشريكة بعد الاعتماد."])}</p>
              </article></div></Container></section>
    </>
  );
}
