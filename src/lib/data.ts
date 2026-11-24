import { asc, desc } from "drizzle-orm";
import { db } from "@/db";
import {
  announcements,
  militaryRegions,
  payoutCycles,
  pensionServices,
  regionalAgencies,
  type Announcement,
  type MilitaryRegion,
  type PayoutCycle,
  type PensionService,
  type RegionalAgency,
} from "@/db/schema";

export type PortalData = {
  regions: MilitaryRegion[];
  payouts: PayoutCycle[];
  agencies: RegionalAgency[];
  services: PensionService[];
  news: Announcement[];
};

export async function getPortalData(): Promise<(PortalData & { available: true }) | (PortalData & { available: false })> {
  try {
    const [regions, payouts, agencies, services, news] = await Promise.all([
      db.select().from(militaryRegions).orderBy(asc(militaryRegions.position)),
      db.select().from(payoutCycles).orderBy(asc(payoutCycles.payDate)),
      db.select().from(regionalAgencies).orderBy(asc(regionalAgencies.id)),
      db.select().from(pensionServices).orderBy(asc(pensionServices.position)),
      db
        .select()
        .from(announcements)
        .orderBy(desc(announcements.pinned), desc(announcements.shareCount)),
    ]);
    return { available: true, regions, payouts, agencies, services, news };
  } catch {
    return {
      available: false,
      regions: [],
      payouts: [],
      agencies: [],
      services: [],
      news: [],
    };
  }
}

export async function getPayoutsByRegion(regionCode?: string) {
  const data = await getPortalData();
  const payouts = regionCode
    ? data.payouts.filter((payout) => payout.regionCode === regionCode)
    : data.payouts;
  const periods = [...new Set(payouts.map((payout) => payout.period))];
  return {
    available: data.available,
    period: periods.length === 1 ? periods[0] : null,
    regions: data.regions,
    payouts,
    agencies: data.agencies,
  };
}
