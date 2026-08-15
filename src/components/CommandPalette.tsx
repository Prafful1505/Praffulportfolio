import { useEffect, useMemo, useRef, useState } from 'react';
import { profile, sections } from '../data/site';
import { useTheme } from '../hooks/useTheme';

type Command = {
  id: string;
  label: string;
  group: 'Go to' | 'Open' | 'Do';
  hint?: string;
  run: () => void;
};

interface Props {
  open: boolean;
  onClose: () => void;
}

const CommandPalette = ({ open, onClose }: Props) => {
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { theme, toggle } = useTheme();

  const commands = useMemo<Command[]>(() => {
    const goTo: Command[] = sections.map((section) => ({
      id: `go-${section.id}`,
      label: section.label,
      group: 'Go to',
      hint: section.index,
      run: () => {
        if (section.id === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
        else document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
      },
    }));

    const open: Command[] = [
      { id: 'resume', label: 'Resume (PDF)', group: 'Open', run: () => window.open(profile.resume, '_blank') },
      { id: 'github', label: 'GitHub', group: 'Open', run: () => window.open(profile.github, '_blank') },
      { id: 'linkedin', label: 'LinkedIn', group: 'Open', run: () => window.open(profile.linkedin, '_blank') },
      { id: 'whatsapp', label: 'WhatsApp', group: 'Open', run: () => window.open(profile.whatsapp, '_blank') },
    ];

    const act: Command[] = [
      {
        id: 'email',
        label: 'Write an email',
        group: 'Do',
        hint: profile.email,
        run: () => {
          window.location.href = `mailto:${profile.email}`;
        },
      },
      {
        id: 'copy',
        label: copied ? 'Email address copied' : 'Copy email address',
        group: 'Do',
        run: () => {
          navigator.clipboard?.writeText(profile.email).then(
            () => {
              setCopied(true);
              window.setTimeout(() => setCopied(false), 2000);
            },
            () => undefined
          );
        },
      },
      {
        id: 'theme',
        label: theme === 'dark' ? 'Switch to light' : 'Switch to dark',
        group: 'Do',
        run: toggle,
      },
    ];

    return [...goTo, ...open, ...act];
  }, [copied, theme, toggle]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => `${c.label} ${c.group} ${c.hint ?? ''}`.toLowerCase().includes(q));
  }, [commands, query]);

  useEffect(() => {
    if (!open) return;
    setQuery('');
    setCursor(0);
    const id = window.setTimeout(() => inputRef.current?.focus(), 20);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    setCursor(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    listRef.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [cursor, results.length]);

  if (!open) return null;

  const runAt = (index: number) => {
    const command = results[index];
    if (!command) return;
    command.run();
    if (command.id !== 'copy' && command.id !== 'theme') onClose();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCursor((c) => (results.length ? (c + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCursor((c) => (results.length ? (c - 1 + results.length) % results.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      runAt(cursor);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  let lastGroup = '';

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh] sm:pt-[16vh]">
      <div
        className="absolute inset-0 bg-ink/25 backdrop-blur-[2px] dark:bg-black/55"
        onClick={onClose}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        onKeyDown={onKeyDown}
        className="relative w-full max-w-lg animate-pop overflow-hidden rounded-lg border border-rule bg-surface shadow-[0_24px_60px_-24px_rgba(0,0,0,0.4)]"
      >
        <div className="flex items-center gap-3 border-b border-rule px-4">
          <span className="label">⌘K</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to a section, copy my email, open the resume…"
            className="w-full bg-transparent py-3.5 text-[0.9375rem] text-ink outline-none placeholder:text-muted"
          />
        </div>

        <div ref={listRef} className="max-h-[52vh] overflow-y-auto py-2">
          {results.length === 0 && (
            <p className="px-4 py-6 text-sm text-muted">Nothing matches "{query}".</p>
          )}

          {results.map((command, index) => {
            const showGroup = command.group !== lastGroup;
            lastGroup = command.group;
            const active = index === cursor;
            return (
              <div key={command.id}>
                {showGroup && <p className="label px-4 pb-1 pt-3">{command.group}</p>}
                <button
                  data-active={active}
                  onMouseMove={() => setCursor(index)}
                  onClick={() => runAt(index)}
                  className={`flex w-full items-center justify-between gap-4 px-4 py-2 text-left text-sm transition-colors ${
                    active ? 'bg-ink/[0.06] text-ink dark:bg-white/[0.07]' : 'text-ink/80'
                  }`}
                >
                  <span>{command.label}</span>
                  {command.hint && <span className="font-mono text-2xs text-muted">{command.hint}</span>}
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-4 border-t border-rule px-4 py-2.5 text-2xs text-muted">
          <span className="flex items-center gap-1.5">
            <span className="key">↑</span>
            <span className="key">↓</span>
            move
          </span>
          <span className="flex items-center gap-1.5">
            <span className="key">↵</span>
            select
          </span>
          <span className="flex items-center gap-1.5">
            <span className="key">esc</span>
            close
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
