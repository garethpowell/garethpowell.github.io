<script lang="ts">
    import {
        Collapse,
        NavbarToggler,
        NavbarBrand,
        Nav,
        Navbar,
        NavItem,
        NavLink,
        Dropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem
    } from '@sveltestrap/sveltestrap';

    let isOpen = false;

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }
</script>

<Navbar color="light" light expand="md" container="md">
    <NavbarBrand href="/">Clean Code Solutions</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)}/>

    <Nav class="ms-auto" navbar>
        <NavItem>
            <NavLink href="/experience">Experience</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/about">About</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/contact">Contact</NavLink>
        </NavItem>
<!--        <Dropdown nav inNavbar>-->
<!--            <DropdownToggle nav caret>Options</DropdownToggle>-->
<!--            <DropdownMenu end>-->
<!--                <DropdownItem>Option 1</DropdownItem>-->
<!--                <DropdownItem>Option 2</DropdownItem>-->
<!--                <DropdownItem divider/>-->
<!--                <DropdownItem>Reset</DropdownItem>-->
<!--            </DropdownMenu>-->
<!--        </Dropdown>-->
    </Nav>

</Navbar>