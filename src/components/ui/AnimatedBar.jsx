import { useInView } from '../../hooks/useInView';
import { T, alpha } from '../../tokens';

/**
 * Skill meter. Fills on first scroll into view.
 *
 * The colour is taken from the tokens rather than a prop: the fade at the end
 * of the bar needs a translucent variant, and that has to be built with
 * `alpha()` now that tokens resolve CSS variables — appending a hex pair to
 * one produces invalid CSS and silently drops the whole declaration.
 */
export default function AnimatedBar({ level }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className="h-1 rounded-sm mt-1.5 overflow-hidden"
      style={{ background: T.border }}
    >
      <div
        style={{
          height: '100%',
          borderRadius: 2,
          background: `linear-gradient(90deg, ${T.green}, ${alpha('green', 0.6)})`,
          width: visible ? `${level}%` : '0%',
          transition: 'width 1s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: `0 0 10px ${alpha('green', 0.4)}`,
        }}
      />
    </div>
  );
}
