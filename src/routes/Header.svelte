<script lang="ts">
    // no JS needed if Bootstrap’s JS is loaded; data-bs-* handles behavior
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
