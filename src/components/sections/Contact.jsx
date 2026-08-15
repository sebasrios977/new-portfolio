import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLightbulb } from 'react-icons/fa6';
import SectionEyebrow from '../ui/SectionEyebrow';
import { useLanguage } from '../../i18n/LanguageProvider';
import { T, alpha } from '../../tokens';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function InputField({ label, required, children }) {
  return (
    <div>
      <label className="block font-mono text-[11px] text-port-muted mb-1.5 tracking-[0.08em]">
        {label}{required && ' *'}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const formRef = useRef();
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  const inputStyle = {
    width: '100%',
    background: T.bgCard2,
    border: `1px solid ${T.border}`,
    borderRadius: 8,
    padding: '12px 16px',
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    color: T.text,
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  };

  const onFocus = e => { e.target.style.borderColor = alpha('green', 0.5); };
  const onBlur  = e => { e.target.style.borderColor = T.border; };

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    if (!data.get('from_name') || !data.get('from_email') || !data.get('message')) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus('sent');
        formRef.current.reset();
      })
      .catch(() => setStatus('error'));
  };

  return (
    <section id="contact" className="px-5 md:px-12 py-24 pb-16">
      <div className="max-w-[680px] mx-auto">
        <SectionEyebrow>{t('contact.eyebrow')}</SectionEyebrow>

        <h2
          className="font-display font-bold text-port-text mb-3"
          style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
        >
          {t('contact.titleLine1')}<br />
          <span className="text-port-green">{t('contact.titleLine2')}</span>
        </h2>

        <p className="font-body text-[15px] text-port-sub leading-[1.7] mb-10">
          {t('contact.intro')}
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          {/* Name + Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField label={t('contact.name')} required>
              <input
                name="from_name"
                placeholder={t('contact.namePlaceholder')}
                style={inputStyle} onFocus={onFocus} onBlur={onBlur}
              />
            </InputField>
            <InputField label={t('contact.email')} required>
              <input
                name="from_email" type="email"
                placeholder={t('contact.emailPlaceholder')}
                style={inputStyle} onFocus={onFocus} onBlur={onBlur}
              />
            </InputField>
          </div>

          <InputField label={t('contact.subject')}>
            <input
              name="subject"
              placeholder={t('contact.subjectPlaceholder')}
              style={inputStyle} onFocus={onFocus} onBlur={onBlur}
            />
          </InputField>

          <InputField label={t('contact.message')} required>
            <textarea
              name="message"
              placeholder={t('contact.messagePlaceholder')}
              rows={5}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={onFocus} onBlur={onBlur}
            />
          </InputField>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="self-start rounded-lg px-8 py-3.5 font-display text-[15px] font-bold border-0 transition-all duration-150"
            style={{
              background: status === 'sent' ? '#10B981' : T.green,
              color: T.onGreen,
              cursor: status === 'sending' ? 'wait' : 'pointer',
              boxShadow: `0 0 20px ${T.greenGlow}`,
              opacity: status === 'sending' ? 0.8 : 1,
            }}
            onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
          >
            {status === 'sending' ? t('contact.sending') : status === 'sent' ? t('contact.sent') : t('contact.send')}
          </button>

          {status === 'error' && (
            <p className="font-body text-[13px] text-red-400">
              {t('contact.error')}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
