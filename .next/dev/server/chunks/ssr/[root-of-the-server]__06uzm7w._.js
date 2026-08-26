module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/i18n.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortalProvider",
    ()=>PortalProvider,
    "usePortal",
    ()=>usePortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const DICT = {
    ribbon: {
        fr: "RÉPUBLIQUE DU TCHAD • MINISTÈRE DES ARMÉES | C.A.R.M.I.",
        ar: "جمهورية تشاد • وزارة القوات المسلحة | صندوق تقاعد العسكريين"
    },
    nav_services: {
        fr: "Prestations",
        ar: "الخدمات"
    },
    nav_calendar: {
        fr: "Calendrier",
        ar: "التقويم"
    },
    nav_agencies: {
        fr: "Agences",
        ar: "الوكالات"
    },
    nav_calculator: {
        fr: "Simulateur",
        ar: "المحاكي"
    },
    nav_news: {
        fr: "Actualités",
        ar: "الأخبار"
    },
    nav_command: {
        fr: "Commandement",
        ar: "القيادة"
    },
    nav_contact: {
        fr: "Contact",
        ar: "اتصل بنا"
    },
    nav_tracking: {
        fr: "Suivi de dossier",
        ar: "متابعة الملف"
    },
    menu: {
        fr: "Menu",
        ar: "القائمة"
    },
    call: {
        fr: "Appeler",
        ar: "اتصال"
    },
    helpdesk: {
        fr: "Assistance WhatsApp",
        ar: "دعم واتساب"
    },
    hero_title: {
        fr: "Honneur, Dignité et Protection pour les Combattants de la Nation.",
        ar: "شرف وكرامة وحماية ل مقاتلي الأمة."
    },
    hero_sub: {
        fr: "La Caisse de Retraite des Militaires (CARMI) garantit la gestion moderne, la bancarisation et le paiement sécurisé des soldes de retraite de nos héros nationaux.",
        ar: "يضمن صندوق تقاعد العسكريين الإدارة الحديثة والخدمات المصرفية والدفع الآمن لمعاشات أبطالنا الوطنيين."
    },
    cta_calendar: {
        fr: "Calendrier des Solde & Paiements",
        ar: "تقويم الرواتب"
    },
    cta_bank: {
        fr: "Guide de Bancarisation Militaires",
        ar: "دليل الخدمات المصرفية"
    },
    cta_share: {
        fr: "Partager les Infos Officielles",
        ar: "مشاركة المعلومات الرسمية"
    },
    share_title: {
        fr: "Partager l'annonce",
        ar: "مشاركة الإعلان"
    },
    share_page: {
        fr: "Partager le portail",
        ar: "مشاركة البوابة"
    },
    theme_toggle: {
        fr: "Mode tactique",
        ar: "الوضع الليلي"
    },
    lang_toggle: {
        fr: "العربية",
        ar: "Français"
    },
    close: {
        fr: "Fermer",
        ar: "إغلاق"
    },
    emergency: {
        fr: "Urgence pensionnés",
        ar: "طوارئ المتقاعدين"
    }
};
const LangContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function PortalProvider({ children }) {
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("fr");
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("light");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedLang = window.localStorage.getItem("carmi-lang");
        const storedTheme = window.localStorage.getItem("carmi-theme");
        if (storedLang === "ar" || storedLang === "fr") setLang(storedLang);
        if (storedTheme === "dark" || storedTheme === "light") setTheme(storedTheme);
        else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = document.documentElement;
        root.classList.toggle("dark", theme === "dark");
        root.style.colorScheme = theme;
        window.localStorage.setItem("carmi-theme", theme);
    }, [
        theme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = document.documentElement;
        root.lang = lang;
        root.dir = lang === "ar" ? "rtl" : "ltr";
        window.localStorage.setItem("carmi-lang", lang);
    }, [
        lang
    ]);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key, fallback)=>{
        const entry = DICT[key];
        if (!entry) return fallback ?? String(key);
        return entry[lang];
    }, [
        lang
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            lang,
            dir: lang === "ar" ? "rtl" : "ltr",
            theme,
            t,
            toggleLang: ()=>setLang((prev)=>prev === "fr" ? "ar" : "fr"),
            toggleTheme: ()=>setTheme((prev)=>prev === "light" ? "dark" : "light")
        }), [
        lang,
        t,
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LangContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/i18n.tsx",
        lineNumber: 114,
        columnNumber: 10
    }, this);
}
function usePortal() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LangContext);
    if (!ctx) {
        return {
            lang: "fr",
            dir: "ltr",
            theme: "light",
            t: (_key, fallback)=>fallback ?? String(_key),
            toggleLang: ()=>undefined,
            toggleTheme: ()=>undefined
        };
    }
    return ctx;
}
}),
"[project]/src/lib/institution.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTACT",
    ()=>CONTACT,
    "DISABILITY_RATES",
    ()=>DISABILITY_RATES,
    "FAQ",
    ()=>FAQ,
    "LEADERSHIP",
    ()=>LEADERSHIP,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "PAYOUT_STATUS",
    ()=>PAYOUT_STATUS,
    "RANKS",
    ()=>RANKS,
    "SITE_NAME",
    ()=>SITE_NAME,
    "SITE_SHORT",
    ()=>SITE_SHORT,
    "SITE_URL",
    ()=>SITE_URL,
    "SOCIALS",
    ()=>SOCIALS,
    "UNITS",
    ()=>UNITS,
    "computeEstimate",
    ()=>computeEstimate,
    "formatXaf",
    ()=>formatXaf
]);
const SITE_NAME = "Caisse de Retraite des Militaires";
const SITE_SHORT = "C.A.R.M.I.";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://carmi.td";
const CONTACT = {
    phone: "+23522514420",
    phoneDisplay: "+235 22 51 44 20",
    helpline: "+23566001122",
    helplineDisplay: "+235 66 00 11 22",
    whatsapp: "23566001122",
    whatsappDisplay: "+235 66 00 11 22",
    email: "direction.generale@carmi.td",
    pensionsEmail: "pensions@carmi.td",
    address: "Avenue Charles de Gaulle, Quartier Klemat — N'Djamena, République du Tchad",
    hours: "Lun–Ven 07h30–15h30 · Samedi 08h00–12h00",
    ministry: "Ministère des Armées, des Anciens Combattants et des Victimes de Guerre"
};
const SOCIALS = {
    whatsappChannel: "https://whatsapp.com/channel/0029VaCARMIOfficielTd",
    facebook: "https://www.facebook.com/CARMI.Tchad",
    x: "https://x.com/CARMI_Td",
    youtube: "https://www.youtube.com/@CARMITchad",
    linkedin: "https://www.linkedin.com/company/carmi-tchad",
    telegram: "https://t.me/CARMI_Tchad"
};
const NAV_LINKS = [
    {
        href: "/#prestations",
        key: "nav_services",
        label: "Prestations"
    },
    {
        href: "/#calendrier",
        key: "nav_calendar",
        label: "Calendrier"
    },
    {
        href: "/#agences",
        key: "nav_agencies",
        label: "Agences"
    },
    {
        href: "/#simulateur",
        key: "nav_calculator",
        label: "Simulateur"
    },
    {
        href: "/#actualites",
        key: "nav_news",
        label: "Actualités"
    },
    {
        href: "/#commandement",
        key: "nav_command",
        label: "Commandement"
    },
    {
        href: "/#contact",
        key: "nav_contact",
        label: "Contact"
    },
    {
        href: "/suivi",
        key: "nav_tracking",
        label: "Suivi de dossier"
    }
];
const LEADERSHIP = {
    rank: "Général de Division",
    name: "Dr. Abdelkerim Mahamat Itno",
    role: "Directeur Général de la Caisse de Retraite des Militaires",
    citation: "Celui qui a porté l'uniforme ne doit jamais porter le doute. Notre devoir est de servir le vétéran avec la même rigueur qu'il a servie la Nation.",
    priorities: [
        {
            title: "Modernisation administrative",
            detail: "Dématérialisation intégrale des dossiers de pension et signature électronique des titres de pension."
        },
        {
            title: "Sécurité numérique souveraine",
            detail: "Registre biométrique central, lutte contre les pensions fictives et contrôle d'identité numérique."
        },
        {
            title: "Transparence des décaissements",
            detail: "Publication du calendrier de paie par région militaire et traçabilité de chaque solde versée."
        },
        {
            title: "Protection sociale des vétérans",
            detail: "Accès aux soins, aide aux grands blessés et accompagnement des veuves et orphelins des Martyrs."
        }
    ]
};
const FAQ = [
    {
        q: "Comment connaître la date de paiement de ma solde de retraite ?",
        a: "Consultez la section Calendrier & Paiements : sélectionnez votre région militaire. Les dates sont également diffusées sur le canal officiel WhatsApp de la CARMI et par SMS aux pensionnés bancarisés."
    },
    {
        q: "Qu'est-ce que le contrôle de vie et est-il obligatoire ?",
        a: "Oui. Le contrôle annuel de vie atteste que le pensionné est toujours en vie et éligible. Il se fait par empreinte biométrique, QR code de présence ou visio-contrôle certifié. Sans contrôle au 31 mars, la solde est suspendue."
    },
    {
        q: "Ma solde est suspendue, que faire ?",
        a: "Présentez-vous au guichet de votre région militaire avec votre carte de pensionné, votre CNI et un certificat de vie de moins de 3 mois. La levée de suspension intervient sous 72 heures après validation biométrique."
    },
    {
        q: "Quelles banques servent les soldes militaires ?",
        a: "BCC, UBA Tchad, Ecobank, CBT ainsi que les établissements monétaires agréés (Aird Money). L'ouverture de compte est gratuite pour les militaires et pensionnés dans le cadre de l'Opération Bancarisation."
    },
    {
        q: "Une veuve peut-elle toucher la pension de son défunt époux ?",
        a: "Oui, via la solde de réversion. Le dossier doit comporter l'acte de décès, le certificat de mariage ou l'acte de coutume, l'attestation de non-remariage et les jugements supplétifs des orphelins."
    }
];
const RANKS = [
    {
        value: "homme-du-rang",
        label: "Homme du rang / Caporal",
        factor: 1,
        base: 96000
    },
    {
        value: "sous-officier",
        label: "Sergent / Adjudant",
        factor: 1.25,
        base: 138000
    },
    {
        value: "officier-subalterne",
        label: "Lieutenant / Capitaine",
        factor: 1.6,
        base: 210000
    },
    {
        value: "officier-superieur",
        label: "Commandant / Colonel",
        factor: 2.1,
        base: 305000
    },
    {
        value: "officier-general",
        label: "Général",
        factor: 2.8,
        base: 470000
    }
];
const UNITS = [
    {
        value: "ant",
        label: "ANT — Armée Nationale Tchadienne",
        bonus: 0.05
    },
    {
        value: "gendarmerie",
        label: "Gendarmerie Nationale",
        bonus: 0.04
    },
    {
        value: "police",
        label: "Police Nationale",
        bonus: 0.03
    },
    {
        value: "gnnt",
        label: "GNNT — Garde Nationale et Nomade",
        bonus: 0.05
    },
    {
        value: "veterans",
        label: "Anciens Combattants / Victimes de Guerre",
        bonus: 0.06
    }
];
const DISABILITY_RATES = [
    0,
    10,
    25,
    50,
    75,
    100
];
function round(n) {
    return Math.round(n / 500) * 500;
}
function formatXaf(value) {
    return `${new Intl.NumberFormat("fr-FR").format(Math.round(value))} FCFA`;
}
function computeEstimate(input) {
    const rank = RANKS.find((r)=>r.value === input.rank) ?? RANKS[0];
    const unit = UNITS.find((u)=>u.value === input.unit) ?? UNITS[0];
    const years = Math.max(0, Math.min(50, Math.round(input.years)));
    const disability = DISABILITY_RATES.includes(input.disabilityRate) ? input.disabilityRate : 0;
    const requiredYears = input.survivor === "non" ? 15 : 0;
    const eligible = years >= requiredYears;
    const ratePercent = eligible ? Math.min(100, years * 2 + Math.round(unit.bonus * 100) + disability / 4) : 0;
    const base = rank.base * rank.factor;
    const monthly = eligible ? round(base * Math.min(ratePercent, 100) / 100) : 0;
    const survivorShare = input.survivor === "veuve" ? 0.5 : input.survivor === "orphelin" ? 0.3 : 1;
    const finalMonthly = round(monthly * survivorShare);
    const breakdown = [
        {
            label: "Grade / index de solde",
            value: rank.label
        },
        {
            label: "Années de service retenues",
            value: `${years} ans`
        },
        {
            label: "Bonification d'armée / unité",
            value: `+${Math.round(unit.bonus * 100)} %`
        },
        {
            label: "Taux d'invalidité (CMM)",
            value: disability > 0 ? `${disability} %` : "Non applicable"
        },
        {
            label: "Taux de liquidation estimé",
            value: `${Math.round(ratePercent)} %`
        },
        {
            label: input.survivor === "non" ? "Solde mensuelle estimée" : "Part de réversion",
            value: input.survivor === "non" ? formatXaf(finalMonthly) : `${Math.round(survivorShare * 100)} % — ${formatXaf(finalMonthly)}`
        }
    ];
    const documents = input.survivor === "non" ? [
        "Fiche matricule certifiée par le Ministère des Armées",
        "Décision de mise en retraite ou radiation des cadres",
        "CNI en cours de validité + matricule ANT",
        "Certificat de vie collectif (< 3 mois)",
        "Relevé d'identité bancaire (RIB)"
    ] : input.survivor === "veuve" ? [
        "Acte de décès du militaire ou pensionné",
        "Certificat de mariage / acte de coutume",
        "Attestation de non-remariage",
        "CNI de la bénéficiaire + RIB",
        "Déclaration des ayants droit (brigade territoriale)"
    ] : [
        "Jugement supplétif d'acte de naissance de l'orphelin",
        "Acte de décès du parent militaire",
        "Attestation de scolarité si moins de 21 ans",
        "CNI du tuteur légal + RIB",
        "Déclaration des ayants droit (brigade territoriale)"
    ];
    if (disability > 0) {
        documents.push("Rapport de la Commission Médicale Militaire (CMM) fixant le taux d'invalidité");
    }
    return {
        eligible,
        monthlyXaf: finalMonthly,
        ratePercent: Math.round(ratePercent),
        breakdown,
        documents,
        reference: `${input.unit.toUpperCase().slice(0, 3)}-${years}-${input.rank.slice(0, 3).toUpperCase()}-${input.disabilityRate}`
    };
}
const PAYOUT_STATUS = {
    en_cours: {
        label: "Paiement en cours",
        tone: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
        dot: "bg-emerald-500"
    },
    planifie: {
        label: "Planifié",
        tone: "bg-gold-500/15 text-gold-600 dark:text-gold-300 border-gold-500/30",
        dot: "bg-gold-500"
    },
    solde: {
        label: "Cycle soldé",
        tone: "bg-slate-500/10 text-slate-600 dark:text-slate-300 border-slate-500/30",
        dot: "bg-slate-400"
    }
};
}),
"[project]/src/components/site-header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.mjs [app-ssr] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.mjs [app-ssr] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/institution.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function SiteHeader() {
    const { t, lang, toggleLang, theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePortal"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.body.style.overflow = open ? "hidden" : "";
        return ()=>{
            document.body.style.overflow = "";
        };
    }, [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 shadow-md shadow-black/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flag-lisere h-1.5 w-full",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-army-950 text-center text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gold-300 sm:text-[0.7rem]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2 py-1.5 block leading-tight",
                            children: t("ribbon")
                        }, void 0, false, {
                            fileName: "[project]/src/components/site-header.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-white/10 bg-army-900/98 backdrop-blur",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto flex h-16 max-w-7xl items-center gap-2 px-3 sm:h-[4.5rem] sm:px-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex min-w-0 flex-1 items-center gap-2.5",
                                    "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_SHORT"]} — Accueil`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/carmi-logo.png",
                                            alt: "Sceau officiel de la Caisse de Retraite des Militaires",
                                            width: 56,
                                            height: 56,
                                            priority: true,
                                            className: "h-11 w-11 shrink-0 rounded-lg bg-white object-contain p-0.5 sm:h-12 sm:w-12"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site-header.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block truncate text-base font-black leading-none tracking-tight text-white sm:text-xl",
                                                    children: "C.A.R.M.I."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-header.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1 block truncate text-[0.62rem] font-medium uppercase leading-tight tracking-[0.09em] text-gold-300 sm:text-[0.7rem]",
                                                    children: "Caisse de Retraite des Militaires"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-header.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site-header.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    "aria-label": "Navigation principale",
                                    className: "hidden items-center gap-1 lg:flex",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: "rounded-lg px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-gold-300",
                                            children: t(link.key, link.label)
                                        }, link.href, false, {
                                            fileName: "[project]/src/components/site-header.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTACT"].phone}`,
                                            className: "tap-target inline-flex items-center justify-center rounded-xl bg-gold-500 px-3 text-army-950 transition hover:bg-gold-400 lg:hidden",
                                            "aria-label": `Appeler la CARMI au ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTACT"].phoneDisplay}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "h-5 w-5",
                                                strokeWidth: 2.1
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site-header.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTACT"].whatsapp}?text=${encodeURIComponent("Bonjour CARMI, je souhaite un renseignement sur ma solde de retraite.")}`,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "tap-target hidden items-center gap-2 rounded-xl bg-emerald-600 px-3 text-sm font-bold text-white transition hover:bg-emerald-500 sm:inline-flex",
                                            "aria-label": "Assistance WhatsApp CARMI",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                    className: "h-5 w-5",
                                                    strokeWidth: 2.1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-header.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden xl:inline",
                                                    children: t("helpdesk")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-header.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site-header.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: toggleLang,
                                            className: "tap-target inline-flex items-center gap-1.5 rounded-xl border border-white/20 px-3 text-xs font-bold text-white transition hover:bg-white/10",
                                            "aria-label": lang === "fr" ? "التبديل إلى العربية" : "Switch to French",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                                                    className: "h-4 w-4",
                                                    strokeWidth: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-header.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this),
                                                t("lang_toggle")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site-header.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: toggleTheme,
                                            className: "tap-target inline-flex items-center justify-center rounded-xl border border-white/20 px-3 text-white transition hover:bg-white/10",
                                            "aria-label": t("theme_toggle"),
                                            children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                                className: "h-5 w-5",
                                                strokeWidth: 2
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                                className: "h-5 w-5",
                                                strokeWidth: 2
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site-header.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setOpen(true),
                                            className: "tap-target inline-flex items-center justify-center rounded-xl bg-white/10 px-3 text-white transition hover:bg-white/20 lg:hidden",
                                            "aria-label": t("menu"),
                                            "aria-expanded": open,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                className: "h-6 w-6",
                                                strokeWidth: 2.1
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site-header.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site-header.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-header.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "fixed inset-0 z-[60] lg:hidden",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.18
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            "aria-label": t("close"),
                            className: "absolute inset-0 bg-army-950/70 backdrop-blur-sm",
                            onClick: ()=>setOpen(false)
                        }, void 0, false, {
                            fileName: "[project]/src/components/site-header.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].aside, {
                            className: "absolute end-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-army-900 text-white shadow-2xl",
                            initial: {
                                x: "100%"
                            },
                            animate: {
                                x: 0
                            },
                            exit: {
                                x: "100%"
                            },
                            transition: {
                                type: "tween",
                                duration: 0.24,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            role: "dialog",
                            "aria-modal": "true",
                            "aria-label": t("menu"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flag-lisere h-1.5 w-full",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between border-b border-white/10 px-4 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-gold-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                                    className: "h-5 w-5",
                                                    strokeWidth: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-header.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_SHORT"]
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site-header.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setOpen(false),
                                            className: "tap-target inline-flex items-center justify-center rounded-xl border border-white/20 px-3",
                                            "aria-label": t("close"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-6 w-6",
                                                strokeWidth: 2.1
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site-header.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "flex flex-col gap-1 p-3",
                                    "aria-label": "Menu mobile",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            onClick: ()=>setOpen(false),
                                            className: "tap-target flex items-center justify-between rounded-xl px-4 text-base font-bold text-slate-100 transition hover:bg-white/10 hover:text-gold-300",
                                            children: [
                                                t(link.key, link.label),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                    className: "h-4 w-4 text-gold-500",
                                                    strokeWidth: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-header.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, link.href, true, {
                                            fileName: "[project]/src/components/site-header.tsx",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-auto space-y-2 border-t border-white/10 p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTACT"].phone}`,
                                            className: "tap-target flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-4 text-sm font-black text-army-950",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "h-5 w-5",
                                                    strokeWidth: 2.1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-header.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTACT"].phoneDisplay
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site-header.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTACT"].whatsapp}`,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "tap-target flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 text-sm font-black text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                    className: "h-5 w-5",
                                                    strokeWidth: 2.1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-header.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 19
                                                }, this),
                                                "Assistance WhatsApp"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site-header.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOCIALS"].whatsappChannel,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "tap-target flex items-center justify-center gap-2 rounded-xl border border-gold-500/50 px-4 text-xs font-bold text-gold-300",
                                            children: "Canal officiel WhatsApp CARMI"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site-header.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pt-1 text-center text-[0.65rem] leading-relaxed text-slate-400",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTACT"].address
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site-header.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site-header.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site-header.tsx",
                    lineNumber: 137,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/src/components/site-header.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/brand-icons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FacebookIcon",
    ()=>FacebookIcon,
    "LinkedinIcon",
    ()=>LinkedinIcon,
    "TelegramIcon",
    ()=>TelegramIcon,
    "WhatsappIcon",
    ()=>WhatsappIcon,
    "XIcon",
    ()=>XIcon,
    "YoutubeIcon",
    ()=>YoutubeIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function base(props) {
    const { strokeWidth: _strokeWidth, ...rest } = props;
    return rest;
}
function WhatsappIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ...base(props),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.39c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.26.86 5.81 2.41a8.16 8.16 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.65 4.2 3.71.59.26 1.04.41 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z"
        }, void 0, false, {
            fileName: "[project]/src/components/brand-icons.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/brand-icons.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
function FacebookIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ...base(props),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z"
        }, void 0, false, {
            fileName: "[project]/src/components/brand-icons.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/brand-icons.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
function XIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ...base(props),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.53 3H21l-7.19 8.21L22 21h-6.56l-4.28-5.6L6.2 21H3l7.5-8.56L2.4 3H9l4.13 5.46L17.53 3Zm-1.16 16h1.92L7.75 4.9H5.68L16.37 19Z"
        }, void 0, false, {
            fileName: "[project]/src/components/brand-icons.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/brand-icons.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
function LinkedinIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ...base(props),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6.94 5.5a2.06 2.06 0 1 1-4.12 0 2.06 2.06 0 0 1 4.12 0ZM3.1 8.98h4.03V21H3.1V8.98Zm6.4 0h3.86v1.64h.05c.54-.98 1.86-2.02 3.83-2.02 4.1 0 4.85 2.6 4.85 5.98V21h-4.03v-5.63c0-1.34-.03-3.07-1.96-3.07-1.96 0-2.26 1.46-2.26 2.97V21H9.5V8.98Z"
        }, void 0, false, {
            fileName: "[project]/src/components/brand-icons.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/brand-icons.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
function YoutubeIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ...base(props),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21.58 7.19a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42a2.51 2.51 0 0 0-1.77 1.77A26.2 26.2 0 0 0 2 12c0 1.63.14 3.27.42 4.81a2.51 2.51 0 0 0 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42a2.51 2.51 0 0 0 1.77-1.77c.28-1.54.42-3.18.42-4.81 0-1.63-.14-3.27-.42-4.81ZM10 15.5v-7l6 3.5-6 3.5Z"
        }, void 0, false, {
            fileName: "[project]/src/components/brand-icons.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/brand-icons.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
function TelegramIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ...base(props),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21.94 4.3 18.9 19.1c-.23 1.03-.83 1.29-1.68.8l-4.65-3.43-2.24 2.16c-.25.25-.46.46-.94.46l.34-4.77L18.37 6.4c.37-.33-.08-.52-.58-.19L7.24 13.03l-4.6-1.44c-1-.31-1.02-1 .21-1.48L20.06 2.9c.83-.3 1.56.2 1.88 1.4Z"
        }, void 0, false, {
            fileName: "[project]/src/components/brand-icons.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/brand-icons.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/share.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHANNEL_LABELS",
    ()=>CHANNEL_LABELS,
    "SHARE_CHANNELS",
    ()=>SHARE_CHANNELS,
    "buildShareUrl",
    ()=>buildShareUrl,
    "copyToClipboard",
    ()=>copyToClipboard,
    "defaultShareMessage",
    ()=>defaultShareMessage,
    "trackShare",
    ()=>trackShare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/institution.ts [app-ssr] (ecmascript)");
;
const SHARE_CHANNELS = [
    "whatsapp",
    "facebook",
    "telegram",
    "x",
    "linkedin",
    "copy"
];
const CHANNEL_LABELS = {
    whatsapp: "WhatsApp",
    facebook: "Facebook",
    x: "X (Twitter)",
    linkedin: "LinkedIn",
    telegram: "Telegram",
    sms: "SMS",
    native: "Partager",
    copy: "Copier le lien"
};
function targetUrl(path) {
    if (!path) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_URL"];
    return path.startsWith("http") ? path : `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_URL"]}${path}`;
}
function buildShareUrl(channel, message, path) {
    const url = encodeURIComponent(targetUrl(path));
    const text = encodeURIComponent(message);
    switch(channel){
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
function defaultShareMessage(title) {
    return title ? `${title} — ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_NAME"]} (République du Tchad)` : `Infos officielles de la ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_NAME"]} (CARMI) : calendrier de paiement des soldes, bancarisation et contrôle de vie.`;
}
function trackShare(channel, target) {
    void fetch("/api/shares", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            channel,
            target
        }),
        keepalive: true
    }).catch(()=>undefined);
}
async function copyToClipboard(value) {
    try {
        await navigator.clipboard.writeText(value);
        return true;
    } catch  {
        return false;
    }
}
}),
"[project]/src/components/share.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OfficialChannels",
    ()=>OfficialChannels,
    "ShareButton",
    ()=>ShareButton,
    "ShareRow",
    ()=>ShareRow,
    "StickyMobileDock",
    ()=>StickyMobileDock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.mjs [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.mjs [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brand-icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/institution.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$share$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/share.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const CHANNEL_ICON = {
    whatsapp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhatsappIcon"],
    facebook: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FacebookIcon"],
    x: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XIcon"],
    linkedin: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkedinIcon"],
    telegram: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TelegramIcon"],
    sms: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
    native: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"],
    copy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"]
};
const CHANNEL_STYLE = {
    whatsapp: "bg-emerald-600 text-white hover:bg-emerald-500",
    facebook: "bg-[#1877F2] text-white hover:bg-[#0f6add]",
    x: "bg-black text-white hover:bg-neutral-800",
    linkedin: "bg-[#0A66C2] text-white hover:bg-[#084d96]",
    telegram: "bg-[#229ED9] text-white hover:bg-[#1b86b8]",
    sms: "bg-navy-700 text-white hover:bg-navy-500",
    native: "bg-gold-500 text-army-950 hover:bg-gold-400",
    copy: "bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-white/10 dark:text-white"
};
function openShare(channel, url) {
    if (channel === "copy") return;
    window.open(url, "_blank", "noopener,noreferrer,width=680,height=560");
}
function ShareButton({ channel, message, path, target, label, className = "" }) {
    const Icon = CHANNEL_ICON[channel];
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const shareLabel = label ?? (channel === "copy" ? "Copier" : channel);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: async ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$share$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackShare"])(channel, target);
            if (channel === "copy") {
                const origin = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_URL"];
                const done = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$share$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copyToClipboard"])(path ? `${origin}${path}` : `${origin}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_URL"]}`);
                setCopied(done);
                window.setTimeout(()=>setCopied(false), 1800);
                return;
            }
            openShare(channel, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$share$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildShareUrl"])(channel, message, path));
        },
        className: `tap-target inline-flex items-center justify-center gap-2 rounded-xl px-3 text-xs font-bold uppercase tracking-wide transition ${CHANNEL_STYLE[channel]} ${className}`,
        "aria-label": `${shareLabel} — ${message.slice(0, 60)}`,
        children: [
            channel === "copy" && copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "h-4 w-4",
                strokeWidth: 2.4
            }, void 0, false, {
                fileName: "[project]/src/components/share.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "h-4 w-4",
                strokeWidth: 2.1
            }, void 0, false, {
                fileName: "[project]/src/components/share.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "hidden sm:inline",
                children: shareLabel
            }, void 0, false, {
                fileName: "[project]/src/components/share.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/share.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
function ShareRow({ title, path, target, label }) {
    const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$share$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultShareMessage"])(title);
    const channels = [
        "whatsapp",
        "facebook",
        "telegram",
        "x",
        "linkedin",
        "copy"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center gap-1.5",
        children: channels.map((channel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShareButton, {
                channel: channel,
                message: message,
                path: path,
                target: target,
                label: label && channel === "whatsapp" ? label : undefined
            }, channel, false, {
                fileName: "[project]/src/components/share.tsx",
                lineNumber: 127,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/share.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
function OfficialChannels() {
    const items = [
        {
            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOCIALS"].whatsappChannel,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhatsappIcon"],
            label: "Canal WhatsApp officiel",
            hint: "Alertes de paie instantanées",
            className: "bg-emerald-600 text-white hover:bg-emerald-500"
        },
        {
            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOCIALS"].facebook,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FacebookIcon"],
            label: "Page Facebook",
            hint: "Communiqués officiels",
            className: "bg-[#1877F2] text-white hover:bg-[#0f6add]"
        },
        {
            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOCIALS"].youtube,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YoutubeIcon"],
            label: "Chaîne YouTube",
            hint: "Guides bancarisation",
            className: "bg-[#FF0000] text-white hover:bg-[#d60000]"
        },
        {
            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOCIALS"].x,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XIcon"],
            label: "Compte X",
            hint: "Flash infos pensionnés",
            className: "bg-black text-white hover:bg-neutral-800"
        },
        {
            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOCIALS"].linkedin,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkedinIcon"],
            label: "LinkedIn",
            hint: "Carrières & réformes",
            className: "bg-[#0A66C2] text-white hover:bg-[#084d96]"
        },
        {
            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOCIALS"].telegram,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TelegramIcon"],
            label: "Telegram",
            hint: "Diffusion des régions",
            className: "bg-[#229ED9] text-white hover:bg-[#1b86b8]"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: item.href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: `tap-target flex flex-col justify-center rounded-xl px-3 py-2.5 text-start transition ${item.className}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2 text-[0.8rem] font-black leading-tight",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                className: "h-5 w-5 shrink-0",
                                strokeWidth: 2.1
                            }, void 0, false, {
                                fileName: "[project]/src/components/share.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this),
                            item.label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/share.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-0.5 text-[0.68rem] font-medium opacity-90",
                        children: item.hint
                    }, void 0, false, {
                        fileName: "[project]/src/components/share.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this)
                ]
            }, item.label, true, {
                fileName: "[project]/src/components/share.tsx",
                lineNumber: 195,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/share.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
function StickyMobileDock() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePortal"])();
    const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$share$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultShareMessage"])();
    const shareNative = async ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$share$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackShare"])("native", "page");
        const nav = typeof navigator !== "undefined" ? navigator : undefined;
        if (nav && "share" in nav) {
            try {
                await nav.share({
                    title: "C.A.R.M.I. — Caisse de Retraite des Militaires",
                    text: message,
                    url: process.env.NEXT_PUBLIC_SITE_URL ?? "/"
                });
                return;
            } catch  {
            /* annulation par l'utilisateur */ }
        }
        openShare("whatsapp", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$share$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildShareUrl"])("whatsapp", message));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-x-0 bottom-0 z-40 lg:hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "safe-bottom border-t border-gold-500/25 bg-army-950/97 px-2 pt-2 shadow-[0_-8px_24px_rgba(0,0,0,0.35)] backdrop-blur",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTACT"].helpline}`,
                        className: "tap-target flex flex-1 flex-col items-center justify-center rounded-xl bg-flag-red px-1 text-white",
                        "aria-label": `${t("emergency")} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTACT"].helplineDisplay}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                className: "h-5 w-5",
                                strokeWidth: 2.2
                            }, void 0, false, {
                                fileName: "[project]/src/components/share.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-0.5 text-[0.6rem] font-bold uppercase tracking-wide",
                                children: "Urgence"
                            }, void 0, false, {
                                fileName: "[project]/src/components/share.tsx",
                                lineNumber: 247,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/share.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTACT"].whatsapp}?text=${encodeURIComponent(message)}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$share$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackShare"])("whatsapp", "page"),
                        className: "tap-target flex flex-1 flex-col items-center justify-center rounded-xl bg-emerald-600 px-1 text-white",
                        "aria-label": "Assistance WhatsApp CARMI",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                className: "h-5 w-5",
                                strokeWidth: 2.2
                            }, void 0, false, {
                                fileName: "[project]/src/components/share.tsx",
                                lineNumber: 259,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-0.5 text-[0.6rem] font-bold uppercase tracking-wide",
                                children: "WhatsApp"
                            }, void 0, false, {
                                fileName: "[project]/src/components/share.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/share.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: shareNative,
                        className: "tap-target flex flex-1 flex-col items-center justify-center rounded-xl bg-gold-500 px-1 text-army-950",
                        "aria-label": "Partager les infos officielles",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                className: "h-5 w-5",
                                strokeWidth: 2.2
                            }, void 0, false, {
                                fileName: "[project]/src/components/share.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-0.5 text-[0.6rem] font-bold uppercase tracking-wide",
                                children: t("cta_share").split(" ")[0]
                            }, void 0, false, {
                                fileName: "[project]/src/components/share.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/share.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOCIALS"].whatsappChannel,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "tap-target flex flex-1 flex-col items-center justify-center rounded-xl border border-gold-500/50 px-1 text-gold-300",
                        "aria-label": "Canal officiel WhatsApp CARMI",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                className: "h-5 w-5",
                                strokeWidth: 2.2
                            }, void 0, false, {
                                fileName: "[project]/src/components/share.tsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-0.5 text-[0.6rem] font-bold uppercase tracking-wide",
                                children: "Canal"
                            }, void 0, false, {
                                fileName: "[project]/src/components/share.tsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/share.tsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/share.tsx",
                lineNumber: 240,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/share.tsx",
            lineNumber: 239,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/share.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/site-footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteFooter",
    ()=>SiteFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.mjs [app-ssr] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/institution.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$share$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/share.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function SiteFooter() {
    const year = 2026;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-army-950 pb-24 text-slate-300 lg:pb-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flag-lisere h-1.5 w-full",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/site-footer.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 py-9 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[0.78rem] font-black uppercase tracking-[0.3em] text-gold-400",
                                children: "Unité — Travail — Progrès"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-footer.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-slate-400",
                                children: [
                                    "République du Tchad · ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTACT"].ministry
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-footer.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-footer.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-7 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-2 lg:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/carmi-logo.png",
                                                alt: "Sceau CARMI",
                                                width: 48,
                                                height: 48,
                                                className: "h-12 w-12 rounded-lg bg-white object-contain p-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-footer.tsx",
                                                lineNumber: 28,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base font-black leading-none text-white",
                                                        children: "C.A.R.M.I."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site-footer.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-[0.66rem] uppercase leading-tight tracking-wide text-gold-300",
                                                        children: "Caisse de Retraite des Militaires"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site-footer.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/site-footer.tsx",
                                                lineNumber: 35,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[0.8rem] leading-relaxed text-slate-400",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_NAME"],
                                            "— gestion des pensions militaires, des rentes d'invalidité, des ayants droit des Martyrs de la Nation et de la bancarisation des militaires tchadiens."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 inline-flex items-center gap-2 text-[0.72rem] font-semibold text-gold-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                className: "h-4 w-4",
                                                strokeWidth: 2.1
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-footer.tsx",
                                                lineNumber: 48,
                                                columnNumber: 15
                                            }, this),
                                            "Registre biométrique souverain sécurisé"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-footer.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": "Liens institutionnels",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[0.72rem] font-black uppercase tracking-widest text-white",
                                        children: "Navigation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-3 space-y-1",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    className: "inline-flex min-h-11 items-center text-[0.84rem] font-medium text-slate-300 transition hover:text-gold-300",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 19
                                                }, this)
                                            }, link.href, false, {
                                                fileName: "[project]/src/components/site-footer.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-footer.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[0.72rem] font-black uppercase tracking-widest text-white",
                                        children: "Guichet d'aide"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-3 space-y-2 text-[0.84rem]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTACT"].phone}`,
                                                    className: "inline-flex min-h-11 items-center gap-2 font-bold text-gold-300",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTACT"].phoneDisplay
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-footer.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTACT"].whatsapp}`,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "inline-flex min-h-11 items-center gap-2 font-bold text-emerald-400",
                                                    children: "Assistance WhatsApp"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-footer.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTACT"].email}`,
                                                    className: "inline-flex min-h-11 items-center gap-2 break-all text-slate-300",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTACT"].email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-footer.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "inline-flex min-h-11 items-start gap-2 text-slate-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                                        className: "mt-1 h-4 w-4 shrink-0 text-gold-500",
                                                        strokeWidth: 2.1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site-footer.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 17
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTACT"].address
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/site-footer.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-footer.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[0.72rem] font-black uppercase tracking-widest text-white",
                                        children: "Réseaux officiels"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$share$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OfficialChannels"], {}, void 0, false, {
                                            fileName: "[project]/src/components/site-footer.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[0.68rem] font-bold uppercase tracking-wide text-slate-400",
                                                children: "Partager le portail"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-footer.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$share$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShareRow"], {
                                                    title: "Portail officiel CARMI",
                                                    target: "footer-page"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-footer.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-footer.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$institution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOCIALS"].whatsappChannel,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "tap-target mt-3 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 text-[0.78rem] font-black text-white",
                                        children: "Rejoindre le canal WhatsApp CARMI"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-footer.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-footer.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-footer.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-7 border-t border-white/10 pt-5 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[0.72rem] leading-relaxed text-slate-400",
                                children: [
                                    "© ",
                                    year,
                                    " Caisse de Retraite des Militaires (CARMI) - République du Tchad. Tous droits réservés."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-footer.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-[0.66rem] leading-relaxed text-slate-500",
                                children: "Contenu officiel publié sous l'autorité du Ministère des Armées, des Anciens Combattants et des Victimes de Guerre. Toute reproduction des communiqués doit citer la source CARMI."
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-footer.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-footer.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-footer.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site-footer.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__06uzm7w._.js.map