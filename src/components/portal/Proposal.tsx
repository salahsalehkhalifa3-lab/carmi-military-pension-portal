"use client";
import { Container, useTranslation } from "./layout";
import Link from "next/link";
import { ArrowUpRight, Handshake } from "lucide-react";



export function Proposal() {
  const tr = useTranslation();

  return (
    <>
      <section id="contact" className="premium-section bg-army-900 text-white">
        <Container>
          <div className="max-w-3xl">
            <Handshake aria-hidden="true" className="mb-4 text-gold-300" size={30} />
            <h2 className="premium-heading text-3xl font-semibold sm:text-4xl">{tr(["Une vision de modernisation numérique proposée par PROSPERA Tchad.", "رؤية للتحديث الرقمي تقترحها PROSPERA Tchad."])}</h2>
            <p className="mt-4 leading-relaxed text-slate-200">{tr(["Ingénierie numérique, portails institutionnels, modernisation des services, sécurisation des systèmes, gestion de projets et accompagnement technique.", "الهندسة الرقمية والبوابات المؤسسية وتحديث الخدمات وتأمين الأنظمة وإدارة المشاريع والدعم والصيانة."])}</p>
            <p className="mt-3 text-sm text-slate-200">{tr(["Le dépôt de demandes et les coordonnées CARMI restent indisponibles.", "إيداع الطلبات وبيانات الاتصال بالصندوق غير متاحة."])}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://prosperachad.site" className="premium-button bg-gold-300 text-army-950 hover:bg-gold-400">{tr(["Demander une présentation à PROSPERA", "اطلب عرضاً من PROSPERA"])} <ArrowUpRight aria-hidden="true" size={18} /></a>
              <Link href="/suivi" className="premium-button border border-white/40 text-white hover:bg-white/10">{tr(["Voir le parcours de suivi", "عرض مسار المتابعة"])}</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
