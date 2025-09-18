<script lang="ts">
    import 'bootstrap/dist/css/bootstrap.min.css';
    import '$lib/liquid-glass/liquid-glass.css';

    import { onMount } from 'svelte';
    import { initTheme } from '$lib/liquid-glass';
    import { NavbarGlass, ThemeToggle, Wallpaper } from '$lib/liquid-glass';

    onMount(async () => {
        initTheme(); // set data-bs-theme from store (auto by default)
        await import('bootstrap/dist/js/bootstrap.bundle.min.js'); // collapse, dropdowns, etc.

        // Light ripple hover effect for buttons
        const update = (e: PointerEvent) => {
            const target = (e.target as HTMLElement | null)?.closest?.('.btn, .btn-glass') as HTMLElement | null;
            if (!target) return;
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            target.style.setProperty('--lg-ripple-x', x + 'px');
            target.style.setProperty('--lg-ripple-y', y + 'px');
            target.style.setProperty('--lg-ripple-opacity', '1');
        };
        const leave = (e: PointerEvent) => {
            const el = (e.target as HTMLElement | null)?.closest?.('.btn, .btn-glass') as HTMLElement | null;
            if (el) el.style.setProperty('--lg-ripple-opacity', '0');
        };
        document.addEventListener('pointermove', update, { passive: true });
        document.addEventListener('pointerleave', leave, true);

        return () => {
            document.removeEventListener('pointermove', update as any);
            document.removeEventListener('pointerleave', leave as any, true as any);
        };
    });

    const links = [
        { href: '/', label: 'Home', active: true },
        { href: '/experience', label: 'Experience' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact'}
    ];
</script>

<!-- Skip link for accessibility -->
<a href="#content" class="visually-hidden-focusable position-absolute top-0 start-0 m-2">
    Skip to content
</a>

<!-- Wallpaper sits behind everything -->
<Wallpaper />

<!-- Glass wrapper enables component-level variables -->
<div class="lg-glass min-vh-100 d-flex flex-column">
    <header>
        <NavbarGlass brand="Clean Code Solutions" {links}>
            <ThemeToggle slot="end" />
        </NavbarGlass>
    </header>

    <main id="content" class="flex-grow-1">
        <div class="container py-5">
            <slot />
        </div>
    </main>

    <footer class="container py-4">
        <hr class="lg-hairline" />
        <p class="mb-0 small opacity-75">© {new Date().getFullYear()} Your Company</p>
    </footer>
</div>
