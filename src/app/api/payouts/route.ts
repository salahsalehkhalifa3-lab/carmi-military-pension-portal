import { invalidRequest } from "@/lib/read-json";
import { getPayoutsByRegion } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const region = searchParams.get("region")?.trim().toUpperCase() ?? "";
  const { available, ...data } = await getPayoutsByRegion(region || undefined);
  if (!available) return invalidRequest("Le calendrier des paiements est actuellement indisponible.", 503);
  return Response.json(data, {
    headers: { "Cache-Control": "public, max-age=60, stale-while-revalidate=300" },
  });
}
