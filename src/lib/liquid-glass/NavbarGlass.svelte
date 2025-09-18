<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    export type NavItem = { href: string; label: string; active?: boolean };

    export let brand: string = 'Brand';
    export let brandHref: string = '/';

    // Primary prop name
    export let items: NavItem[] = [];
    // Compatibility: allow `links` as an alias for `items`
    export let links: NavItem[] | undefined;

    export let collapseId: string = 'nav-main';

    // Normalize props: if `links` provided and `items` is empty, use links
    if (links && links.length && items.length === 0) {
        items = links;
    }

    // Compute active state from the current route
    function normalize(path: string | undefined | null): string {
        let p = (path || '/').split('#')[0].split('?')[0];
        if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
        return p || '/';
    }
    $: currentPath = normalize($page.url?.pathname);
    function isActive(href: string): boolean {
        const target = normalize(href);
        if (target === '/') return currentPath === '/';
        return currentPath === target || currentPath.startsWith(target + '/');
    }

    let expanded = false;
    let collapseEl: HTMLDivElement;
    let toggleBtn: HTMLButtonElement;
    let collapseInstance: any;

    onMount(async () => {
        // Ensure Bootstrap's Collapse is available. If already loaded in layout, use that; otherwise import here.
        let CollapseCtor: any = (globalThis as any).bootstrap?.Collapse;
        if (!CollapseCtor) {
            const mod: any = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
            CollapseCtor = mod?.Collapse || (globalThis as any).bootstrap?.Collapse;
        }
        if (CollapseCtor && collapseEl) {
            collapseInstance = new CollapseCtor(collapseEl, { toggle: false });
            const onShown = () => (expanded = true);
            const onHidden = () => (expanded = false);
            collapseEl.addEventListener('shown.bs.collapse', onShown);
            collapseEl.addEventListener('hidden.bs.collapse', onHidden);
        }
    });

    function handleToggle(e: Event) {
        e.preventDefault();
        if (collapseInstance) {
            collapseInstance.toggle();
        } else if (collapseEl) {
            // Fallback: toggle class if Bootstrap JS failed to load
            collapseEl.classList.toggle('show');
            expanded = collapseEl.classList.contains('show');
        }
    }

    function hideCollapse() {
        if (collapseInstance) {
            collapseInstance.hide();
        } else if (collapseEl) {
            collapseEl.classList.remove('show');
            expanded = false;
        }
    }

    function handleNavClick() {
        // Auto-close the navbar on link clicks (SPA navigation won't auto-hide)
        hideCollapse();
    }
</script>

<nav class="navbar navbar-expand-lg navbar-dark glass rounded-3 my-3 mx-3" role="navigation">
    <div class="container">
        <a class="navbar-brand" href={brandHref} on:click={handleNavClick}>{brand}</a>

        <div class="d-flex align-items-center gap-2 ms-auto">
            <slot name="end" />
            <button
                    class="navbar-toggler"
                    type="button"
                    aria-controls={collapseId}
                    aria-expanded={expanded}
                    aria-label="Toggle navigation"
                    bind:this={toggleBtn}
                    on:click={handleToggle}
            >
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>

        <div id={collapseId} class="collapse navbar-collapse" bind:this={collapseEl}>
            <ul class="navbar-nav ms-auto">
                {#each items as item}
                    <li class="nav-item">
                        <a
                                class={"nav-link " + (isActive(item.href) ? 'active' : '')}
                                href={item.href}
                                aria-current={isActive(item.href) ? 'page' : undefined}
                                on:click={handleNavClick}
                        >
                            {item.label}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</nav>
