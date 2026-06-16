import SectionEyebrow from '../ui/SectionEyebrow';
import AnimatedBar from '../ui/AnimatedBar';
import { useInView } from '../../hooks/useInView';
import { SKILLS, TOOLS } from '../../data/portfolio';
import { T } from '../../tokens';

export default function Skills() {
  const [ref, visible] = useInView();

  return (
    <section id="skills" className="px-5 md:px-12 py-24">
      <div className="max-w-[1100px] mx-auto">
        <SectionEyebrow>Skills</SectionEyebrow>
        <h2
          className="font-display font-bold text-port-text mb-12"
          style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
        >
          My tech stack
        </h2>

        {/* Skill bars */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 mb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(32px)' }}
        >
          {SKILLS.map(({ name, level }) => (
            <div key={name}>
              <div className="flex justify-between mb-1">
                <span className="font-body text-[14px] text-port-text font-medium">{name}</span>
                <span className="font-mono text-[11px] text-port-green">{level}%</span>
              </div>
              <AnimatedBar level={level} color={T.green} />
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="border-t border-port-border pt-9">
          <p className="font-mono text-[11px] text-port-muted mb-4 tracking-[0.1em] uppercase">
            Tools & environment
          </p>
          <div className="flex flex-wrap gap-2.5">
            {TOOLS.map(tool => (
              <span
                key={tool}
                className="font-mono text-[12px] text-port-sub rounded-md px-3.5 py-1.5 cursor-default transition-all duration-150"
                style={{ background: T.bgCard, border: `1px solid ${T.border}` }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${T.green}60`; e.currentTarget.style.color = T.green; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.textSub; }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
