import { db } from "@/db";
import { pensionEstimates } from "@/db/schema";
import { computeEstimate, DISABILITY_RATES, RANKS, UNITS } from "@/lib/institution";
import { invalidRequest, readJson } from "@/lib/read-json";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body = await readJson(request);
  if (body instanceof Response) return body;

  const { rank, unit, years, disabilityRate, survivor } = body;
  if (typeof rank !== "string" || !RANKS.some((entry) => entry.value === rank) ||
      typeof unit !== "string" || !UNITS.some((entry) => entry.value === unit) ||
      typeof years !== "number" || !Number.isInteger(years) || years < 0 || years > 45 ||
      typeof disabilityRate !== "number" || !DISABILITY_RATES.some((rate) => rate === disabilityRate) ||
      (survivor !== "non" && survivor !== "veuve" && survivor !== "orphelin")) {
    return invalidRequest("Les paramètres de la simulation sont invalides.");
  }

  const estimate = computeEstimate({ rank, unit, years, disabilityRate, survivor });
  try {
    await db.insert(pensionEstimates).values({
      rank, unit, years, disabilityRate, survivor, monthlyXaf: estimate.monthlyXaf,
    });
    return Response.json({ ok: true, estimate }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return invalidRequest("L’enregistrement de la simulation est indisponible.", 503);
  }
}
