import React, { useState, useEffect } from 'react';
import { Globe, MessageCircle } from 'lucide-react';

type Language = 'en' | 'darija' | 'fr' | 'ar';

interface Translation {
  kicker1: string;
  kicker2: string;
  kickerStatus: string;
  cactusBtn: string;
  headline: string;
  headlineLine2?: string;
  subheadline: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  placeholder: string;
  btn: string;
  successTitle: string;
  successDesc: string;
  footerNote: string;
}

const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    kicker1: 'DAR RANDIGABA',
    kicker2: 'MOROCCO',
    kickerStatus: 'UNDER CONSTRUCTION · OPENING SOON',
    cactusBtn: 'Nurture the cactus',
    headline: 'This Website is',
    headlineLine2: 'Under Construction',
    subheadline:
      'We are shaping a serene sanctuary of sculptural desert flora, hand-thrown ceramics, and timeless Moroccan craftsmanship. Our full digital doors will open shortly.',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    placeholder: 'Enter your email address',
    btn: 'Notify Me',
    successTitle: 'You are on the private guest list!',
    successDesc: 'We will send you an exclusive invitation when our doors open.',
    footerNote: 'Taroudant, Morocco · Inquiries: contact@darrandigaba.com',
  },
  darija: {
    kicker1: 'دار رانديغابا',
    kicker2: 'المغرب',
    kickerStatus: 'الموقع قيد الإنشاء · الافتتاح قريباً',
    cactusBtn: 'سقي الصبارة',
    headline: 'الموقع الإلكتروني',
    headlineLine2: 'قيد الإنشاء والتطوير',
    subheadline:
      'كنوجدو ليكم فضاء هادئ كيجمع بين الصبار والنباتات الصحراوية النادرة، والفخار التقليدي المصنوع باليد بلمسة عصرية. الموقع الرسمي غادي يفتح البيبان ديالو قريباً إن شاء الله.',
    days: 'أيام',
    hours: 'ساعات',
    minutes: 'دقائق',
    seconds: 'ثواني',
    placeholder: 'أدخل بريدك الإلكتروني',
    btn: 'علموني فاش يطلق',
    successTitle: 'مرحباً بيك! تم تسجيلك بنجاح',
    successDesc: 'غادي نرسلو ليك دعوة خاصة بمناسبة الافتتاح الأولي.',
    footerNote: 'تارودانت، المغرب · للاستفسار: contact@darrandigaba.com',
  },
  fr: {
    kicker1: 'DAR RANDIGABA',
    kicker2: 'MAROC',
    kickerStatus: 'EN CONSTRUCTION · OUVERTURE PROCHAINE',
    cactusBtn: 'Arroser le cactus',
    headline: 'Ce site web est',
    headlineLine2: 'En Construction',
    subheadline:
      'Nous façonnons un sanctuaire apaisant dédié aux cactus sculpturaux, aux poteries tournées à la main et à l’art de vivre marocain. Notre espace en ligne sera bientôt dévoilé.',
    days: 'Jours',
    hours: 'Heures',
    minutes: 'Minutes',
    seconds: 'Secondes',
    placeholder: 'Votre adresse e-mail',
    btn: 'M’informer',
    successTitle: 'Vous êtes inscrit sur la liste privée !',
    successDesc: 'Vous recevrez une invitation exclusive dès l’ouverture.',
    footerNote: 'Taroudant, Maroc · Contact: contact@darrandigaba.com',
  },
  ar: {
    kicker1: 'دار رانديغابا',
    kicker2: 'المغرب',
    kickerStatus: 'الموقع قيد الإنشاء · الافتتاح قريباً',
    cactusBtn: 'اسقِ الصبار',
    headline: 'هذا الموقع الإلكتروني',
    headlineLine2: 'قيد الإنشاء والتطوير',
    subheadline:
      'نعكف حالياً على بناء وتجهيز واحة متكاملة تحتفي بجماليات النباتات الصحراوية الفريدة، والأواني الخزفية المصنوعة يدوياً بحرفية مغربية عريقة. سنفتح أبوابنا قريباً.',
    days: 'يوم',
    hours: 'ساعة',
    minutes: 'دقيقة',
    seconds: 'ثانية',
    placeholder: 'أدخل بريدك الإلكتروني',
    btn: 'أعلمني عند الافتتاح',
    successTitle: 'تم تسجيلك بنجاح في القائمة الخاصة!',
    successDesc: 'سنوافيك بدعوة خاصة فور تدشين الموقع رسمياً.',
    footerNote: 'تارودانت، المغرب · للتواصل: contact@darrandigaba.com',
  },
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar' || lang === 'darija';

  // Live countdown to target date
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 14,
    minutes: 36,
    seconds: 20,
  });

  useEffect(() => {
    const target = new Date('2026-05-18T10:00:00Z').getTime();
    const updateCountdown = () => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`min-h-screen w-full bg-[#FAF7F2] text-[#2C3322] flex flex-col justify-between selection:bg-[#485433] selection:text-[#FAF7F2] bg-tadelakt-texture ${
        isRtl ? 'font-arabic-calligraphic' : ''
      }`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Discreet Language Selector in top right */}
      <div className="w-full max-w-5xl mx-auto px-6 pt-5 sm:pt-6 flex justify-end items-center">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-[#2C3322]/10 bg-white/60 px-3 py-1 text-xs text-[#556041] backdrop-blur-xs">
          <Globe className="h-3 w-3 opacity-60" />
          <button
            onClick={() => setLang('en')}
            className={`cursor-pointer px-1 transition-colors ${
              lang === 'en' ? 'font-bold text-[#2C3322]' : 'hover:text-[#2C3322]'
            }`}
          >
            EN
          </button>
          <span className="opacity-30">·</span>
          <button
            onClick={() => setLang('darija')}
            className={`cursor-pointer px-1 transition-colors ${
              lang === 'darija' ? 'font-bold text-[#2C3322]' : 'hover:text-[#2C3322]'
            }`}
          >
            دارجة
          </button>
          <span className="opacity-30">·</span>
          <button
            onClick={() => setLang('fr')}
            className={`cursor-pointer px-1 transition-colors ${
              lang === 'fr' ? 'font-bold text-[#2C3322]' : 'hover:text-[#2C3322]'
            }`}
          >
            FR
          </button>
        </div>
      </div>

      {/* Main Centered Content (Exact match to screenshot request) */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-6 sm:py-10 text-center max-w-3xl mx-auto w-full">
        {/* Top Kicker Line */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-xs font-medium uppercase tracking-widest text-[#5C6649] mb-5 sm:mb-8">
          <span>{t.kicker1}</span>
          <span aria-hidden="true" className="opacity-60">·</span>
          <span>{t.kicker2}</span>
          <span aria-hidden="true" className="opacity-60">·</span>
          <span className="text-[#C86D51] font-semibold">{t.kickerStatus}</span>
        </div>

        {/* The Exact Logo with Cactus */}
        <div className="relative inline-block mx-auto mb-4 sm:mb-5 max-w-[540px] w-full px-2">
          <img
            src="/assets/aistudio/logo-randigaba_2x_0bd4f40f_0bd4f40f.png"
            alt="Dar Randigaba Logo"
            className="w-full max-h-[140px] sm:max-h-[185px] object-contain mx-auto"
          />
        </div>


        {/* Headline: This Website is Under Construction */}
        <h1
          className="mb-5 tracking-tight font-normal"
          style={{
            color: '#4B502E',
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '50px',
            lineHeight: '67.2px',
            textWrap: 'balance',
          }}
        >
          {t.headline}
          {t.headlineLine2 && (
            <>
              <br />
              {t.headlineLine2}
            </>
          )}
        </h1>

        {/* Descriptive Subtitle */}
        <p
          className="mx-auto max-w-xl leading-relaxed text-[#515C40] mb-8 sm:mb-10"
          style={{
            fontSize: '13px',
            textWrap: 'balance',
          }}
        >
          {t.subheadline}
        </p>

        {/* 4 Clean Countdown Cards (as shown in screenshot) */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-lg mb-8 sm:mb-10">
          {[
            { value: timeLeft.days, label: t.days },
            { value: timeLeft.hours, label: t.hours },
            { value: timeLeft.minutes, label: t.minutes },
            { value: timeLeft.seconds, label: t.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-2xl border border-[#2C3322]/10 bg-white/90 p-3 sm:p-5 shadow-xs transition-transform hover:-translate-y-0.5"
            >
              <span
                className="font-serif-brand text-2xl sm:text-4xl font-bold tracking-tight tabular-nums"
                style={{ color: '#4B502E' }}
              >
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#687453]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Primary WhatsApp Action Button */}
        <div className="mt-2 mb-4">
          <a
            href="https://wa.me/212671838008?text=Hello%20Dar%20Randigaba%2C%20I%20would%20like%20to%20know%20more%20about%20availability."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-[2px] border border-[#6E7E52] bg-[#485433] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-[#3A4428] active:scale-98"
          >
            <MessageCircle className="h-4 w-4 text-white stroke-[2] shrink-0" />
            <span>CHAT ON WHATSAPP</span>
          </a>
        </div>

      </main>

      {/* Minimal Discreet Footer */}
      <footer className="w-full py-6 text-center text-xs text-[#7A8765] border-t border-[#2C3322]/8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>{t.footerNote}</span>
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Dar Randigaba</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
