<script lang="ts">
    import { mode, resolved, setMode } from './theme';

    const options = [
        { label: 'Auto', value: 'auto' as const },
        { label: 'Light', value: 'light' as const },
        { label: 'Dark', value: 'dark' as const }
    ];

    $: buttonLabel = $mode === 'auto'
        ? `Auto (${$resolved})`
        : $mode[0].toUpperCase() + $mode.slice(1);
</script>

<div class="dropdown">
    <button
            class="btn btn-glass dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-label="Theme menu"
    >
        {buttonLabel}
    </button>

    <ul class="dropdown-menu dropdown-menu-end" role="menu" aria-label="Theme">
        {#each options as o}
            <li>
                <button
                        class="dropdown-item d-flex justify-content-between"
                        role="menuitemradio"
                        aria-checked={$mode === o.value}
                        on:click={() => setMode(o.value)}
                >
                    {o.label}
                    {#if $mode === o.value}
                        <span class="ms-2" aria-hidden="true">✓</span>
                    {/if}
                </button>
            </li>
        {/each}
    </ul>
</div>
