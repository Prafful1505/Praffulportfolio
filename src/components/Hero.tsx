import { useEffect, useState } from 'react';
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import {
  SiPython,
  SiMysql,
  SiAmazon,
  SiTypescript,
  SiOpenai,
  SiPandas,
  SiLangchain,
  SiGit,
} from 'react-icons/si';
import { marqueeSkills, profile, stats } from '../data/site';

const roles = ['Implementation Team Manager', 'Data Scientist', 'AI Engineer', 'Data Analyst'];

const orbitInner = [
  { Icon: SiPython, label: 'Python', color: 'text-yellow-300' },
  { Icon: SiMysql, label: 'MySQL', color: 'text-sky-300' },
  { Icon: SiPandas, label: 'Pandas', color: 'text-violet-300' },
  { Icon: SiOpenai, label: 'LLMs', color: 'text-emerald-200' },
];

const orbitOuter = [
  { Icon: SiAmazon, label: 'AWS', color: 'text-orange-300' },
  { Icon: SiTypescript, label: 'TypeScript', color: 'text-blue-300' },
  { Icon: SiLangchain, label: 'LangChain', color: 'text-teal-200' },
  { Icon: SiGit, label: 'Git', color: 'text-rose-300' },
];

type OrbitItem = { Icon: typeof SiPython; label: string; color: string };

const Orbit = ({
  items,
  duration,
  offset = 0,
  reverse = false,
}: {
  items: OrbitItem[];
  duration: number;
  offset?: number;
  reverse?: boolean;
}) => (
  <div
    className="absolute inset-0"
    style={{ animation: `orbit-spin ${duration}s linear infinite${reverse ? ' reverse' : ''}` }}
  >
    {items.map(({ Icon, label, color }, index) => {
      const angle = (index / items.length) * 2 * Math.PI + offset;
      return (
        <div
          key={label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${50 + Math.cos(angle) * 50}%`,
            top: `${50 + Math.sin(angle) * 50}%`,
          }}
        >
          <div
            className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-ink-850/85 backdrop-blur-md sm:h-12 sm:w-12"
            style={{
              animation: `orbit-spin ${duration}s linear infinite${reverse ? '' : ' reverse'}`,
              boxShadow: '0 12px 30px -14px rgba(45,212,191,0.5)',
            }}
            title={label}
          >
            <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${color}`} />
          </div>
        </div>
      );
    })}
  </div>
);

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-32 pb-20 sm:pt-36">
      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Copy */}
          <div>
            <div className="reveal">
              <span className="eyebrow">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-400" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-300" />
                </span>
                {profile.availability}
              </span>
            </div>

            <h1
              className="reveal mt-7 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.1rem]"
              style={{ ['--reveal-delay' as string]: '80ms' }}
            >
              Hi, I'm {profile.name.split(' ')[0]}.
              <span className="mt-3 block text-[1.6rem] leading-snug sm:text-4xl lg:text-[2.6rem]">
                <span key={roles[roleIndex]} className="text-gradient">
                  {roles[roleIndex]}
                </span>
                <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] animate-caret bg-brand-300 align-middle" />
              </span>
            </h1>

            <p
              className="reveal mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
              style={{ ['--reveal-delay' as string]: '160ms' }}
            >
              {profile.tagline} Now leading implementation at{' '}
              <span className="font-medium text-brand-200">Target Dial</span> — taking AI agents, data
              pipelines and analytics from scoping through to production.
            </p>

            <div
              className="reveal mt-8 flex flex-wrap items-center gap-3"
              style={{ ['--reveal-delay' as string]: '240ms' }}
            >
              <button
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn btn-primary"
              >
                View my work
                <ArrowUpRight size={17} />
              </button>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <Download size={16} />
                Download CV
              </a>
            </div>

            <div
              className="reveal mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400"
              style={{ ['--reveal-delay' as string]: '300ms' }}
            >
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-brand-300" />
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="link-underline inline-flex items-center gap-2 hover:text-white"
              >
                <Mail size={15} className="text-brand-300" />
                {profile.email}
              </a>
              <span className="flex items-center gap-2">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/40 hover:text-white"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/40 hover:text-white"
                >
                  <Github size={16} />
                </a>
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="reveal relative mx-auto w-full max-w-md" style={{ ['--reveal-delay' as string]: '200ms' }}>
            <div className="relative aspect-square">
              {/* Rings */}
              <div className="absolute inset-[4%] rounded-full border border-white/[0.07]" />
              <div className="absolute inset-[30%] rounded-full border border-white/[0.05]" />
              <div className="absolute inset-[20%] rounded-full bg-gradient-to-br from-brand-500/25 via-transparent to-violet-500/25 blur-2xl" />

              <div className="absolute inset-[4%]">
                <Orbit items={orbitOuter} duration={38} offset={Math.PI / 4} />
              </div>
              <div className="absolute inset-[30%]">
                <Orbit items={orbitInner} duration={26} reverse />
              </div>

              {/* Core card */}
              <div className="absolute left-1/2 top-1/2 w-[42%] -translate-x-1/2 -translate-y-1/2">
                <div className="glass animate-float p-4 text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-300 to-violet-500 font-display text-base font-bold text-ink-950">
                    PA
                  </div>
                  <p className="mt-3 font-display text-sm font-semibold leading-tight text-white">
                    {profile.name}
                  </p>
                  <p className="mt-1 text-[10px] font-medium uppercase leading-tight tracking-[0.14em] text-brand-300">
                    {profile.role}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
              <Sparkles size={13} className="text-brand-300" />
              Python · SQL · Power BI · LangChain · AWS
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.05] lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="group bg-ink-950/70 px-5 py-7 text-center backdrop-blur-xl">
              <p className="font-display text-3xl font-bold text-white transition-colors duration-300 group-hover:text-brand-300 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs leading-snug text-slate-500 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Skill marquee */}
        <div className="reveal mask-fade-x mt-10 overflow-hidden">
          <div className="flex w-max animate-marquee gap-3">
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="whitespace-nowrap rounded-full border border-white/[0.07] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-slate-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
