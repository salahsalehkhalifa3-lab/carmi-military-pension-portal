import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { PageHeading } from "@/components/portal/layout";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Administration de démonstration", robots: { index: false, follow: false } };

export default async function Page() {
  // Vercel Authentication protects this deployment URL before routing.
  if (process.env.VERCEL_ENV !== "preview" ||
      process.env.VERCEL_GIT_COMMIT_REF !== "feature/carmi-p7d" ||
      !process.env.VERCEL_URL ||
      (await headers()).get("host") !== process.env.VERCEL_URL) {
    notFound();
  }

  const { Administration } = await import("@/components/portal/Administration");

  return <>
    <PageHeading title={["Administration de démonstration", "الإدارة التجريبية"]} description={["File de travail privée composée de cas fictifs. Les actions restent en mémoire et sont réinitialisées au rechargement.", "قائمة عمل خاصة تضم حالات افتراضية. تبقى الإجراءات في الذاكرة وتُعاد تهيئتها عند إعادة التحميل."]} />
    <Administration />
  </>;
}
