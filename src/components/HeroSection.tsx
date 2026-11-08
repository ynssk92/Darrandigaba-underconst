import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, Droplets } from 'lucide-react';
import { TRANSLATIONS, Language } from '../types';
import { Countdown } from './Countdown';
import { oasisAudio } from '../utils/sound';

interface HeroSectionProps {
  currentLang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar' || currentLang === 'darija';

  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(() => {
    return localStorage.getItem('dar_randigoba_subscribed') === 'true';
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [flowerBloomCount, setFlowerBloomCount] = useState(0);
  const [isWatering, setIsWatering] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg(
        currentLang === 'darija' || currentLang === 'ar'
          ? 'يرجى إدخال بريد إلكتروني صحيح'
          : 'Please enter a valid email address.'
      );
      return;
    }
    setErrorMsg('');
    setIsSubscribed(true);
    localStorage.setItem('dar_randigoba_subscribed', 'true');
    localStorage.setItem('dar_randigoba_email', email);
    oasisAudio.playGentleChime(648);
  };

  const handleWaterCactus = () => {
    setIsWatering(true);
    oasisAudio.playGentleChime(720);
    setFlowerBloomCount((prev) => prev + 1);
    setTimeout(() => {
      setIsWatering(false);
    }, 1200);
  };

  return (
    <section id="vision" className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Decorative subtle ambient circular glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-[#E5DDCB]/30 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {/* Unboxed Metadata Kicker (Anti-slop zero pill rule) */}
        <div
          className={`flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#556041] mb-6 ${
            isRtl ? 'font-arabic-calligraphic tracking-normal' : ''
          }`}
        >
          <span>Dar Randigoba</span>
          <span aria-hidden="true">·</span>
          <span>Morocco</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#C86D51]">{t.badge}</span>
        </div>

        {/* The Brand Logo Showcase */}
        <div className="relative inline-block mx-auto mb-8 max-w-[620px] w-full px-4 group">
          <div className="relative flex flex-col items-center">
            <img
              src="/assets/aistudio/logo-randigaba_2x_0bd4f40f_0bd4f40f.png"
              alt="Dar Randigoba official logo"
              className="w-full max-h-[140px] sm:max-h-[180px] object-contain transition-transform duration-500 hover:scale-[1.02]"
            />

            {/* Bloom flowers blooming on the cactus pot upon interaction */}
            {flowerBloomCount > 0 && (
              <div className="absolute -top-3 right-[28%] flex items-center gap-1 animate-bounce">
                <span className="text-xl" title="Blooming desert flower!">
                  🌸
                </span>
                {flowerBloomCount > 1 && (
                  <span className="rounded-full bg-[#C86D51] px-1.5 py-0.5 text-[10px] font-bold text-white">
                    +{flowerBloomCount}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Micro-interaction: Water the cactus */}
          <div className="mt-3 flex justify-center">
            <button
              onClick={handleWaterCactus}
              disabled={isWatering}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#485433]/20 bg-white/70 px-3 py-1 text-[11px] font-medium text-[#485433] hover:bg-white hover:border-[#485433]/40 transition-all cursor-pointer active:scale-95 shadow-2xs"
            >
              <Droplets className={`h-3 w-3 text-sky-600 ${isWatering ? 'animate-bounce' : ''}`} />
              <span>
                {currentLang === 'darija'
                  ? 'سقي الصبارة'
                  : currentLang === 'ar'
                  ? 'اسقِ الصبار'
                  : currentLang === 'fr'
                  ? 'Arroser le cactus'
                  : 'Nurture the cactus'}
              </span>
            </button>
          </div>
        </div>

        {/* Primary Under Construction Headline */}
        <h1
          className={`font-serif-brand text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#2D3520] mb-6 leading-[1.15] ${
            isRtl ? 'font-arabic-calligraphic leading-snug' : ''
          }`}
          style={{ textWrap: 'balance' }}
        >
          {t.headline}
        </h1>

        {/* Subtitle with botanical craft voice */}
        <p
          className={`mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-[#4F593E] mb-10 ${
            isRtl ? 'font-arabic-calligraphic text-lg' : ''
          }`}
          style={{ textWrap: 'balance' }}
        >
          {t.subheadline}
        </p>

        {/* Live Countdown Timer */}
        <div className="mb-12">
          <Countdown currentLang={currentLang} />
        </div>

        {/* Email Notification Lead Capture Form */}
        <div className="mx-auto max-w-md">
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="relative">
              <div
                className={`flex flex-col sm:flex-row items-stretch gap-2.5 rounded-xl border border-[#2C3322]/15 bg-white p-1.5 shadow-xs transition-shadow focus-within:border-[#485433] focus-within:ring-2 focus-within:ring-[#485433]/15 ${
                  isRtl ? 'sm:flex-row-reverse' : ''
                }`}
              >
                <div className="relative flex-1 flex items-center">
                  <Mail className="pointer-events-none absolute left-3.5 h-4 w-4 text-[#7A8765]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder={t.notifyPlaceholder}
                    required
                    className="w-full bg-transparent py-2.5 pl-10 pr-4 text-sm text-[#2D3520] placeholder-[#8A9577] focus:outline-none"
                    dir={isRtl ? 'rtl' : 'ltr'}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#485433] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] transition-colors hover:bg-[#384227] active:scale-98 cursor-pointer shrink-0 whitespace-nowrap"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{t.notifyButton}</span>
                </button>
              </div>

              {errorMsg && (
                <p className="mt-2 text-xs text-rose-700 text-left font-medium">
                  {errorMsg}
                </p>
              )}

              <p className="mt-3 text-xs text-[#758162]">
                {currentLang === 'darija' || currentLang === 'ar'
                  ? 'لا نرسل أي رسائل مزعجة · إشعار واحد فقط عند افتتاح الموقع'
                  : 'Zero spam. One private invitation when our digital doors open.'}
              </p>
            </form>
          ) : (
            <div className="rounded-xl border border-[#485433]/20 bg-white/95 p-6 shadow-xs backdrop-blur-xs text-center transition-all animate-fade-in">
              <CheckCircle2 className="mx-auto h-8 w-8 text-[#485433] mb-2" />
              <h3 className="font-serif-brand text-lg font-semibold text-[#2D3520]">
                {t.notifySuccess}
              </h3>
              <p className="mt-1 text-xs text-[#5E6A4B] leading-relaxed">
                {t.notifySubSuccess}
              </p>
              <button
                onClick={() => setIsSubscribed(false)}
                className="mt-4 text-[11px] text-[#7A8765] hover:underline"
              >
                {currentLang === 'darija' || currentLang === 'ar'
                  ? 'تسجيل بريد إلكتروني آخر'
                  : 'Register another email address'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
