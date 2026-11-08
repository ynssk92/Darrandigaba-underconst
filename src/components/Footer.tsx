import React from 'react';
import { TRANSLATIONS, Language } from '../types';
import { ArrowUp, Instagram, MessageCircle } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar' || currentLang === 'darija';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#2C3322]/10 bg-[#FAF7F2] py-12 text-[#5A6648]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#2C3322]/10">
          {/* Brand lockup */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/aistudio/logo-randigaba_2x_0bd4f40f_0bd4f40f.png"
              alt="Dar Randigaba"
              className="h-8 w-auto object-contain opacity-90"
            />
            <span className="font-serif-brand text-sm tracking-widest text-[#353E26] uppercase">
              DAR RANDIGABA
            </span>
          </div>

          {/* Quiet Unboxed Metadata */}
          <div
            className={`flex flex-wrap items-center justify-center gap-4 text-xs ${
              isRtl ? 'font-arabic-calligraphic' : ''
            }`}
          >
            <span>{t.tagline}</span>
            <span aria-hidden="true">·</span>
            <span>Taroudant, Morocco</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2026</span>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2C3322]/15 text-[#485433] hover:border-[#485433] hover:bg-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/212671838008?text=Hello%20Dar%20Randigaba%2C%20I%20would%20like%20to%20know%20more%20about%20availability."
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2C3322]/15 text-[#485433] hover:border-[#485433] hover:bg-white transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2C3322]/15 text-[#485433] hover:border-[#485433] hover:bg-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A8765] gap-3">
          <p>© {new Date().getFullYear()} Dar Randigaba. All rights reserved.</p>
          <p>
            {currentLang === 'darija' || currentLang === 'ar'
              ? 'الموقع الرسمي قيد الإنجاز · موعد الافتتاح ربيع 2026'
              : 'Official website currently under construction. Launching Spring 2026.'}
          </p>
        </div>
      </div>
    </footer>
  );
};
