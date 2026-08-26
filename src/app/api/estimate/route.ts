import { db } from "@/db";
import { pensionEstimates } from "@/db/schema";
import { computeEstimate, type EstimateInput } from "@/lib/institution";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const input: EstimateInput = {
      rank: String(body.rank ?? "homme-du-rang"),
      unit: String(body.unit ?? "ant"),
      years: Number(body.years ?? 20),
      disabilityRate: Number(body.disabilityRate ?? 0),
      survivor:
        body.survivor === "veuve" || body.survivor === "orphelin"
          ? body.survivor
          : "non",
    };

    const result = computeEstimate(input);

    try {
      await db.insert(pensionEstimates).values({
        matricule: String(body.matricule ?? "").slice(0, 32),
        rank: input.rank,
        unit: input.unit,
        years: Math.max(0, Math.min(50, Math.round(input.years))),
        disabilityRate: input.disabilityRate,
        survivor: input.survivor,
        monthlyXaf: result.monthlyXaf,
      });
    } catch {
      // L'estimation reste rendue même si la journalisation échoue.
    }

    return Response.json({ ok: true, estimate: result });
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
}
