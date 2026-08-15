import { alpha } from '../../tokens';

export default function GlowDot({ className = '' }) {
  return (
    <span
      className={`inline-block w-2 h-2 rounded-full bg-port-green shrink-0 ${className}`}
      style={{ boxShadow: `0 0 8px ${alpha('green', 0.85)}` }}
    />
  );
}
