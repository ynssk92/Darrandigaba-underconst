import React, { useState, useEffect } from 'react';
import { TRANSLATIONS, Language } from '../types';

interface CountdownProps {
  currentLang: Language;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC<CountdownProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  // Target launch: 42 days, 14 hours ahead from initial mount (persisted in localStorage or calculated)
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(() => {
    const launchTimestamp = new Date('2026-05-18T10:00:00Z').getTime();
    const now = Date.now();
    const diff = Math.max(0, launchTimestamp - now);

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  });

  useEffect(() => {
    const target = new Date('2026-05-18T10:00:00Z').getTime();

    const interval = setInterval(() => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: t.countdownDays, value: timeLeft.days },
    { label: t.countdownHours, value: timeLeft.hours },
    { label: t.countdownMinutes, value: timeLeft.minutes },
    { label: t.countdownSeconds, value: timeLeft.seconds },
  ];

  const isRtl = currentLang === 'ar' || currentLang === 'darija';

  return (
    <div
      className={`grid grid-cols-4 gap-3 sm:gap-4 max-w-lg mx-auto ${
        isRtl ? 'font-arabic-calligraphic' : ''
      }`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border border-[#2C3322]/10 bg-white/80 shadow-xs backdrop-blur-xs transition-transform hover:-translate-y-0.5"
        >
          <span className="font-serif-brand text-2xl sm:text-4xl font-bold tracking-tight text-[#353E26] tabular-nums">
            {String(item.value).padStart(2, '0')}
          </span>
          <span className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#697455]">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};
