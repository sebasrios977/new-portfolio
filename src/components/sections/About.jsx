import { FaBullseye, FaPlug, FaSeedling, FaLocationDot } from 'react-icons/fa6';
import SectionEyebrow from '../ui/SectionEyebrow';
import { useInView } from '../../hooks/useInView';
import { useLanguage } from '../../i18n/LanguageProvider';
import { T, alpha } from '../../tokens';

// Icons stay here; the wording lives in the translations, matched by order.
const TRAIT_ICONS = [FaBullseye, FaPlug, FaSeedling, FaLocationDot];

export default function About() {
  const [ref, visible] = useInView();
  const { t } = useLanguage();
  const traits = t('about.traits');

  return (
    <section id="about" className="px-5 md:px-12 py-24 max-w-[1100px] mx-auto">
      <SectionEyebrow>{t('about.eyebrow')}</SectionEyebrow>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(32px)' }}
      >
        {/* Left — bio */}
        <div>
          <h2
            className="font-display font-bold leading-[1.2] text-port-text mb-6"
            style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
          >
            {t('about.titleLine1')}<br />
            <span className="text-port-green">{t('about.titleLine2')}</span>
          </h2>
          <p className="font-body text-[15px] text-port-sub leading-[1.8] mb-4">
            {t('about.p1')}
          </p>
          <p className="font-body text-[15px] text-port-sub leading-[1.8]">
            {t('about.p2')}
          </p>
        </div>

        {/* Right — trait cards */}
        <div className="flex flex-col gap-4">
          {traits.map(({ title, desc }, i) => {
            const Icon = TRAIT_ICONS[i];
            return (
            <div
              key={title}
              className="flex gap-4 items-start rounded-[10px] px-5 py-4 transition-all duration-200 cursor-default"
              style={{ background: T.bgCard, border: `1px solid ${T.border}` }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = alpha('green', 0.4); e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.transform = ''; }}
            >
              <Icon size={20} color={T.green} className="mt-0.5 shrink-0" />
              <div>
                <p className="font-display text-[14px] font-semibold text-port-text mb-1">{title}</p>
                <p className="font-body text-[13px] text-port-sub">{desc}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
