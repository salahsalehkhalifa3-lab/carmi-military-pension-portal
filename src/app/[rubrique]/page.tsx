import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PremiumDemo } from "@/components/premium-demo";
import { portalPages, type PortalPage } from "@/lib/portal-pages";

type Props = { params: Promise<{ rubrique: string }> };

function isPortalPage(value: string): value is PortalPage {
  return Object.hasOwn(portalPages, value);
}

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(portalPages).map((rubrique) => ({ rubrique }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { rubrique } = await params;
  if (!isPortalPage(rubrique)) notFound();
  return { title: portalPages[rubrique][0], description: portalPages[rubrique][2] };
}

export default async function Page({ params }: Props) {
  const { rubrique } = await params;
  if (!isPortalPage(rubrique)) notFound();
  return <PremiumDemo route={rubrique} />;
}
