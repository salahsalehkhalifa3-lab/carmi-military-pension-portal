import { sql } from "drizzle-orm";
import { db } from "@/db";
import {
  announcements,
  militaryRegions,
  payoutCycles,
  pensionServices,
  regionalAgencies,
} from "@/db/schema";

type RegionSeed = {
  code: string;
  label: string;
  city: string;
  zone: string;
  agency: string;
  phone: string;
  whatsapp: string;
  hours: string;
  mobileUnit: string;
  banks: string;
  openFrom: string;
  payDate: string;
  status: string;
  pensioners: number;
  amountXaf: number;
  note: string;
};

const PERIOD = "Février 2026";

const REGIONS: RegionSeed[] = [
  {
    code: "RM1",
    label: "1ère Région Militaire",
    city: "N'Djamena",
    zone: "Chari-Baguirmi · Hadjer-Lamis",
    agency: "Direction Générale CARMI — Guichet Central",
    phone: "+235 22 51 44 20",
    whatsapp: "+235 66 00 11 22",
    hours: "Lun–Ven 07h30–15h30 · Sam 08h–12h",
    mobileUnit:
      "Unité Mobile de Paie n°1 : Massaguet, Bokoro, Dourbali (semaine 2)",
    banks: "BCC · UBA · Ecobank · CBT · Orange Money",
    openFrom: "02 février 2026",
    payDate: "05 février 2026",
    status: "en_cours",
    pensioners: 18420,
    amountXaf: 2134000000,
    note: "Guichets biométriques ouverts — priorité aux grandes invalides.",
  },
  {
    code: "RM2",
    label: "2ème Région Militaire",
    city: "Sarh",
    zone: "Moyen-Chari · Barh-Kôh · Salamat",
    agency: "Antenne Régionale CARMI Sarh",
    phone: "+235 22 68 33 12",
    whatsapp: "+235 66 00 11 23",
    hours: "Lun–Ven 07h30–15h00",
    mobileUnit: "Unité Mobile n°2 : Kyabé, Moïssala, Qorei (semaine 3)",
    banks: "UBA · Ecobank · CBT",
    openFrom: "04 février 2026",
    payDate: "09 février 2026",
    status: "en_cours",
    pensioners: 7310,
    amountXaf: 802500000,
    note: "Contrôle de vie digital obligatoire avant décaissement.",
  },
  {
    code: "RM3",
    label: "3ème Région Militaire",
    city: "Moundou",
    zone: "Logone Occidental · Logone Oriental · Tandjilé",
    agency: "Antenne Régionale CARMI Moundou",
    phone: "+235 22 69 27 80",
    whatsapp: "+235 66 00 11 24",
    hours: "Lun–Ven 07h30–15h00",
    mobileUnit: "Unité Mobile n°3 : Doba, Bébidjia, Lai (semaine 3)",
    banks: "Ecobank · CBT · UBA",
    openFrom: "05 février 2026",
    payDate: "11 février 2026",
    status: "planifie",
    pensioners: 6125,
    amountXaf: 671300000,
    note: "Bancarisation : 92 % des pensionnés servis par virement bancaire.",
  },
  {
    code: "RM4",
    label: "4ème Région Militaire",
    city: "Abéché",
    zone: "Ouaddaï · Sila · Wadi Fira",
    agency: "Antenne Régionale CARMI Abéché",
    phone: "+235 22 44 51 09",
    whatsapp: "+235 66 00 11 25",
    hours: "Dim–Jeu 07h00–14h30",
    mobileUnit: "Unité Mobile n°4 : Goz Beïda, Adré, Biltine (semaine 2)",
    banks: "BCC · CBT · Aird Money",
    openFrom: "03 février 2026",
    payDate: "07 février 2026",
    status: "en_cours",
    pensioners: 5890,
    amountXaf: 644100000,
    note: "Dispositif renforcé pour les blessés de guerre du front Est.",
  },
  {
    code: "RM5",
    label: "5ème Région Militaire",
    city: "Faya-Largeau",
    zone: "Borkou · Ennedi Est · Ennedi Ouest · Tibesti",
    agency: "Détachement CARMI Faya-Largeau",
    phone: "+235 22 26 10 77",
    whatsapp: "+235 66 00 11 26",
    hours: "Dim–Jeu 07h00–14h00",
    mobileUnit: "Unité Mobile n°5 : Bardaï, Aozou, Fada (semaine 4)",
    banks: "BCC · Aird Money",
    openFrom: "09 février 2026",
    payDate: "14 février 2026",
    status: "planifie",
    pensioners: 2140,
    amountXaf: 268700000,
    note: "Pont aérien logistique pour les garnisons du Nord.",
  },
  {
    code: "RM6",
    label: "6ème Région Militaire",
    city: "Mao",
    zone: "Kanem · Barh-El-Gazel · Batha",
    agency: "Antenne Régionale CARMI Mao",
    phone: "+235 22 27 44 31",
    whatsapp: "+235 66 00 11 27",
    hours: "Dim–Jeu 07h00–14h30",
    mobileUnit: "Unité Mobile n°6 : Moussoro, Ati, Oum Hadjer (semaine 4)",
    banks: "CBT · Aird Money",
    openFrom: "10 février 2026",
    payDate: "16 février 2026",
    status: "planifie",
    pensioners: 3375,
    amountXaf: 359200000,
    note: "Recensement biométrique des nomades : colonne mobile Mao–Moussoro.",
  },
  {
    code: "RM7",
    label: "7ème Région Militaire",
    city: "Adré",
    zone: "Assoungha · Dar Tama · Guéra",
    agency: "Antenne Régionale CARMI Adré",
    phone: "+235 22 41 88 62",
    whatsapp: "+235 66 00 11 28",
    hours: "Dim–Jeu 07h00–14h30",
    mobileUnit: "Unité Mobile n°7 : Guéréda, Am Timan, Bitkin (semaine 3)",
    banks: "BCC · CBT",
    openFrom: "06 février 2026",
    payDate: "12 février 2026",
    status: "planifie",
    pensioners: 2980,
    amountXaf: 316400000,
    note: "Registre des Martyrs de la Nation — dépôt des dossiers d'ayants droit.",
  },
  {
    code: "RM8",
    label: "8ème Région Militaire",
    city: "Pala",
    zone: "Mayo-Kebbi Est · Mayo-Kebbi Ouest · Lac",
    agency: "Antenne Régionale CARMI Pala",
    phone: "+235 22 24 63 15",
    whatsapp: "+235 66 00 11 29",
    hours: "Lun–Ven 07h30–15h00",
    mobileUnit: "Unité Mobile n°8 : Bongor, Bousso, Guelendeng (semaine 2)",
    banks: "Ecobank · UBA · CBT",
    openFrom: "05 février 2026",
    payDate: "10 février 2026",
    status: "solde",
    pensioners: 4460,
    amountXaf: 489600000,
    note: "Cycle soldé — 100 % des soldes reversées sur comptes bancaires.",
  },
];

