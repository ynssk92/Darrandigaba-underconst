import React, { useState } from 'react';
import { TRANSLATIONS, Language } from '../types';
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, Phone } from 'lucide-react';
import { oasisAudio } from '../utils/sound';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar' || currentLang === 'darija';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
      oasisAudio.playGentleChime(720);
      // Save locally
      const inquiries = JSON.parse(localStorage.getItem('dar_randigoba_inquiries') || '[]');
      inquiries.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem('dar_randigoba_inquiries', JSON.stringify(inquiries));
    }, 600);
  };

  const whatsappLink =
    'https://wa.me/212671838008?text=Hello%20Dar%20Randigaba%2C%20I%20would%20like%20to%20know%20more%20about%20availability.';

  return (
    <section id="contact" className="border-t border-[#2C3322]/10 bg-[#FAF7F2] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#556041] mb-2">
            {currentLang === 'darija' || currentLang === 'ar' ? 'تواصل معنا' : 'Direct Line'}
          </div>
          <h2
            className={`font-serif-brand text-3xl sm:text-5xl font-normal text-[#2C3322] ${
              isRtl ? 'font-arabic-calligraphic' : ''
            }`}
          >
            {t.contactTitle}
          </h2>
          <p
            className={`mt-3 text-base text-[#596545] max-w-xl mx-auto ${
              isRtl ? 'font-arabic-calligraphic' : ''
            }`}
          >
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Quick Contact & WhatsApp Cards (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            {/* WhatsApp Direct Action */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-[#2C3322]/10 bg-white p-5 shadow-xs transition-all hover:border-emerald-600/40 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 transition-transform group-hover:scale-105">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                  {t.whatsappButton}
                </span>
                <p className="mt-1 text-xs text-[#5D694B] leading-relaxed">
                  {currentLang === 'darija'
                    ? 'تواصل فوري ومباشر مع المشرف على المشروع عبر واتساب'
                    : currentLang === 'ar'
                    ? 'رد فوري ومباشر لاستفسارات التنسيق والطلبات'
                    : 'Instant response for custom landscape & decor commissions'}
                </p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-emerald-700 group-hover:underline">
                  +212 (0) 6 71 83 80 08 →
                </span>
              </div>
            </a>

            {/* Email Card */}
            <div className="flex items-start gap-4 rounded-xl border border-[#2C3322]/10 bg-white p-5 shadow-xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#485433]/10 text-[#485433]">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#485433]">
                  {currentLang === 'darija' || currentLang === 'ar' ? 'البريد الإلكتروني' : 'Email Atelier'}
                </span>
                <p className="mt-1 text-xs text-[#5D694B]">contact@darrandigaba.com</p>
                <a
                  href="mailto:contact@darrandigaba.com"
                  className="mt-2 inline-block text-xs font-medium text-[#485433] hover:underline"
                >
                  {currentLang === 'darija' || currentLang === 'ar' ? 'إرسال بريد إلكتروني' : 'Send email'} →
                </a>
              </div>
            </div>

            {/* Location & Physical Footprint */}
            <div className="flex items-start gap-4 rounded-xl border border-[#2C3322]/10 bg-white p-5 shadow-xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C86D51]/10 text-[#C86D51]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C86D51]">
                  {currentLang === 'darija' || currentLang === 'ar' ? 'الموقع الجغرافي' : 'Sanctuary Location'}
                </span>
                <p className="mt-1 text-xs text-[#5D694B] leading-relaxed">
                  Taroudant, Morocco
                </p>
                <span className="mt-1 text-[11px] text-[#7A8765] block">
                  {currentLang === 'darija' || currentLang === 'ar'
                    ? 'الزيارات متاحة بموعد مسبق بعد الافتتاح'
                    : 'Visits open by appointment upon launch'}
                </span>
              </div>
            </div>
          </div>

          {/* Direct Inquiry Form (3 cols) */}
          <div className="md:col-span-3 rounded-2xl border border-[#2C3322]/10 bg-white p-6 sm:p-8 shadow-xs">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#485433] mb-1.5">
                      {currentLang === 'darija' ? 'الاسم الكامل' : currentLang === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Yassine Alami"
                      className="w-full rounded-lg border border-[#2C3322]/15 bg-white px-3.5 py-2.5 text-sm text-[#2C3322] placeholder-[#99A588] focus:border-[#485433] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#485433] mb-1.5">
                      {currentLang === 'darija' || currentLang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full rounded-lg border border-[#2C3322]/15 bg-white px-3.5 py-2.5 text-sm text-[#2C3322] placeholder-[#99A588] focus:border-[#485433] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#485433] mb-1.5">
                    {currentLang === 'darija' ? 'الموضوع' : currentLang === 'ar' ? 'موضوع الرسالة' : 'Topic / Inquiry'}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-lg border border-[#2C3322]/15 bg-white px-3.5 py-2.5 text-sm text-[#2C3322] focus:border-[#485433] focus:outline-none cursor-pointer"
                  >
                    <option value="General Inquiry">General Question / Opening Date</option>
                    <option value="Custom Pottery">Custom Pottery & Ceramics Commission</option>
                    <option value="Botanical Landscaping">Landscape & Botanical Consulting</option>
                    <option value="Press & Media">Press, Photography & Editorial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#485433] mb-1.5">
                    {currentLang === 'darija' ? 'رسالتك' : currentLang === 'ar' ? 'تفاصيل رسالتك' : 'Your Message'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      currentLang === 'darija'
                        ? 'كتب استفسارك أو طلبك هنا...'
                        : currentLang === 'ar'
                        ? 'اكتب تفاصيل استفسارك أو رغبتك هنا...'
                        : 'Tell us about your project, plant inquiry, or request...'
                    }
                    className="w-full rounded-lg border border-[#2C3322]/15 bg-white px-3.5 py-2.5 text-sm text-[#2C3322] placeholder-[#99A588] focus:border-[#485433] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#485433] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] transition-colors hover:bg-[#384227] active:scale-98 cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>
                    {submitting
                      ? currentLang === 'darija' || currentLang === 'ar'
                        ? 'جاري الإرسال...'
                        : 'Sending...'
                      : t.inquireButton}
                  </span>
                </button>
              </form>
            ) : (
              <div className="py-8 text-center animate-fade-in">
                <CheckCircle2 className="mx-auto h-12 w-12 text-[#485433] mb-3" />
                <h3 className="font-serif-brand text-2xl font-semibold text-[#2C3322] mb-2">
                  {currentLang === 'darija'
                    ? 'شكراً لك! وصلتنا رسالتك'
                    : currentLang === 'ar'
                    ? 'شكراً لتواصلك! تم استلام رسالتك بنجاح'
                    : 'Message Received with Gratitude'}
                </h3>
                <p className="text-sm text-[#5C684A] max-w-md mx-auto mb-6">
                  {currentLang === 'darija'
                    ? 'الفريق ديال دار رانديغوبا غادي يجاوبك فالحين على بريدك الإلكتروني.'
                    : currentLang === 'ar'
                    ? 'سيقوم فريق دار رانديغوبا بالتواصل معك وموافاتك بالتفاصيل المطلوبة قريباً.'
                    : 'Our atelier team will review your inquiry and reply via email within 24 hours.'}
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="rounded-lg border border-[#485433]/30 px-4 py-2 text-xs font-medium text-[#485433] hover:bg-[#485433]/5"
                >
                  {currentLang === 'darija' || currentLang === 'ar'
                    ? 'إرسال رسالة أخرى'
                    : 'Send another message'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
