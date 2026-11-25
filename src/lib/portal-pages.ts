export const portalPages = {
  prestations: ["Prestations", "الخدمات", "Retraite, invalidité, ayants droit et réversion.", "التقاعد والعجز وذوو الحقوق ومعاش المستحقين."],
  calendrier: ["Calendrier", "التقويم", "Explorer un calendrier de paiements fictif.", "استكشف تقويم مدفوعات افتراضياً."],
  agences: ["Agences et guichets", "الفروع ومكاتب الخدمة", "Découvrir une fiche de guichet illustrative.", "تعرّف على نموذج مكتب الخدمة."],
  simulateur: ["Simulateur", "المحاكي", "Essayer un calcul local avec des paramètres fictifs.", "جرّب حساباً محلياً بمعطيات افتراضية."],
  actualites: ["Actualités", "الأخبار", "Consulter les exemples de communiqués.", "اطّلع على نماذج البيانات."],
  commandement: ["Direction générale", "الإدارة العامة", "Comprendre les missions et la gouvernance de la CARMI.", "تعرّف على مهام الصندوق وحوكمته."],
  ressources: ["Ressources et aide", "الموارد والمساعدة", "Consulter le texte fondateur et les questions fréquentes.", "اطّلع على النص التأسيسي والأسئلة الشائعة."],
  contact: ["Proposition PROSPERA", "مقترح PROSPERA", "Découvrir la proposition de modernisation numérique.", "تعرّف على مقترح التحديث الرقمي."],
} as const;
export type PortalPage = keyof typeof portalPages;

export const creationLaw = "https://journalofficiel.td/storage/v1/object/public/archiva/journaux/2022/11/1764340966371-9irgp08sgif.pdf";
