import type { Metadata } from "next";
import { editorial } from "@/lib/editorial";
import { Container, PageHeading } from "@/components/portal/layout";
import { PortalSearch } from "@/components/portal/PortalSearch";

const page = editorial.recherche;
export const metadata: Metadata = { title: page.title[0], description: page.summary[0] };

export default function Page() {
  return <>
    <PageHeading title={page.title} description={page.summary} />
    <section className="premium-section"><Container><PortalSearch /></Container></section>
  </>;
}
