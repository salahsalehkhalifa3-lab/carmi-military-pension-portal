import type { Metadata } from "next";
import { editorial } from "@/lib/editorial";
import { PageHeading } from "@/components/portal/layout";
import { Editorial } from "@/components/portal/Editorial";
import { BeneficiarySpace } from "@/components/portal/BeneficiarySpace";
import { Journey } from "@/components/portal/Journey";

const page = editorial["pensionne"];
export const metadata: Metadata = { title: page.title[0], description: page.summary[0] };

export default function Page() {
  return (
    <>
      <PageHeading title={page.title} description={page.summary} />
      <Editorial slug="pensionne" />
      <BeneficiarySpace />
      <Journey />
    </>
  );
}
