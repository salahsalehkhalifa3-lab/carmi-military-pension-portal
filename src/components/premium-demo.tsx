"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import {
  ArrowUpRight, Banknote, Building2, CalendarDays, ChevronDown, Compass, FileCheck2,
  Handshake, HeartPulse, Landmark, Layers3, LifeBuoy, LockKeyhole, ScanLine, ShieldCheck, Users,
} from "lucide-react";
import { usePortal } from "@/lib/i18n";
import { computeEstimate, DISABILITY_RATES, RANKS, UNITS, type EstimateInput } from "@/lib/institution";

import { creationLaw, portalPages, type PortalPage } from "@/lib/portal-pages";

type Text = readonly [string, string];

const services = [
  { icon: Landmark, title: ["Retraite militaire", "التقاعد العسكري"], detail: ["Découvrir comment un parcours numérique pourrait guider la préparation d’une demande.", "مثال لمسار رقمي يوضّح كيفية التحضير لطلب التقاعد."] },
  { icon: HeartPulse, title: ["Pension d’invalidité", "معاش العجز"], detail: ["Visualiser les étapes d’information et d’orientation d’un futur service.", "مثال لمراحل الإرشاد والتوجيه في خدمة مستقبلية."] },
  { icon: Users, title: ["Ayants droit", "ذوو الحقوق"], detail: ["Consulter un exemple de fiche d’information destinée aux familles.", "معاينة نموذج بطاقة معلومات موجّهة إلى الأسر."] },
  { icon: FileCheck2, title: ["Réversion", "معاش المستحقين"], detail: ["Comprendre la structure d’un parcours d’orientation après un décès.", "التعرّف على شكل مسار التوجيه بعد الوفاة."] },
  { icon: Banknote, title: ["Bancarisation", "الخدمات المصرفية"], detail: ["Explorer une fiche destinée à expliquer les modalités de versement après validation.", "استكشاف بطاقة تشرح آليات الصرف بعد اعتمادها."] },
  { icon: LifeBuoy, title: ["Assistance administrative", "المساعدة الإدارية"], detail: ["Repérer les rubriques d’aide et les futurs canaux d’accompagnement.", "التعرّف على أقسام المساعدة وقنوات الدعم المستقبلية."] },
] as const;

const questions = [
  { q: ["Ce portail est-il officiel ?", "هل هذه البوابة رسمية؟"], a: ["Il s’agit d’une proposition de PROSPERA Tchad, soumise à validation de la CARMI.", "هذا مقترح من PROSPERA Tchad يخضع لاعتماد صندوق تقاعد العسكريين."] },
  { q: ["Puis-je déposer une demande ou consulter un dossier ?", "هل يمكنني إيداع طلب أو متابعة ملف؟"], a: ["Le dépôt et le suivi sont suspendus. La démonstration ne collecte aucune information personnelle.", "إيداع الطلبات ومتابعة الملفات معطّلان. لا تجمع النسخة التجريبية أي معلومات شخصية."] },
  { q: ["Le calendrier et le simulateur font-ils foi ?", "هل التقويم ونتائج المحاكي معتمدان؟"], a: ["Les dates, paramètres et résultats illustrent l’interface. Ils ne constituent pas des échéances ni des barèmes réels.", "التواريخ والمعطيات والنتائج أمثلة لعرض الواجهة وليست مواعيد أو مقاييس معتمدة."] },
] as const;

const ranks = ["جندي / عريف", "رقيب / مساعد", "ملازم / نقيب", "رائد / عقيد", "ضابط عام"];
const units = ["الجيش الوطني التشادي", "الدرك الوطني", "الشرطة الوطنية", "الحرس الوطني والبدوي", "المحاربون القدامى وضحايا الحرب"];

function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-7xl px-4 sm:px-7 lg:px-10">{children}</div>;
}

function SectionTitle({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div className="mb-7 max-w-3xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold-700 dark:text-gold-300">{label}</p>
      <h2 className="premium-heading text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>}
    </div>
  );
}

