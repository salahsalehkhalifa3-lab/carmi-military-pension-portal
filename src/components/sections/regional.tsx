"use client";

import Image from "next/image";

interface Agency {
  id: string;
  name: string;
  city: string;
  address: string;
  hours: string;
  image?: string;
  type?: string;
}

interface Region {
  id: string | number;
  label?: string;
  name?: string;
  code: string;
  city?: string;
  zone?: string;
  position?: number;
}

interface Payout {
  id: string | number;
  regionId?: string | number;
  amount?: number;
  pensionersCount?: number;
  status?: string;
  date?: string;
}

// 1. COMPOSANT PAYOUTS
export function Payouts({ period, regions = [], payouts = [] }: { period?: string; regions?: any[]; payouts?: any[] }) {
  return (
    <section id="payouts" className="py-12 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-emerald-400 mb-4">
          Campagnes de paiement et distributions régionales {period && `(${period})`}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {regions.map((region) => (
            <div key={region.id} className="p-4 rounded-xl bg-slate-800 border border-slate-700">
              <h3 className="font-semibold text-white">{region.label || region.name}</h3>
              <p className="text-xs text-slate-400">Code région: {region.code}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 2. COMPOSANT AGENCIES
export function Agencies({ agencies = [] }: { agencies?: any[] }) {
  const displayAgencies = agencies.length > 0 ? agencies : [
    {
      id: "ndjamena",
      name: "Direction Générale & Guichet Central",
      city: "N'Djamena",
      address: "Avenue Charles de Gaulle, Quartier Ridina",
      hours: "Lun - Jeu : 07h30 - 15h30 | Ven : 07h30 - 12h00",
      image: "/image/logocarmi.jpg",
      type: "Siège Administratif",
    },
    {
      id: "mobile-unit",
      name: "Unité Mobile de Paie & Guichet Bancaire",
      city: "Toutes Régions Militaires",
      address: "Passage des colonnes mobiles selon le calendrier trimestriel",
      hours: "Déploiement sur le terrain lors des campagnes de paiement",
      image: "/image/paye.jpg",
      type: "Unité Mobile",
    },
  ];

  return (
    <section id="guichets" className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-emerald-400">
            Guichets CARMI et unités mobiles de paie
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Coordonnées des antennes régionales, horaires d'ouverture des guichets et passages des colonnes mobiles pour les garnisons éloignées.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayAgencies.map((agency) => (
            <div
              key={agency.id}
              className="relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-64 w-full bg-slate-950">
                <Image
                  src={agency.image || "/image/logocarmi.jpg"}
                  alt={agency.name || "Guichet CARMI"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                {agency.type && (
                  <span className="absolute top-4 left-4 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-slate-950 shadow-md">
                    {agency.type}
                  </span>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{agency.name}</h3>
                <p className="text-sm font-medium text-emerald-400 mb-4">{agency.city}</p>

                <div className="space-y-2 text-sm text-slate-300">
                  <p className="flex items-start gap-2">
                    <span className="font-semibold text-slate-100">Adresse :</span> {agency.address}
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-semibold text-slate-100">Horaires :</span> {agency.hours}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Agencies;"use client";

import Image from "next/image";

interface Agency {
  id: string;
  name: string;
  city: string;
  address: string;
  hours: string;
  image?: string;
  type?: string;
}

interface Region {
  id: string | number;
  label?: string;
  name?: string;
  code: string;
  city?: string;
  zone?: string;
  position?: number;
}

interface Payout {
  id: string | number;
  regionId?: string | number;
  amount?: number;
  pensionersCount?: number;
  status?: string;
  date?: string;
}

// 1. COMPOSANT PAYOUTS
export function Payouts({ period, regions = [], payouts = [] }: { period?: string; regions?: any[]; payouts?: any[] }) {
  return (
    <section id="payouts" className="py-12 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-emerald-400 mb-4">
          Campagnes de paiement et distributions régionales {period && `(${period})`}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {regions.map((region) => (
            <div key={region.id} className="p-4 rounded-xl bg-slate-800 border border-slate-700">
              <h3 className="font-semibold text-white">{region.label || region.name}</h3>
              <p className="text-xs text-slate-400">Code région: {region.code}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 2. COMPOSANT AGENCIES
export function Agencies({ agencies = [] }: { agencies?: any[] }) {
  const displayAgencies = agencies.length > 0 ? agencies : [
    {
      id: "ndjamena",
      name: "Direction Générale & Guichet Central",
      city: "N'Djamena",
      address: "Avenue Charles de Gaulle, Quartier Ridina",
      hours: "Lun - Jeu : 07h30 - 15h30 | Ven : 07h30 - 12h00",
      image: "/image/logocarmi.jpg",
      type: "Siège Administratif",
    },
    {
      id: "mobile-unit",
      name: "Unité Mobile de Paie & Guichet Bancaire",
      city: "Toutes Régions Militaires",
      address: "Passage des colonnes mobiles selon le calendrier trimestriel",
      hours: "Déploiement sur le terrain lors des campagnes de paiement",
      image: "/image/paye.jpg",
      type: "Unité Mobile",
    },
  ];

  return (
    <section id="guichets" className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-emerald-400">
            Guichets CARMI et unités mobiles de paie
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Coordonnées des antennes régionales, horaires d'ouverture des guichets et passages des colonnes mobiles pour les garnisons éloignées.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayAgencies.map((agency) => (
            <div
              key={agency.id}
              className="relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-64 w-full bg-slate-950">
                <Image
                  src={agency.image || "/image/logocarmi.jpg"}
                  alt={agency.name || "Guichet CARMI"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                {agency.type && (
                  <span className="absolute top-4 left-4 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-slate-950 shadow-md">
                    {agency.type}
                  </span>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{agency.name}</h3>
                <p className="text-sm font-medium text-emerald-400 mb-4">{agency.city}</p>

                <div className="space-y-2 text-sm text-slate-300">
                  <p className="flex items-start gap-2">
                    <span className="font-semibold text-slate-100">Adresse :</span> {agency.address}
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-semibold text-slate-100">Horaires :</span> {agency.hours}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Agencies;