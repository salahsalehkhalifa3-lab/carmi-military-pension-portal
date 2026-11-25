"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { usePortal } from "@/lib/i18n";

export type Text = readonly [string, string];

export function useTranslation() {
  const { lang } = usePortal();
  return (text: Text) => text[lang === "ar" ? 1 : 0];
}

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-7xl px-4 sm:px-7 lg:px-10">{children}</div>;
}

export function SectionTitle({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div className="mb-7 max-w-3xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold-700 dark:text-gold-300">{label}</p>
      <h2 className="premium-heading text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>}
    </div>
  );
}
export function PageHeading({ title, description, parent }: { title: Text; description: Text; parent?: { href: string; label: Text } }) {
  const tr = useTranslation();
  return (
    <div className="premium-hero py-8 text-white sm:py-11">
      <Container>
        <nav aria-label={tr(["Fil d’Ariane", "مسار التنقل"])} className="mb-3 flex flex-wrap gap-2 text-sm text-gold-300">
          <Link href="/" className="underline">{tr(["Accueil", "الرئيسية"])}</Link>
          <span aria-hidden="true">/</span>
          {parent && <><Link href={parent.href} className="underline">{tr(parent.label)}</Link><span aria-hidden="true">/</span></>}
          <span aria-current="page">{tr(title)}</span>
        </nav>
        <h1 className="premium-heading text-3xl font-semibold sm:text-5xl">{tr(title)}</h1>
        <p className="mt-3 text-slate-200">{tr(description)}</p>
      </Container>
    </div>
  );
}
