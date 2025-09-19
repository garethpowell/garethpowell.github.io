<script lang="ts">
    import 'bootstrap/dist/css/bootstrap.min.css';
    import '$lib/liquid-glass/liquid-glass.css';

    import { onMount } from 'svelte';
    import { initTheme } from '$lib/liquid-glass';
    import { NavbarGlass, ThemeToggle, Wallpaper } from '$lib/liquid-glass';
    import {faBluesky, faGithub, faInstagram, faLinkedin, faXTwitter} from "@fortawesome/free-brands-svg-icons";
    import {faAt} from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

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
        <hr class="lg-glass" />
        <section>
            <div class="container text-center">
                <div class="row align-items-start align-items-center">
                    <div class="col">
                        <!-- Copyright -->
                        © {new Date().getFullYear()} Copyright: <a class="text-white" href="https://cleancode.uk/">Clean Code Solutions Limited</a>
                        <!-- Copyright -->
                    </div>
                    <div class="col">
                        <!-- Section: Social media -->
                        <!-- Twitter -->
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1"
                           href="https://x.com/gazpowell" role="button" aria-label="Twitter" target="_blank">
                            <Fa icon={faXTwitter}/>
                        </a>

                        <!-- Bluesky -->
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1"
                           href="https://bsky.app/profile/gazpowell.bsky.social" role="button" aria-label="BlueSky"
                           target="_blank">
                            <Fa icon={faBluesky}/>
                        </a>

                        <!-- Instagram -->
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1"
                           href="https://www.instagram.com/aventyret_borjar" role="button" aria-label="Instagram"
                           target="_blank">
                            <Fa icon={faInstagram}/>
                        </a>

                        <!-- Linkedin -->
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1"
                           href="https://www.linkedin.com/in/garethpowell/" role="button" aria-label="LinkedIn"
                           target="_blank">
                            <Fa icon={faLinkedin}/>
                        </a>

                        <!-- Github -->
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1"
                           href="https://github.com/garethpowell" role="button" aria-label="GitHub" target="_blank">
                            <Fa icon={faGithub}/>
                        </a>

                        <!-- Email -->
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-floating m-1"
                           href="mailto:gareth@cleancode.uk" role="button" aria-label="GitHub" target="_blank">
                            <Fa icon={faAt}/>
                        </a>
                        <!-- Section: Social media -->
                    </div>
                </div>
            </div>

        </section>
    </footer>
</div>
