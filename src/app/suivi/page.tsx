import type { Metadata } from "next";
import { editorial } from "@/lib/editorial";
import { Editorial } from "@/components/portal/Editorial";
import { Tracking } from "@/components/portal/Tracking";

const page = editorial["suivi"];
export const metadata: Metadata = { title: page.title[0], description: page.summary[0] };

export default function Page() {
  return (
    <>
      <Editorial slug="suivi" />
      <Tracking />
    </>
  );
}
