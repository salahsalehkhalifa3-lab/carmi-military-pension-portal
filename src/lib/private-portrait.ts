import { headers } from "next/headers";

const previewBranch = "feature/carmi-portrait-prive";

export async function getPrivatePortrait() {
  const jpeg = process.env.CARMI_PRIVATE_PORTRAIT_JPEG;
  const deploymentHost = process.env.VERCEL_URL;

  // Vercel authenticates preview requests before Next.js handles them.
  // Serve the portrait only on the deployment URL, never on a custom domain.
  if (
    process.env.VERCEL_ENV !== "preview" ||
    process.env.VERCEL_GIT_COMMIT_REF !== previewBranch ||
    !deploymentHost ||
    !jpeg ||
    (await headers()).get("host") !== deploymentHost
  ) {
    return null;
  }

  return jpeg;
}
