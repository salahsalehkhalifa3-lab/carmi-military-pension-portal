import { SectionHeading } from "@/components/ui";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-40 border-t border-slate-200 bg-white py-10 sm:py-14 dark:border-white/10 dark:bg-tactical-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Parcours de démonstration" title="Contact et demandes" />
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Le dépôt de demandes et les coordonnées de la CARMI seront disponibles après validation.
          Cette démonstration ne recueille aucune information personnelle.
        </p>
      </div>
    </section>
  );
}
