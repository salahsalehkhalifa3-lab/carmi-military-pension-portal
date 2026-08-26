import { getPortalData, sumPayouts } from "@/lib/data";
import { CURRENT_PERIOD } from "@/db/seed";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Agencies, Payouts } from "@/components/sections/regional";
import { Calculator } from "@/components/sections/calculator";
import { News } from "@/components/sections/news";
import { Command, Faq } from "@/components/sections/command";
import { Contact } from "@/components/sections/contact";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { regions, payouts, agencies, services, news } = await getPortalData();
  const totals = sumPayouts(payouts);

  return (
    <>
      <Hero period={CURRENT_PERIOD} pensioners={totals.pensioners} />
      <Services services={services} />
      <Payouts period={CURRENT_PERIOD} regions={regions} payouts={payouts} />
      <Agencies agencies={agencies} />
      <Calculator />
      <News news={news} />
      <Command />
      <Faq />
      <Contact regions={regions} services={services} />
    </>
  );
}