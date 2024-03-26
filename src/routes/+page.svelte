<script lang="ts">
	import experience from '$lib/experience.json';
	import education from '$lib/education.json';
	import about from '$lib/about.json';
	import Pill from '$lib/Pill.svelte';
	import { onMount } from 'svelte';

	let scroll: number;
	let theme: string;
	let preferredLanguage: 'en' | 'sv' = 'sv'; // Default to 'en'

	$: if (typeof navigator !== 'undefined') {
		preferredLanguage = navigator.language.startsWith('sv') ? 'sv' : 'en';
	}

	onMount(() => {
		if (typeof window === 'undefined') return;
		theme = localStorage.theme || 'system';
		updateTheme(theme);
	});

	function updateTheme(newTheme: string) {
		if (typeof window === 'undefined') return;
		theme = newTheme;

		switch (newTheme) {
			case 'light':
				document.documentElement.classList.remove('dark');
				localStorage.theme = 'light';
				break;
			case 'dark':
				document.documentElement.classList.add('dark');
				localStorage.theme = 'dark';
				break;
			case 'system':
				localStorage.removeItem('theme');
				if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}
				break;
		}
	}

	function updateLanguage(language: string) {
		preferredLanguage = language as 'en' | 'sv';
	}
</script>

<svelte:window bind:scrollY={scroll} />

