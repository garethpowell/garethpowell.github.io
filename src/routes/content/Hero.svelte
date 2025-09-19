<script lang="ts">
    import { resolve } from '$app/paths';
    import SectionBackground from "$lib/components/SectionBackground.svelte";
</script>

<SectionBackground
        variant="hex"
        classes="text-white py-5"
>
    <div class="row align-items-center g-4 g-lg-5">
        <div class="col-12 col-lg-7 text-center text-lg-start">
            <h1 class="display-5 fw-bold lh-sm mb-3">Clean Code Solutions</h1>
            <p class="lead mb-0">
                Seasoned professional Software Engineer with 20+ years delivering secure, high‑impact JVM & cloud
                solutions. Based in Cardiff, South Wales and available for contract engagements (remote or hybrid).
            </p>
        </div>
        <div class="col-12 col-lg-5">
            <div class="card mb-0">
                <div class="card-body">
                    <h2 class="h5 fw-semibold mb-3">Value proposition</h2>
                    <ul class="mb-0 text-body-secondary">
                        <li>End‑to‑end delivery across data, APIs, batch, UI, and infra</li>
                        <li>Cloud migration and modernisation on AWS with security baked in</li>
                        <li>CI/CD, quality gates, and platform hardening for regulated domains</li>
                        <li>Pragmatic leadership, mentoring, and measurable outcomes</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</SectionBackground>