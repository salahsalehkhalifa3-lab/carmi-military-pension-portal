import { Building2, CalendarDays } from "lucide-react";

export function Payouts() {
  return (
    <section id="calendrier" className="scroll-mt-40 border-b border-slate-800 bg-slate-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-4 text-2xl font-bold text-emerald-400">Calendrier des paiements par région</h2>
        <article className="max-w-lg rounded-xl border border-slate-700 bg-slate-800 p-5">
          <p className="flex items-center gap-2 text-sm font-bold text-gold-300"><CalendarDays aria-hidden="true" size={18} /> Exemple fictif</p>
          <h3 className="mt-2 font-semibold">Région de démonstration</h3>
          <p className="mt-1 text-sm text-slate-200">Fenêtre illustrative du 2 au 3 janvier 2030. Aucune date de paiement réelle.</p>
        </article>
      </div>
    </section>
  );
}

export function Agencies() {
  return (
    <section id="agences" className="scroll-mt-40 bg-slate-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-4 text-2xl font-bold text-emerald-400">Agences et guichets</h2>
        <article className="max-w-lg rounded-xl border border-slate-700 bg-slate-800 p-5">
          <p className="flex items-center gap-2 text-sm font-bold text-gold-300"><Building2 aria-hidden="true" size={18} /> Exemple fictif</p>
          <h3 className="mt-2 font-semibold">Guichet de démonstration</h3>
          <p className="mt-1 text-sm text-slate-200">Les adresses, horaires et canaux de contact seront renseignés après validation.</p>
        </article>
      </div>
    </section>
  );
}
