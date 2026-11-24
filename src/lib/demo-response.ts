export function demoUnavailable() {
  return Response.json({ ok: false, errors: ["Fonction désactivée dans la démonstration."] }, {
    status: 503,
    headers: { "Cache-Control": "no-store" },
  });
}
