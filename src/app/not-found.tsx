"use client";

import Link from "next/link";
import { Container, useTranslation } from "@/components/portal/layout";

export default function NotFound() {
  const tr = useTranslation();

  return (
    <section className="premium-section">
      <Container>
        <h1 className="premium-heading text-4xl font-semibold">{tr(["Page introuvable", "الصفحة غير موجودة"])}</h1>
        <p className="mt-4">{tr(["Vérifiez l’adresse ou reprenez votre navigation depuis l’accueil.", "تحقّق من العنوان أو تابع التصفح من الصفحة الرئيسية."])}</p>
        <Link className="premium-button mt-5 bg-army-900 text-white" href="/">
          {tr(["Retour à l’accueil", "العودة إلى الصفحة الرئيسية"])}
        </Link>
      </Container>
    </section>
  );
}
