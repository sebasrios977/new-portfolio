import { useState } from 'react';
import { T, alpha, projectInk } from '../../../tokens';

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const { title, tag, tagColor, description, tech, color, image, link } = project;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="group relative flex flex-col rounded-[14px] overflow-hidden no-underline transition-all duration-[250ms]"
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

      {/* Screenshot + hover legend */}
      <div className="relative aspect-[16/10] overflow-hidden shrink-0">
        <img
          src={image}
          alt={`${title} interface`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out"
          style={{ transform: hovered ? 'scale(1.04)' : 'none' }}
        />

        {/* Legend — revealed on hover / keyboard focus. Pointer devices only:
            touch screens get the same content permanently, below the title. */}
        <div
          className="absolute inset-0 hidden md:flex flex-col gap-3 px-5 py-4 transition-opacity duration-[250ms]"
          style={{
            background: `linear-gradient(180deg, ${alpha('card', 0.97)}, ${alpha('card', 0.99)})`,
            opacity: hovered ? 1 : 0,
          }}
        >
          <p className="font-body text-[12.5px] text-port-sub leading-[1.6] m-0">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {tech.map(t => (
              <span
                key={t}
                className="font-mono text-[10px] text-port-muted rounded px-2 py-[3px]"
                style={{ background: T.bgCard2, border: `1px solid ${T.border}` }}
              >
                {t}
              </span>
            ))}
          </div>

          <span className="font-mono text-[12px]" style={{ color: projectInk(color) }}>
            View project →
          </span>
        </div>
      </div>

      {/* Always visible — so the grid stays scannable without hovering */}
      <div className="flex flex-col gap-3 px-5 py-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[19px] font-bold text-port-text m-0">{title}</h3>
          <span
            className="font-mono text-[10px] rounded-[20px] px-2.5 py-[3px] tracking-[0.08em] shrink-0 mt-1"
            style={{
              color: projectInk(tagColor),
              background: tagColor + '15',
              border: `1px solid ${tagColor}40`,
            }}
          >
            {tag}
          </span>
        </div>

        {/* Touch fallback for the hover legend */}
        <div className="flex flex-col gap-3 md:hidden">
          <p className="font-body text-[13px] text-port-sub leading-[1.65] m-0">{description}</p>

          <div className="flex flex-wrap gap-1.5">
            {tech.map(t => (
              <span
                key={t}
                className="font-mono text-[10px] text-port-muted rounded px-2 py-[3px]"
                style={{ background: T.bgCard2, border: `1px solid ${T.border}` }}
              >
                {t}
              </span>
            ))}
          </div>

          <span className="font-mono text-[12px]" style={{ color: projectInk(color) }}>
            View project →
          </span>
        </div>
      </div>
    </a>
  );
}
