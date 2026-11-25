import type { Metadata } from "next";
import { PremiumTracking } from "@/components/premium-demo";

export const metadata: Metadata = {
  title: "Suivi de dossier de pension",
  description: "Présentation du parcours de suivi, désactivé pour cette démonstration.",
};

export default function SuiviPage() {
  return <PremiumTracking />;
}
