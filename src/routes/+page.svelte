<script lang="ts">
	import data from '$lib/data.json';
	let scroll: number;
</script>

<svelte:window bind:scrollY={scroll} />

<main class="container mx-auto gap-12 md:grid md:grid-cols-12">
	<div class="col-span-2 max-md:hidden">
		<nav class="font-bricolage-grotesque fixed flex h-screen flex-col justify-center gap-4">
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
					<div class="mt-2 flex gap-4">
						{#each exp.skills as skill (skill)}
							<span>{skill}</span>
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
					<div class="flex gap-4">
						{#each edu.courses as course (course)}
							<span>{course}</span>
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
		<div class="flex gap-4">
			<a href={`mailto:${data.about.email}`}>
				<img class="h-8 w-8" src="email.svg" alt="Email icon" />
			</a>
			<a href={data.about.github}>
				<img class="h-8 w-8" src="github.svg" alt="Github link" />
			</a>
		</div>
		<h3 class="text-lg font-semibold">Skills</h3>
		<div>
			{#each data.about.skills.languages as language (language)}
				<div>{language}</div>
			{/each}
			{#each data.about.skills.tools as tool (tool)}
				<div>{tool}</div>
			{/each}
		</div>
	</aside>
</main>
