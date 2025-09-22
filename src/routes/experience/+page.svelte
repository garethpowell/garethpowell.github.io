<svelte:head>
    <title>Experience</title>
    <meta name="description" content="Gareth Powell's Experience"/>
</svelte:head>

<script lang="ts">
    import { resolve } from "$app/paths";
    import SectionBackground from "$lib/components/SectionBackground.svelte";
    import DownloadResume from "$lib/components/DownloadResume.svelte";
</script>

<SectionBackground
        variant="blobs"
        classes="text-white py-5"
        overlay="rgba(0, 0, 0, 0.55)"
>
    <h1 class="display-6 fw-bold lh-sm mb-5">Experience</h1>

    <!-- Mosaic Island -->
    <div class="row g-4 g-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3 position-relative py-4">
        <div class="col-12 col-sm-5 col-lg-4 text-center">
            <a href="https://www.mosaicisland.co.uk" target="_blank" aria-label="Mosaic Island">
                <img
                        src={resolve('/MI_GraphicAsset_v1_Purple.svg')}
                        class="img-fluid d-block mx-auto"
                        alt="Mosaic Island logo"
                        width="300"
                        height="300"
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 576px) 60vw, 300px"
                />
            </a>
        </div>
        <div class="col-12 col-sm-7 col-lg-8">
            <h1 class="display-6 fw-bold lh-sm mb-2">Mosaic Island
                <small class="text-body-secondary">2010 - 2025</small>
            </h1>
            <p class="lead mb-2">Principal Software Engineer</p>
            <p class="lead mb-3">
                End‑to‑end delivery across CRM, finance, integrations, and platform modernisation on AWS.
            </p>
            <ul class="mb-0">
                <li>Built bespoke CRM on JVM (Spring/Hibernate/Tomcat) from MVP to scale</li>
                <li>Verifone payments, comms authoring, rules engine, full‑stack SQL → JSP</li>
                <li>Stabilised finance system with robust integration tests; 10+ years stable</li>
                <li>Modernised delivery: GitHub, TeamCity, Kotlin DSL, Flyway, Testcontainers</li>
                <li>Led data‑centre → AWS migration; VPC/EC2, blue/green, Ansible automation</li>
                <li>Containerisation & Elastic Beanstalk; Terraform; SRA multi‑account governance</li>
                <li>PCI‑validated Secure Card Repository (2014) with Spring Boot + Docker</li>
                <li>Gradle champion; Nexus/CodeArtifact; Sonar → Qodana; Java 9 → 21 currency</li>
                <li>CDC sync to Salesforce (Kotlin, CDK, SQS), paywall integration via SQS/Lambda</li>
                <li>Spring Batch scheduler/monitor + optimised pipelines; Playwright health checks</li>
                <li>Prototyped MCP server using Spring AI integrated with CRM</li>
                <li>Outcome: reliable platform, faster deployments, reduced complexity, stronger security</li>
            </ul>
            <DownloadResume />
        </div>
    </div>

    <hr class="lg-hairline my-2 my-sm-3" />

    <!-- Companies House -->
    <div class="row g-4 g-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3 position-relative py-4">
        <div class="col-12 col-sm-5 col-lg-4 text-center">
            <a href="https://www.gov.uk/government/organisations/companies-house" target="_blank" aria-label="Companies House">
                <img
                        src={resolve('/ch_logo.jpg')}
                        class="img-fluid d-block mx-auto"
                        alt="Companies House logo"
                        width="300"
                        height="300"
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 576px) 60vw, 300px"
                />
            </a>
        </div>
        <div class="col-12 col-sm-7 col-lg-8">
            <h1 class="display-6 fw-bold lh-sm mb-2">Companies House
                <small class="text-body-secondary">2006 - 2010</small>
            </h1>
            <p class="lead mb-2">Senior Software Engineer</p>
            <p class="lead mb-3">Core contributor to CHIPS (STEM replacement) on WebLogic/Java/Oracle.</p>
            <ul class="mb-0">
                <li>Delivered Insolvency & Liquidation processing; corrected legacy design issues</li>
                <li>Delivered Companies Act 2006 changes with BAs/QA to ensure compliance</li>
                <li>Mentored juniors; improved productivity and code quality</li>
                <li>Supported recruitment via CV screening and interviews</li>
                <li>Championed agile practices across the organisation</li>
            </ul>
            <DownloadResume />
        </div>
    </div>

    <hr class="lg-hairline my-2 my-sm-3" />

    <!-- LocaVista / BlueFinger -->
    <div class="row g-4 g-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3 position-relative py-4">
        <div class="col-12 col-sm-5 col-lg-4 text-center"></div>
    <div class="col-12 col-sm-7 col-lg-8">
        <div class="col-12">
            <h1 class="display-6 fw-bold lh-sm mb-2">LocaVista/BlueFinger
                <small class="text-body-secondary">1999 - 2006</small>
            </h1>
            <p class="lead mb-2">Senior Software Engineer</p>
            <p class="lead mb-3">Backend engineer for vehicle telematics/tracking in small cross‑functional teams.</p>
            <ul class="mb-0">
                <li>Championed Java/J2EE; early Spring & Hibernate adoption</li>
                <li>Built GPRS comms server integrating with Vodafone SMS network</li>
                <li>Co‑developed XML‑RPC Java app and ColdFusion asset tracking web app</li>
                <li>Administered Oracle & PostgreSQL databases</li>
                <li>Retained post‑acquisition; continued product development</li>
            </ul>
            <DownloadResume />
        </div>
    </div>
    </div>
</SectionBackground>
