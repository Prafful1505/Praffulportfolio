import { profile } from '../data/site';

const Footer = () => (
  <footer className="page border-t border-rule py-8">
    <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-2xs text-muted">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="flex items-center gap-4">
        <span className="hidden sm:inline">Press ⌘K anywhere</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="transition-colors hover:text-ink"
        >
          Back to top ↑
        </button>
      </p>
    </div>
  </footer>
);

export default Footer;
