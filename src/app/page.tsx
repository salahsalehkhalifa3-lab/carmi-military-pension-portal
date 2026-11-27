import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Agencies, Payouts } from "@/components/sections/regional";
import { Calculator } from "@/components/sections/calculator";
import { Command, Faq } from "@/components/sections/command";
import { Contact } from "@/components/sections/contact";

import { historicalPortrait } from "@/lib/historical-portrait";

export const dynamic = "force-dynamic";

export default async function HomePage() {

  return (
    <>
      <Hero period="Février 2026" pensioners={0} />
      <Services services={[]} />
      <Payouts period="Février 2026" regions={[]} payouts={[]} />
      <Agencies agencies={[]} />
      <Calculator />
      <Command showPortrait={Boolean(await historicalPortrait())} />
      <Faq />
      <Contact regions={[]} services={[]} />
    </>
  );
}