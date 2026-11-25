"use client";
import { Container, useTranslation, SectionTitle } from "./layout";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { usePortal } from "@/lib/i18n";
import { editorial } from "@/lib/editorial";



export function Home() {
  const tr = useTranslation();
  const isArabic = usePortal().lang === "ar";

  return (
    <>
<section className="premium-hero relative overflow-hidden text-white">
        <Container>
          <div className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.35fr_1fr] lg:py-24">
            <div>
              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gold-300">
                <span className="h-px w-8 bg-gold-300" />
                {tr(["Retraite militaire · Proposition numérique", "التقاعد العسكري · مقترح رقمي"])}
              </p>
              <h1 className="premium-heading max-w-3xl text-[clamp(2.45rem,5.4vw,5.35rem)] font-semibold leading-[1.04]">
                {tr(["Honneur, Dignité et Protection pour les Combattants de la Nation.", "الشرف والكرامة والحماية لمقاتلي الوطن."])}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
                {tr(["Une vision du futur portail CARMI pour rendre les prestations, les calendriers et les démarches plus faciles à consulter.", "تصوّر لبوابة صندوق تقاعد العسكريين لتيسير الاطّلاع على الخدمات والمواعيد والإجراءات."])}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link className="premium-button bg-gold-300 text-army-950 hover:bg-gold-400" href="/prestations">
                  {tr(["Découvrir les prestations", "استكشف الخدمات"])} <ArrowUpRight aria-hidden="true" size={18} />
                </Link>
                <Link className="premium-button border border-white/40 text-white hover:bg-white/10" href="/simulateur">
                  {tr(["Explorer la démonstration", "استكشف النسخة التجريبية"])}
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-gold-300">
                <Link className="underline underline-offset-4" href="/calendrier">{tr(["Calendrier fictif", "تقويم افتراضي"])}</Link>
                <Link className="underline underline-offset-4" href="/contact">{tr(["La proposition PROSPERA", "مقترح PROSPERA"])}</Link>
              </div>
            </div>
            <div className="premium-emblem hidden min-h-[390px] place-items-center lg:grid" aria-hidden="true">
              <div className="relative grid aspect-square w-[64%] place-items-center rounded-full border border-gold-300/40">
                <div className="absolute inset-[8%] rounded-full border border-gold-300/30" />
                <div className="absolute -inset-8 rounded-full border border-dashed border-gold-300/30" />
                <Image src="/image/logocarmi.jpg" alt="" width={192} height={192} sizes="160px" className="w-[63%] rounded-full border-4 border-gold-300/80 bg-white" />
              </div>
            </div>
          </div>
        </Container>
        <div className="flag-lisere h-1.5" aria-hidden="true" />
      </section>
        <section className="premium-section">
          <Container>
            <SectionTitle label={tr(["Orientation", "التوجيه"])} title={tr(["Accéder aux rubriques", "الوصول إلى الأقسام"])} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(editorial).map(([slug, content]) => (
                <Link key={slug} id={slug} href={`/${slug}`} className="premium-card block p-5 hover:underline">
                  <h3 className="flex items-center justify-between gap-2 font-bold">{content.title[isArabic ? 1 : 0]} <ArrowUpRight aria-hidden="true" size={18} /></h3>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{content.summary[isArabic ? 1 : 0]}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
    </>
  );
}
