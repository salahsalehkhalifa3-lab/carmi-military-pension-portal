"use client";

import Image from "next/image";
import Link from "next/link";
import { Landmark, ShieldCheck } from "lucide-react";
import { CONTACT, NAV_LINKS, SITE_NAME, SOCIALS } from "@/lib/institution";
import { OfficialChannels, ShareRow } from "@/components/share";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="bg-army-950 pb-24 text-slate-300 lg:pb-0">
      <div className="flag-lisere h-1.5 w-full" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6">
        <div className="text-center">
          <p className="text-[0.78rem] font-black uppercase tracking-[0.3em] text-gold-400">
            Unité — Travail — Progrès
          </p>
          <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
            République du Tchad · {CONTACT.ministry}
          </p>
        </div>

        <div className="mt-7 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/image/logocarmi.jpg"
                alt="Logo CARMI"
                width={48}
                height={48}
                className="h-12 w-12 rounded-lg bg-white object-contain p-0.5"
              />
              <div>
                <p className="text-base font-black leading-none text-white">C.A.R.M.I.</p>
                <p className="mt-1 text-[0.66rem] uppercase leading-tight tracking-wide text-gold-300">
                  Caisse de Retraite des Militaires
                </p>
              </div>
            </div>
            <p className="mt-3 text-[0.8rem] leading-relaxed text-slate-400">
              {SITE_NAME} — gestion des pensions militaires, des rentes d&apos;invalidité,
              des ayants droit des Martyrs de la Nation et de la bancarisation des
              militaires tchadiens.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-[0.72rem] font-semibold text-gold-300">
              <ShieldCheck className="h-4 w-4" strokeWidth={2.1} />
              Registre biométrique souverain sécurisé
            </p>
          </div>

          <nav aria-label="Liens institutionnels">
            <h2 className="text-[0.72rem] font-black uppercase tracking-widest text-white">
              Navigation
            </h2>
            <ul className="mt-3 space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-[0.84rem] font-medium text-slate-300 transition hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.72rem] font-black uppercase tracking-widest text-white">
              Guichet d&apos;aide
            </h2>
            <ul className="mt-3 space-y-2 text-[0.84rem]">
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="inline-flex min-h-11 items-center gap-2 font-bold text-gold-300"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 font-bold text-emerald-400"
                >
                  Assistance WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex min-h-11 items-center gap-2 break-all text-slate-300"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="inline-flex min-h-11 items-start gap-2 text-slate-400">
                <Landmark className="mt-1 h-4 w-4 shrink-0 text-gold-500" strokeWidth={2.1} />
                {CONTACT.address}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[0.72rem] font-black uppercase tracking-widest text-white">
              Réseaux officiels
            </h2>
            <div className="mt-3">
              <OfficialChannels />
            </div>
            <div className="mt-3">
              <p className="text-[0.68rem] font-bold uppercase tracking-wide text-slate-400">
                Partager le portail
              </p>
              <div className="mt-2">
                <ShareRow title="Portail officiel CARMI" target="footer-page" />
              </div>
            </div>
            <a
              href={SOCIALS.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target mt-3 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 text-[0.78rem] font-black text-white"
            >
              Rejoindre le canal WhatsApp CARMI
            </a>
          </div>
        </div>

        <div className="mt-7 border-t border-white/10 pt-5 text-center">
          <p className="text-[0.72rem] leading-relaxed text-slate-400">
            © {year} Caisse de Retraite des Militaires (CARMI) - République du Tchad. Tous
            droits réservés.
          </p>
          <p className="mt-1.5 text-[0.66rem] leading-relaxed text-slate-500">
            Contenu officiel publié sous l&apos;autorité du Ministère des Armées, des
            Anciens Combattants et des Victimes de Guerre. Toute reproduction des
            communiqués doit citer la source CARMI.
          </p>
        </div>
      </div>
    </footer>
  );
}