const SERVICES = [
  {
    slug: "pension-retraite",
    title: "Pension de Retraite Militaire",
    tagline:
      "Liquidation des droits, décompte des années de service et attestation de solde.",
    icon: "award",
    accent: "army",
    description:
      "La CARMI liquide les droits à la retraite des militaires et assimilés de l'Armée Nationale Tchadienne (ANT), de la Gendarmerie Nationale, de la Police Nationale et de la Garde Nationale et Nomade du Tchad (GNNT). Le décompte des annuités intègre les campagnes de guerre, les services effectifs en zone opérationnelle et les bonifications de grade.",
    documents: [
      "Demande de liquidation signée (formulaire CARMI L-01)",
      "Fiche matricule et état signalétique des services certifiés par le Ministère des Armées",
      "Décision de radiation des cadres / mise en retraite",
      "Photocopie de la CNI ou de la carte d'ancien combattant",
      "Certificat de vie collectif de moins de 3 mois",
      "Relevé d'identité bancaire (RIB) au nom du pensionné",
    ],
    steps: [
      "Dépôt du dossier au guichet de la région militaire d'attache",
      "Contrôle de conformité et vérification du matricule (48 h)",
      "Décompte des annuités et calcul de la solde de retraite",
      "Visa de la Direction des Pensions puis émission du titre de pension",
      "Mise en paiement par virement bancaire ou unité mobile",
    ],
    processingDays: 45,
    position: 1,
  },
  {
    slug: "pension-invalidite",
    title: "Pension d'Invalidité & Blessés de Guerre",
    tagline:
      "Procédures accélérées pour les blessés de guerre et réformés pour infirmités.",
    icon: "flame",
    accent: "gold",
    description:
      "Prise en charge des militaires réformés pour infirmités contractées en service, des grands blessés de guerre et des amputés des théâtres d'opérations. Le taux d'invalidité est fixé par la Commission Médicale Militaire (CMM) de N'Djamena et détermine la solde d'invalidité, la rente viagère et l'appareillage.",
    documents: [
      "Rapport de la Commission Médicale Militaire (taux d'invalidité)",
      "Procès-verbal des blessures de guerre ou rapport de l'unité",
      "Fiche matricule et matricule ANT",
      "Certificats médicaux et comptes rendus d'hospitalisation",
      "Attestation d'appareillage ou de prothèse",
      "RIB bancaire du bénéficiaire",
    ],
    steps: [
      "Convocation devant la Commission Médicale Militaire",
      "Notification du taux d'invalidité au pensionné",
      "Ouverture du dossier d'invalidité à la CARMI",
      "Calcul de la rente viagère et de la solde d'invalidité",
      "Paiement prioritaire (circuit court, 15 jours)",
    ],
    processingDays: 21,
    position: 2,
  },
  {
    slug: "ayants-droit",
    title: "Pension d'Ayants Droit (Veuves & Orphelins)",
    tagline:
      "Solde de réversion et pensions d'orphelins pour les familles des Martyrs de la Nation.",
    icon: "users",
    accent: "navy",
    description:
      "La solde de réversion garantit aux veuves, orphelins et ascendants des militaires décédés en service ou à la retraite le maintien d'une part de la solde. Les dossiers des Martyrs de la Nation suivent une procédure d'urgence instruite par la Direction des Pensions et le Secrétariat d'État aux Anciens Combattants et Victimes de Guerre.",
    documents: [
      "Acte de décès du militaire ou du pensionné",
      "Jugement supplétif d'acte de naissance des orphelins",
      "Certificat de mariage ou acte de coutume",
      "Déclaration des ayants droit établie par la brigade territoriale",
      "Attestation de non-remariage pour la veuve",
      "Photos d'identité et CNI des bénéficiaires",
    ],
    steps: [
      "Déclaration du décès auprès de la région militaire",
      "Constitution du dossier de réversion par la famille",
      "Enquête de vérification des ayants droit",
      "Partage de la solde selon le code des pensions militaires",
      "Ouverture du compte bancaire au nom du tuteur légal",
    ],
    processingDays: 60,
    position: 3,
  },
  {
    slug: "biometrie-controle-vie",
    title: "Biométrie & Contrôle de Vie",
    tagline:
      "Recensement biométrique annuel et contrôle de vie numérique dans les 23 provinces.",
    icon: "filecheck",
    accent: "army",
    description:
      "Le contrôle annuel de vie conditionne le maintien du paiement de la solde. Il est réalisé par empreintes digitales, reconnaissance faciale et QR code de présence dans les centres CARMI, les unités mobiles et les ambassades pour les pensionnés de la diaspora tchadienne.",
    documents: [
      "Carte de pensionné CARMI ou titre de pension",
      "CNI en cours de validité",
      "Matricule ANT",
      "Présence physique ou visio-contrôle certifié",
      "Justificatif de domicile ou attestation de la brigade",
    ],
    steps: [
      "Réception du SMS de convocation (canal officiel WhatsApp CARMI)",
      "Présentation au centre biométrique le plus proche",
      "Capture des empreintes et vérification de l'identité numérique",
      "Validation du contrôle de vie dans le registre souverain",
      "Levée de la suspension de paiement sous 72 h",
    ],
    processingDays: 3,
    position: 4,
  },
  {
    slug: "bancarisation",
    title: "Opération Bancarisation Militaire",
    tagline:
      "Ouverture de comptes et virement des soldes dans les banques partenaires.",
    icon: "creditcard",
    accent: "gold",
    description:
      "Programme souverain de bancarisation des militaires et pensionnés : ouverture gratuite de compte, carte de retrait, et virement direct des soldes. Banques et établissements partenaires : BCC, UBA Tchad, Ecobank, CBT, Aird Money et les comptes mobiles agrées.",
    documents: [
      "CNI ou fiche d'identité militaire",
      "Matricule et attestation de service",
      "Fiche de renseignement bancaire signée",
      "Photo d'identité récente",
      "Numéro de téléphone mobile (notifications de paie)",
    ],
    steps: [
      "Choix de la banque partenaire au guichet CARMI",
      "Ouverture du compte gratuit (frais pris en charge par la CARMI)",
      "Transmission du RIB à la Direction des Pensions",
      "Test de virement puis bascule définitive du paiement",
      "Activation des alertes SMS et WhatsApp de paie",
    ],
    processingDays: 10,
    position: 5,
  },
];

