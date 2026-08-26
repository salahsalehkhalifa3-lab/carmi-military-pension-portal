"use client";

import { useState, type ComponentType } from "react";
import { Bell, Check, Copy, MessageCircle, Phone, Share2 } from "lucide-react";
import {
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/brand-icons";
import { CONTACT, SITE_URL, SOCIALS } from "@/lib/institution";
import { usePortal } from "@/lib/i18n";
import {
  buildShareUrl,
  copyToClipboard,
  defaultShareMessage,
  trackShare,
  type ShareChannel,
} from "@/lib/share";

type IconComponent = ComponentType<{
  className?: string;
  strokeWidth?: number;
}>;

const CHANNEL_ICON: Record<ShareChannel, IconComponent> = {
  whatsapp: WhatsappIcon,
  facebook: FacebookIcon,
  x: XIcon,
  linkedin: LinkedinIcon,
  telegram: TelegramIcon,
  sms: MessageCircle,
  native: Share2,
  copy: Copy,
};

const CHANNEL_STYLE: Record<string, string> = {
  whatsapp: "bg-emerald-600 text-white hover:bg-emerald-500",
  facebook: "bg-[#1877F2] text-white hover:bg-[#0f6add]",
  x: "bg-black text-white hover:bg-neutral-800",
  linkedin: "bg-[#0A66C2] text-white hover:bg-[#084d96]",
  telegram: "bg-[#229ED9] text-white hover:bg-[#1b86b8]",
  sms: "bg-navy-700 text-white hover:bg-navy-500",
  native: "bg-gold-500 text-army-950 hover:bg-gold-400",
  copy: "bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-white/10 dark:text-white",
};

function openShare(channel: ShareChannel, url: string) {
  if (channel === "copy") return;
  window.open(url, "_blank", "noopener,noreferrer,width=680,height=560");
}

export function ShareButton({
  channel,
  message,
  path,
  target,
  label,
  className = "",
}: {
  channel: ShareChannel;
  message: string;
  path?: string;
  target: string;
  label?: string;
  className?: string;
}) {
  const Icon = CHANNEL_ICON[channel];
  const [copied, setCopied] = useState(false);
  const shareLabel = label ?? (channel === "copy" ? "Copier" : channel);

  return (
    <button
      type="button"
      onClick={async () => {
        trackShare(channel, target);
        if (channel === "copy") {
          const origin =
            typeof window !== "undefined" ? window.location.origin : SITE_URL;
          const done = await copyToClipboard(
            path ? `${origin}${path}` : `${origin}${SITE_URL}`,
          );
          setCopied(done);
          window.setTimeout(() => setCopied(false), 1800);
          return;
        }
        openShare(channel, buildShareUrl(channel, message, path));
      }}
      className={`tap-target inline-flex items-center justify-center gap-2 rounded-xl px-3 text-xs font-bold uppercase tracking-wide transition ${CHANNEL_STYLE[channel]} ${className}`}
      aria-label={`${shareLabel} — ${message.slice(0, 60)}`}
    >
      {channel === "copy" && copied ? (
        <Check className="h-4 w-4" strokeWidth={2.4} />
      ) : (
        <Icon className="h-4 w-4" strokeWidth={2.1} />
      )}
      <span className="hidden sm:inline">{shareLabel}</span>
    </button>
  );
}

export function ShareRow({
  title,
  path,
  target,
  label,
}: {
  title: string;
  path?: string;
  target: string;
  label?: string;
}) {
  const message = defaultShareMessage(title);
  const channels: ShareChannel[] = [
    "whatsapp",
    "facebook",
    "telegram",
    "x",
    "linkedin",
    "copy",
  ];
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {channels.map((channel) => (
        <ShareButton
          key={channel}
          channel={channel}
          message={message}
          path={path}
          target={target}
          label={label && channel === "whatsapp" ? label : undefined}
        />
      ))}
    </div>
  );
}

