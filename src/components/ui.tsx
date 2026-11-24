"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      data-reveal
      initial={{ y: 12 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Tricolor({ className = "" }: { className?: string }) {
  return (
    <div className={`flag-lisere h-1.5 w-full ${className}`} aria-hidden="true" />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "start",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "start" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold-600 dark:text-gold-300">
        <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-2xl font-black leading-tight text-army-900 sm:text-3xl lg:text-4xl dark:text-white">
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-slate-600 dark:text-slate-300 ${align === "center" ? "mx-auto" : ""}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 dark:border-white/10 dark:bg-tactical-900/70 ${className}`}
    >
      {children}
    </div>
  );
}

export function IconBadge({
  icon: Icon,
  tone = "army",
  size = "md",
}: {
  icon: LucideIcon;
  tone?: "army" | "gold" | "navy";
  size?: "sm" | "md" | "lg";
}) {
  const tones = {
    army: "bg-army-900 text-gold-400 ring-gold-500/30",
    gold: "bg-gold-500 text-army-950 ring-army-900/20",
    navy: "bg-navy-700 text-white ring-white/20",
  } as const;
  const sizes = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-14 w-14",
  } as const;
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-xl ring-1 ${tones[tone]} ${sizes[size]}`}
    >
      <Icon className={size === "lg" ? "h-7 w-7" : size === "md" ? "h-6 w-6" : "h-5 w-5"} strokeWidth={1.9} />
    </span>
  );
}

export function StatusChip({ label, dot, tone }: { label: string; dot: string; tone: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wide ${tone}`}
    >
      <span className={`h-2 w-2 rounded-full ${dot}`} aria-hidden="true" />
      {label}
    </span>
  );
}
