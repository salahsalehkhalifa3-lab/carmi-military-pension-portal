import { SITE_NAME, SITE_URL } from "@/lib/institution";

export type ShareChannel =
  | "whatsapp"
  | "facebook"
  | "x"
  | "linkedin"
  | "telegram"
  | "sms"
  | "native"
  | "copy";

export const SHARE_CHANNELS: ShareChannel[] = [
  "whatsapp",
  "facebook",
  "telegram",
  "x",
  "linkedin",
  "copy",
];

export const CHANNEL_LABELS: Record<ShareChannel, string> = {
  whatsapp: "WhatsApp",
  facebook: "Facebook",
  x: "X (Twitter)",
  linkedin: "LinkedIn",
  telegram: "Telegram",
  sms: "SMS",
  native: "Partager",
  copy: "Copier le lien",
};

function targetUrl(path?: string): string {
  if (!path) return SITE_URL;
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

export function buildShareUrl(
  channel: ShareChannel,
  message: string,
  path?: string,
): string {
  const url = encodeURIComponent(targetUrl(path));
  const text = encodeURIComponent(message);

  switch (channel) {
    case "whatsapp":
      return `https://wa.me/?text=${text}%20${url}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    case "x":
      return `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=CARMI,Tchad,AnciensCombattants`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    case "telegram":
      return `https://t.me/share/url?url=${url}&text=${text}`;
    case "sms":
      return `sms:?&body=${text}%20${url}`;
    default:
      return targetUrl(path);
  }
}

export function defaultShareMessage(title?: string): string {
  return title
    ? `${title} — ${SITE_NAME} (République du Tchad)`
    : `Infos officielles de la ${SITE_NAME} (CARMI) : calendrier de paiement des soldes, bancarisation et contrôle de vie.`;
}

export function trackShare(channel: ShareChannel, target: string): void {
  void fetch("/api/shares", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ channel, target }),
    keepalive: true,
  }).catch(() => undefined);
}

export async function copyToClipboard(value: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}
