import { Award, Briefcase, GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { timeline } from '../data/site';

const kindMeta = {
  work: { Icon: Briefcase, ring: 'from-brand-300 to-brand-600', label: 'Experience' },
  education: { Icon: GraduationCap, ring: 'from-sky-300 to-blue-600', label: 'Education' },
  award: { Icon: Award, ring: 'from-amber-300 to-orange-500', label: 'Recognition' },
} as const;

const Experience = () => (
  <section id="experience" className="section">
    <div className="shell">
      <SectionHeading
        eyebrow="The journey so far"
        title={
          <>
            Experience & <span className="text-gradient">education</span>
          </>
        }
        description="Where I've worked, what I studied, and the things I picked up along the way."
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Rail */}
        <div className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-400/70 via-violet-500/40 to-transparent sm:left-[23px]" />

        <div className="space-y-6">
          {timeline.map((item, index) => {
            const { Icon, ring, label } = kindMeta[item.kind];
            return (
              <div
                key={item.title}
                className="reveal relative pl-14 sm:pl-20"
                style={{ ['--reveal-delay' as string]: `${index * 110}ms` }}
              >
                {/* Node */}
                <div
                  className={`absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br ${ring} text-ink-950 shadow-lg sm:h-12 sm:w-12`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <article className="glass glass-hover p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="chip !text-brand-200">{item.period}</span>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-slate-500">{label}</span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-300">{item.org}</p>
                  {item.meta && <p className="mt-1 text-sm text-slate-500">{item.meta}</p>}

                  <ul className="mt-5 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-slate-400">
                        <span className="mt-[0.55rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400/80" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {item.tags && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
