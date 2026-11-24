"use client";

import { useEffect, useRef } from "react";

const focusable = 'button:not(:disabled):not([tabindex="-1"]), a[href]:not([tabindex="-1"])';

export function useDialogKeyboard(open: boolean, close: () => void) {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;

    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const controls = () => Array.from(dialog.querySelectorAll<HTMLElement>(focusable))
      .filter((element) => element.getClientRects().length > 0);

    controls()[0]?.focus({ preventScroll: true });

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
      if (event.key !== "Tab") return;
      const items = controls();
      const first = items.at(0);
      const last = items.at(-1);
      if (!first || !last) return;
      if (event.shiftKey && (document.activeElement === first || !dialog?.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !dialog?.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (trigger instanceof HTMLElement && trigger.getClientRects().length) {
        trigger.focus({ preventScroll: true });
      }
    };
  }, [open, close]);

  return dialogRef;
}
