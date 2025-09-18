<svelte:head>
    <title>About</title>
    <meta name="description" content="About Clean Code Solutions & Gareth Powell"/>
</svelte:head>

<script lang="ts">
    import { resolve } from "$app/paths";
    let CVFile = "Gareth_Powell_CV_2025.pdf";
</script>

<h1 class="display-6 fw-bold lh-sm mb-3">About Clean Code Solutions</h1>
<section class="glass p-4 p-md-5 rounded-4">
    <div class="row align-items-center g-4 g-lg-5">
        <div class="col-12 col-sm-5 col-lg-4 text-center">
            <img
                src={resolve('/gareth_powell.png')}
                class="img-fluid rounded mx-auto d-block"
                alt="Portrait of Gareth Powell"
                width="300"
                height="300"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 576px) 60vw, 300px"
            />
        </div>
        <div class="col-12 col-sm-7 col-lg-8">
            <p class="lead mb-3">
                Gareth (Gaz) Powell — Principal Software Engineer specialising in JVM ecosystems and secure,
                regulated environments. I lead design and delivery end‑to‑end: data, APIs, batch, UI, and
                infrastructure, with a pragmatic and security‑first approach.
            </p>
            <p class="lead mb-4">
                I champion clean code, static analysis, automation, and measurable outcomes. I’ve modernised
                legacy estates, driven cloud migrations, and instituted robust CI/CD with quality gates.
            </p>

            <h2 class="h4 fw-semibold mt-2 mb-2">Education</h2>
            <p class="mb-1">Lancaster University</p>
            <p class="text-body-secondary mb-4">BSc Computer Science with Software Engineering (1999)</p>

            <div class="d-grid d-sm-inline-flex gap-2">
                <a
                    href={resolve('/cv/' + CVFile)}
                    class="btn btn-glass"
                    download
                    aria-label="Download CV for Gareth Powell"
                >
                    Download my CV
                </a>
            </div>
        </div>
    </div>
</section>