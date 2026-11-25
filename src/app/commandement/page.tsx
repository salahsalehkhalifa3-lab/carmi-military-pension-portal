import type { Metadata } from "next";
import { editorial } from "@/lib/editorial";
import { PageHeading } from "@/components/portal/layout";
import { Leadership } from "@/components/portal/Leadership";

import { getPrivatePortrait } from "@/lib/private-portrait";

const page = editorial["commandement"];
export const metadata: Metadata = { title: page.title[0], description: page.summary[0] };

export default async function Page() {
  return (
    <>
      <PageHeading title={page.title} description={page.summary} parent={{ href: "/institution", label: editorial.institution.title }} />
      <Leadership showPortrait={Boolean(await getPrivatePortrait())} />
    </>
  );
}
