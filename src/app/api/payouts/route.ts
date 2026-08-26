import { getPayoutsByRegion } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const region = searchParams.get("region")?.trim().toUpperCase() ?? "";
  const data = await getPayoutsByRegion(region || undefined);
  return Response.json(data, {
    headers: { "Cache-Control": "public, max-age=60, stale-while-revalidate=300" },
  });
}
