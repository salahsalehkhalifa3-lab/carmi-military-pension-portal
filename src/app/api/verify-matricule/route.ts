import { invalidRequest } from "@/lib/read-json";

export const dynamic = "force-dynamic";

export async function POST() {
  return invalidRequest("La consultation de dossiers en ligne est actuellement indisponible.", 503);
}
