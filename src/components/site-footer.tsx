"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/institution";
import { usePortal } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = usePortal();

  return (
    <footer className="bg-army-950 text-slate-300">
      <div className="flag-lisere h-1.5 w-full" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex items-center gap-3">
            <Image src="/image/logocarmi.jpg" alt="Logo CARMI" width={48} height={48} className="rounded-lg bg-white p-0.5" />
            <div>
              <p className="font-black text-white">C.A.R.M.I.</p>
              <p className="text-sm text-gold-300">Caisse de Retraite des Militaires</p>
            </div>
          </div>
          <nav aria-label="Liens de pied de page">
            <ul className="grid grid-cols-2 gap-x-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link className="inline-flex min-h-11 items-center text-sm hover:text-gold-300" href={link.href}>
                    {t(link.key, link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-6 border-t border-white/10 pt-5 text-sm">
          {t("credit_prefix")} <a href="https://prosperachad.site/" className="font-bold text-gold-300 underline">PROSPERA Tchad</a>.
        </p>
      </div>
    </footer>
  );
}
