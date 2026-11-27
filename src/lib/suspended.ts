export const suspended = {
  fr: "Service suspendu dans cette démonstration.",
  ar: "هذه الخدمة معلّقة في النسخة التجريبية.",
};

export function unavailable() {
  return Response.json({ ok: false, message: suspended }, {
    status: 503,
    headers: { "Cache-Control": "no-store" },
  });
}
