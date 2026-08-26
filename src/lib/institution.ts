export const SITE_NAME = "Caisse de Retraite des Militaires";
export const SITE_SHORT = "C.A.R.M.I.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://carmi.td";

export const CONTACT = {
  phone: "+23522514420",
  phoneDisplay: "+235 22 51 44 20",
  helpline: "+23566001122",
  helplineDisplay: "+235 66 00 11 22",
  whatsapp: "23566001122",
  whatsappDisplay: "+235 66 00 11 22",
  email: "direction.generale@carmi.td",
  pensionsEmail: "pensions@carmi.td",
  address:
    "Avenue Charles de Gaulle, Quartier Klemat — N'Djamena, République du Tchad",
  hours: "Lun–Ven 07h30–15h30 · Samedi 08h00–12h00",
  ministry:
    "Ministère des Armées, des Anciens Combattants et des Victimes de Guerre",
};

export const SOCIALS = {
  whatsappChannel:
    "https://whatsapp.com/channel/0029VaCARMIOfficielTd",
  facebook: "https://www.facebook.com/CARMI.Tchad",
  x: "https://x.com/CARMI_Td",
  youtube: "https://www.youtube.com/@CARMITchad",
  linkedin: "https://www.linkedin.com/company/carmi-tchad",
  telegram: "https://t.me/CARMI_Tchad",
};

export const NAV_LINKS = [
  { href: "/#prestations", key: "nav_services" as const, label: "Prestations" },
  { href: "/#calendrier", key: "nav_calendar" as const, label: "Calendrier" },
  { href: "/#agences", key: "nav_agencies" as const, label: "Agences" },
  { href: "/#simulateur", key: "nav_calculator" as const, label: "Simulateur" },
  { href: "/#actualites", key: "nav_news" as const, label: "Actualités" },
  { href: "/#commandement", key: "nav_command" as const, label: "Commandement" },
  { href: "/#contact", key: "nav_contact" as const, label: "Contact" },
  { href: "/suivi", key: "nav_tracking" as const, label: "Suivi de dossier" },
];

export const LEADERSHIP = {
  rank: "Général de Division",
  name: "Dr. Abdelkerim Mahamat Itno",
  role: "Directeur Général de la Caisse de Retraite des Militaires",
  citation:
    "Celui qui a porté l'uniforme ne doit jamais porter le doute. Notre devoir est de servir le vétéran avec la même rigueur qu'il a servie la Nation.",
  priorities: [
    {
      title: "Modernisation administrative",
      detail:
        "Dématérialisation intégrale des dossiers de pension et signature électronique des titres de pension.",
    },
    {
      title: "Sécurité numérique souveraine",
      detail:
        "Registre biométrique central, lutte contre les pensions fictives et contrôle d'identité numérique.",
    },
    {
      title: "Transparence des décaissements",
      detail:
        "Publication du calendrier de paie par région militaire et traçabilité de chaque solde versée.",
    },
    {
      title: "Protection sociale des vétérans",
      detail:
        "Accès aux soins, aide aux grands blessés et accompagnement des veuves et orphelins des Martyrs.",
    },
  ],
};

export const FAQ = [
  {
    q: "Comment connaître la date de paiement de ma solde de retraite ?",
    a: "Consultez la section Calendrier & Paiements : sélectionnez votre région militaire. Les dates sont également diffusées sur le canal officiel WhatsApp de la CARMI et par SMS aux pensionnés bancarisés.",
  },
  {
    q: "Qu'est-ce que le contrôle de vie et est-il obligatoire ?",
    a: "Oui. Le contrôle annuel de vie atteste que le pensionné est toujours en vie et éligible. Il se fait par empreinte biométrique, QR code de présence ou visio-contrôle certifié. Sans contrôle au 31 mars, la solde est suspendue.",
  },
  {
    q: "Ma solde est suspendue, que faire ?",
    a: "Présentez-vous au guichet de votre région militaire avec votre carte de pensionné, votre CNI et un certificat de vie de moins de 3 mois. La levée de suspension intervient sous 72 heures après validation biométrique.",
  },
  {
    q: "Quelles banques servent les soldes militaires ?",
    a: "BCC, UBA Tchad, Ecobank, CBT ainsi que les établissements monétaires agréés (Aird Money). L'ouverture de compte est gratuite pour les militaires et pensionnés dans le cadre de l'Opération Bancarisation.",
  },
  {
    q: "Une veuve peut-elle toucher la pension de son défunt époux ?",
    a: "Oui, via la solde de réversion. Le dossier doit comporter l'acte de décès, le certificat de mariage ou l'acte de coutume, l'attestation de non-remariage et les jugements supplétifs des orphelins.",
  },
];

export const RANKS = [
  { value: "homme-du-rang", label: "Homme du rang / Caporal", factor: 1, base: 96000 },
  { value: "sous-officier", label: "Sergent / Adjudant", factor: 1.25, base: 138000 },
  { value: "officier-subalterne", label: "Lieutenant / Capitaine", factor: 1.6, base: 210000 },
  { value: "officier-superieur", label: "Commandant / Colonel", factor: 2.1, base: 305000 },
  { value: "officier-general", label: "Général", factor: 2.8, base: 470000 },
] as const;

