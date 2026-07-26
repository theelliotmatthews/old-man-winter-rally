<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import CourseChooser from '$lib/components/CourseChooser.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';
	import { courses, site } from '$lib/data/content';
</script>

<svelte:head>
	<title>Courses · {site.name}</title>
</svelte:head>

<PageHero
	eyebrow="Courses"
	title="Pick the distance that matches your winter."
	lead={`${courses.length} ways to join the festival: bike, run, combo, and a free kids race.`}
/>

<CourseChooser />
<FinalCta />
