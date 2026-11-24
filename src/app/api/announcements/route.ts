import { invalidRequest } from "@/lib/read-json";
import { getPortalData } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function GET() {
  const { available, news } = await getPortalData();
  if (!available) return invalidRequest("Les annonces sont actuellement indisponibles.", 503);
  return Response.json(
    { announcements: news },
    {
      headers: {
        "Cache-Control": "public, max-age=120, stale-while-revalidate=600",
      },
    },
  );
}
