"use client";

import { useTranslation } from "./layout";

export function SkipLink() {
  const tr = useTranslation();

  return (
    <a
      href="#contenu"
      className="sr-only focus:not-sr-only focus:absolute focus:start-3 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-sm focus:font-black focus:text-army-950"
    >
      {tr(["Aller au contenu principal", "انتقل إلى المحتوى الرئيسي"])}
    </a>
  );
}
