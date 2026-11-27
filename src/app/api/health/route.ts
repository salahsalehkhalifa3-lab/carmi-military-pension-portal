export function GET() {
  return Response.json({ ok: true, mode: "demo" }, {
    headers: { "Cache-Control": "no-store" },
  });
}
