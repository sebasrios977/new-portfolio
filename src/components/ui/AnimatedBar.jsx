import { useInView } from '../../hooks/useInView';

export default function AnimatedBar({ level, color }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className="h-1 rounded-sm mt-1.5 overflow-hidden"
      style={{ background: '#1E3A5F' }}
    >
      <div
        style={{
          height: '100%',
          borderRadius: 2,
          background: `linear-gradient(90deg, ${color}, ${color}99)`,
          width: visible ? `${level}%` : '0%',
          transition: 'width 1s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: `0 0 10px ${color}60`,
        }}
      />
    </div>
  );
}