<main class="container gap-12 p-4 md:mx-auto md:grid md:grid-cols-12">
	<div class="col-span-2 max-md:hidden">
		<nav
			class="fixed flex h-screen flex-col items-center justify-center gap-4 font-bricolage-grotesque"
		>
			<a href="#about" class="text-left text-lg hover:underline"
				>{preferredLanguage === 'en' ? 'About me' : 'Om mig'}</a
			>
			<a href="#experience" class="text-left text-lg hover:underline"
				>{preferredLanguage === 'en' ? 'Experience' : 'Erfarenhet'}</a
			>
			<a href="#education" class="text-left text-lg hover:underline"
				>{preferredLanguage === 'en' ? 'Education' : 'Utbildning'}</a
			>
			<!-- TODO: Add theme switching button -->

			<!-- <div class="mx-auto h-0.5 w-16 rounded-md bg-gray-300 dark:bg-gray-700"></div> -->

			<div class="justify-centertext-gray-400 flex gap-2 max-md:hidden dark:text-gray-600">
				<button
					class="transition-all duration-75 hover:scale-110 hover:text-gray-800 dark:hover:text-white"
					class:text-gray-600={theme === 'light'}
					aria-label="Toggle light mode"
					on:click={() => updateTheme('light')}
				>
					<span class="material-symbols-outlined text-2xl"> light_mode </span>
				</button>
				<button
					class="transition-all duration-75 hover:scale-110 hover:text-gray-800 dark:hover:text-white
					{theme === 'system' ? 'text-gray-600 dark:text-gray-400' : ''}"
					aria-label="Toggle system theme"
					on:click={() => updateTheme('system')}
				>
					<span class="material-symbols-outlined text-2xl"> computer </span>
				</button>
				<button
					class="transition-all duration-75 hover:scale-110 hover:text-gray-800 dark:hover:text-white"
					class:text-gray-400={theme === 'dark'}
					aria-label="Toggle dark mode"
					on:click={() => updateTheme('dark')}
				>
					<span class="material-symbols-outlined text-2xl"> dark_mode </span>
				</button>
			</div>

			<div class="flex justify-center gap-2 text-gray-400 max-md:hidden dark:text-gray-600">
				<button
					class="transition-all duration-75 hover:scale-110 hover:text-gray-800 dark:hover:text-white
					{preferredLanguage === 'en' ? 'text-gray-600 dark:text-gray-400' : ''}"
					on:click={() => updateLanguage('en')}
				>
					en
				</button>
				<button
					class="transition-all duration-75 hover:scale-110 hover:text-gray-800 dark:hover:text-white
					{preferredLanguage === 'sv' ? 'text-gray-600 dark:text-gray-400' : ''}"
					on:click={() => updateLanguage('sv')}
				>
					sv
				</button>
			</div>
		</nav>
	</div>

	<div class="relative col-span-7 md:top-48">
		<section id="about" class="mb-16 font-medium">
			<h1 class="z-0 mb-16 !text-6xl font-semibold">
				{#if preferredLanguage === 'en'}
					Hi, I'm Elias — a Software Engineer with a <i class="text-red-500">splash</i> of design.
				{:else}
					Hej, jag är Elias — en mjukvaruingenjör med en <i class="text-red-500">droppe</i> design.
				{/if}
			</h1>
			{#each about.text[preferredLanguage] as paragraph (paragraph)}
				<p class="my-8 text-3xl">{paragraph}</p>
			{/each}
		</section>

		<section id="experience" class="mb-16">
			<h1 class="mb-4">{preferredLanguage === 'en' ? 'Experience' : 'Erfarenhet'}</h1>
			{#each experience as exp (exp)}
				<div class="mb-8">
					<h3>{exp.employer} — <span class="italic">{exp.what[preferredLanguage]}</span></h3>
					<p class="italic">{exp.when[preferredLanguage]}</p>
					<p>{exp.description[preferredLanguage]}</p>
					<div class="mt-2 flex flex-wrap gap-2">
						{#each exp.skills as skill (skill)}
							<Pill text={skill.text} category={skill.category}></Pill>
						{/each}
					</div>
				</div>
			{/each}
		</section>

		<section id="education" class="h-96">
			<h1 class="mb-4">{preferredLanguage === 'en' ? 'Education' : 'Utbildning'}</h1>
			{#each education as edu (edu)}
				<div class="mb-8 flex flex-col gap-2">
					<h3>
						{edu.title} — <span class="italic">{edu.what[preferredLanguage]}</span>
					</h3>
					<p class="italic">{edu.when[preferredLanguage]}</p>
					<p>{edu.description[preferredLanguage]}</p>

					{#if edu.grade}
						{#if preferredLanguage === 'en'}
							<p>Grade average: {edu.grade}/5.0</p>
						{:else}
							<p>Betygsnitt: {edu.grade}/5.0</p>
						{/if}
					{/if}

					{#if edu.skills && edu.skills.length > 0}
						<div class="flex flex-wrap gap-2">
							{#each edu.skills as skill (skill)}
								<Pill text={skill.text} category={skill.category}></Pill>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</section>
	</div>

	<aside
		style:transform={`translate3d(0, ${scroll * 0.7}px, 0)`}
		class="relative top-32 col-span-3 flex flex-col gap-4"
	>
		<img
			class="mb-4 aspect-square w-full border-4 border-blackish object-cover dark:border-whitish"
			src="elias_320.png"
			srcset="elias_320.png 320w, elias_768.png 768w, elias_1024.png 1024w"
			sizes="(max-width: 320px) 280px, (max-width: 768px) 728px, (max-width: 1024px) 984px"
			alt="Portrait of me"
		/>
		<div class="flex flex-col">
			<a href={`mailto:${about.email}`} class="text-blue-500 hover:underline dark:text-blue-300"
				>{about.email}</a
			>
			<a href={about.github} class="text-blue-500 hover:underline dark:text-blue-300"
				>github.com/eliaskc</a
			>
		</div>
		<div class="flex flex-wrap gap-2">
			{#each about.skills as skill (skill)}
				<Pill text={skill.text} category={skill.category}></Pill>
			{/each}
		</div>
	</aside>
</main>

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700&display=swap');

	:global(html) {
		/* cursor: url('icons8-cursor.svg'), auto; */
		@apply scroll-smooth bg-whitish font-bricolage-grotesque text-blackish dark:bg-blackish dark:text-whitish;
	}

	:global(h1) {
		@apply text-5xl;
	}

	:global(h2) {
		@apply text-3xl;
	}

	:global(h3) {
		@apply text-2xl;
	}

	:global(h4) {
		@apply text-xl;
	}
</style>
