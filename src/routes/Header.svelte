<script lang="ts">
    import {
        NavbarBrand,
        Nav,
        Navbar,
        NavItem,
        NavLink,
    } from '@sveltestrap/sveltestrap';
    import {resolve} from '$app/paths';
</script>

<Navbar color="light" light expand="md" container="md">
    <NavbarBrand href={resolve('/')}>
        <img src="ccs-logo.webp" alt="Clean Code Solutions Logo" height="48"> Clean Code Solutions
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