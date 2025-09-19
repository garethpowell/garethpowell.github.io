import { writable, derived } from 'svelte/store';

export type ThemeMode = 'auto' | 'light' | 'dark';
const KEY = 'lg-theme';

function getInitial(): ThemeMode {
    if (typeof localStorage === 'undefined') return 'dark';
    const v = localStorage.getItem(KEY);
    return v === 'light' || v === 'dark' ? v : 'dark';
}

function apply(mode: ThemeMode) {
    if (typeof document === 'undefined') return;
    if (mode === 'auto') {
        document.documentElement.removeAttribute('data-bs-theme');
    } else {
        document.documentElement.setAttribute('data-bs-theme', mode);
    }
}

export const mode = writable<ThemeMode>(getInitial());

const mediaQuery =
    typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)') : null;

export const resolved = derived(mode, ($mode, set) => {
    if ($mode === 'auto') set(mediaQuery?.matches ? 'dark' : 'light');
    else set($mode);
});

/** Update theme mode (and persist) */
export function setMode(next: ThemeMode) {
    mode.set(next);
}

/** Call once in the root layout onMount */
export function initTheme() {
    apply(getInitial());

    // persist + apply on changes
    mode.subscribe((m) => {
        if (typeof localStorage !== 'undefined') localStorage.setItem(KEY, m);
        apply(m);
    });

    // follow OS while in 'auto'
    if (mediaQuery) {
        const handler = () => {
            let current: ThemeMode = 'auto';
            mode.update((m) => (current = m, m));
            if (current === 'auto') apply('auto');
        };
        mediaQuery.addEventListener('change', handler);
    }
}
