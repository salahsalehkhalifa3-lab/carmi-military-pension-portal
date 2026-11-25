"use client";

import Link from "next/link";
import { creationLaw } from "@/lib/portal-pages";
import { Container, useTranslation } from "./layout";
import { Faq } from "./Faq";

export function Resources() {
  const tr = useTranslation();

  return <section className="premium-section"><Container>
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <article className="premium-card p-5">
          <h2 className="font-bold">{tr(["Textes de référence", "النصوص المرجعية"])}</h2>
          <a className="inline-flex min-h-11 items-center underline" href={creationLaw}>
            {tr(["Journal officiel · Loi de création de la CARMI (PDF)", "الجريدة الرسمية · قانون إنشاء الصندوق (PDF)"])}
          </a>
        </article>
        <article className="premium-card p-5">
          <h2 className="font-bold">{tr(["Guides de démonstration", "الأدلة التجريبية"])}</h2>
          <Link className="inline-flex min-h-11 items-center underline" href="/demarches">
            {tr(["Consulter les démarches guidées", "الاطّلاع على الإجراءات الموجّهة"])}
          </Link>
          <p className="text-sm">{tr(["Les formulaires de dépôt seront ajoutés après validation par la CARMI.", "تُضاف نماذج الإيداع بعد اعتماد الصندوق لها."])}</p>
        </article>
        <Link className="premium-button border" href="/recherche">{tr(["Rechercher dans le portail", "البحث في البوابة"])}</Link>
      </div>
      <Faq />
    </div>
  </Container></section>;
}
