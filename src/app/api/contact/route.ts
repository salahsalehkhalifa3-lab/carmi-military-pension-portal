import { db } from "@/db";
import { pensionClaims } from "@/db/schema";
import { ensureSeeded } from "@/db/seed";

export const dynamic = "force-dynamic";

function trackingCode(): string {
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const rand = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `CARMI-${stamp}${rand}`;
}

export async function POST(request: Request) {
  try {
    await ensureSeeded();
    const body = (await request.json()) as Record<string, unknown>;

    const fullName = String(body.fullName ?? "").trim();
    const matricule = String(body.matricule ?? "").trim().toUpperCase();
    const phone = String(body.phone ?? "").trim();
    const regionCode = String(body.regionCode ?? "").trim().toUpperCase();
    const serviceSlug = String(body.serviceSlug ?? "").trim() || "pension-retraite";
    const message = String(body.message ?? "").trim().slice(0, 2000);

    const errors: string[] = [];
    if (fullName.length < 3) errors.push("Nom complet requis (3 caractères min).");
    if (matricule.length < 4) errors.push("Matricule invalide (4 caractères min).");
    if (phone.replace(/\D/g, "").length < 8) errors.push("Numéro de téléphone invalide.");
    if (!regionCode) errors.push("Région militaire obligatoire.");

    if (errors.length > 0) {
      return Response.json({ ok: false, errors }, { status: 400 });
    }

    const code = trackingCode();
    const [created] = await db
      .insert(pensionClaims)
      .values({
        trackingCode: code,
        matricule,
        fullName,
        phone,
        regionCode,
        serviceSlug,
        message,
        channel: String(body.channel ?? "web"),
      })
      .returning();

    return Response.json({
      ok: true,
      trackingCode: created.trackingCode,
      status: created.status,
      receivedAt: created.createdAt,
    });
  } catch {
    return Response.json(
      { ok: false, errors: ["Service momentanément indisponible. Composez le +235 22 51 44 20."] },
      { status: 500 },
    );
  }
}
