import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { navLinks, profile } from '../data/site';

const socials = [
  { href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: profile.github, label: 'GitHub', Icon: Github },
  { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail },
  { href: profile.whatsapp, label: 'WhatsApp', Icon: FaWhatsapp },
];

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/[0.07] bg-ink-950/60 py-14 backdrop-blur-xl">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-300 to-violet-500 font-display text-sm font-bold text-ink-950">
                PA
              </span>
              <span className="font-display text-base font-semibold text-white">{profile.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">{profile.summary}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Navigate</h3>
            <div className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() =>
                    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="link-underline block text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Elsewhere</h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-brand-400/10 hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-5 inline-block text-sm text-brand-300"
            >
              Download resume (PDF)
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-7 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Tailwind CSS.
          </p>
          <button
            onClick={scrollTop}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/40 hover:text-white"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
