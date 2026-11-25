import type { Metadata } from "next";
import { PageHeading } from "@/components/portal/layout";
import { Orientation } from "@/components/portal/Orientation";

export const metadata: Metadata = { title: "Assistant d’orientation", description: "Trouver le parcours adapté à votre besoin." };

export default function Page() {
  return <>
    <PageHeading title={["Assistant d’orientation", "مساعد التوجيه"]} description={["Trouvez une rubrique à partir de votre besoin, sans saisir de données personnelles.", "اعثر على القسم المناسب لاحتياجك دون إدخال بيانات شخصية."]} />
    <Orientation />
  </>;
}
