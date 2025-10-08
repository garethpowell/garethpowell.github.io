import { writable, derived } from 'svelte/store';

export type ThemeMode = 'dark';
const KEY = 'lg-theme';

function getInitial(): ThemeMode {
    return 'dark';
}

function apply(mode: ThemeMode) {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-bs-theme', mode);
}

export const mode = writable<ThemeMode>(getInitial());

export const resolved = derived(mode, ($mode, set) => {
    set($mode);
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

}
