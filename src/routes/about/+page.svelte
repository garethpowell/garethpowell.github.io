<svelte:head>
    <title>About</title>
    <meta name="description" content="About Clean Code Solutions & Gareth Powell"/>
</svelte:head>

<script lang="ts">
    let CVFile = "Gareth_Powell_CV_2025.pdf";
    import {resolve} from "$app/paths";
</script>

<div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-4">
            <img src="gareth_powell.png" class="d-block mx-lg-auto img-fluid rounded mx-auto d-block"
                     alt="Gareth Powell" width="300" loading="lazy">
        </div>
        <div class="col-lg-8">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">About Clean Code Solutions</h1>
            <p class="lead">
                Gareth (Gaz) Powell — Principal Software Engineer specialising in JVM ecosystems and secure,
                regulated environments. I lead design and delivery end‑to‑end: data, APIs, batch, UI, and
                infrastructure, with a pragmatic and security‑first approach.

                I champion clean code, static analysis, automation, and measurable outcomes. I’ve modernised
                legacy estates, driven cloud migrations, and instituted robust CI/CD with quality gates.
            </p>
            <br/>
            <h2 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Education</h2>
            <p class="lead">
                Lancaster University
            </p>
            <p class="lead">
                — BSc Computer Science with Software Engineering (1999)
            </p>
            <p>
                <a href={`/cv/ + ${CVFile}`} class="btn btn-info">Download my CV</a>
            </p>
        </div>
    </div>
</div>