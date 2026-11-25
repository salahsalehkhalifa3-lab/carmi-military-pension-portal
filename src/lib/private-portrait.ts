import { createHash } from "node:crypto";
import { isPrivatePreview } from "./private-preview";

// SHA-256 of the approved-for-private-demo JPEG from commit 828746a.
const historicalPortraitDigest = "85a4f5dafe830e68f5a71ba78135d8e1a6405f7c1f61a5e879f35622cf4e8aab";

export async function getPrivatePortrait() {
  const encoded = process.env.CARMI_PRIVATE_PORTRAIT_JPEG;
  if (!encoded || !(await isPrivatePreview())) return null;

  const jpeg = Buffer.from(encoded, "base64");
  return createHash("sha256").update(jpeg).digest("hex") === historicalPortraitDigest
    ? jpeg
    : null;
}
