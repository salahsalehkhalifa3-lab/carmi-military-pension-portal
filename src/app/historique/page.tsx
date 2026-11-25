import type { Metadata } from "next";
import { editorial } from "@/lib/editorial";
import { PageHeading } from "@/components/portal/layout";
import { Editorial } from "@/components/portal/Editorial";

const page = editorial["historique"];
export const metadata: Metadata = { title: page.title[0], description: page.summary[0] };

export default function Page() {
  return (
    <>
      <PageHeading title={page.title} description={page.summary} parent={{ href: "/institution", label: editorial.institution.title }} />
      <Editorial slug="historique" />
    </>
  );
}
