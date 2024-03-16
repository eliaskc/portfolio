<script lang="ts">
	import data from '$lib/data.json';
	import Pill from '$lib/Pill.svelte';
	let scroll: number;
</script>

<svelte:window bind:scrollY={scroll} />

<main class="container mx-auto gap-12 md:grid md:grid-cols-12">
	<div class="col-span-2 max-md:hidden">
		<nav class="fixed flex h-screen flex-col justify-center gap-4 font-bricolage-grotesque">
			<a href="#about" class="text-left text-lg">About me</a>
			<a href="#experience" class="text-left text-lg">Experience</a>
			<a href="#education" class="text-left text-lg">Education</a>
			<!-- TODO: Add theme switching button -->
			<!-- TODO: Add light/dark/system theme switching buttons -->
		</nav>
	</div>

	<div class="relative top-48 col-span-7">
		<section id="about" class="mb-16 font-medium">
			<h1 class="z-0 mb-16 !text-6xl font-semibold">
				Hi, I'm Elias - a Software Engineer with a <i class="text-red-500">splash</i> of design.
			</h1>
			{#each data.about.text as paragraph (paragraph)}
				<p class="my-8 text-3xl">{paragraph}</p>
			{/each}
		</section>

		<section id="experience" class="mb-16">
			<h1 class="mb-4">Experience</h1>
			{#each data.experience as exp (exp)}
				<div class="mb-8">
					<h3>{exp.employer} — <span class="italic">{exp.what}</span></h3>
					<p class="italic">{exp.when}</p>
					<p>{exp.description}</p>
					<div class="mt-2 flex gap-2">
						{#each exp.skills as skill (skill)}
							<Pill text={skill.text} category={skill.category}></Pill>
						{/each}
					</div>
				</div>
			{/each}
		</section>

		<section id="education" class="h-96">
			<h1 class="mb-4">Education</h1>
			{#each data.education as edu (edu)}
				<div class="mb-8 flex flex-col gap-2">
					<h3>
						{edu.what} —
						<span class="italic">{edu.when}</span>
					</h3>
					<p>{edu.description}</p>
					<p>Grade average: {edu.grade}/5.0</p>
					<div class="flex flex-wrap gap-2">
						{#each edu.courses as course (course)}
							<Pill text={course} category="course"></Pill>
						{/each}
					</div>
				</div>
			{/each}
		</section>
	</div>

	<aside
		style:transform={`translate3d(0, ${scroll * 0.7}px, 0)`}
		class="relative top-32 col-span-3 flex flex-col gap-4"
	>
		<img
			class="mb-4 aspect-square w-full border-4 border-black object-cover"
			src="elias.png"
			alt="Portrait of me"
		/>
		<div class="flex flex-col">
			<a href={`mailto:${data.about.email}`} class="text-blue-500 hover:underline"
				>{data.about.email}</a
			>
			<a href={data.about.github} class="text-blue-500 hover:underline">github.com/eliaskc</a>
		</div>
		<div class="flex flex-wrap gap-2">
			{#each data.about.skills as skill (skill)}
				<Pill text={skill.text} category={skill.category}></Pill>
			{/each}
		</div>
	</aside>
</main>
