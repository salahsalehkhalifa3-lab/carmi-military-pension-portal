import { getPortalData } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function GET() {
  const { news } = await getPortalData();
  return Response.json(
    { announcements: news },
    {
      headers: {
        "Cache-Control": "public, max-age=120, stale-while-revalidate=600",
      },
    },
  );
}