export const UNITS = [
  { value: "ant", label: "ANT — Armée Nationale Tchadienne", bonus: 0.05 },
  { value: "gendarmerie", label: "Gendarmerie Nationale", bonus: 0.04 },
  { value: "police", label: "Police Nationale", bonus: 0.03 },
  { value: "gnnt", label: "GNNT — Garde Nationale et Nomade", bonus: 0.05 },
  { value: "veterans", label: "Anciens Combattants / Victimes de Guerre", bonus: 0.06 },
] as const;

export const DISABILITY_RATES = [0, 10, 25, 50, 75, 100] as const;

export type EstimateInput = {
  rank: string;
  unit: string;
  years: number;
  disabilityRate: number;
  survivor: "non" | "veuve" | "orphelin";
};

export type EstimateResult = {
  eligible: boolean;
  monthlyXaf: number;
  ratePercent: number;
  breakdown: { label: string; value: string }[];
  documents: string[];
  reference: string;
};

function round(n: number): number {
  return Math.round(n / 500) * 500;
}

export function formatXaf(value: number): string {
  return `${new Intl.NumberFormat("fr-FR").format(Math.round(value))} FCFA`;
}

/** Barème simplifié du code des pensions militaires (estimation indicative). */
export function computeEstimate(input: EstimateInput): EstimateResult {
  const rank = RANKS.find((r) => r.value === input.rank) ?? RANKS[0];
  const unit = UNITS.find((u) => u.value === input.unit) ?? UNITS[0];
  const years = Math.max(0, Math.min(50, Math.round(input.years)));
  const disability = DISABILITY_RATES.includes(
    input.disabilityRate as (typeof DISABILITY_RATES)[number],
  )
    ? input.disabilityRate
    : 0;

  const requiredYears = input.survivor === "non" ? 15 : 0;
  const eligible = years >= requiredYears;

  const ratePercent = eligible
    ? Math.min(100, years * 2 + Math.round(unit.bonus * 100) + disability / 4)
    : 0;

  const base = rank.base * rank.factor;
  const monthly = eligible ? round((base * Math.min(ratePercent, 100)) / 100) : 0;
  const survivorShare =
    input.survivor === "veuve" ? 0.5 : input.survivor === "orphelin" ? 0.3 : 1;
  const finalMonthly = round(monthly * survivorShare);

  const breakdown = [
    { label: "Grade / index de solde", value: rank.label },
    { label: "Années de service retenues", value: `${years} ans` },
    {
      label: "Bonification d'armée / unité",
      value: `+${Math.round(unit.bonus * 100)} %`,
    },
    {
      label: "Taux d'invalidité (CMM)",
      value: disability > 0 ? `${disability} %` : "Non applicable",
    },
    { label: "Taux de liquidation estimé", value: `${Math.round(ratePercent)} %` },
    {
      label: input.survivor === "non" ? "Solde mensuelle estimée" : "Part de réversion",
      value:
        input.survivor === "non"
          ? formatXaf(finalMonthly)
          : `${Math.round(survivorShare * 100)} % — ${formatXaf(finalMonthly)}`,
    },
  ];

  const documents =
    input.survivor === "non"
      ? [
          "Fiche matricule certifiée par le Ministère des Armées",
          "Décision de mise en retraite ou radiation des cadres",
          "CNI en cours de validité + matricule ANT",
          "Certificat de vie collectif (< 3 mois)",
          "Relevé d'identité bancaire (RIB)",
        ]
      : input.survivor === "veuve"
        ? [
            "Acte de décès du militaire ou pensionné",
            "Certificat de mariage / acte de coutume",
            "Attestation de non-remariage",
            "CNI de la bénéficiaire + RIB",
            "Déclaration des ayants droit (brigade territoriale)",
          ]
        : [
            "Jugement supplétif d'acte de naissance de l'orphelin",
            "Acte de décès du parent militaire",
            "Attestation de scolarité si moins de 21 ans",
            "CNI du tuteur légal + RIB",
            "Déclaration des ayants droit (brigade territoriale)",
          ];

  if (disability > 0) {
    documents.push(
      "Rapport de la Commission Médicale Militaire (CMM) fixant le taux d'invalidité",
    );
  }

  return {
    eligible,
    monthlyXaf: finalMonthly,
    ratePercent: Math.round(ratePercent),
    breakdown,
    documents,
    reference: `${input.unit.toUpperCase().slice(0, 3)}-${years}-${input.rank
      .slice(0, 3)
      .toUpperCase()}-${input.disabilityRate}`,
  };
}

export const PAYOUT_STATUS: Record<
  string,
  { label: string; tone: string; dot: string }
> = {
  en_cours: {
    label: "Paiement en cours",
    tone: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
    dot: "bg-emerald-500",
  },
  planifie: {
    label: "Planifié",
    tone: "bg-gold-500/15 text-gold-600 dark:text-gold-300 border-gold-500/30",
    dot: "bg-gold-500",
  },
  solde: {
    label: "Cycle soldé",
    tone: "bg-slate-500/10 text-slate-600 dark:text-slate-300 border-slate-500/30",
    dot: "bg-slate-400",
  },
};
