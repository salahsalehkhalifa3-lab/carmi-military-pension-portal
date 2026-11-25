"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { editorial } from "@/lib/editorial";
import { useTranslation } from "./layout";

const groups = [
  { label: ["La CARMI", "عن الصندوق"], pages: ["institution", "historique", "missions", "commandement", "organisation", "cadre-juridique"] },
  { label: ["Prestations et démarches", "الخدمات والإجراءات"], pages: ["prestations", "orientation", "demarches", "pensionne", "ayants-droit", "suivi", "simulateur"] },
  { label: ["Informations pratiques", "معلومات عملية"], pages: ["calendrier", "agences", "recherche", "ressources", "actualites", "contact"] },
] as const;

export function Navigation({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const tr = useTranslation();
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <nav aria-label={mobile ? tr(["Menu mobile", "قائمة الهاتف"]) : tr(["Navigation principale", "التنقل الرئيسي"])}
      className={mobile ? "space-y-5 p-4" : "hidden items-center gap-2 xl:flex"}>
      {groups.map(({ label, pages }, i) => (
        <div key={label[0]} className={mobile ? "" : "relative"}
          onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(null); }}
          onKeyDown={(event) => {
            if (event.key !== "Escape" || mobile || expanded !== i) return;
            event.stopPropagation();
            setExpanded(null);
            event.currentTarget.querySelector("button")?.focus();
          }}>
          {mobile ? <h2 className="px-3 text-sm font-bold text-gold-300">{tr(label)}</h2> : (
            <button type="button" aria-expanded={expanded === i} onClick={() => setExpanded(expanded === i ? null : i)}
              className="flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-bold text-white hover:bg-white/10">
              {tr(label)} <ChevronDown aria-hidden="true" size={16} />
            </button>
          )}
          {(mobile || expanded === i) && <ul className={mobile ? "mt-1" : "absolute start-0 top-full z-50 w-64 rounded-lg border border-white/25 bg-army-950 p-2 shadow-xl"}>
            {pages.map((slug) => <li key={slug}>
              <Link href={`/${slug}`} aria-current={pathname === `/${slug}` ? "page" : undefined}
                onClick={() => { setExpanded(null); onNavigate?.(); }}
                className="flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-semibold leading-tight text-white hover:bg-white/10 aria-[current=page]:text-gold-300">
                {tr(editorial[slug].title)}
              </Link>
            </li>)}
          </ul>}
        </div>
      ))}
    </nav>
  );
}
