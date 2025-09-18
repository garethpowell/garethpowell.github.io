<script lang="ts">
    // no JS needed if Bootstrap’s JS is loaded; data-bs-* handles behavior
import {Styles} from "@sveltestrap/sveltestrap";
</script>

<nav class="navbar navbar-expand-md glass"  aria-label="Primary">
    <div class="container">
        <a class="navbar-brand fw-semibold" href="/">Clean Code Solutions</a>

        <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#primaryNav"
                aria-controls="primaryNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div id="primaryNav" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="/experience">Experience</a></li>
                <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
                <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>

<style>
    .navbar-toggler-icon {
        color: var(--white-50);
        background-color: var(--color-blue-900);
    }
</style>

<!--
<script lang="ts">
    import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from '@sveltestrap/sveltestrap';
    import {resolve} from '$app/paths';
</script>

<Navbar color="light" light expand="md" container="md">
    <NavbarBrand href={resolve('/')} class="d-flex align-items-center">
        <img src={resolve('/ccs-banner@0.5x.webp')} alt="Clean Code Solutions Banner" class="img-fluid"
             style="max-height:64px" loading="lazy"/>
    </NavbarBrand>

    <Nav class="ms-auto" navbar>
        <NavItem>
            <NavLink href={resolve('/experience')}>Experience</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href={resolve('/about')}>About</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href={resolve('/contact')}>Contact</NavLink>
        </NavItem>
    </Nav>
</Navbar>-->
