export type Bilingual = readonly [string, string];
type Paragraph = { title: Bilingual; body: Bilingual; article?: string };

export type EditorialPage = {
  title: Bilingual;
  summary: Bilingual;
  paragraphs: readonly Paragraph[];
};

export const editorial: Record<string, EditorialPage> = {
  institution: {
    title: ["Présentation de la CARMI", "التعريف بالصندوق"],
    summary: ["Comprendre le rôle de la Caisse de Retraite des Militaires et son cadre institutionnel.", "التعرّف على دور صندوق تقاعد العسكريين وإطاره المؤسسي."],
    paragraphs: [
      { title: ["Une caisse publique", "صندوق عام"], body: ["La loi n°14/PCMT/2022 institue un établissement public administratif doté de la personnalité morale et de l’autonomie de gestion administrative et financière.", "أنشأ القانون رقم 14 لسنة 2022 مؤسسة إدارية عامة تتمتع بالشخصية المعنوية والاستقلال الإداري والمالي."], article: "1–2" },
      { title: ["Siège et tutelle technique", "المقر والوصاية الفنية"], body: ["Le siège est fixé à N’Djaména. La loi désigne le ministère chargé des Finances pour la tutelle technique et permet la création d’agences en province.", "يقع المقر في نجامينا. ويحدد القانون الوزارة المكلفة بالمالية جهةً للوصاية الفنية ويجيز إنشاء فروع في الأقاليم."], article: "2" },
    ],
  },
  historique: {
    title: ["Historique", "لمحة تاريخية"], summary: ["Les repères établis par la loi de création.", "المحطات التي يثبتها قانون الإنشاء."],
    paragraphs: [
      { title: ["22 juin 2022 · Création", "٢٢ يونيو ٢٠٢٢ · الإنشاء"], body: ["La loi de création est promulguée à N’Djaména le 22 juin 2022 et figure dans l’édition de juin du Journal officiel.", "صدر قانون الإنشاء في نجامينا في ٢٢ يونيو ٢٠٢٢ ونُشر في عدد يونيو من الجريدة الرسمية."], article: "1 et promulgation" },
      { title: ["Reprise des actifs et passifs", "انتقال الأصول والخصوم"], body: ["Le texte prévoit la reprise des actifs et passifs liés à la gestion des pensions militaires de la CNRT, de l’ONCACVG et de l’OTACVG.", "ينص القانون على انتقال الأصول والخصوم المرتبطة بإدارة المعاشات العسكرية من الهيئات السابقة المذكورة فيه."], article: "5" },
    ],
  },
  missions: {
    title: ["Missions", "المهام"], summary: ["Les domaines de compétence prévus par le texte fondateur.", "مجالات الاختصاص التي يحددها النص التأسيسي."],
    paragraphs: [
      { title: ["Affiliation et liquidation", "الانتساب وتصفية المعاشات"], body: ["La loi prévoit l’affiliation et l’immatriculation des pensionnés et ayants droit ainsi que la liquidation des pensions de retraite, d’invalidité et de réversion.", "ينص القانون على انتساب أصحاب المعاشات وذوي الحقوق وتسجيلهم، وتصفية معاشات التقاعد والعجز والمستحقين."], article: "3" },
      { title: ["Risques professionnels et ressources", "المخاطر المهنية والموارد"], body: ["La gestion des risques professionnels des militaires et la collecte des ressources affectées à la Caisse font aussi partie de ses missions.", "تشمل مهام الصندوق إدارة المخاطر المهنية للعسكريين وتحصيل الموارد المخصصة له."], article: "3–4" },
    ],
  },
  organisation: {
    title: ["Organisation", "التنظيم"], summary: ["Les organes prévus par la loi et les éléments à confirmer.", "الهيئات المنصوص عليها في القانون والعناصر التي تحتاج إلى تأكيد."],
    paragraphs: [
      { title: ["Conseil d’administration et Direction générale", "مجلس الإدارة والإدارة العامة"], body: ["La loi identifie le conseil d’administration et la Direction générale comme organes d’administration et de gestion de la CARMI.", "يحدد القانون مجلس الإدارة والإدارة العامة باعتبارهما هيئتي إدارة وتسيير الصندوق."], article: "6" },
      { title: ["Modalités de fonctionnement", "آليات العمل"], body: ["La loi renvoie à un décret pris en Conseil des ministres pour fixer l’organisation et le fonctionnement. Le décret applicable et l’organigramme actuel restent à confirmer.", "يحيل القانون تحديد التنظيم والعمل إلى مرسوم يتخذ في مجلس الوزراء. ويظل المرسوم النافذ والهيكل الحالي بحاجة إلى تأكيد."], article: "7" },
    ],
  },
  'cadre-juridique': {
    title: ["Cadre juridique", "الإطار القانوني"], summary: ["Distinguer la loi de création, les textes d’application et les règles à vérifier.", "التمييز بين قانون الإنشاء والنصوص التطبيقية والقواعد التي تحتاج إلى تحقق."],
    paragraphs: [
      { title: ["Texte fondateur", "النص التأسيسي"], body: ["La loi n°14/PCMT/2022 définit la CARMI et ses missions. Elle ne fournit pas un barème de liquidation ni une liste exhaustive de pièces pour chaque demande.", "يحدد القانون رقم 14 لسنة 2022 الصندوق ومهامه. ولا يورد جدولاً لتصفية المعاشات أو قائمة شاملة بالوثائق لكل طلب."], article: "1–3" },
      { title: ["Textes d’application", "النصوص التطبيقية"], body: ["Le code des pensions militaires, les textes d’application en vigueur et les procédures validées doivent être vérifiés avant de publier des droits, des montants ou des délais.", "يجب التحقق من قانون المعاشات العسكرية والنصوص التطبيقية النافذة والإجراءات المعتمدة قبل نشر الحقوق أو المبالغ أو المهل."] },
    ],
  },
  prestations: {
    title: ["Prestations et droits", "الخدمات والحقوق"], summary: ["Trouvez un parcours indicatif par catégorie de prestation.", "اختر مساراً توضيحياً حسب فئة الخدمة."],
    paragraphs: [
      { title: ["Pensions prévues par la loi de création", "المعاشات الواردة في قانون الإنشاء"], body: ["Le texte mentionne les pensions de retraite, d’invalidité et de réversion. Les cartes ci-dessous montrent des parcours d’information. Elles ne définissent ni l’éligibilité ni le montant dû.", "يذكر النص معاشات التقاعد والعجز والمستحقين. وتعرض البطاقات مسارات إرشادية دون تحديد الأهلية أو المبالغ المستحقة."], article: "3" },
    ],
  },
  demarches: {
    title: ["Démarches guidées", "إجراءات موجّهة"], summary: ["Préparez un parcours fictif sans saisir de données personnelles.", "حضّر مساراً افتراضياً دون إدخال بيانات شخصية."],
    paragraphs: [
      { title: ["Du repérage au suivi", "من التوجيه إلى المتابعة"], body: ["Exercez-vous à choisir une prestation, repérer les informations à faire confirmer et lire les étapes du suivi. La liste officielle des justificatifs et les délais restent à valider.", "تدرّب على اختيار خدمة وتحديد المعلومات المطلوب تأكيدها وقراءة مراحل المتابعة. وتبقى الوثائق الرسمية والمهل بحاجة إلى اعتماد."] },
    ],
  },
  pensionne: {
    title: ["Espace pensionné fictif", "فضاء المتقاعد التجريبي"], summary: ["Explorez une vue synthétique d’un dossier de retraite et un calendrier de démonstration.", "استكشف عرضاً موجزاً لملف تقاعد وتقويماً تجريبياً."],
    paragraphs: [{ title: ["Scénario retraite", "سيناريو التقاعد"], body: ["Le dossier fictif de retraite militaire montre la réception, l’examen et la décision. Les étapes et dates servent à expliquer l’interface. Elles ne déclenchent aucun paiement.", "يعرض ملف التقاعد العسكري الافتراضي مراحل الاستلام والدراسة والقرار. وتوضح الخطوات والتواريخ الواجهة دون صرف أي مبلغ."] }],
  },
  'ayants-droit': {
    title: ["Espace ayants droit fictif", "فضاء ذوي الحقوق التجريبي"], summary: ["Découvrez un parcours de réversion et les étapes d’orientation des familles.", "تعرّف على مسار معاش المستحقين ومراحل توجيه الأسر."],
    paragraphs: [{ title: ["Scénario réversion", "سيناريو معاش المستحقين"], body: ["Un dossier fictif illustre une demande de réversion. La décision simulée n’établit aucun droit et les conditions applicables doivent être confirmées.", "يوضّح ملف افتراضي طلب معاش المستحقين. ولا ينشئ القرار التجريبي أي حق، وتحتاج الشروط المطبقة إلى تأكيد."] }],
  },
  simulateur: {
    title: ["Simulateur", "المحاكي"], summary: ["Essayez un calcul fictif sur votre appareil.", "جرّب حساباً افتراضياً على جهازك."],
    paragraphs: [{ title: ["Barème fictif", "مقياس افتراضي"], body: ["Les montants, seuils d’éligibilité, taux d’invalidité et coefficients de réversion servent à présenter le calcul. Les valeurs et résultats restent dans le navigateur.", "تستخدم المبالغ وحدود الأهلية ونسب العجز ومعاملات معاش المستحقين لشرح الحساب. وتبقى القيم والنتائج في المتصفح."] }],
  },
  commandement: {
    title: ["Direction générale", "الإدارة العامة"], summary: ["Missions de gestion et axes de modernisation proposés.", "مهام الإدارة ومحاور التحديث المقترحة."],
    paragraphs: [{ title: ["Organe de gestion", "هيئة تسيير"], body: ["La Direction générale et le conseil d’administration sont les deux organes d’administration et de gestion définis par la loi de création.", "الإدارة العامة ومجلس الإدارة هما هيئتا الإدارة والتسيير اللتان يحددهما قانون الإنشاء."], article: "6" }],
  },
  actualites: {
    title: ["Actualités et communiqués", "الأخبار والبيانات"], summary: ["Découvrez un exemple éditorial clairement identifié.", "اطّلع على مثال تحريري واضح."],
    paragraphs: [{ title: ["Projet de publication", "نموذج منشور"], body: ["L’exemple illustre une annonce renvoyant à un calendrier fictif. La publication de véritables communiqués requiert une source et un responsable habilité.", "يوضّح المثال إعلاناً يحيل إلى تقويم افتراضي. ويتطلب نشر بيانات فعلية مصدراً ومسؤولاً مخوّلاً."] }],
  },
  calendrier: {
    title: ["Calendrier fictif", "تقويم افتراضي"], summary: ["Filtrez des fenêtres de paiement illustratives.", "صفِّ نوافذ دفع توضيحية."],
    paragraphs: [{ title: ["Aucune échéance réelle", "لا مواعيد فعلية"], body: ["Les fenêtres de janvier à mars 2030 permettent de tester le filtre par mois. Les régions sont fictives et les dates n’engagent aucun versement.", "تتيح نوافذ يناير إلى مارس ٢٠٣٠ تجربة التصفية حسب الشهر. المناطق افتراضية والتواريخ لا ترتب أي صرف."] }],
  },
  agences: {
    title: ["Agences et guichets", "الفروع ومكاتب الخدمة"], summary: ["Exemple de fiche de guichet.", "نموذج لبطاقة مكتب خدمة."],
    paragraphs: [{ title: ["Renseignements à valider", "معلومات تحتاج إلى اعتماد"], body: ["Les horaires, adresses et banques partenaires de cette rubrique seront fournis après validation institutionnelle. Aucun canal opérationnel n’est annoncé ici.", "تُضاف ساعات العمل والعناوين والبنوك الشريكة بعد اعتمادها. ولا تُعلن هنا أي قناة تشغيلية."] }],
  },
  contact: {
    title: ["Proposition PROSPERA", "مقترح PROSPERA"], summary: ["La proposition commerciale de modernisation.", "المقترح التجاري للتحديث."],
    paragraphs: [{ title: ["Objet de la proposition", "موضوع المقترح"], body: ["La démonstration présente une proposition d’ingénierie et d’accompagnement. Les demandes de pension ne sont pas recueillies sur ce site.", "تعرض النسخة التجريبية مقترحاً للهندسة والمرافقة. ولا يستقبل الموقع طلبات المعاشات."] }],
  },
  suivi: {
    title: ["Suivi de dossier", "متابعة ملف"], summary: ["Consultation des dossiers réels suspendue.", "الاطّلاع على الملفات الفعلية معطّل."],
    paragraphs: [{ title: ["Suspension du suivi réel", "تعليق المتابعة الفعلية"], body: ["Aucun numéro de matricule ne peut être saisi. Utilisez les espaces fictifs pour découvrir la représentation du suivi.", "لا يمكن إدخال أي رقم تسجيل. استخدم الفضاءات التجريبية للتعرّف على عرض المتابعة."] }],
  },
  ressources: {
    title: ["Centre documentaire", "مركز الوثائق"], summary: ["Accédez aux sources, à la FAQ et à la recherche dans les contenus.", "اطّلع على المصادر والأسئلة الشائعة والبحث في المحتويات."],
    paragraphs: [{ title: ["Authenticité des documents", "أصالة الوثائق"], body: ["Le lien vers le Journal officiel ouvre le texte d’origine. Aucun formulaire administratif officiel n’est proposé au téléchargement dans cette démonstration.", "يفتح رابط الجريدة الرسمية النص الأصلي. ولا يُتاح تنزيل أي استمارة إدارية رسمية في هذه النسخة."] }],
  },
};

export const questions = [
  { q: ["Ce portail est-il officiel ?", "هل هذه البوابة رسمية؟"], a: ["Il s’agit d’une proposition de PROSPERA Tchad, soumise à validation de la CARMI.", "هذا مقترح من PROSPERA Tchad يخضع لاعتماد صندوق تقاعد العسكريين."] },
  { q: ["Puis-je déposer une demande ou consulter un dossier ?", "هل يمكنني إيداع طلب أو متابعة ملف؟"], a: ["Le dépôt et le suivi sont suspendus. La démonstration ne collecte aucune information personnelle.", "إيداع الطلبات ومتابعة الملفات معطّلان. لا تجمع النسخة التجريبية أي معلومات شخصية."] },
  { q: ["Le calendrier et le simulateur font-ils foi ?", "هل التقويم ونتائج المحاكي معتمدان؟"], a: ["Les dates, paramètres et résultats illustrent l’interface. Ils ne constituent pas des échéances ni des barèmes réels.", "التواريخ والمعطيات والنتائج أمثلة لعرض الواجهة وليست مواعيد أو مقاييس معتمدة."] },
] as const;
