"use client";

import { useState, type ComponentPropsWithoutRef } from "react";
import { usePortal } from "@/lib/i18n";
import { suspended } from "@/lib/suspended";

export function SuspendedLink({ children, className, "aria-label": label }: ComponentPropsWithoutRef<"a">) {
  const { lang } = usePortal();
  const [attempted, setAttempted] = useState(false);

  return (
    <>
      <button type="button" className={className} aria-label={label} onClick={() => setAttempted(!attempted)}>
        {children}
      </button>
      {attempted && (
        <span role="status" className="fixed inset-x-4 bottom-24 z-[100] mx-auto w-fit rounded-lg bg-army-950 p-2 text-xs text-white shadow-lg">
          {suspended[lang]}
        </span>
      )}
    </>
  );
}
