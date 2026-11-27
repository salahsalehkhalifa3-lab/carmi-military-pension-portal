import { createHash } from "node:crypto";
import { headers } from "next/headers";

const digest = "85a4f5dafe830e68f5a71ba78135d8e1a6405f7c1f61a5e879f35622cf4e8aab";

export async function historicalPortrait() {
  const host = process.env.VERCEL_URL;
  const encoded = process.env.CARMI_PRIVATE_PORTRAIT_JPEG;

  // Vercel Authentication is required on this preview deployment.
  if (
    process.env.VERCEL_ENV !== "preview" ||
    process.env.VERCEL_GIT_COMMIT_REF !== "preview/carmi-original-header-dg-portrait" ||
    !host || !encoded || (await headers()).get("host") !== host
  ) return null;

  const jpeg = Buffer.from(encoded, "base64");
  return createHash("sha256").update(jpeg).digest("hex") === digest ? jpeg : null;
}
