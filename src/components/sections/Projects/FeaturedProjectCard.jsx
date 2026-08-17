import { useState } from 'react';
import { useLanguage } from '../../../i18n/LanguageProvider';
import { T, projectInk } from '../../../tokens';

/**
 * The wide variant of ProjectCard: takes the full row so the lead project reads
 * as the lead. Because it has the room, the description is always visible here
 * instead of hiding behind a hover — that reveal only makes sense when the card
 * is too small to show everything at once.
 *
 * Renders as an <a> when the project has a `link`, and as a plain <article>
 * when it doesn't, so a project without a public URL isn't a dead link.
 */
export default function FeaturedProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const { t } = useLanguage();
  const { id, title, tagColor, tech, color, image, link } = project;

  const tag = t(`projects.items.${id}.tag`);
  const description = t(`projects.items.${id}.description`);

  const Tag = link ? 'a' : 'article';
  const linkProps = link ? { href: link, target: '_blank', rel: 'noreferrer' } : {};

  return (
    <Tag
      {...linkProps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="group relative flex flex-col md:flex-row rounded-[14px] overflow-hidden no-underline transition-all duration-[250ms] cursor-pointer"
      style={{
        background: T.bgCard,
        border: `1px solid ${hovered ? color + '60' : T.border}`,
        transform: hovered ? 'translateY(-6px)' : 'none',
        boxShadow: hovered ? `0 12px 40px ${color}20` : 'none',
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-20 transition-opacity duration-[250ms]"
        style={{
          background: `linear-gradient(90deg, ${color}, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Screenshot — fixed ratio while stacked, stretches to the row height once
          it sits beside the copy. */}
      <div className="relative aspect-[16/10] md:aspect-auto md:w-[56%] md:min-h-[340px] overflow-hidden shrink-0">
        <img
          src={image}
          alt={t('projects.interfaceAlt').replace('{title}', title)}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out"
          style={{ transform: hovered ? 'scale(1.04)' : 'none' }}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center gap-4 px-5 py-5 md:px-8 md:py-8">
        <div className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.14em] uppercase"
             style={{ color: projectInk(color) }}>
          <span
            className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: color, boxShadow: `0 0 8px ${color}d0` }}
          />
          {t('projects.featured')}
        </div>

        <div className="flex items-start justify-between gap-3">
          <h3
            className="font-display font-bold text-port-text m-0 leading-[1.15]"
            style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
          >
            {title}
          </h3>
          <span
            className="font-mono text-[10px] rounded-[20px] px-2.5 py-[3px] tracking-[0.08em] shrink-0 mt-1.5"
            style={{
              color: projectInk(tagColor),
              background: tagColor + '15',
              border: `1px solid ${tagColor}40`,
            }}
          >
            {tag}
          </span>
        </div>

        <p className="font-body text-[14px] md:text-[15px] text-port-sub leading-[1.7] m-0 max-w-[46ch]">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {tech.map(item => (
            <span
              key={item}
              className="font-mono text-[10px] text-port-muted rounded px-2 py-[3px]"
              style={{ background: T.bgCard2, border: `1px solid ${T.border}` }}
            >
              {item}
            </span>
          ))}
        </div>

        {link && (
          <span className="font-mono text-[13px]" style={{ color: projectInk(color) }}>
            {t('projects.viewProject')}
          </span>
        )}
      </div>
    </Tag>
  );
}
