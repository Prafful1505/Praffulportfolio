import { useEffect, useState } from 'react';
import { profile, sections } from '../data/site';
import { useTheme } from '../hooks/useTheme';
import { useLocalTime } from '../hooks/useLocalTime';

interface Props {
  onOpenMenu: () => void;
  active: string;
}

const Header = ({ onOpenMenu, active }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const time = useLocalTime(profile.timeZone);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-paper/85 backdrop-blur transition-colors duration-300 ${
        scrolled ? 'border-rule' : 'border-transparent'
      }`}
    >
      <div className="page flex h-14 items-center justify-between gap-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="a font-display text-[1.0625rem] leading-none"
        >
          {profile.name}
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {sections.slice(1).map((section) => (
            <button
              key={section.id}
              onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
              className={`text-sm transition-colors duration-200 hover:text-ink ${
                active === section.id ? 'text-ink' : 'text-muted'
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden font-mono text-2xs text-muted sm:inline">{time} IST</span>

          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Use light theme' : 'Use dark theme'}
            className="rounded border border-rule px-2 py-1 font-mono text-2xs text-muted transition-colors hover:text-ink"
          >
            {theme === 'dark' ? 'light' : 'dark'}
          </button>

          <button
            onClick={onOpenMenu}
            className="flex items-center gap-2 rounded border border-rule px-2.5 py-1 text-2xs text-muted transition-colors hover:text-ink"
          >
            <span className="font-mono">menu</span>
            <span className="key hidden sm:inline">⌘K</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
