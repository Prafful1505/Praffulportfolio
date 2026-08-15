import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profile } from '../data/site';

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
    accent: 'from-brand-300 to-brand-600',
    copyable: true,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: profile.phoneHref,
    Icon: Phone,
    accent: 'from-sky-300 to-blue-600',
    copyable: true,
  },
  {
    label: 'WhatsApp',
    value: 'Start a chat',
    href: profile.whatsapp,
    Icon: MessageCircle,
    accent: 'from-emerald-300 to-green-600',
    copyable: false,
  },
  {
    label: 'LinkedIn',
    value: 'Connect with me',
    href: profile.linkedin,
    Icon: Linkedin,
    accent: 'from-violet-400 to-indigo-600',
    copyable: false,
  },
];

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      /* clipboard unavailable — the link still works */
    }
  };

  return (
    <section id="contact" className="section pb-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Get in touch"
          title={
            <>
              Let's build something <span className="text-gradient">worth measuring</span>
            </>
          }
          description="Hiring, collaborating, or just want to compare notes on data and AI? My inbox is genuinely open."
        />

        <div className="reveal glass relative overflow-hidden p-6 sm:p-10">
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-16 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-400/10 px-4 py-1.5 text-xs font-medium text-brand-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-400" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-300" />
                </span>
                {profile.availability}
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                Ready when you are.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
                {profile.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="btn btn-primary">
                  <Mail size={16} />
                  Email me
                </a>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  View resume
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <p className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                <MapPin size={15} className="text-brand-300" />
                Based in {profile.location} — open to remote and relocation.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {channels.map(({ label, value, href, Icon, accent, copyable }) => (
                <div
                  key={label}
                  className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:bg-white/[0.06]"
                >
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3"
                  >
                    <span
                      className={`grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] uppercase tracking-[0.14em] text-slate-500">
                        {label}
                      </span>
                      <span className="block truncate text-sm font-medium text-white">{value}</span>
                    </span>
                  </a>

                  {copyable && (
                    <button
                      onClick={() => copy(value)}
                      aria-label={`Copy ${label}`}
                      className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg border border-white/[0.07] bg-ink-900/70 text-slate-400 opacity-0 transition-all duration-300 hover:text-brand-200 focus-visible:opacity-100 group-hover:opacity-100"
                    >
                      {copied === value ? <Check size={14} className="text-brand-300" /> : <Copy size={14} />}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
