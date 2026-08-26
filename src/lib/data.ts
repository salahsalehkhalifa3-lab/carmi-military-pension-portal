import { asc, desc, eq } from "drizzle-orm";
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
import { CURRENT_PERIOD, ensureSeeded } from "@/db/seed";

export type PortalData = {
  regions: MilitaryRegion[];
  payouts: PayoutCycle[];
  agencies: RegionalAgency[];
  services: PensionService[];
  news: Announcement[];
};

export async function getPortalData(): Promise<PortalData> {
  try {
    await ensureSeeded();
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
    return { regions, payouts, agencies, services, news };
  } catch {
    return {
      regions: [],
      payouts: [],
      agencies: [],
      services: [],
      news: [],
    };
  }
}

export async function getPayoutsByRegion(regionCode?: string): Promise<{
  period: string;
  regions: MilitaryRegion[];
  payouts: PayoutCycle[];
  agencies: RegionalAgency[];
}> {
  const data = await getPortalData();
  const payouts = regionCode
    ? data.payouts.filter((p) => p.regionCode === regionCode)
    : data.payouts;
  return {
    period: CURRENT_PERIOD,
    regions: data.regions,
    payouts,
    agencies: data.agencies,
  };
}

export async function incrementAnnouncementShare(slug: string): Promise<number> {
  const rows = await db
    .select()
    .from(announcements)
    .where(eq(announcements.slug, slug))
    .limit(1);
  const current = rows[0];
  if (!current) return 0;
  const next = current.shareCount + 1;
  await db
    .update(announcements)
    .set({ shareCount: next })
    .where(eq(announcements.slug, slug));
  return next;
}

export function sumPayouts(payouts: PayoutCycle[]): {
  pensioners: number;
  amountXaf: number;
  open: number;
} {
  return {
    pensioners: payouts.reduce((acc, p) => acc + p.pensioners, 0),
    amountXaf: payouts.reduce((acc, p) => acc + p.amountXaf, 0),
    open: payouts.filter((p) => p.status === "en_cours").length,
  };
}
