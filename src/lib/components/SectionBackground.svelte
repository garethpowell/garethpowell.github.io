<!-- src/lib/components/SectionBackground.svelte -->
<script lang="ts">
    type Variant = 'hex' | 'nodes' | 'blobs'| 'contact';

    // Public props
    export let variant: Variant | null = null;     // named theme OR null if using `image`
    export let image: string | null = null;        // direct image path; ignored if `variant` is set
    export let overlay: string | null = null;      // override overlay color; defaults come from variant
    export let classes = '';                       // extra Bootstrap classes (e.g., "py-5 text-white")
    export let container: boolean = true;          // wrap slot in .container
    export let position: string = 'center';        // CSS background-position
    export let size: string = 'cover';             // CSS background-size

    // Internal: centralised variant map (tweak to your assets)
    const variants: Record<Variant, { src: string; defaultOverlay: string | null }> = {
        hex:   { src: '/img/backgrounds/abstract-hex.svg',   defaultOverlay: 'rgba(0,0,0,.35)' },
        nodes: { src: '/img/backgrounds/abstract-nodes.svg', defaultOverlay: 'rgba(0,0,0,.30)' },
        blobs: { src: '/img/backgrounds/abstract-blobs.svg', defaultOverlay: 'rgba(0,0,0,.30)' },
        contact: { src: '/img/backgrounds/contact-abstract-nodes.svg', defaultOverlay: 'rgba(0,0,0,.30)' }
    };

    // Resolve background source + overlay
    $: bgSrc = variant ? variants[variant].src : image ?? '';
    $: ov = overlay ?? (variant ? variants[variant].defaultOverlay : null);
</script>

<!-- Decorative section background -->
<!--/* safe for AT; content remains in the slot */-->
<section
        class={`container-fluid position-relative glass p-5 py-5 rounded-4 ${classes}`}
        style={`background: url('${bgSrc}') ${position}/${size} no-repeat;`}
        aria-label="decorative background"
>
{#if ov}
    <div
            class="position-absolute top-0 start-0 w-100 h-100"
            style={`background:${ov};`}
            aria-hidden="true"
    />
{/if}

<div class="position-relative">
    {#if container}
        <div class="container"><slot /></div>
    {:else}
        <slot />
    {/if}
</div>
</section>

<style>
    /* Keep the asset sharp on high-DPI while avoiding layout jank */
    section { background-attachment: scroll; } /* avoid parallax by default (safer for mobile) */
</style>