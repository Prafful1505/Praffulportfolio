import { useCallback, useEffect, useSyncExternalStore } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const listeners = new Set<() => void>();

function read(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function set(next: Theme, remember: boolean) {
  document.documentElement.classList.toggle('dark', next === 'dark');
  document.documentElement.style.colorScheme = next;
  if (remember) localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
}

/**
 * Shared across every component that calls it, so the header and the command
 * menu never disagree about which theme is on. The class itself is set by an
 * inline script in index.html before first paint.
 */
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, read, () => 'light' as Theme);

  const toggle = useCallback(() => set(read() === 'dark' ? 'light' : 'dark', true), []);

  // Follow the system until the visitor picks a side.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem(STORAGE_KEY)) return;
      set(e.matches ? 'dark' : 'light', false);
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return { theme, toggle };
}
