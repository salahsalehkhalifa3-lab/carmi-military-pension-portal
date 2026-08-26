import type { SVGProps } from "react";

export type BrandIconProps = SVGProps<SVGSVGElement> & {
  strokeWidth?: number;
};

function base(props: BrandIconProps) {
  const { strokeWidth: _strokeWidth, ...rest } = props;
  return rest;
}

/** WhatsApp (logo officiel simplifié, tracé vectoriel léger). */
export function WhatsappIcon(props: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...base(props)}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.39c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.26.86 5.81 2.41a8.16 8.16 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.65 4.2 3.71.59.26 1.04.41 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export function FacebookIcon(props: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...base(props)}
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function XIcon(props: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...base(props)}
    >
      <path d="M17.53 3H21l-7.19 8.21L22 21h-6.56l-4.28-5.6L6.2 21H3l7.5-8.56L2.4 3H9l4.13 5.46L17.53 3Zm-1.16 16h1.92L7.75 4.9H5.68L16.37 19Z" />
    </svg>
  );
}

export function LinkedinIcon(props: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...base(props)}
    >
      <path d="M6.94 5.5a2.06 2.06 0 1 1-4.12 0 2.06 2.06 0 0 1 4.12 0ZM3.1 8.98h4.03V21H3.1V8.98Zm6.4 0h3.86v1.64h.05c.54-.98 1.86-2.02 3.83-2.02 4.1 0 4.85 2.6 4.85 5.98V21h-4.03v-5.63c0-1.34-.03-3.07-1.96-3.07-1.96 0-2.26 1.46-2.26 2.97V21H9.5V8.98Z" />
    </svg>
  );
}

export function YoutubeIcon(props: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...base(props)}
    >
      <path d="M21.58 7.19a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42a2.51 2.51 0 0 0-1.77 1.77A26.2 26.2 0 0 0 2 12c0 1.63.14 3.27.42 4.81a2.51 2.51 0 0 0 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42a2.51 2.51 0 0 0 1.77-1.77c.28-1.54.42-3.18.42-4.81 0-1.63-.14-3.27-.42-4.81ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

export function TelegramIcon(props: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...base(props)}
    >
      <path d="M21.94 4.3 18.9 19.1c-.23 1.03-.83 1.29-1.68.8l-4.65-3.43-2.24 2.16c-.25.25-.46.46-.94.46l.34-4.77L18.37 6.4c.37-.33-.08-.52-.58-.19L7.24 13.03l-4.6-1.44c-1-.31-1.02-1 .21-1.48L20.06 2.9c.83-.3 1.56.2 1.88 1.4Z" />
    </svg>
  );
}
