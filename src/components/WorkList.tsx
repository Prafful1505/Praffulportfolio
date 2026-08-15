import { useState } from 'react';
import { work } from '../data/site';
import Section from './Section';

const WorkList = () => {
  const [open, setOpen] = useState<string | null>(work[0]?.index ?? null);

  return (
    <Section id="work" index="01" title="Selected work" aside={`${work.length} projects`}>
      <div className="border-t border-rule">
        {work.map((item) => {
          const isOpen = open === item.index;
          return (
            <article key={item.index} className="reveal border-b border-rule">
              <h3>
                <button
                  onClick={() => setOpen(isOpen ? null : item.index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-baseline gap-4 py-5 text-left sm:gap-6"
                >
                  <span className="label w-6 shrink-0 pt-1">{item.index}</span>

                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-xl leading-snug transition-colors duration-200 group-hover:text-accent sm:text-[1.4rem]">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{item.summary}</span>
                  </span>

                  <span className="hidden shrink-0 pt-1 font-mono text-2xs text-muted sm:block">
                    {item.period}
                  </span>

                  <span
                    className={`shrink-0 pt-1 font-mono text-sm text-muted transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : 'group-hover:text-accent'
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
              </h3>

              <div className={`expander ${isOpen ? 'is-open' : ''}`}>
                <div>
                  <div className="grid gap-6 pb-7 pl-0 sm:grid-cols-[1fr_14rem] sm:pl-10">
                    <ul className="space-y-2.5">
                      {item.detail.map((line) => (
                        <li key={line} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink/80">
                          <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="label">Built with</p>
                        <p className="mt-1.5 text-muted">{item.stack.join(', ')}</p>
                      </div>
                      {item.result && (
                        <div>
                          <p className="label">Measured</p>
                          <p className="mt-1.5">{item.result}</p>
                        </div>
                      )}
                      <div>
                        <p className="label sm:hidden">When</p>
                        <p className="mt-1.5 text-muted sm:hidden">{item.period}</p>
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="a mt-1.5">
                            Read the code ↗
                          </a>
                        ) : (
                          <p className="mt-1.5 text-muted">Client work, not public</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
};

export default WorkList;
