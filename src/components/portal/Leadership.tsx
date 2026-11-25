"use client";

import Link from "next/link";
import { Compass, Landmark, Layers3, LockKeyhole } from "lucide-react";
import { creationLaw } from "@/lib/portal-pages";
import { Container, useTranslation } from "./layout";

const proposals = [
  { icon: Layers3, title: ["Structurer l’information", "تنظيم المعلومات"], detail: ["Fiches et calendrier lisibles.", "بطاقات وتقويم واضحان."] },
  { icon: Compass, title: ["Guider les usagers", "توجيه المستفيدين"], detail: ["Étapes et points d’orientation.", "خطوات ونقاط توجيه."] },
  { icon: LockKeyhole, title: ["Sécuriser les démarches", "تأمين الإجراءات"], detail: ["Accès et traitement à valider.", "ضوابط وصول ومعالجة تُعتمد لاحقاً."] },
] as const;

export function Leadership() {
  const tr = useTranslation();
  return (
    <>
      <section className="premium-section bg-army-50 dark:bg-tactical-900" aria-labelledby="leadership-role">
        <Container>
          <div className="premium-card grid items-center gap-7 p-5 sm:p-8 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-12">
            <figure className="mx-auto w-full max-w-64">
              <div className="premium-emblem grid aspect-[4/5] place-items-center bg-army-950 p-8 text-gold-300">
                <Landmark aria-hidden="true" className="size-16 opacity-90" strokeWidth={1.3} />
              </div>
              <figcaption className="mt-3 text-center text-sm text-slate-700 dark:text-slate-200">
                {tr(["Portrait en attente de validation", "الصورة في انتظار الاعتماد"])}
              </figcaption>
            </figure>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold-700 dark:text-gold-300">
                {tr(["Gouvernance de la Caisse", "حوكمة الصندوق"])}
              </p>
              <h2 id="leadership-role" className="premium-heading text-3xl font-semibold sm:text-4xl">
                {tr(["Direction générale de la CARMI", "الإدارة العامة لصندوق تقاعد العسكريين"])}
              </h2>
              <p className="mt-4 max-w-prose leading-relaxed">
                {tr(["La Direction générale et le conseil d’administration sont les deux organes d’administration et de gestion définis par la loi de création.", "الإدارة العامة ومجلس الإدارة هما هيئتا الإدارة والتسيير اللتان يحددهما قانون الإنشاء."])}
              </p>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                {tr(["Le nom et le portrait du titulaire seront renseignés après confirmation documentaire et autorisation de diffusion.", "يضاف اسم شاغل المنصب وصورته بعد التحقق من الوثائق والحصول على إذن النشر."])}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                <a href={creationLaw} className="inline-flex min-h-11 items-center font-bold underline underline-offset-4">{tr(["Journal officiel · article 6 (PDF)", "الجريدة الرسمية · المادة ٦ (PDF)"])}</a>
                <Link href="/organisation" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4">{tr(["Voir l’organisation", "عرض التنظيم"])}</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section id="commandement" className="premium-section bg-army-950 text-white" aria-labelledby="leadership-proposals">
        <Container>
          <h2 id="leadership-proposals" className="premium-heading mb-5 text-3xl font-semibold">
            {tr(["Axes de modernisation proposés", "محاور التحديث المقترحة"])}
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {proposals.map(({ icon: Icon, title, detail }) => (
              <article key={title[0]} className="rounded-xl border border-white/25 p-4">
                <Icon aria-hidden="true" className="mb-4 text-gold-300" size={24} />
                <h3 className="font-bold">{tr(title)}</h3>
                <p className="mt-2 text-sm text-slate-200">{tr(detail)}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
