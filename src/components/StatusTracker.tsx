import React from 'react';
import { TRANSLATIONS, Language } from '../types';
import { Hammer, Sparkles, Sprout, ShoppingBag } from 'lucide-react';

interface StatusTrackerProps {
  currentLang: Language;
}

export const StatusTracker: React.FC<StatusTrackerProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar' || currentLang === 'darija';

  const milestones = [
    {
      icon: Sprout,
      title:
        currentLang === 'darija'
          ? 'المشتل والحديقة النباتية'
          : currentLang === 'ar'
          ? 'الحديقة والمشتل النباتي'
          : currentLang === 'fr'
          ? 'Jardin & Pépinière Botanique'
          : 'Botanical Sanctuary & Nursery',
      desc:
        currentLang === 'darija'
          ? 'جمع وغرس فصائل نادرة من الصبار المغربي والإفريقي'
          : currentLang === 'ar'
          ? 'استقدام وتوطين فصائل نادرة من الصبار الإفريقي والصحراوي'
          : currentLang === 'fr'
          ? 'Collection et acclimatation d’euphorbes et cactus sculpturaux'
          : 'Acclimatizing rare sculptural euphorbia and desert flora',
      percent: 95,
      status: currentLang === 'darija' ? 'مكتمل تقريباً' : currentLang === 'ar' ? 'شبه مكتمل' : currentLang === 'fr' ? 'Presque achevé' : '95% Complete',
    },
    {
      icon: Hammer,
      title:
        currentLang === 'darija'
          ? 'ورشة الفخار والأواني الطينية'
          : currentLang === 'ar'
          ? 'ورشة الخزف وصناعة الفخار'
          : currentLang === 'fr'
          ? 'Atelier de Poterie & Fours'
          : 'Terracotta Pottery & Kiln Atelier',
      desc:
        currentLang === 'darija'
          ? 'صناعة أواني ومزهريات يدوية مخصصة للصبار'
          : currentLang === 'ar'
          ? 'إنتاج أواني وأصص طينية بتشطيبات طين وزليج طبيعية'
          : currentLang === 'fr'
          ? 'Façonnage d’urnes et de jardinières en terre cuite émaillée'
          : 'Throwing custom planters, clay urns, and olive-glazed vessels',
      percent: 85,
      status: currentLang === 'darija' ? 'جاري العمل' : currentLang === 'ar' ? 'قيد التنفيذ' : currentLang === 'fr' ? 'En cours' : '85% In Progress',
    },
    {
      icon: ShoppingBag,
      title:
        currentLang === 'darija'
          ? 'المتجر الإلكتروني وتجربة الويب'
          : currentLang === 'ar'
          ? 'المتجر الرقمي وتجربة الزائر'
          : currentLang === 'fr'
          ? 'Boutique en Ligne & Site Web'
          : 'Digital Sanctuary & Online Store',
      desc:
        currentLang === 'darija'
          ? 'برمجة وتصميم المنصة وخدمة التوصيل'
          : currentLang === 'ar'
          ? 'تطوير الموقع وتسهيل خيارات الطلب والشحن المباشر'
          : currentLang === 'fr'
          ? 'Finalisation de l’expérience d’achat et d’expédition sur mesure'
          : 'Polishing seamless botanical catalog and artisanal delivery',
      percent: 65,
      status: currentLang === 'darija' ? 'قيد البناء' : currentLang === 'ar' ? 'قيد البناء' : currentLang === 'fr' ? 'En développement' : '65% Active Build',
    },
    {
      icon: Sparkles,
      title:
        currentLang === 'darija'
          ? 'الافتتاح الرسمي واستقبال الزوار'
          : currentLang === 'ar'
          ? 'الافتتاح الرسمي والزيارات الخاصة'
          : currentLang === 'fr'
          ? 'Inauguration & Accueil Privé'
          : 'Grand Opening & Private Tastings',
      desc:
        currentLang === 'darija'
          ? 'استقبال عشاق الديكور والأصالة والشاي المغربي'
          : currentLang === 'ar'
          ? 'فتح الأبواب لعشاق الطبيعة والأصالة والتصميم المعماري'
          : currentLang === 'fr'
          ? 'Ouverture des portes aux passionnés de design et d’artisanat'
          : 'Welcoming design lovers to the courtyard for organic tea and plants',
      percent: 30,
      status: currentLang === 'darija' ? 'قريباً' : currentLang === 'ar' ? 'قريباً' : currentLang === 'fr' ? 'À venir' : 'Spring 2026',
    },
  ];

  return (
    <section id="progress" className="border-y border-[#2C3322]/10 bg-[#F3EFE6]/70 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#6B7955] mb-2">
            {currentLang === 'darija' || currentLang === 'ar' ? 'خارطة الطريق' : 'Roadmap & Milestones'}
          </div>
          <h2
            className={`font-serif-brand text-2xl sm:text-4xl font-normal text-[#2C3322] ${
              isRtl ? 'font-arabic-calligraphic' : ''
            }`}
          >
            {t.progressTitle}
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base text-[#596545] max-w-xl mx-auto ${
              isRtl ? 'font-arabic-calligraphic' : ''
            }`}
          >
            {t.progressSubtitle}
          </p>
        </div>

        {/* Global Progress Bar */}
        <div className="mb-12 rounded-2xl border border-[#2C3322]/10 bg-white/90 p-6 shadow-xs backdrop-blur-xs">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#485433] mb-2">
            <span>
              {currentLang === 'darija' || currentLang === 'ar' ? 'نسبة الإنجاز الإجمالية' : 'Overall Completion'}
            </span>
            <span className="font-mono tabular-nums text-sm font-bold text-[#353E26]">78%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-[#E5DFD3]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#485433] to-[#C86D51] transition-all duration-1000 ease-out"
              style={{ width: '78%' }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] text-[#7A8765]">
            <span>{currentLang === 'darija' || currentLang === 'ar' ? 'البداية: التأسيس' : 'Phase 1: Groundwork'}</span>
            <span>{currentLang === 'darija' || currentLang === 'ar' ? 'الافتتاح: ربيع 2026' : 'Target: Spring 2026'}</span>
          </div>
        </div>

        {/* 4 Discrete Milestone Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-[#2C3322]/10 bg-white/75 p-5 shadow-2xs backdrop-blur-xs hover:border-[#485433]/30 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#485433]/10 text-[#485433]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[11px] font-mono tabular-nums font-semibold text-[#C86D51]">
                      {m.percent}%
                    </span>
                  </div>

                  <h3
                    className={`font-serif-brand text-base font-semibold text-[#2C3322] mb-1.5 ${
                      isRtl ? 'font-arabic-calligraphic' : ''
                    }`}
                  >
                    {m.title}
                  </h3>
                  <p
                    className={`text-xs text-[#5D694B] leading-relaxed mb-4 ${
                      isRtl ? 'font-arabic-calligraphic' : ''
                    }`}
                  >
                    {m.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#2C3322]/5 flex items-center justify-between text-[11px] text-[#7A8765]">
                  <span>Status</span>
                  <span className="font-medium text-[#485433]">{m.status}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
