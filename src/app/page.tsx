import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Agencies, Payouts } from "@/components/sections/regional";
import { Calculator } from "@/components/sections/calculator";
import { News } from "@/components/sections/news";
import { Command } from "@/components/sections/command";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services services={[{
        id: 1, slug: "exemple-fictif", title: "Exemple fictif de prestation", tagline: "Structure illustrative d’une fiche.",
        icon: "award", accent: "army", description: "Les conditions et les justificatifs de cet exemple sont illustratifs.",
        documents: ["Exemple de justificatif"], steps: ["Exemple d’étape de traitement"], processingDays: 30, position: 1,
      }]} />
      <Payouts />
      <Agencies />
      <Calculator />
      <News news={[{
        id: 1, slug: "exemple-fictif", title: "Communiqué fictif de démonstration",
        summary: "Exemple de présentation d’une annonce sur le futur portail.",
        category: "Exemple fictif", severity: "info", publishedAt: "1er janvier 2030", shareCount: 0, pinned: 0,
      }]} />
      <Command />
      <Contact />
    </>
  );
}
