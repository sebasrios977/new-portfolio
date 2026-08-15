import GlowDot from './GlowDot';
import { alpha } from '../../tokens';

export default function SectionEyebrow({ children }) {
  return (
    <div className="flex items-center gap-2.5 mb-4 font-mono text-[11px] tracking-[0.14em] uppercase text-port-green">
      <GlowDot />
      {children}
      <span
        className="flex-1 h-px"
        style={{ background: `linear-gradient(90deg, ${alpha('green', 0.4)}, transparent)` }}
      />
    </div>
  );
}
