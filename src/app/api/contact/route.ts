import { randomBytes } from "node:crypto";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { militaryRegions, pensionClaims, pensionServices } from "@/db/schema";
import { invalidRequest, readJson } from "@/lib/read-json";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body = await readJson(request);
  if (body instanceof Response) return body;

  const { fullName, matricule, phone, regionCode, serviceSlug, message } = body;
  if (typeof fullName !== "string" || typeof matricule !== "string" ||
      typeof phone !== "string" || typeof regionCode !== "string" ||
      typeof serviceSlug !== "string" || (message !== undefined && typeof message !== "string")) {
    return invalidRequest("Les champs de la demande sont invalides.");
  }

  const name = fullName.trim();
  const id = matricule.trim().toUpperCase();
  const telephone = phone.trim();
  const region = regionCode.trim().toUpperCase();
  const service = serviceSlug.trim();
  const detail = message?.trim() ?? "";
  if ([name, id, telephone, region, service, detail].some((value) => value.includes("\0"))) {
    return invalidRequest("La demande contient un caractère invalide.");
  }
  if (name.length < 3 || name.length > 140) return invalidRequest("Le nom doit comporter de 3 à 140 caractères.");
  if (id.length < 4 || id.length > 32) return invalidRequest("Le matricule doit comporter de 4 à 32 caractères.");
  if (!/^\+?[\d ().-]+$/.test(telephone) || telephone.length > 40) return invalidRequest("Numéro de téléphone invalide.");
  const digitCount = telephone.replace(/\D/g, "").length;
  if (digitCount < 8 || digitCount > 15) return invalidRequest("Numéro de téléphone invalide.");
  if (!region || region.length > 16 || !service || service.length > 64) return invalidRequest("La région et l’objet sont obligatoires.");
  if (detail.length > 2000) return invalidRequest("Le détail est limité à 2 000 caractères.");

  try {
    const [knownRegion] = await db.select({ code: militaryRegions.code }).from(militaryRegions)
      .where(eq(militaryRegions.code, region)).limit(1);
    if (!knownRegion) return invalidRequest("La région militaire sélectionnée est indisponible.");
    if (service !== "suivi-paiement" && service !== "autre") {
      const [knownService] = await db.select({ slug: pensionServices.slug }).from(pensionServices)
        .where(eq(pensionServices.slug, service)).limit(1);
      if (!knownService) return invalidRequest("L’objet sélectionné est indisponible.");
    }

    for (let attempt = 0; attempt < 3; attempt++) {
      const [created] = await db.insert(pensionClaims).values({
        trackingCode: `CARMI-${randomBytes(9).toString("hex").toUpperCase()}`,
        matricule: id,
        fullName: name,
        phone: telephone,
        regionCode: region,
        serviceSlug: service,
        message: detail,
        channel: "web",
      }).onConflictDoNothing({ target: pensionClaims.trackingCode }).returning({
        trackingCode: pensionClaims.trackingCode,
        status: pensionClaims.status,
        receivedAt: pensionClaims.createdAt,
      });
      if (created) {
        return Response.json({ ok: true, ...created }, {
          status: 201,
          headers: { "Cache-Control": "no-store" },
        });
      }
    }
  } catch {
    // Preserve the confidentiality of the submitted information.
  }
  return invalidRequest("Service momentanément indisponible. Appelez le standard CARMI.", 503);
}