export function OfficialChannels() {
  const items: {
    href: string;
    icon: IconComponent;
    label: string;
    hint: string;
    className: string;
  }[] = [
    {
      href: SOCIALS.whatsappChannel,
      icon: WhatsappIcon,
      label: "Canal WhatsApp officiel",
      hint: "Alertes de paie instantanées",
      className: "bg-emerald-600 text-white hover:bg-emerald-500",
    },
    {
      href: SOCIALS.facebook,
      icon: FacebookIcon,
      label: "Page Facebook",
      hint: "Communiqués officiels",
      className: "bg-[#1877F2] text-white hover:bg-[#0f6add]",
    },
    {
      href: SOCIALS.youtube,
      icon: YoutubeIcon,
      label: "Chaîne YouTube",
      hint: "Guides bancarisation",
      className: "bg-[#FF0000] text-white hover:bg-[#d60000]",
    },
    {
      href: SOCIALS.x,
      icon: XIcon,
      label: "Compte X",
      hint: "Flash infos pensionnés",
      className: "bg-black text-white hover:bg-neutral-800",
    },
    {
      href: SOCIALS.linkedin,
      icon: LinkedinIcon,
      label: "LinkedIn",
      hint: "Carrières & réformes",
      className: "bg-[#0A66C2] text-white hover:bg-[#084d96]",
    },
    {
      href: SOCIALS.telegram,
      icon: TelegramIcon,
      label: "Telegram",
      hint: "Diffusion des régions",
      className: "bg-[#229ED9] text-white hover:bg-[#1b86b8]",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`tap-target flex flex-col justify-center rounded-xl px-3 py-2.5 text-start transition ${item.className}`}
        >
          <span className="flex items-center gap-2 text-[0.8rem] font-black leading-tight">
            <item.icon className="h-5 w-5 shrink-0" strokeWidth={2.1} />
            {item.label}
          </span>
          <span className="mt-0.5 text-[0.68rem] font-medium opacity-90">
            {item.hint}
          </span>
        </a>
      ))}
    </div>
  );
}

export function StickyMobileDock() {
  const { t } = usePortal();
  const message = defaultShareMessage();

  const shareNative = async () => {
    trackShare("native", "page");
    const nav = typeof navigator !== "undefined" ? navigator : undefined;
    if (nav && "share" in nav) {
      try {
        await nav.share({
          title: "C.A.R.M.I. — Caisse de Retraite des Militaires",
          text: message,
          url: process.env.NEXT_PUBLIC_SITE_URL ?? "/",
        });
        return;
      } catch {
        /* annulation par l'utilisateur */
      }
    }
    openShare("whatsapp", buildShareUrl("whatsapp", message));
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div className="safe-bottom border-t border-gold-500/25 bg-army-950/97 px-2 pt-2 shadow-[0_-8px_24px_rgba(0,0,0,0.35)] backdrop-blur">
        <div className="flex items-center gap-1.5">
          <a
            href={`tel:${CONTACT.helpline}`}
            className="tap-target flex flex-1 flex-col items-center justify-center rounded-xl bg-flag-red px-1 text-white"
            aria-label={`${t("emergency")} ${CONTACT.helplineDisplay}`}
          >
            <Phone className="h-5 w-5" strokeWidth={2.2} />
            <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-wide">
              Urgence
            </span>
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackShare("whatsapp", "page")}
            className="tap-target flex flex-1 flex-col items-center justify-center rounded-xl bg-emerald-600 px-1 text-white"
            aria-label="Assistance WhatsApp CARMI"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
            <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-wide">
              WhatsApp
            </span>
          </a>
          <button
            type="button"
            onClick={shareNative}
            className="tap-target flex flex-1 flex-col items-center justify-center rounded-xl bg-gold-500 px-1 text-army-950"
            aria-label="Partager les infos officielles"
          >
            <Share2 className="h-5 w-5" strokeWidth={2.2} />
            <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-wide">
              {t("cta_share").split(" ")[0]}
            </span>
          </button>
          <a
            href={SOCIALS.whatsappChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target flex flex-1 flex-col items-center justify-center rounded-xl border border-gold-500/50 px-1 text-gold-300"
            aria-label="Canal officiel WhatsApp CARMI"
          >
            <Bell className="h-5 w-5" strokeWidth={2.2} />
            <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-wide">
              Canal
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