const ANNOUNCEMENTS = [
  {
    slug: "paiement-fevrier-2026",
    title: "Paiement des soldes de retraite — Février 2026",
    summary:
      "Les guichets de la 1ère, 2ème et 4ème Région Militaire sont ouverts à partir du 02 février 2026. Présentez votre carte de pensionné et votre RIB.",
    category: "Paiement",
    severity: "critique",
    publishedAt: "28 janvier 2026",
    shareCount: 1284,
    pinned: 1,
  },
  {
    slug: "controle-vie-2026",
    title: "Campagne nationale de contrôle de vie et de biométrie 2026",
    summary:
      "Recensement biométrique obligatoire dans les 23 provinces. Les pensionnés non contrôlés au 31 mars 2026 verront leur solde suspendue.",
    category: "Biométrie",
    severity: "alerte",
    publishedAt: "21 janvier 2026",
    shareCount: 967,
    pinned: 1,
  },
  {
    slug: "bancarisation-obligatoire",
    title: "Bancarisation obligatoire : fin des paiements en espèces",
    summary:
      "À compter du 1er avril 2026, toutes les soldes sont servies exclusivement par virement bancaire (BCC, UBA, Ecobank, CBT).",
    category: "Bancarisation",
    severity: "info",
    publishedAt: "14 janvier 2026",
    shareCount: 742,
    pinned: 0,
  },
  {
    slug: "ayants-droit-martyrs",
    title: "Dossiers des ayants droit des Martyrs de la Nation",
    summary:
      "Guichet prioritaire ouvert à la Direction Générale pour les veuves et orphelins. Pièces exigées : acte de décès, jugement supplétif, attestation de non-remariage.",
    category: "Ayants droit",
    severity: "info",
    publishedAt: "08 janvier 2026",
    shareCount: 613,
    pinned: 0,
  },
  {
    slug: "canal-officiel-whatsapp",
    title: "Rejoignez le canal officiel WhatsApp de la CARMI",
    summary:
      "Notifications instantanées des dates de paie, convocations biométriques et communiqués officiels de la Direction Générale.",
    category: "Communication",
    severity: "info",
    publishedAt: "03 janvier 2026",
    shareCount: 1521,
    pinned: 0,
  },
];

