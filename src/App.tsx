import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import WorkList from './components/WorkList';
import Experience from './components/Experience';
import Toolkit from './components/Toolkit';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import { sections } from './data/site';
import { useActiveSection, useReveal } from './hooks/useReveal';

const sectionIds = sections.map((section) => section.id);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('top');

  useReveal();
  useActiveSection(sectionIds, useCallback((id: string) => setActive(id), []));

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setMenuOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:border focus:border-rule focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to work
      </a>

      <Header onOpenMenu={() => setMenuOpen(true)} active={active} />

      <main>
        <Intro />
        <WorkList />
        <Experience />
        <Toolkit />
        <Contact />
      </main>

      <Footer />

      <CommandPalette open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default App;
