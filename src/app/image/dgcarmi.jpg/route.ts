import { historicalPortrait } from "@/lib/historical-portrait";

export const dynamic = "force-dynamic";

export async function GET() {
  const photo = await historicalPortrait();
  const headers = { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex, nofollow" };

  if (!photo) return new Response(null, { status: 404, headers });
  return new Response(Uint8Array.from(photo), {
    headers: { ...headers, "Content-Type": "image/jpeg", "X-Content-Type-Options": "nosniff" },
  });
}
