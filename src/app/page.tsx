import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Agencies, Payouts } from "@/components/sections/regional";
import { Calculator } from "@/components/sections/calculator";
import { News } from "@/components/sections/news";
import { Command, Faq } from "@/components/sections/command";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {

  return (
    <>
      <Hero period="Février 2026" pensioners={0} />
      <Services services={[]} />
      <Payouts period="Février 2026" regions={[]} payouts={[]} />
      <Agencies agencies={[]} />
      <Calculator />
      <News news={[]} />
      <Command />
      <Faq />
      <Contact regions={[]} services={[]} />
    </>
  );
}