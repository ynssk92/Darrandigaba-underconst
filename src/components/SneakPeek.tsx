import React, { useState } from 'react';
import { TRANSLATIONS, Language } from '../types';
import { Maximize2, X, Compass, Palette, Flower2 } from 'lucide-react';

interface SneakPeekProps {
  currentLang: Language;
}

interface ItemPreview {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  icon: typeof Compass;
  badge: string;
}

export const SneakPeek: React.FC<SneakPeekProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar' || currentLang === 'darija';
  const [activeItem, setActiveItem] = useState<ItemPreview | null>(null);

  const previews: ItemPreview[] = [
    {
      id: 'botanical-sanctuary',
      title:
        currentLang === 'darija'
          ? 'المحمية والمشتل النباتي'
          : currentLang === 'ar'
          ? 'المشتل النباتي والحديقة الصحراوية'
          : currentLang === 'fr'
          ? 'Le Sanctuaire Botanique'
          : 'The Desert Botanical Sanctuary',
      subtitle:
        currentLang === 'darija'
          ? 'صبار نادر ونباتات صحراوية في أواني طينية تقليدية'
          : currentLang === 'ar'
          ? 'فصائل صبار نادرة وأشجار إفريقية بأصص فخارية عتيقة'
          : currentLang === 'fr'
          ? 'Cactus monumentaux et euphorbes dans des jarres de terre cuite'
          : 'Rare sculptural cacti, euphorbia, and agaves in weathered clay',
      description:
        currentLang === 'darija'
          ? 'كنجمعو تشكيلة استثنائية من النباتات الصحراوية المعمرة اللي كتقاوم الجفاف وكتعطي جمالية فريدة للمنازل والرياضات.'
          : currentLang === 'ar'
          ? 'نقدم تشكيلة مختارة بعناية من النباتات النادرة المعمرة التي تلائم المنازل والحدائق العصرية بروح تراثية مغربية أصيلة.'
          : currentLang === 'fr'
          ? 'Une collection exceptionnelle de végétaux résilients sculptés par le soleil marocain, sélectionnés pour magnifier intérieurs et jardins contemporains.'
          : 'An architectural gathering of sun-sculpted botanical specimens, curated to bring natural stillness and desert majesty into serene living spaces.',
      imageSrc: '/src/assets/images/dar_botanical_sanctuary_1794147982981.jpg',
      icon: Flower2,
      badge: 'Living Sculptures',
    },
    {
      id: 'artisan-ceramics',
      title:
        currentLang === 'darija'
          ? 'ورشة الفخار والخزف اليدوي'
          : currentLang === 'ar'
          ? 'أتيلييه الفخار والخزف الطبيعي'
          : currentLang === 'fr'
          ? 'L’Atelier Céramique & Poterie'
          : 'Handcrafted Terracotta & Ceramics',
      subtitle:
        currentLang === 'darija'
          ? 'كل قطعة مصنوعة باليد ومطلية بزيوت وألوان ترابية طبيعية'
          : currentLang === 'ar'
          ? 'أوانٍ وأصص فريدة مصنوعة على يد أمهر الحرفيين المغاربة'
          : currentLang === 'fr'
          ? 'Chaque pièce est façonnée à la main et cuite selon la tradition'
          : 'Custom-thrown vessels, organic olive glazes, and raw textures',
      description:
        currentLang === 'darija'
          ? 'الصناع التقليديين ديالنا كيخدمو كل مزهرية وإناء طيني بحب وعناية باش يكون مناسب خصيصاً لجذور الصبار والتهوية الطبيعية.'
          : currentLang === 'ar'
          ? 'يبدع حرفيونا في تطويع الطين المحلي لصناعة أوانٍ مصممة خصيصاً لتوفير التهوية المثالية لجذور النباتات مع تشطيبات ترابية آسرة.'
          : currentLang === 'fr'
          ? 'Nos maîtres potiers perpétuent les gestes ancestraux, tournant des pièces sur mesure conçues pour la santé des plantes et la beauté des espaces.'
          : 'Crafted by master Moroccan artisans, each stoneware vessel is shaped to cradle botanicals with breathable natural clay and enduring organic glazes.',
      imageSrc: '/src/assets/images/dar_artisan_ceramics_1794147984888.jpg',
      icon: Palette,
      badge: 'Master Pottery',
    },
    {
      id: 'riad-oasis',
      title:
        currentLang === 'darija'
          ? 'فناء الرياض وجلسة الشاي'
          : currentLang === 'ar'
          ? 'فناء الرياض وواحة الاسترخاء'
          : currentLang === 'fr'
          ? 'Le Patio & Salon de Thé'
          : 'The Riad Courtyard & Tea Oasis',
      subtitle:
        currentLang === 'darija'
          ? 'مكان للراحة والسكينة مع كاس د أتاي منعنع وسط الطبيعة'
          : currentLang === 'ar'
          ? 'مساحة هادئة للاسترخاء وتذوق الشاي المغربي العشبي'
          : currentLang === 'fr'
          ? 'Un havre de paix où savourer un thé à la menthe frais'
          : 'Slow living, natural linen textures, and fragrant herbal tea',
      description:
        currentLang === 'darija'
          ? 'فضاء دار رانديغوبا كيوفر تجربة مميزة للزوار للاستمتاع بجو الرياض المغربي والتعرف على عالم النباتات بكل راحة.'
          : currentLang === 'ar'
          ? 'نوفر لزوارنا ملاذاً ساحراً يتناغم فيه خرير الماء مع عبق النعناع وخضرة الصبار، لتجربة استرخاء لا تُنسى.'
          : currentLang === 'fr'
          ? 'Une halte hors du temps au cœur de notre riad, invitant à la contemplation des formes végétales autour d’une infusion marocaine raffinée.'
          : 'An intimate sunlit sanctuary under carved archways, where guests are invited to pause, sip desert herb infusions, and connect with living botanical art.',
      imageSrc: '/src/assets/images/dar_riad_patio_oasis_1794147985250.jpg',
      icon: Compass,
      badge: 'Slow Living',
    },
  ];

  return (
    <section id="sneak-peek" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#556041] mb-2">
            {currentLang === 'darija' || currentLang === 'ar' ? 'معاينة حصرية' : 'Exclusive Preview'}
          </div>
          <h2
            className={`font-serif-brand text-3xl sm:text-5xl font-normal text-[#2D3322] ${
              isRtl ? 'font-arabic-calligraphic' : ''
            }`}
          >
            {t.sneakPeekTitle}
          </h2>
          <p
            className={`mt-3 text-base text-[#596545] max-w-2xl mx-auto ${
              isRtl ? 'font-arabic-calligraphic' : ''
            }`}
          >
            {t.sneakPeekSubtitle}
          </p>
        </div>

        {/* 3 Large Asymmetric Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previews.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#2C3322]/10 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
              >
                {/* Image Container with Fallback */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#ECE6DA]">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

                  {/* Corner Expand Action */}
                  <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[#2C3322] backdrop-blur-xs transition-transform group-hover:scale-110">
                    <Maximize2 className="h-4 w-4" />
                  </div>

                  {/* Badging in overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-medium tracking-wide uppercase opacity-90">
                      {item.badge}
                    </span>
                    <Icon className="h-4 w-4 opacity-80" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3
                      className={`font-serif-brand text-xl font-semibold text-[#2C3322] mb-2 ${
                        isRtl ? 'font-arabic-calligraphic' : ''
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm text-[#5D694B] leading-relaxed line-clamp-2 ${
                        isRtl ? 'font-arabic-calligraphic' : ''
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#2C3322]/5 flex items-center justify-between text-xs font-medium text-[#485433]">
                    <span>
                      {currentLang === 'darija' || currentLang === 'ar'
                        ? 'انقر للمزيد من التفاصيل'
                        : 'Explore details'}
                    </span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expanded Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-2xl w-full overflow-hidden rounded-2xl bg-[#FAF7F2] shadow-2xl transition-all animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-900">
              <img
                src={activeItem.imageSrc}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C86D51] mb-2">
                <span>{activeItem.badge}</span>
                <span>·</span>
                <span>Dar Randigoba</span>
              </div>
              <h3
                className={`font-serif-brand text-2xl sm:text-3xl font-semibold text-[#2C3322] mb-3 ${
                  isRtl ? 'font-arabic-calligraphic' : ''
                }`}
              >
                {activeItem.title}
              </h3>
              <p
                className={`text-sm sm:text-base text-[#4E593E] leading-relaxed mb-6 ${
                  isRtl ? 'font-arabic-calligraphic' : ''
                }`}
              >
                {activeItem.description}
              </p>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#2C3322]/10">
                <button
                  onClick={() => setActiveItem(null)}
                  className="rounded-lg bg-[#485433] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#384227] transition-colors"
                >
                  {currentLang === 'darija' || currentLang === 'ar' ? 'إغلاق' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
