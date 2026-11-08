export type Language = 'en' | 'fr' | 'ar' | 'darija';

export interface TranslationContent {
  tagline: string;
  badge: string;
  headline: string;
  subheadline: string;
  notifyTitle: string;
  notifyPlaceholder: string;
  notifyButton: string;
  notifySuccess: string;
  notifySubSuccess: string;
  countdownDays: string;
  countdownHours: string;
  countdownMinutes: string;
  countdownSeconds: string;
  progressTitle: string;
  progressSubtitle: string;
  sneakPeekTitle: string;
  sneakPeekSubtitle: string;
  contactTitle: string;
  contactSubtitle: string;
  inquireButton: string;
  whatsappButton: string;
  navVision: string;
  navSneakPeek: string;
  navProgress: string;
  navContact: string;
}

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  en: {
    tagline: 'Botanical Haven · Terracotta Atelier · Moroccan Retreat',
    badge: 'Under Construction · Opening Soon',
    headline: 'This Website is Under Construction',
    subheadline:
      'We are shaping a serene sanctuary of sculptural desert flora, hand-thrown ceramics, and timeless Moroccan craftsmanship. Our full digital doors will open shortly.',
    notifyTitle: 'Be First to Step Inside',
    notifyPlaceholder: 'Enter your email address',
    notifyButton: 'Notify Me at Launch',
    notifySuccess: 'You are on the private guest list!',
    notifySubSuccess: 'We will send you an exclusive invitation and early preview before our public opening.',
    countdownDays: 'Days',
    countdownHours: 'Hours',
    countdownMinutes: 'Minutes',
    countdownSeconds: 'Seconds',
    progressTitle: 'Sanctuary Progress',
    progressSubtitle: 'Watch our journey as the grounds, kiln, and digital experience come together.',
    sneakPeekTitle: 'A Glimpse Into Dar Randigaba',
    sneakPeekSubtitle: 'A preview of what awaits inside our botanical courtyards and clay workshops.',
    contactTitle: 'Inquiries During Construction',
    contactSubtitle: 'Need private architectural commissions, plant consultations, or booking questions?',
    inquireButton: 'Send Direct Message',
    whatsappButton: 'Chat on WhatsApp',
    navVision: 'Concept',
    navSneakPeek: 'Sneak Peek',
    navProgress: 'Progress',
    navContact: 'Contact',
  },
  darija: {
    tagline: 'دار النباتات والأواني الطينية · فضاء طبيعي أصيل',
    badge: 'الموقع قيد الإنجاز والتطوير · قريباً',
    headline: 'الموقع الإلكتروني قيد الإنشاء',
    subheadline:
      'كنوجدو ليكم فضاء هادئ كيجمع بين الصبار والنباتات الصحراوية النادرة، والفخار التقليدي المصنوع باليد بلمسة عصرية. الموقع الرسمي غادي يفتح البيبان ديالو قريباً إن شاء الله.',
    notifyTitle: 'كون من الأوائل اللي يكتشفو دار رانديغابا',
    notifyPlaceholder: 'أدخل بريدك الإلكتروني',
    notifyButton: 'علموني فاش يطلق',
    notifySuccess: 'مرحباً بيك! تم تسجيلك بنجاح',
    notifySubSuccess: 'غادي نرسلو ليك دعوة خاصة وتخفيض حصري بمناسبة الافتتاح الأولي.',
    countdownDays: 'أيام',
    countdownHours: 'ساعات',
    countdownMinutes: 'دقائق',
    countdownSeconds: 'ثواني',
    progressTitle: 'مراحل تقدم المشروع',
    progressSubtitle: 'تبعو خطوة بخطوة التحضيرات فالمشتل وورشة الفخار وتجهيز الموقع.',
    sneakPeekTitle: 'نظرة أولية على دار رانديغابا',
    sneakPeekSubtitle: 'صور حصرية كتعكس الروح الطبيعية والصناعة اليدوية الأصيلة.',
    contactTitle: 'للتواصل والاستفسار خلال فترة الإعداد',
    contactSubtitle: 'واش عندك شي طلب خاص أو باغي تستفسر على النباتات والديكور؟ تواصل معنا مباشرة.',
    inquireButton: 'إرسال رسالة مباشرة',
    whatsappButton: 'مراسلة عبر واتساب',
    navVision: 'الرؤية',
    navSneakPeek: 'نظرة أولية',
    navProgress: 'التقدم',
    navContact: 'اتصل بنا',
  },
  ar: {
    tagline: 'ملاذ نباتي · ورشة فخار خزفي · سكون مغربي أصيل',
    badge: 'الموقع قيد الإنشاء والتطوير · الافتتاح قريباً',
    headline: 'هذا الموقع الإلكتروني قيد الإنشاء',
    subheadline:
      'نعكف حالياً على بناء وتجهيز واحة متكاملة تحتفي بجماليات النباتات الصحراوية الفريدة، والأواني الخزفية المصنوعة يدوياً بحرفية مغربية عريقة. سنفتح أبوابنا الرقمية قريباً.',
    notifyTitle: 'كن أول من يعلم عند الإطلاق',
    notifyPlaceholder: 'أدخل بريدك الإلكتروني',
    notifyButton: 'أعلمني عند الافتتاح',
    notifySuccess: 'تم تسجيلك بنجاح في قائمة الزوار الأوائل!',
    notifySubSuccess: 'سنوافيك بدعوة خاصة لمعاينة المكان وتجربة التسوق الحصرية.',
    countdownDays: 'يوم',
    countdownHours: 'ساعة',
    countdownMinutes: 'دقيقة',
    countdownSeconds: 'ثانية',
    progressTitle: 'نسبة الإنجاز ومراحل العمل',
    progressSubtitle: 'نشارككم خطوات تجهيز المشتل وورشات الحرفيين حتى لحظة التدشين.',
    sneakPeekTitle: 'لمحة حصرية من دار رانديغابا',
    sneakPeekSubtitle: 'اكتشف تفاصيل الحديقة النباتية، الأواني الفخارية، وفناء الاسترخاء.',
    contactTitle: 'تواصل معنا أثناء فترة التجهيز',
    contactSubtitle: 'لأية استفسارات خاصة بالتنسيق النباتي أو الحجوزات أو الأعمال الفخارية المخصصة.',
    inquireButton: 'إرسال استفسار مباشر',
    whatsappButton: 'تواصل عبر واتساب',
    navVision: 'الرؤية',
    navSneakPeek: 'لمحة',
    navProgress: 'الإنجاز',
    navContact: 'تواصل',
  },
  fr: {
    tagline: 'Oasis Botanique · Céramique Artisanale · Douceur Marocaine',
    badge: 'En Construction · Ouverture Prochaine',
    headline: 'Ce site web est actuellement en construction',
    subheadline:
      'Nous façonnons un sanctuaire apaisant dédié aux cactus sculpturaux, aux poteries tournées à la main et à l’art de vivre marocain. Notre espace en ligne sera bientôt dévoilé.',
    notifyTitle: 'Soyez parmi les premiers privilégiés',
    notifyPlaceholder: 'Votre adresse e-mail',
    notifyButton: 'M’informer du lancement',
    notifySuccess: 'Vous êtes inscrit sur notre liste d’invités !',
    notifySubSuccess: 'Nous vous enverrons une invitation privée pour découvrir nos créations avant l’ouverture.',
    countdownDays: 'Jours',
    countdownHours: 'Heures',
    countdownMinutes: 'Minutes',
    countdownSeconds: 'Secondes',
    progressTitle: 'Avancement du Projet',
    progressSubtitle: 'Suivez la maturation de notre jardin botanique, de nos fours et de l’espace digital.',
    sneakPeekTitle: 'Aperçu de Dar Randigaba',
    sneakPeekSubtitle: 'Une immersion visuelle au cœur de notre riad, nos plantes et nos ateliers.',
    contactTitle: 'Demandes & Renseignements',
    contactSubtitle: 'Une commande sur mesure, un projet paysager ou une question pendant nos préparatifs ?',
    inquireButton: 'Envoyer un message',
    whatsappButton: 'Discuter sur WhatsApp',
    navVision: 'Vision',
    navSneakPeek: 'Aperçu',
    navProgress: 'Avancement',
    navContact: 'Contact',
  },
};
