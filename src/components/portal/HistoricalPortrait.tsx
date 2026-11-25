"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, useTranslation } from "./layout";

export function HistoricalPortrait() {
  const tr = useTranslation();

  return (
    <figure className="mx-auto w-full max-w-[294px]">
      <div className="rounded-xl border border-gold-300/80 bg-army-950 p-2 shadow-xl sm:p-3">
        <Image
          src="/image/dgcarmi.jpg"
          alt={tr(["Photographie historique en tenue militaire", "صورة تاريخية بالزي العسكري"])}
          width={294}
          height={473}
          unoptimized
          className="block h-auto w-full rounded-md"
        />
      </div>
      <figcaption className="mt-3 text-center text-sm leading-snug">
        {tr(["Portrait historique — attribution et diffusion à valider.", "صورة تاريخية — الهوية وإذن النشر قيد التحقق."])}
      </figcaption>
    </figure>
  );
}

export function HomeLeadership() {
  const tr = useTranslation();

  return (
    <section className="premium-section bg-army-950 text-white" aria-labelledby="home-leadership">
      <Container>
        <div className="grid items-center gap-8 rounded-2xl border border-gold-300/50 p-5 sm:p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,17rem)] lg:gap-14 lg:p-12">
          <div>
            <h2 id="home-leadership" className="premium-heading text-3xl font-semibold sm:text-5xl">
              {tr(["Direction générale", "الإدارة العامة"])}
            </h2>
            <p className="mt-5 max-w-prose leading-relaxed text-slate-200">
              {tr(["La Direction générale participe à l’administration et à la gestion de la Caisse aux côtés du conseil d’administration, dans le cadre défini par la loi de création. Découvrez cette gouvernance et les axes de modernisation proposés pour le futur portail.", "تشارك الإدارة العامة إلى جانب مجلس الإدارة في إدارة الصندوق وتسييره وفق الإطار الذي يحدده قانون الإنشاء. تعرّف على حوكمة الصندوق ومحاور تحديث بوابته المستقبلية المقترحة."])}
            </p>
            <Link href="/commandement" className="premium-button mt-6 bg-gold-300 text-army-950 hover:bg-gold-400">
              {tr(["Découvrir la Direction générale", "تعرّف على الإدارة العامة"])}
            </Link>
          </div>
          <HistoricalPortrait />
        </div>
      </Container>
    </section>
  );
}
