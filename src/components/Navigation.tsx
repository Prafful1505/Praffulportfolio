import { useCallback, useEffect, useState } from 'react';
import { ArrowUpRight, FileText, Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/site';
import { useActiveSection } from '../hooks/useReveal';

const sectionIds = navLinks.map((link) => link.id);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useActiveSection(sectionIds, useCallback((id: string) => setActive(id), []));

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const goTo = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
        <nav className="shell">
          <div
            className={`flex items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-5 ${
              isScrolled
                ? 'border-white/10 bg-ink-950/70 shadow-card backdrop-blur-xl'
                : 'border-transparent bg-transparent'
            }`}
          >
            <button
              onClick={() => goTo('home')}
              className="group flex items-center gap-2.5"
              aria-label="Back to top"
            >
              <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-300 to-violet-500 font-display text-sm font-bold text-ink-950">
                PA
              </span>
              <span className="hidden font-display text-sm font-semibold tracking-tight text-white sm:block">
                {profile.name}
              </span>
            </button>

            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => goTo(link.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    active === link.id ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {active === link.id && (
                    <span className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.06]" />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 transition-colors duration-300 hover:border-brand-400/40 hover:text-white sm:inline-flex"
              >
                <FileText size={15} />
                Resume
              </a>
              <button
                onClick={() => goTo('contact')}
                className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-300 to-brand-500 px-5 py-2 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:-translate-y-0.5 lg:inline-flex"
              >
                Let's talk
                <ArrowUpRight size={15} />
              </button>
              <button
                onClick={() => setIsOpen((v) => !v)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 md:hidden"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${isOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!isOpen}
      >
        <div
          className={`absolute inset-0 bg-ink-950/80 backdrop-blur-md transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute inset-x-4 top-24 rounded-3xl border border-white/10 bg-ink-900/95 p-4 shadow-card transition-all duration-300 ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              className={`flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left text-base font-medium transition-colors ${
                active === link.id ? 'bg-white/[0.06] text-white' : 'text-slate-300 hover:bg-white/[0.04]'
              }`}
            >
              {link.label}
              <ArrowUpRight size={16} className="text-brand-300" />
            </button>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-300 to-brand-500 px-4 py-3.5 text-base font-semibold text-ink-950"
          >
            <FileText size={16} />
            View Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
