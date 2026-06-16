import SectionEyebrow from '../../ui/SectionEyebrow';
import ProjectCard from './ProjectCard';
import { useInView } from '../../../hooks/useInView';
import { PROJECTS } from '../../../data/portfolio';
import { T } from '../../../tokens';

export default function Projects() {
  const [ref, visible] = useInView();

  return (
    <section
      id="projects"
      className="px-5 md:px-12 py-24"
      style={{ background: `linear-gradient(180deg, transparent, ${T.bgCard}40, transparent)` }}
    >
      <div className="max-w-[1100px] mx-auto">
        <SectionEyebrow>Projects</SectionEyebrow>
        <h2
          className="font-display font-bold text-port-text mb-12"
          style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
        >
          What I've built
        </h2>

        <div
          ref={ref}
          className="grid gap-6 transition-all duration-[800ms]"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(40px)',
          }}
        >
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
