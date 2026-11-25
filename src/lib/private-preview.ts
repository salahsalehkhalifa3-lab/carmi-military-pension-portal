import { headers } from "next/headers";

export async function isPrivatePreview() {
  // Set this only for a branch whose deployment has Vercel Authentication.
  const branch = process.env.CARMI_PRIVATE_PREVIEW_BRANCH;
  const host = process.env.VERCEL_URL;

  return Boolean(
    process.env.VERCEL_ENV === "preview" &&
    branch && branch === process.env.VERCEL_GIT_COMMIT_REF &&
    host && (await headers()).get("host") === host
  );
}
