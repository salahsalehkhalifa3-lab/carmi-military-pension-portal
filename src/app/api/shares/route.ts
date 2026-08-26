import { db } from "@/db";
import { shareEvents } from "@/db/schema";
import { incrementAnnouncementShare } from "@/lib/data";

export const dynamic = "force-dynamic";

const ALLOWED = new Set([
  "whatsapp",
  "facebook",
  "x",
  "linkedin",
  "telegram",
  "sms",
  "native",
  "copy",
]);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const channel = String(body.channel ?? "");
    const target = String(body.target ?? "page").slice(0, 96);

    if (!ALLOWED.has(channel)) {
      return Response.json({ ok: false }, { status: 400 });
    }

    await db.insert(shareEvents).values({ channel, target });

    if (target.startsWith("annonce-")) {
      const slug = target.replace("annonce-", "");
      const count = await incrementAnnouncementShare(slug);
      return Response.json({ ok: true, shareCount: count });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
