import { FaBullseye, FaPlug, FaSeedling, FaLocationDot } from 'react-icons/fa6';
import SectionEyebrow from '../ui/SectionEyebrow';
import { useInView } from '../../hooks/useInView';
import { T } from '../../tokens';

const TRAITS = [
  { Icon: FaBullseye,    title: 'Detail-oriented',    desc: 'Every pixel and interaction matters.' },
  { Icon: FaPlug,        title: 'API Integration',    desc: 'REST, GraphQL, AI — I connect anything.' },
  { Icon: FaSeedling,    title: 'Continuous Learning', desc: "There's always something new to master." },
  { Icon: FaLocationDot, title: 'Based in Colombia',  desc: 'Available for global remote teams.' },
];

export default function About() {
  const [ref, visible] = useInView();

  return (
    <section id="about" className="px-5 md:px-12 py-24 max-w-[1100px] mx-auto">
      <SectionEyebrow>About</SectionEyebrow>

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
            Frontend developer<br />
            <span className="text-port-green">with a designer's eye</span>
          </h2>
          <p className="font-body text-[15px] text-port-sub leading-[1.8] mb-4">
            I'm a Colombian frontend developer passionate about creating web experiences that feel
            as good as they look. I specialize in React and love when technology solves real problems.
          </p>
          <p className="font-body text-[15px] text-port-sub leading-[1.8]">
            Every project is an opportunity to learn something new — from integrating AIs like Claude
            to visualizing spatial data in real time. I always seek the balance between clean code
            and design that communicates.
          </p>
        </div>

        {/* Right — trait cards */}
        <div className="flex flex-col gap-4">
          {TRAITS.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 items-start rounded-[10px] px-5 py-4 transition-all duration-200 cursor-default"
              style={{ background: T.bgCard, border: `1px solid ${T.border}` }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${T.green}60`; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.transform = ''; }}
            >
              <Icon size={20} color={T.green} className="mt-0.5 shrink-0" />
              <div>
                <p className="font-display text-[14px] font-semibold text-port-text mb-1">{title}</p>
                <p className="font-body text-[13px] text-port-sub">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
