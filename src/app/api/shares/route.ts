import { eq, sql } from "drizzle-orm";
import { db } from "@/db";
import { announcements, pensionServices, shareEvents } from "@/db/schema";
import { invalidRequest, readJson } from "@/lib/read-json";

export const dynamic = "force-dynamic";

const ALLOWED = new Set([
  "whatsapp", "facebook", "x", "linkedin", "telegram", "sms", "native", "copy",
]);

export async function POST(request: Request) {
  const body = await readJson(request);
  if (body instanceof Response) return body;

  const { channel, target = "page" } = body;
  if (typeof channel !== "string" || !ALLOWED.has(channel) ||
      typeof target !== "string" || target.length > 96 ||
      (target !== "page" && !/^(annonce|service)-[a-z0-9-]+$/.test(target))) {
    return invalidRequest("Événement de partage invalide.");
  }

  try {
    if (target === "page") {
      await db.insert(shareEvents).values({ channel, target });
      return Response.json({ ok: true });
    }

    if (target.startsWith("service-")) {
      const [service] = await db.select({ slug: pensionServices.slug }).from(pensionServices)
        .where(eq(pensionServices.slug, target.slice("service-".length))).limit(1);
      if (!service) return invalidRequest("Prestation introuvable.", 404);
      await db.insert(shareEvents).values({ channel, target });
      return Response.json({ ok: true });
    }

    const slug = target.slice("annonce-".length);
    const shareCount = await db.transaction(async (tx) => {
      const [updated] = await tx.update(announcements)
        .set({ shareCount: sql`${announcements.shareCount} + 1` })
        .where(eq(announcements.slug, slug))
        .returning({ count: announcements.shareCount });
      if (!updated) return null;
      await tx.insert(shareEvents).values({ channel, target });
      return updated.count;
    });
    if (shareCount === null) return invalidRequest("Annonce introuvable.", 404);
    return Response.json({ ok: true, shareCount });
  } catch {
    return invalidRequest("Le compteur de partages est actuellement indisponible.", 503);
  }
}
