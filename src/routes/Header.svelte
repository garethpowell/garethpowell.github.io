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
</Navbar>