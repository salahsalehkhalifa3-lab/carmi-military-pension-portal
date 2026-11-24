const MAX_JSON_BYTES = 16 * 1024;

export function invalidRequest(message: string, status = 400) {
  return Response.json({ ok: false, errors: [message] }, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function readJson(request: Request): Promise<Record<string, unknown> | Response> {
  const contentType = request.headers.get("content-type")?.split(";")[0].trim().toLowerCase();
  if (contentType !== "application/json") {
    return invalidRequest("Le corps de la requête doit être au format JSON.", 415);
  }
  const tooLarge = () => invalidRequest("La requête dépasse la taille autorisée.", 413);
  if (Number(request.headers.get("content-length")) > MAX_JSON_BYTES) return tooLarge();
  if (!request.body) return invalidRequest("Corps de requête manquant.");

  const reader = request.body.getReader();
  const decoder = new TextDecoder("utf-8", { fatal: true });
  let bytes = 0;
  let text = "";
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_JSON_BYTES) {
        void reader.cancel().catch(() => undefined);
        return tooLarge();
      }
      text += decoder.decode(value, { stream: true });
    }
    const body: unknown = JSON.parse(text + decoder.decode());
    if (body && typeof body === "object" && !Array.isArray(body)) {
      return body as Record<string, unknown>;
    }
  } catch {
    // The response is identical for an unreadable stream and an invalid document.
  } finally {
    reader.releaseLock();
  }
  return invalidRequest("Corps JSON invalide.");
}
