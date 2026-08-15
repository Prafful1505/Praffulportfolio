import { useState } from 'react';
import { intro, profile } from '../data/site';
import { useLocalTime } from '../hooks/useLocalTime';

const Intro = () => {
  const [copied, setCopied] = useState(false);
  const time = useLocalTime(profile.timeZone);

  const copyEmail = () => {
    navigator.clipboard?.writeText(profile.email).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      },
      () => undefined
    );
  };

  return (
    <section id="top" className="page pb-20 pt-16 sm:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_15rem] lg:gap-16">
        <div>
          <h1 className="max-w-measure font-display text-[2.75rem] font-normal leading-[1.08] tracking-[-0.015em] sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-measure font-display text-[1.375rem] italic leading-snug text-muted sm:text-2xl">
            {profile.titles.join(', ')}
          </p>
          <p className="mt-2 font-mono text-2xs uppercase tracking-[0.14em] text-muted">
            {profile.company}
          </p>

          <div className="prose-measure mt-8 space-y-5">
            {intro.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a href={`mailto:${profile.email}`} className="a">
              {profile.email}
            </a>
            <button onClick={copyEmail} className="font-mono text-2xs text-muted transition-colors hover:text-ink">
              {copied ? 'copied' : 'copy'}
            </button>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="a">
              Resume
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="a">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="a">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Meta column — the facts, kept out of the prose */}
        <dl className="grid grid-cols-2 gap-y-5 self-start border-t border-rule pt-6 text-sm lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-1">
          <div>
            <dt className="label">Based</dt>
            <dd className="mt-1">{profile.location}</dd>
          </div>
          <div>
            <dt className="label">Local time</dt>
            <dd className="mt-1 font-mono tabular-nums">{time}</dd>
          </div>
          <div>
            <dt className="label">Studied</dt>
            <dd className="mt-1">B.Tech AI &amp; Data Science, MITS Gwalior, 2026</dd>
          </div>
          <div>
            <dt className="label">Status</dt>
            <dd className="mt-1 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Open to conversations
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Intro;
