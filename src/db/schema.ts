import {
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/** Circonscriptions militaires du Tchad (régions militaires). */
export const militaryRegions = pgTable("military_regions", {
  id: serial("id").primaryKey(),
  code: varchar("code", { length: 16 }).notNull().unique(),
  label: varchar("label", { length: 120 }).notNull(),
  city: varchar("city", { length: 80 }).notNull(),
  zone: varchar("zone", { length: 80 }).notNull(),
  position: integer("position").notNull().default(0),
});

/** Calendrier de paiement des soldes de retraite par région militaire. */
export const payoutCycles = pgTable("payout_cycles", {
  id: serial("id").primaryKey(),
  period: varchar("period", { length: 32 }).notNull(),
  regionCode: varchar("region_code", { length: 16 }).notNull(),
  counterOpenFrom: varchar("counter_open_from", { length: 32 }).notNull(),
  payDate: varchar("pay_date", { length: 32 }).notNull(),
  channel: varchar("channel", { length: 48 }).notNull(),
  status: varchar("status", { length: 24 }).notNull().default("planifie"),
  pensioners: integer("pensioners").notNull().default(0),
  amountXaf: integer("amount_xaf").notNull().default(0),
  note: text("note").notNull().default(""),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

/** Guichets régionaux et unités mobiles de paie. */
export const regionalAgencies = pgTable("regional_agencies", {
  id: serial("id").primaryKey(),
  regionCode: varchar("region_code", { length: 16 }).notNull(),
  name: varchar("name", { length: 140 }).notNull(),
  city: varchar("city", { length: 80 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  whatsapp: varchar("whatsapp", { length: 40 }).notNull(),
  hours: varchar("hours", { length: 120 }).notNull(),
  mobileUnit: varchar("mobile_unit", { length: 160 }).notNull(),
  bankPartners: varchar("bank_partners", { length: 160 }).notNull(),
});

/** Prestations CARMI (retraite, invalidité, ayants droit, biométrie, bancarisation). */
export const pensionServices = pgTable("pension_services", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 64 }).notNull().unique(),
  title: varchar("title", { length: 140 }).notNull(),
  tagline: varchar("tagline", { length: 200 }).notNull(),
  icon: varchar("icon", { length: 32 }).notNull(),
  accent: varchar("accent", { length: 24 }).notNull().default("army"),
  description: text("description").notNull(),
  documents: jsonb("documents").$type<string[]>().notNull().default([]),
  steps: jsonb("steps").$type<string[]>().notNull().default([]),
  processingDays: integer("processing_days").notNull().default(30),
  position: integer("position").notNull().default(0),
});

/** Communiqués officiels / annonces virales (dates de paiement, réformes). */
export const announcements = pgTable("announcements", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 96 }).notNull().unique(),
  title: varchar("title", { length: 200 }).notNull(),
  summary: text("summary").notNull(),
  category: varchar("category", { length: 48 }).notNull(),
  severity: varchar("severity", { length: 24 }).notNull().default("info"),
  publishedAt: varchar("published_at", { length: 32 }).notNull(),
  shareCount: integer("share_count").notNull().default(0),
  pinned: integer("pinned").notNull().default(0),
});

/** Réclamations / demandes de suivi déposées par les pensionnés ou ayants droit. */
export const pensionClaims = pgTable("pension_claims", {
  id: serial("id").primaryKey(),
  trackingCode: varchar("tracking_code", { length: 24 }).notNull().unique(),
  matricule: varchar("matricule", { length: 32 }).notNull(),
  fullName: varchar("full_name", { length: 140 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  regionCode: varchar("region_code", { length: 16 }).notNull(),
  serviceSlug: varchar("service_slug", { length: 64 }).notNull(),
  message: text("message").notNull().default(""),
  channel: varchar("channel", { length: 24 }).notNull().default("web"),
  status: varchar("status", { length: 24 }).notNull().default("recu"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

/** Journal des partages (hub viral). */
export const shareEvents = pgTable("share_events", {
  id: serial("id").primaryKey(),
  channel: varchar("channel", { length: 24 }).notNull(),
  target: varchar("target", { length: 96 }).notNull().default("page"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

/** Simulations de pension enregistrées (estimation / éligibilité). */
export const pensionEstimates = pgTable("pension_estimates", {
  id: serial("id").primaryKey(),
  matricule: varchar("matricule", { length: 32 }).notNull().default(""),
  rank: varchar("rank", { length: 48 }).notNull(),
  unit: varchar("unit", { length: 48 }).notNull(),
  years: integer("years").notNull(),
  disabilityRate: integer("disability_rate").notNull().default(0),
  survivor: varchar("survivor", { length: 24 }).notNull().default("non"),
  monthlyXaf: integer("monthly_xaf").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type MilitaryRegion = typeof militaryRegions.$inferSelect;
export type PayoutCycle = typeof payoutCycles.$inferSelect;
export type RegionalAgency = typeof regionalAgencies.$inferSelect;
export type PensionService = typeof pensionServices.$inferSelect;
export type Announcement = typeof announcements.$inferSelect;
export type PensionClaim = typeof pensionClaims.$inferSelect;
