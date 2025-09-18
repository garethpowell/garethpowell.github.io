<script lang="ts">
    import { mode, resolved, setMode } from './theme';

    type ThemeMode = 'light' | 'dark';

    const order: ThemeMode[] = ['light', 'dark'];

    function nextMode(current: ThemeMode): ThemeMode {
        const i = order.indexOf(current);
        return order[(i + 1) % order.length] as ThemeMode;
    }

    function cycle() {
        setMode(nextMode($mode));
    }

    $: label = `Theme: ${$mode} (resolved: ${$resolved})`;
</script>

<button
    class="btn btn-glass d-inline-flex align-items-center justify-content-center"
    type="button"
    on:click={cycle}
    aria-label={label}
    title={label}
>
    {#if $mode === 'light'}
        <!-- Sun icon -->
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8L6.76 4.84zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.66 1.45l1.79-1.8-1.41-1.41-1.8 1.79 1.42 1.42zM20 11v2h3v-2h-3zM4.34 17.66l1.41 1.41 1.8-1.79-1.42-1.42-1.79 1.8zM11 20h2v3h-2v-3zm7.66-2.34l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM12 6a6 6 0 100 12 6 6 0 000-12z"/></svg>
    {:else}
        <!-- Moon icon -->
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.74 2a9 9 0 108.97 10.24A7 7 0 0112.74 2z"/></svg>
    {/if}
</button>
