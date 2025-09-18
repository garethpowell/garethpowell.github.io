<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '$lib/assets/app.scss';
    import {resolve} from "$app/paths";
	let { children } = $props();
</script>

<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
    <link rel="icon" type="image/png" href={resolve('/favicon-96x96.png')} sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href={resolve('/favicon.svg')} />
    <link rel="shortcut icon" href={resolve('/favicon.ico')} />
    <link rel="apple-touch-icon" sizes="180x180" href={resolve('/apple-touch-icon.png')} />
    <link rel="manifest" href={resolve('/site.webmanifest')} />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <meta name="description" content="Principal JVM engineer delivering Spring Boot services, PCI-aware architectures, and AWS migrations with measurable outcomes." />
    <link rel="canonical" href="https://cleancode.uk/" />
    <meta property="og:title" content="Java/Kotlin Contractor" />
    <meta property="og:description" content="Spring Boot, Kotlin/Java, PCI, AWS. Outcomes: faster lead time, fewer defects, lower ops cost." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://cleancode.uk/" />
</svelte:head>

<Header/>

{@render children?.()}


<Footer/>