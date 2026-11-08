import React from 'react';
import { Volume2, VolumeX, Globe } from 'lucide-react';
import { Language, TRANSLATIONS } from '../types';
import { oasisAudio } from '../utils/sound';

interface HeaderProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenNotify: () => void;
  isAudioPlaying: boolean;
  setIsAudioPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onSelectLang,
  onOpenNotify,
  isAudioPlaying,
  setIsAudioPlaying,
}) => {
  const t = TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar' || currentLang === 'darija';

  const handleToggleSound = () => {
    oasisAudio.toggleAmbient((playing) => {
      setIsAudioPlaying(playing);
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#2C3322]/10 bg-[#FAF7F2]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-3 text-lg font-bold tracking-wider text-[#353E26] uppercase whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
        >
          <img
            src="/assets/aistudio/logo-randigaba_2x_0bd4f40f_0bd4f40f.png"
            alt="Dar Randigoba Logo"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="hidden sm:inline-block font-serif text-sm tracking-widest text-[#485433] opacity-80">
            DAR RANDIGOBA
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          className={`hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#556041] ${
            isRtl ? 'flex-row-reverse font-arabic-calligraphic text-sm tracking-normal' : ''
          }`}
        >
          <a
            href="#vision"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-[#282F1B] hover:underline underline-offset-4"
          >
            {t.navVision}
          </a>
          <a
            href="#sneak-peek"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-[#282F1B] hover:underline underline-offset-4"
          >
            {t.navSneakPeek}
          </a>
          <a
            href="#progress"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-[#282F1B] hover:underline underline-offset-4"
          >
            {t.navProgress}
          </a>
          <a
            href="#contact"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-[#282F1B] hover:underline underline-offset-4"
          >
            {t.navContact}
          </a>
        </nav>

        {/* Zone 3: Primary Action + Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Ambient garden chime toggle */}
          <button
            onClick={handleToggleSound}
            aria-label="Toggle ambient garden chimes"
            title={isAudioPlaying ? 'Mute ambient sound' : 'Play ambient desert sound'}
            className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all ${
              isAudioPlaying
                ? 'border-[#485433] bg-[#485433] text-[#FAF7F2] shadow-xs'
                : 'border-[#2C3322]/15 bg-white/70 text-[#556041] hover:border-[#485433]/40 hover:text-[#2C3322]'
            }`}
          >
            {isAudioPlaying ? (
              <Volume2 className="h-4 w-4 animate-pulse" />
            ) : (
              <VolumeX className="h-4 w-4" />
            )}
          </button>

          {/* Language Selector */}
          <div className="relative flex items-center">
            <label htmlFor="lang-selector" className="sr-only">
              Select Language
            </label>
            <div className="relative flex items-center">
              <Globe className="pointer-events-none absolute left-2.5 h-3.5 w-3.5 text-[#556041]" />
              <select
                id="lang-selector"
                value={currentLang}
                onChange={(e) => onSelectLang(e.target.value as Language)}
                className="h-9 appearance-none rounded-lg border border-[#2C3322]/15 bg-white/70 pl-8 pr-7 text-xs font-medium text-[#353E26] hover:border-[#485433]/40 focus:border-[#485433] focus:outline-none transition-colors cursor-pointer"
              >
                <option value="en">EN · English</option>
                <option value="darija">دارجة · Darija</option>
                <option value="ar">العربية · Arabic</option>
                <option value="fr">FR · Français</option>
              </select>
              <span className="pointer-events-none absolute right-2 text-[10px] text-[#556041]">
                ▾
              </span>
            </div>
          </div>

          {/* Primary CTA */}
          <button
            onClick={onOpenNotify}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#485433] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] shadow-xs transition-all hover:bg-[#384227] hover:shadow-sm active:scale-98 whitespace-nowrap shrink-0"
          >
            {currentLang === 'darija' || currentLang === 'ar' ? 'تسجيل الافتتاح' : 'Notify Me'}
          </button>
        </div>
      </div>
    </header>
  );
};
