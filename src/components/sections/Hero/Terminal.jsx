import { useState, useEffect } from 'react';
import { T } from '../../../tokens';

const LINES = [
  { prompt: '~', cmd: ' whoami',        out: 'Sebastian Rios' },
  { prompt: '~', cmd: ' cat skills.txt', out: 'React · JS · CSS · APIs' },
  { prompt: '~', cmd: ' echo $status',   out: 'Open to work ✓' },
];

function fullLine(i) {
  return LINES[i].prompt + '$' + LINES[i].cmd;
}

export default function Terminal() {
  const [step, setStep]     = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [phase, setPhase]   = useState('typing'); // typing | showing | next

  useEffect(() => {
    if (step >= LINES.length) return;
    const full = fullLine(step);

    if (phase === 'typing') {
      if (charIdx < full.length) {
        const t = setTimeout(() => setCharIdx(c => c + 1), 55);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase('showing'), 400);
      return () => clearTimeout(t);
    }
    if (phase === 'showing') {
      const t = setTimeout(() => setPhase('next'), 900);
      return () => clearTimeout(t);
    }
    if (phase === 'next' && step < LINES.length - 1) {
      setStep(s => s + 1);
      setCharIdx(0);
      setPhase('typing');
    }
  }, [step, charIdx, phase]);

  return (
    <div
      className="rounded-[10px] px-5 py-4 font-mono text-[13px] w-full max-w-[340px]"
      style={{
        background: '#060D18',
        border: `1px solid ${T.border}`,
        boxShadow: `0 0 30px ${T.greenDim}`,
      }}
    >
      {/* Window controls */}
      <div className="flex items-center gap-1.5 mb-3.5">
        {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
          <span key={c} className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: c }} />
        ))}
        <span className="ml-2 text-port-muted text-[11px]">terminal</span>
      </div>

      {/* Lines */}
      {LINES.map((line, i) => (
        <div key={i} className="mb-1.5">
          {(i < step || (i === step && charIdx > 0)) && (
            <div>
              <span className="text-port-green">
                {i < step ? fullLine(i) : fullLine(i).slice(0, charIdx)}
                {i === step && phase === 'typing' && (
                  <span className="anim-blink border-r-2 border-port-green">&nbsp;</span>
                )}
              </span>
              {(i < step || phase !== 'typing') && (
                <div className="text-port-sub pl-4 mt-0.5">{line.out}</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
