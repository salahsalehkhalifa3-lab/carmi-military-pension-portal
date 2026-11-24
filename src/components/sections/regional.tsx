import Image from "next/image";
import type { MilitaryRegion, PayoutCycle, RegionalAgency } from "@/db/schema";

export function Payouts({ available, regions, payouts }: {
  available: boolean;
  regions: MilitaryRegion[];
  payouts: PayoutCycle[];
}) {
  const regionNames = new Map(regions.map((region) => [region.code, region.label]));

  return (
    <section id="calendrier" className="scroll-mt-28 border-b border-slate-800 bg-slate-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-emerald-400">
          Calendrier des paiements par région
        </h2>
        {payouts.length ? (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {payouts.map((payout) => (
              <li key={payout.id} className="rounded-xl border border-slate-700 bg-slate-800 p-4">
                <h3 className="font-semibold">{regionNames.get(payout.regionCode) ?? payout.regionCode}</h3>
                <dl className="mt-2 space-y-1 text-sm text-slate-200">
                  <div><dt className="inline font-semibold">Période :</dt> <dd className="inline">{payout.period}</dd></div>
                  <div><dt className="inline font-semibold">Paiement :</dt> <dd className="inline">{payout.payDate}</dd></div>
                  <div><dt className="inline font-semibold">Ouverture des guichets :</dt> <dd className="inline">{payout.counterOpenFrom}</dd></div>
                </dl>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-200">
            {available ? "Aucun calendrier de paiement publié." : "Le calendrier des paiements est actuellement indisponible."}
          </p>
        )}
      </div>
    </section>
  );
}

export function Agencies({ agencies }: { agencies: RegionalAgency[] }) {
  const mobileAgency = {
    id: "mobile-unit",
    name: "Unité Mobile de Paie & Guichet Bancaire",
    city: "Toutes Régions Militaires",
    address: "Passage des colonnes mobiles selon le calendrier trimestriel",
    hours: "Déploiement sur le terrain lors des campagnes de paiement",
    image: "/image/paye.jpg",
    type: "Unité Mobile",
  };

  return (
    <section id="agences" className="scroll-mt-28 py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-emerald-400">
            Guichets CARMI et unités mobiles de paie
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Coordonnées des antennes régionales, horaires d&apos;ouverture des guichets et passages des colonnes mobiles pour les garnisons éloignées.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 shadow-xl flex flex-col justify-between">
            <div className="relative h-72 sm:h-96 w-full bg-slate-950">
              <Image
                src={mobileAgency.image}
                alt={mobileAgency.name}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <span className="absolute top-4 left-4 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-slate-950 shadow-md">
                {mobileAgency.type}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-2">{mobileAgency.name}</h3>
              <p className="text-sm font-medium text-emerald-400 mb-4">{mobileAgency.city}</p>

              <div className="space-y-3 text-sm text-slate-300">
                <p className="flex items-start gap-2">
                  <span className="font-semibold text-slate-100">Adresse :</span> {mobileAgency.address}
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-semibold text-slate-100">Horaires :</span> {mobileAgency.hours}
                </p>
              </div>
            </div>
          </div>
        </div>
        {agencies.length > 0 ? (
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {agencies.map((agency) => (
              <li key={agency.id} className="rounded-xl border border-slate-700 bg-slate-800 p-4">
                <h3 className="font-semibold">{agency.name}</h3>
                <p className="text-sm text-slate-300">{agency.city} · {agency.hours}</p>
                <p className="mt-1 text-sm text-slate-200">{agency.phone}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-center text-slate-300">Coordonnées des guichets régionaux actuellement indisponibles.</p>
        )}
      </div>
    </section>
  );
}

export default Agencies;