let seedPromise: Promise<void> | null = null;

async function runSeed(): Promise<void> {
  const [{ count: regionCount }] = await db
    .select({ count: sql<number>`count(*)::int` })
    .from(militaryRegions);

  if (regionCount > 0) return;

  await db
    .insert(militaryRegions)
    .values(
      REGIONS.map((region, index) => ({
        code: region.code,
        label: region.label,
        city: region.city,
        zone: region.zone,
        position: index + 1,
      })),
    )
    .onConflictDoNothing();

  await db
    .insert(regionalAgencies)
    .values(
      REGIONS.map((region) => ({
        regionCode: region.code,
        name: region.agency,
        city: region.city,
        phone: region.phone,
        whatsapp: region.whatsapp,
        hours: region.hours,
        mobileUnit: region.mobileUnit,
        bankPartners: region.banks,
      })),
    )
    .onConflictDoNothing();

  await db
    .insert(payoutCycles)
    .values(
      REGIONS.map((region) => ({
        period: PERIOD,
        regionCode: region.code,
        counterOpenFrom: region.openFrom,
        payDate: region.payDate,
        channel: region.banks.split(" · ").slice(0, 2).join(" · "),
        status: region.status,
        pensioners: region.pensioners,
        amountXaf: region.amountXaf,
        note: region.note,
      })),
    )
    .onConflictDoNothing();

  await db.insert(pensionServices).values(SERVICES).onConflictDoNothing();
  await db.insert(announcements).values(ANNOUNCEMENTS).onConflictDoNothing();
}

/** Idempotent : garantit la présence des données de référence du portail. */
export function ensureSeeded(): Promise<void> {
  if (!seedPromise) {
    seedPromise = runSeed().catch((error) => {
      seedPromise = null;
      throw error;
    });
  }
  return seedPromise;
}

export const CURRENT_PERIOD = PERIOD;