export function PremiumDemo({ route }: { route?: PortalPage }) {
  const { lang } = usePortal();
  const isArabic = lang === "ar";
  const tr = (pair: Text) => pair[isArabic ? 1 : 0];
  const [scenario, setScenario] = useState<EstimateInput>({
    rank: RANKS[1].value, unit: UNITS[0].value, years: 22, disabilityRate: 0, survivor: "non",
  });
  const result = computeEstimate(scenario);
  const [query, setQuery] = useState("");
  const normalize = (value: string) => value.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase().trim();
  const resources = Object.entries(portalPages).filter(([, content]) =>
    !query.trim() || normalize(content.join(" ")).includes(normalize(query)),
  );
  const number = new Intl.NumberFormat(isArabic ? "ar" : "fr-FR", { maximumFractionDigits: 1 });
  const field = "mt-2 min-h-11 w-full rounded-lg border border-slate-400 bg-white px-3 text-army-950 dark:border-slate-500 dark:bg-tactical-950 dark:text-white";

  return (
    <>
      {route && (
        <div className="premium-hero py-8 text-white sm:py-11">
          <Container>
            <nav aria-label={tr(["Fil d’Ariane", "مسار التنقل"])} className="mb-3 text-sm text-gold-300">
              <Link href="/" className="underline">{tr(["Accueil", "الرئيسية"])}</Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">{portalPages[route][isArabic ? 1 : 0]}</span>
            </nav>
            <h1 className="premium-heading text-3xl font-semibold sm:text-5xl">{portalPages[route][isArabic ? 1 : 0]}</h1>
            <p className="mt-3 text-slate-200">{portalPages[route][isArabic ? 3 : 2]}</p>
          </Container>
        </div>
      )}
      {!route && (
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
      )}
      {!route && (
        <section className="premium-section">
          <Container>
            <SectionTitle label={tr(["Orientation", "التوجيه"])} title={tr(["Accéder aux rubriques", "الوصول إلى الأقسام"])} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(portalPages).map(([slug, content]) => (
                <Link key={slug} id={slug} href={`/${slug}`} className="premium-card block p-5 hover:underline">
                  <h3 className="flex items-center justify-between gap-2 font-bold">{content[isArabic ? 1 : 0]} <ArrowUpRight aria-hidden="true" size={18} /></h3>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{content[isArabic ? 3 : 2]}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
      {route === "prestations" && (
      <section id="prestations" className="premium-section">
        <Container>
          <SectionTitle label={tr(["Services proposés", "الخدمات المقترحة"])} title={tr(["Les prestations, parcours par parcours", "الخدمات ومساراتها"])} description={tr(["Six exemples de fiches pour illustrer le futur portail. Les conditions et pièces officielles restent à valider.", "ستة نماذج لتوضيح شكل البوابة المستقبلية. تبقى الشروط والوثائق الرسمية رهناً بالاعتماد."])} />
          <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, detail }) => (
              <details key={title[0]} className="premium-card group">
                <summary className="flex min-h-24 cursor-pointer list-none items-center gap-4 p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-army-50 text-army-900"><Icon aria-hidden="true" size={22} /></span>
                  <span className="min-w-0 flex-1 font-bold">{tr(title)}</span>
                  <ChevronDown aria-hidden="true" size={18} className="shrink-0 group-open:rotate-180" />
                </summary>
                <div className="border-t border-slate-200 p-5 text-sm leading-relaxed dark:border-white/15">
                  <p>{tr(detail)}</p>
                  <ol className="mt-3 list-decimal space-y-1 ps-5 text-slate-700 dark:text-slate-200">
                    <li>{tr(["Lire la fiche illustrative.", "قراءة النموذج التوضيحي."])}</li>
                    <li>{tr(["Repérer les rubriques et les étapes proposées.", "مراجعة الأقسام والخطوات المقترحة."])}</li>
                    <li>{tr(["Consulter les voies d’accompagnement après validation.", "مراجعة قنوات المساعدة بعد اعتمادها."])}</li>
                  </ol>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>
      )}
      {route === "commandement" && (
      <section id="commandement" className="premium-section bg-army-950 text-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr]">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold-300">{tr(["Organisation", "التنظيم"])}</p>
              <h2 className="premium-heading text-3xl font-semibold sm:text-4xl">{tr(["Direction générale de la CARMI", "الإدارة العامة لصندوق تقاعد العسكريين"])}</h2>
              <p className="mt-4 max-w-lg leading-relaxed text-slate-200">{tr(["La Caisse gère les régimes de pensions militaires destinés aux affiliés et à leurs ayants droit. Le portail proposé vise à rendre les informations et les parcours plus lisibles.", "يدير الصندوق أنظمة المعاشات العسكرية للمنتسبين وذوي حقوقهم. وتهدف البوابة المقترحة إلى تسهيل فهم المعلومات والإجراءات."])}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {([
                { icon: Layers3, title: ["Structurer l’information", "تنظيم المعلومات"], detail: ["Fiches et calendrier lisibles.", "بطاقات وتقويم واضحان."] },
                { icon: Compass, title: ["Guider les usagers", "توجيه المستفيدين"], detail: ["Étapes et points d’orientation.", "خطوات ونقاط توجيه."] },
                { icon: LockKeyhole, title: ["Sécuriser les démarches", "تأمين الإجراءات"], detail: ["Accès et traitement à valider.", "ضوابط وصول ومعالجة تُعتمد لاحقاً."] },
              ] as const).map(({ icon: Icon, title, detail }) => (
                <article key={title[0]} className="rounded-xl border border-white/20 p-4">
                  <Icon aria-hidden="true" className="mb-4 text-gold-300" size={24} />
                  <h3 className="font-bold">{tr(title)}</h3>
                  <p className="mt-2 text-sm text-slate-200">{tr(detail)}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
      )}
      {route === "simulateur" && (
      <section id="simulateur" className="premium-section">
        <Container>
          <SectionTitle label={tr(["Calcul local", "حساب على الجهاز"])} title={tr(["Simulateur de retraite", "محاكي التقاعد"])} description={tr(["Simulation fictive et indicative — ne constitue pas un calcul réglementaire de pension.", "محاكاة افتراضية تقريبية — لا تشكّل حساباً نظامياً للمعاش."])} />
          <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
            <div className="premium-card grid content-start gap-5 p-5 sm:grid-cols-2 sm:p-7">
              <label className="min-w-0 text-sm font-semibold">
                {tr(["Grade fictif", "رتبة افتراضية"])}
                <select className={field} value={scenario.rank} onChange={(e) => setScenario({ ...scenario, rank: e.target.value })}>
                  {RANKS.map((rank, i) => <option key={rank.value} value={rank.value}>{isArabic ? ranks[i] : rank.label}</option>)}
                </select>
              </label>
              <label className="min-w-0 text-sm font-semibold">
                {tr(["Unité fictive", "وحدة افتراضية"])}
                <select className={field} value={scenario.unit} onChange={(e) => setScenario({ ...scenario, unit: e.target.value })}>
                  {UNITS.map((unit, i) => <option key={unit.value} value={unit.value}>{isArabic ? units[i] : unit.label}</option>)}
                </select>
              </label>
              <label className="min-w-0 text-sm font-semibold">
                {tr(["Situation fictive", "حالة افتراضية"])}
                <select className={field} value={scenario.survivor} onChange={(e) => setScenario({ ...scenario, survivor: e.target.value as EstimateInput["survivor"] })}>
                  <option value="non">{tr(["Retraite personnelle", "تقاعد شخصي"])}</option>
                  <option value="veuve">{tr(["Réversion · conjoint", "معاش المستحقين · الزوج أو الزوجة"])}</option>
                  <option value="orphelin">{tr(["Réversion · orphelin", "معاش المستحقين · يتيم"])}</option>
                </select>
              </label>
              <label className="min-w-0 text-sm font-semibold">
                {tr(["Taux d’invalidité fictif", "نسبة عجز افتراضية"])}
                <select className={field} value={scenario.disabilityRate} onChange={(e) => setScenario({ ...scenario, disabilityRate: Number(e.target.value) })}>
                  {DISABILITY_RATES.map((rate) => <option key={rate} value={rate}>{number.format(rate)} %</option>)}
                </select>
              </label>
              <label className="text-sm font-semibold sm:col-span-2">
                {tr(["Années de service fictives", "سنوات خدمة افتراضية"])} · {number.format(scenario.years)}
                <input type="range" className="mt-2 block min-h-11 w-full accent-gold-500" min={0} max={50} value={scenario.years} onChange={(e) => setScenario({ ...scenario, years: Number(e.target.value) })} />
              </label>
            </div>
            <div className="rounded-xl bg-army-950 p-6 text-white sm:p-8">
              <p className="flex items-center gap-2 text-sm font-bold text-gold-300"><ScanLine aria-hidden="true" size={20} /> {tr(["Résultat fictif", "نتيجة افتراضية"])}</p>
              <div aria-live="polite" aria-atomic="true">
                <p className="premium-heading mt-5 text-4xl font-semibold text-white">{number.format(result.monthlyXaf)} <span className="text-xl">{tr(["FCFA", "فرنك إفريقي"])}</span></p>
                <p className="mt-2 text-slate-200">{result.eligible ? tr(["Exemple mensuel, taux indicatif", "مثال شهري، نسبة تقريبية"]) + ` · ${number.format(result.ratePercent)} %` : tr(["Seuil illustratif non atteint.", "لم يتحقق الحدّ التوضيحي."])}</p>
              </div>
              <p className="mt-6 border-t border-white/25 pt-4 text-sm text-slate-200">{tr(["Les paramètres et le résultat restent dans ce navigateur.", "تبقى المعطيات والنتيجة داخل هذا المتصفح."])}</p>
            </div>
          </div>
        </Container>
      </section>
      )}
      {route === "actualites" && (
      <section id="actualites" className="premium-section bg-army-50 dark:bg-tactical-900">
        <Container>
          <div className="grid gap-8 max-w-3xl">
            <div>
              <SectionTitle label={tr(["Exemple éditorial", "مثال تحريري"])} title={tr(["Actualités", "الأخبار"])} />
              <article className="premium-card p-5">
                <p className="text-sm font-bold text-gold-700 dark:text-gold-300">{tr(["Communiqué fictif · 1er janvier 2030", "بيان افتراضي · ١ يناير ٢٠٣٠"])}</p>
                <h3 className="mt-2 font-bold">{tr(["Présentation d’un calendrier de démonstration", "عرض تقويم تجريبي"])}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{tr(["Cet exemple illustre la façon dont un futur communiqué pourrait renvoyer vers le calendrier.", "يوضّح المثال كيف يمكن لبيان مستقبلي أن يحيل إلى التقويم."])}</p>
                <Link href="/calendrier" className="mt-3 inline-flex min-h-11 items-center font-semibold underline">{tr(["Voir le calendrier fictif", "عرض التقويم الافتراضي"])}</Link>
              </article>
            </div>

          </div>
        </Container>
      </section>
      )}
      {route === "contact" && (
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
      )}
      {(route === "calendrier" || route === "agences") && (
<div className="premium-section bg-army-50 dark:bg-tactical-900">
        <Container>
          <div className="max-w-3xl">
            {route === "calendrier" && <section id="calendrier">
              <SectionTitle label={tr(["Exemple fictif", "مثال افتراضي"])} title={tr(["Calendrier des paiements", "تقويم المدفوعات"])} />
              <article className="premium-card p-5">
                <CalendarDays aria-hidden="true" className="mb-3 text-gold-700 dark:text-gold-300" />
                <h3 className="font-bold">{tr(["Région de démonstration", "منطقة تجريبية"])} · {tr(["2–3 janvier 2030", "٢–٣ يناير ٢٠٣٠"])}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{tr(["Statut illustratif : planifié. Ces dates ne correspondent à aucun paiement réel.", "حالة توضيحية: مجدول. لا ترتبط هذه التواريخ بأي دفعات فعلية."])}</p>
              </article>
            </section>}
            {route === "agences" && <section id="agences">
              <SectionTitle label={tr(["Exemple fictif", "مثال افتراضي"])} title={tr(["Agences et guichets", "الفروع ومكاتب الخدمة"])} />
              <article className="premium-card p-5">
                <Building2 aria-hidden="true" className="mb-3 text-gold-700 dark:text-gold-300" />
                <h3 className="font-bold">{tr(["Guichet de démonstration", "مكتب خدمة تجريبي"])}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{tr(["Adresse, horaires, coordonnées et banques partenaires à renseigner après validation.", "يُضاف العنوان وساعات العمل وبيانات الاتصال والبنوك الشريكة بعد الاعتماد."])}</p>
              </article>
            </section>}
          </div>
        </Container>
      </div>
      )}
      {route === "commandement" && (
        <section className="premium-section">
          <Container>
            <SectionTitle label={tr(["Cadre légal", "الإطار القانوني"])} title={tr(["Création, statut et missions", "الإنشاء والوضع القانوني والمهام"])} />
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="premium-card p-5">
                <h3 className="font-bold">{tr(["Établissement public administratif", "مؤسسة إدارية عامة"])} </h3>
                <p className="mt-2">{tr(["La loi n°14/PCMT/2022 crée la CARMI. L’article 2 fixe son siège à N’Djaména, prévoit son autonomie de gestion et désigne le ministère chargé des Finances pour la tutelle technique.", "أنشأ القانون رقم 14 لسنة 2022 الصندوق. تحدد المادة الثانية مقره في نجامينا واستقلاله الإداري والمالي والوصاية الفنية للوزارة المكلفة بالمالية."])}</p>
              </article>
              <article className="premium-card p-5">
                <h3 className="font-bold">{tr(["Missions et gouvernance", "المهام والحوكمة"])}</h3>
                <p className="mt-2">{tr(["Les articles 3 et 6 couvrent la gestion des régimes de pensions militaires, l’affiliation et la liquidation des pensions. La loi prévoit un conseil d’administration et une direction générale.", "تتناول المادتان 3 و6 إدارة أنظمة المعاشات العسكرية والانتساب وتصفية المعاشات. وينص القانون على مجلس إدارة وإدارة عامة."])}</p>
              </article>
            </div>
            <a className="mt-5 inline-flex min-h-11 items-center font-semibold underline" href={creationLaw}>{tr(["Lire la loi au Journal officiel (PDF)", "قراءة القانون في الجريدة الرسمية (PDF)"])}</a>
          </Container>
        </section>
      )}
      {route === "ressources" && (
        <section className="premium-section">
          <Container>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <SectionTitle label={tr(["Documentation", "الوثائق"])} title={tr(["Rechercher une rubrique", "البحث عن قسم"])} />
                <label className="block font-semibold">
                  {tr(["Recherche locale dans les rubriques", "بحث محلي في الأقسام"])}
                  <input className={field} type="search" value={query} maxLength={80} onChange={(e) => setQuery(e.target.value)} />
                </label>
                <p className="mt-2 text-sm" role="status">{resources.length} {tr(["rubrique(s)", "قسم"])}</p>
                <ul className="mt-3 space-y-2">
                  {resources.map(([slug, content]) => <li key={slug}><Link className="inline-flex min-h-11 items-center underline" href={`/${slug}`}>{content[isArabic ? 1 : 0]}</Link></li>)}
                </ul>
                <a className="mt-5 inline-flex min-h-11 items-center font-semibold underline" href={creationLaw}>{tr(["Journal officiel · Loi de création de la CARMI (PDF)", "الجريدة الرسمية · قانون إنشاء الصندوق (PDF)"])}</a>
              </div>
            <div>
              <SectionTitle label={tr(["Découvrir le projet", "التعرّف على المشروع"])} title={tr(["Questions fréquentes", "الأسئلة الشائعة"])} />
              <div className="space-y-2">
                {questions.map(({ q, a }) => (
                  <details className="premium-card group" key={q[0]}>
                    <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 p-4 text-sm font-bold">
                      {tr(q)} <ChevronDown aria-hidden="true" size={18} className="shrink-0 group-open:rotate-180" />
                    </summary>
                    <p className="px-4 pb-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{tr(a)}</p>
                  </details>
                ))}
              </div>
            </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

export function PremiumTracking() {
  const { lang } = usePortal();
  const tr = (pair: Text) => pair[lang === "ar" ? 1 : 0];
  return (
    <section className="premium-section min-h-[55vh]">
      <Container>
        <div className="premium-card max-w-2xl p-5 sm:p-9">
          <ShieldCheck aria-hidden="true" className="mb-4 text-gold-700 dark:text-gold-300" size={30} />
          <h1 className="premium-heading text-3xl font-semibold">{tr(["Suivi de dossier de pension", "متابعة ملف المعاش"])}</h1>
          <p className="mt-4 leading-relaxed">{tr(["La consultation des dossiers est suspendue. Aucun matricule ni renseignement personnel n’est demandé.", "الاطّلاع على الملفات معطّل. لا نطلب أي رقم تسجيل أو معلومات شخصية."])}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="premium-button bg-army-900 text-white dark:bg-gold-300 dark:text-army-950" href="/">{tr(["Retour à l’accueil", "العودة إلى الرئيسية"])}</Link>
            <Link className="premium-button border border-slate-500" href="/calendrier">{tr(["Calendrier fictif", "التقويم الافتراضي"])}</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
