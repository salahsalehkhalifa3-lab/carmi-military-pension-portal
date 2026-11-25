import { getPrivatePortrait } from "@/lib/private-portrait";

export const dynamic = "force-dynamic";

export async function GET() {
  const jpeg = await getPrivatePortrait();
  const headers = { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex, nofollow" };

  if (!jpeg) return new Response(null, { status: 404, headers });

  return new Response(Uint8Array.from(jpeg), {
    headers: { ...headers, "Content-Type": "image/jpeg", "X-Content-Type-Options": "nosniff" },
  });
}
