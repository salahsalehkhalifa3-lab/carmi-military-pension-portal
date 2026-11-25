"use client";
import { Container, useTranslation } from "./layout";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";



export function Tracking() {
  const tr = useTranslation();

  return (
    <>
    <section className="premium-section min-h-[55vh]">
      <Container>
        <div className="premium-card max-w-2xl p-5 sm:p-9">
          <ShieldCheck aria-hidden="true" className="mb-4 text-gold-700 dark:text-gold-300" size={30} />
          <h1 className="premium-heading text-3xl font-semibold">{tr(["Suivi de dossier de pension", "متابعة ملف المعاش"])}</h1>
          <p className="mt-4 leading-relaxed">{tr(["La consultation des dossiers est suspendue. Aucun matricule ni renseignement personnel n’est demandé.", "الاطّلاع على الملفات معطّل. لا نطلب أي رقم تسجيل أو معلومات شخصية."])}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="premium-button bg-army-900 text-white dark:bg-gold-300 dark:text-army-950" href="/">{tr(["Retour à l’accueil", "العودة إلى الرئيسية"])}</Link>
            <Link className="premium-button border border-slate-500" href="/pensionne">{tr(["Voir un suivi fictif", "عرض متابعة افتراضية"])}</Link>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}
