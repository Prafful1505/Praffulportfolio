import { BarChart3, Brain, Cloud, Code2, Check } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { skillGroups } from '../data/site';

const icons = [BarChart3, Code2, Brain, Cloud];

const Skills = () => (
  <section id="skills" className="section">
    <div className="shell">
      <SectionHeading
        eyebrow="What I work with"
        title={
          <>
            A toolkit built around <span className="text-gradient">shipping insight</span>
          </>
        }
        description="Four areas I keep sharp — from cleaning the first CSV to putting an AI workflow in front of real users."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => {
          const Icon = icons[index % icons.length];
          return (
            <article
              key={group.title}
              className="reveal glass glass-hover group flex flex-col p-6"
              style={{ ['--reveal-delay' as string]: `${index * 90}ms` }}
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${group.accent} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
              >
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-white">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{group.blurb}</p>

              <ul className="mt-5 space-y-2.5 border-t border-white/[0.06] pt-5">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-300" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
