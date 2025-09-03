<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '$lib/assets/app.scss';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon}/>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <meta name="description" content="Principal JVM engineer delivering Spring Boot services, PCI-aware architectures, and AWS migrations with measurable outcomes." />
    <link rel="canonical" href="https://cleancode.uk/" />
    <meta property="og:title" content="Java/Kotlin Contractor" />
    <meta property="og:description" content="Spring Boot, Kotlin/Java, PCI, AWS. Outcomes: faster lead time, fewer defects, lower ops cost." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://cleancode.uk/" />
<!--    <meta property="og:image" content="https://your-domain/og/og-home.jpg" />-->
<!--    <meta name="twitter:card" content="summary_large_image" />-->
</svelte:head>

<Header/>

{@render children?.()}


<Footer/>