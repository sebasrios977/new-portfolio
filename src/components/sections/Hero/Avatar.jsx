import { T } from '../../../tokens';

export default function Avatar() {
  return (
    <div className="relative w-[200px] h-[200px]">
      {/* Outer glow ring */}
      <div
        className="absolute anim-spin-slow rounded-full"
        style={{ inset: -8, border: `2px solid ${T.green}40` }}
      />
      {/* Dashed orbit */}
      <div
        className="absolute anim-spin-reverse rounded-full"
        style={{ inset: -20, border: `1px dashed ${T.green}25` }}
      />
      {/* Avatar circle */}
      <div
        className="w-[200px] h-[200px] rounded-full flex items-center justify-center text-[90px] overflow-hidden relative"
        style={{
          background: `linear-gradient(135deg, ${T.bgCard2} 0%, ${T.blue} 100%)`,
          border: `3px solid ${T.green}`,
          boxShadow: `0 0 40px ${T.greenGlow}, 0 0 80px ${T.greenDim}`,
        }}
      >
        👨🏻‍💻
      </div>
      {/* Online status dot */}
      <div
        className="absolute bottom-2.5 right-2.5 w-[18px] h-[18px] rounded-full bg-port-green anim-pulse-glow"
        style={{ border: `3px solid ${T.bg}` }}
      />
    </div>
  );
}
