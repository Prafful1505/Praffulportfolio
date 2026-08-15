import { BarChart3, Brain, Github, Image as ImageIcon, Lock, TrendingUp } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/site';

const iconMap = {
  brain: Brain,
  trending: TrendingUp,
  image: ImageIcon,
  chart: BarChart3,
};

const Projects = () => (
  <section id="projects" className="section">
    <div className="shell">
      <SectionHeading
        eyebrow="Selected work"
        title={
          <>
            Projects I've <span className="text-gradient">built and shipped</span>
          </>
        }
        description="A mix of applied AI systems and analytics work — each one solved a concrete problem end to end."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = iconMap[project.icon];
          const hasLink = Boolean(project.link);

          return (
            <article
              key={project.title}
              className={`reveal glass glass-hover group relative flex flex-col overflow-hidden p-6 sm:p-7 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              style={{ ['--reveal-delay' as string]: `${index * 90}ms` }}
            >
              {/* Accent wash on hover */}
              <div
                className={`pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br ${project.accent} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-25`}
              />

              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${project.accent} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white transition-colors duration-300 group-hover:text-brand-200 sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500">{project.period}</p>
                  </div>
                </div>
                <span className="chip !border-brand-400/30 !bg-brand-400/10 !text-brand-200">
                  {project.highlight}
                </span>
              </div>

              <p className="relative mt-5 text-sm leading-relaxed text-slate-400">{project.summary}</p>

              <div
                className={`relative mt-6 grid gap-x-6 gap-y-2.5 ${
                  project.featured ? 'sm:grid-cols-2' : ''
                }`}
              >
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <span className="mt-[0.5rem] h-1 w-1 flex-shrink-0 rounded-full bg-brand-300" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="relative mt-7 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                {hasLink ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-brand-400/10 hover:text-white"
                  >
                    <Github size={16} />
                    View code
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] px-5 py-2.5 text-sm text-slate-500">
                    <Lock size={15} />
                    Private / client work
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div className="reveal mt-10 text-center">
        <a
          href="https://github.com/Prafful1505?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          <Github size={16} />
          Browse all repositories
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
