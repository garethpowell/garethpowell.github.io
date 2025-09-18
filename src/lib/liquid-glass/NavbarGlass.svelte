<script lang="ts" context="module">
    export let brand = 'Brand';
    export let brandHref = '/';
    export let items: NavItem[] = [];
    export let collapseId = 'nav-main';
    export type NavItem = { href: string; label: string; active?: boolean };
</script>

<nav class="navbar navbar-expand-lg navbar-dark glass rounded-3 my-3 mx-3" role="navigation">
    <div class="container">
        <a class="navbar-brand" href={brandHref}>{brand}</a>

        <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={'#' + collapseId}
                aria-controls={collapseId}
                aria-expanded="false"
                aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div id={collapseId} class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
                {#each items as item}
                    <li class="nav-item">
                        <a
                                class={"nav-link " + (item.active ? 'active' : '')}
                                href={item.href}
                                aria-current={item.active ? 'page' : undefined}
                        >
                            {item.label}
                        </a>
                    </li>
                {/each}
            </ul>

            <!-- Right-aligned actions (e.g., ThemeToggle) -->
            <div class="d-flex align-items-center gap-2 ms-lg-3">
                <slot name="end" />
            </div>
        </div>
    </div>
</nav>
