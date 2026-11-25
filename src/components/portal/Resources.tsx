"use client";

import Link from "next/link";
import { useState } from "react";
import { editorial, questions } from "@/lib/editorial";
import { creationLaw } from "@/lib/portal-pages";
import { Container, useTranslation } from "./layout";
import { Faq } from "./Faq";

function normalize(value: string) {
  return value.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase();
}

const entries = Object.entries(editorial).flatMap(([slug, page]) => {
  const paragraphs = slug === "ressources"
    ? [...page.paragraphs, ...questions.map(({ q, a }) => ({ title: q, body: a }))]
    : page.paragraphs;
  return paragraphs.map((item) => ({
    slug, pageTitle: page.title, ...item,
    text: normalize([...page.title, ...page.summary, ...item.title, ...item.body].join(" ")),
  }));
});

export function Resources() {
  const tr = useTranslation();
  const [query, setQuery] = useState("");
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  const matches = terms.length ? entries.filter(({ text }) => terms.every((term) => text.includes(term))) : [];

  return (
    <section className="premium-section">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <a className="inline-flex min-h-11 items-center font-bold underline" href={creationLaw}>
              {tr(["Journal officiel · Loi de création de la CARMI (PDF)", "الجريدة الرسمية · قانون إنشاء الصندوق (PDF)"])}
            </a>
            <label className="mt-5 block font-semibold" htmlFor="ressources-search">{tr(["Rechercher dans le contenu du portail", "البحث في محتوى البوابة"])}</label>
            <input id="ressources-search" className="premium-card mt-2 min-h-11 w-full px-3" type="search" value={query} maxLength={80} onChange={(e) => setQuery(e.target.value)} />
            <p className="mt-2 text-sm" role="status">{terms.length ? `${matches.length} ${tr(["résultat(s)", "نتيجة"])}` : tr(["Recherche locale · Aucun envoi au serveur", "بحث محلي · لا إرسال إلى الخادم"])}</p>
            <ul className="mt-4 space-y-3">
              {matches.map(({ slug, title, body, pageTitle }) => <li key={slug+title[0]} className="premium-card p-4">
                <Link className="inline-flex min-h-11 items-center font-bold underline" href={`/${slug}`}>{tr(pageTitle)} · {tr(title)}</Link>
                <p className="text-sm leading-relaxed">{tr(body)}</p>
              </li>)}
            </ul>
          </div>
          <Faq />
        </div>
      </Container>
    </section>
  );
}
