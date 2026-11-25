"use client";

import { creationLaw } from "@/lib/portal-pages";
import { editorial } from "@/lib/editorial";
import { Container, useTranslation } from "./layout";

export function Editorial({ slug }: { slug: string }) {
  const tr = useTranslation();
  return (
    <section aria-label={tr(["Informations et sources", "المعلومات والمصادر"])} className="premium-section">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2">
          {editorial[slug].paragraphs.map(({ title, body, article }) => (
            <article key={title[0]} className="premium-card p-5">
              <h2 className="premium-heading text-2xl font-semibold">{tr(title)}</h2>
              <p className="mt-3 leading-relaxed">{tr(body)}</p>
              {article ? <a className="mt-3 inline-flex min-h-11 items-center text-sm font-bold underline" href={creationLaw}>
                {tr(["Journal officiel · art.", "الجريدة الرسمية · المادة"])} {article}
              </a> : <p className="mt-3 text-sm font-semibold">{tr(["Contenu de démonstration ou à valider", "محتوى تجريبي أو رهناً بالاعتماد"])}</p>}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
