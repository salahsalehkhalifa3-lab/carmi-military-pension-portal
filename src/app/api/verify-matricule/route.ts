import { desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { pensionClaims } from "@/db/schema";
import { ensureSeeded } from "@/db/seed";
import { getPortalData } from "@/lib/data";

export const dynamic = "force-dynamic";

const STAGES = [
  {
    stage: "Dossier reçu — contrôle de conformité",
    progress: 25,
    detail:
      "Votre dossier est enregistré au guichet de votre région militaire. Vérification de la fiche matricule en cours.",
  },
  {
    stage: "Décompte des annuités — Direction des Pensions",
    progress: 55,
    detail:
      "Les années de service (ANT, Gendarmerie, Police, GNNT) sont en cours de totalisation avec les bonifications de campagne.",
  },
  {
    stage: "Visa financier — émission du titre de pension",
    progress: 80,
    detail:
      "Le titre de pension est en signature. Préparez votre RIB pour la bancarisation du paiement.",
  },
  {
    stage: "Mis en paiement — virement bancaire",
    progress: 100,
    detail:
      "Votre solde est servée par virement. Contrôle de vie annuel obligatoire pour maintenir le paiement.",
  },
];

function stageFor(matricule: string) {
  let hash = 0;
  for (let i = 0; i < matricule.length; i += 1) {
    hash = (hash * 31 + matricule.charCodeAt(i)) % 100000;
  }
  return STAGES[hash % STAGES.length];
}

export async function POST(request: Request) {
  try {
    await ensureSeeded();
    const body = (await request.json()) as Record<string, unknown>;
    const matricule = String(body.matricule ?? "")
      .trim()
      .toUpperCase()
      .slice(0, 32);

    if (matricule.length < 4) {
      return Response.json(
        { ok: false, errors: ["Matricule invalide : 4 caractères minimum."] },
        { status: 400 },
      );
    }

    const claims = await db
      .select()
      .from(pensionClaims)
      .where(eq(pensionClaims.matricule, matricule))
      .orderBy(desc(pensionClaims.createdAt))
      .limit(3);

    const { regions } = await getPortalData();
    const region = regions.find((r) => r.code === claims[0]?.regionCode);
    const stage = stageFor(matricule);

    return Response.json({
      ok: true,
      matricule,
      found: claims.length > 0,
      claims: claims.map((c) => ({
        trackingCode: c.trackingCode,
        status: c.status,
        serviceSlug: c.serviceSlug,
        createdAt: c.createdAt,
        regionCode: c.regionCode,
      })),
      region: region ? { code: region.code, label: region.label, city: region.city } : null,
      registry: {
        stage: stage.stage,
        progress: stage.progress,
        detail: stage.detail,
      },
    });
  } catch {
    return Response.json(
      { ok: false, errors: ["Registre momentanément indisponible."] },
      { status: 500 },
    );
  }
}
