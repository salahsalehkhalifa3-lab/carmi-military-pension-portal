"use client";
import { Container, useTranslation } from "./layout";
import { Compass, Layers3, LockKeyhole } from "lucide-react";



export function Leadership() {
  const tr = useTranslation();

  return (
    <>
      <section id="commandement" className="premium-section bg-army-950 text-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr]">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold-300">{tr(["Organisation", "التنظيم"])}</p>
              <h2 className="premium-heading text-3xl font-semibold sm:text-4xl">{tr(["Direction générale de la CARMI", "الإدارة العامة لصندوق تقاعد العسكريين"])}</h2>
              <p className="mt-4 max-w-lg leading-relaxed text-slate-200">{tr(["La Caisse gère les régimes de pensions militaires destinés aux affiliés et à leurs ayants droit. Le portail proposé vise à rendre les informations et les parcours plus lisibles.", "يدير الصندوق أنظمة المعاشات العسكرية للمنتسبين وذوي حقوقهم. وتهدف البوابة المقترحة إلى تسهيل فهم المعلومات والإجراءات."])}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {([
                { icon: Layers3, title: ["Structurer l’information", "تنظيم المعلومات"], detail: ["Fiches et calendrier lisibles.", "بطاقات وتقويم واضحان."] },
                { icon: Compass, title: ["Guider les usagers", "توجيه المستفيدين"], detail: ["Étapes et points d’orientation.", "خطوات ونقاط توجيه."] },
                { icon: LockKeyhole, title: ["Sécuriser les démarches", "تأمين الإجراءات"], detail: ["Accès et traitement à valider.", "ضوابط وصول ومعالجة تُعتمد لاحقاً."] },
              ] as const).map(({ icon: Icon, title, detail }) => (
                <article key={title[0]} className="rounded-xl border border-white/20 p-4">
                  <Icon aria-hidden="true" className="mb-4 text-gold-300" size={24} />
                  <h3 className="font-bold">{tr(title)}</h3>
                  <p className="mt-2 text-sm text-slate-200">{tr(detail)}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
