import SectionEyebrow from '../../ui/SectionEyebrow';
import ProjectCard from './ProjectCard';
import FeaturedProjectCard from './FeaturedProjectCard';
import { useInView } from '../../../hooks/useInView';
import { PROJECTS } from '../../../data/portfolio';
import { useLanguage } from '../../../i18n/LanguageProvider';
import { alpha } from '../../../tokens';

export default function Projects() {
  const [ref, visible] = useInView();
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="px-5 md:px-12 py-24"
      style={{ background: `linear-gradient(180deg, transparent, ${alpha('card', 0.25)}, transparent)` }}
    >
      <div className="max-w-[1100px] mx-auto">
        <SectionEyebrow>{t('projects.eyebrow')}</SectionEyebrow>
        <h2
          className="font-display font-bold text-port-text mb-12"
          style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
        >
          {t('projects.title')}
        </h2>

        {/* Explicit column counts rather than auto-fit: the featured card spans
            the whole row, and a span needs a known number of tracks to span. */}
        <div
          ref={ref}
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-[800ms]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(40px)',
          }}
        >
          {PROJECTS.map(project =>
            project.featured ? (
              <div key={project.id} className="sm:col-span-2 lg:col-span-3">
                <FeaturedProjectCard project={project} />
              </div>
            ) : (
              <ProjectCard key={project.id} project={project} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
