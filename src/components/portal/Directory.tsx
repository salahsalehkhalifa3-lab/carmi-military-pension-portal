"use client";

import Link from "next/link";
import { editorial } from "@/lib/editorial";
import { Container, useTranslation } from "./layout";

export const institutionLinks = ["historique", "missions", "commandement", "organisation", "cadre-juridique"];

export function Directory() {
  const tr = useTranslation();
  return <section className="premium-section bg-army-50 dark:bg-tactical-900"><Container>
    <h2 className="mb-4 text-xl font-bold">{tr(["Explorer la CARMI", "استكشاف الصندوق"])}</h2>
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {institutionLinks.map((slug) => <li key={slug}><Link className="premium-card block p-4 hover:underline" href={`/${slug}`}>
        <span className="font-bold">{tr(editorial[slug].title)}</span>
        <span className="mt-2 block text-sm">{tr(editorial[slug].summary)}</span>
      </Link></li>)}
    </ul>
  </Container></section>;
}
