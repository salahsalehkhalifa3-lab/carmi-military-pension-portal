"use client";
import { Container, useTranslation, SectionTitle } from "./layout";
import Link from "next/link";



export function News() {
  const tr = useTranslation();

  return (
    <>
      <section id="actualites" className="premium-section bg-army-50 dark:bg-tactical-900">
        <Container>
          <div className="grid gap-8 max-w-3xl">
            <div>
              <SectionTitle label={tr(["Exemple éditorial", "مثال تحريري"])} title={tr(["Actualités", "الأخبار"])} />
              <article className="premium-card p-5">
                <p className="text-sm font-bold text-gold-700 dark:text-gold-300">{tr(["Communiqué fictif · 1er janvier 2030", "بيان افتراضي · ١ يناير ٢٠٣٠"])}</p>
                <h3 className="mt-2 font-bold">{tr(["Présentation d’un calendrier de démonstration", "عرض تقويم تجريبي"])}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{tr(["Cet exemple illustre la façon dont un futur communiqué pourrait renvoyer vers le calendrier.", "يوضّح المثال كيف يمكن لبيان مستقبلي أن يحيل إلى التقويم."])}</p>
                <Link href="/calendrier" className="mt-3 inline-flex min-h-11 items-center font-semibold underline">{tr(["Voir le calendrier fictif", "عرض التقويم الافتراضي"])}</Link>
              </article>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
