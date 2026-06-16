import { useState } from 'react';
import { T } from '../../../tokens';

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const { title, tag, tagColor, description, tech, color, Icon, link } = project;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col gap-3.5 rounded-[14px] px-6 py-7 cursor-pointer overflow-hidden transition-all duration-[250ms]"
      style={{
        background: T.bgCard,
        border: `1px solid ${hovered ? color + '60' : T.border}`,
        transform: hovered ? 'translateY(-6px)' : 'none',
        boxShadow: hovered ? `0 12px 40px ${color}20` : 'none',
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] transition-opacity duration-[250ms]"
        style={{
          background: `linear-gradient(90deg, ${color}, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Emoji + tag */}
      <div className="flex justify-between items-start">
        <Icon size={34} color={color} />
        <span
          className="font-mono text-[10px] rounded-[20px] px-2.5 py-[3px] tracking-[0.08em]"
          style={{
            color: tagColor,
            background: tagColor + '15',
            border: `1px solid ${tagColor}40`,
          }}
        >
          {tag}
        </span>
      </div>

      {/* Title + description */}
      <div>
        <h3 className="font-display text-[20px] font-bold text-port-text mb-2">{title}</h3>
        <p className="font-body text-[13px] text-port-sub leading-[1.7]">{description}</p>
      </div>

      {/* Tech stack */}
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

      {/* View project link */}
      <a
        href={link}
        className="font-mono text-[12px] transition-all duration-200"
        style={{
          color,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
          textDecoration: 'none',
        }}
      >
        View project →
      </a>
    </div>
  );
}
