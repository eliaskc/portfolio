<script lang="ts">
	import experience from '$lib/experience.json';
	import education from '$lib/education.json';
	import about from '$lib/about.json';
	import Pill from '$lib/Pill.svelte';
	import { onMount } from 'svelte';

	let scrollY: number;
	let theme: string;
	let preferredLanguage: 'en' | 'sv' = 'en';
	let windowSize: number;

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

	function autoScroll(node: HTMLElement) {
		let accumulatedScroll = 0;
		let speed = 0.5;
		let direction = 1;
		let maxWidth = 1024;

		if (window.innerWidth > maxWidth) {
			return;
		}

		function scroll() {
			if (node.scrollLeft >= node.scrollWidth - node.clientWidth && direction === 1) {
				direction = -1;
			} else if (node.scrollLeft <= 0 && direction === -1) {
				direction = 1;
			}

			accumulatedScroll += speed * direction;

			if (Math.abs(accumulatedScroll) >= 1) {
				node.scrollLeft += Math.floor(accumulatedScroll);
				accumulatedScroll %= 1;
			}

			window.requestAnimationFrame(scroll);
		}

		scroll();

		return {
			destroy() {}
		};
	}
</script>

<svelte:window bind:scrollY bind:innerWidth={windowSize} />

<main class="container mx-auto grid grid-cols-1 gap-12 p-8 lg:grid-cols-12">
	<div class="max-lg:hidden lg:col-span-2">
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

			<div class="flex justify-center gap-2 text-gray-400 max-lg:hidden dark:text-gray-600">
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

			<div class="flex justify-center gap-2 text-gray-400 max-lg:hidden dark:text-gray-600">
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

	<div
		class="relative flex flex-col gap-y-8 max-lg:row-span-1 max-lg:row-start-2 lg:top-48 lg:col-span-7"
	>
		<section id="about" class="font-medium">
			<h1 class="z-0 mb-16 text-wrap !text-6xl font-semibold">
				{#if preferredLanguage === 'en'}
					Hi, I'm Elias — a Software Engineer with a <i class="text-green-800 dark:text-green-300"
						>hint</i
					> of design
				{:else}
					Hej, jag är Elias — en utvecklare med en <i class="text-green-800 dark:text-green-300"
						>nypa</i
					> design
				{/if}
			</h1>
			{#each about.text[preferredLanguage] as paragraph (paragraph)}
				<p class="my-8 text-3xl">{paragraph}</p>
			{/each}
		</section>
		
        <section id="education">
			<h1 class="mb-4 font-bold">{preferredLanguage === 'en' ? 'Education' : 'Utbildning'}</h1>
			{#each education as edu (edu)}
				<div class="mb-8 flex flex-col gap-2">
					<h3 class="font-semibold">
						{#if edu.link}
							<a href={edu.link} class="text-blue-500 hover:underline dark:text-blue-300">
								{edu.title[preferredLanguage]}
							</a>
						{:else}
							{edu.title[preferredLanguage]}
						{/if}
						— <span class="font-normal italic">{edu.what[preferredLanguage]}</span>
					</h3>
					<p class="italic">{edu.when[preferredLanguage]}</p>
					<p>{edu.description[preferredLanguage]}</p>

					{#if edu.grade}
						{#if preferredLanguage === 'en'}
							<p>Grade average: {edu.grade}</p>
						{:else}
							<p>Betygsnitt: {edu.grade}</p>
						{/if}
					{/if}

					{#if edu.courses && edu.courses.length > 0}
						<div class="flex flex-wrap gap-2">
							{#each edu.courses as courses (courses)}
								<Pill text={courses['en']} category="course"></Pill>
							{/each}
						</div>
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

		<section id="experience">
			<h1 class="mb-4 font-bold">{preferredLanguage === 'en' ? 'Experience' : 'Erfarenhet'}</h1>
			{#each experience as exp (exp)}
				<div class="mb-8">
					<h3 class="font-semibold">
						{#if exp.link}
							<a href={exp.link} class="text-blue-500 hover:underline dark:text-blue-300"
								>{exp.employer}</a
							>
						{:else}
							{exp.employer}
						{/if}
						— <span class="font-normal italic">{exp.what[preferredLanguage]}</span>
					</h3>
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
	</div>

	<aside 
        style:margin-top={windowSize >= 1024 ? `${scrollY * 0.8}px` : ''}
        class="relative flex flex-col gap-4 lg:top-32 lg:col-span-3">
		<div class="flex w-full justify-center">
			<img
				class=" aspect-square w-full border-4 border-blackish object-cover max-lg:mt-8 lg:w-full dark:border-whitish"
				src="elias_320.png"
				srcset="elias_320.png 320w, elias_768.png 768w, elias_1024.png 1024w"
				sizes="(max-width: 320px) 280px, (max-width: 768px) 728px, (max-width: 1024px) 984px"
				alt="Portrait of me"
			/>
		</div>
		<div class="flex flex-col max-md:gap-2">
			<a href={`mailto:${about.email}`} class="text-blue-500 hover:underline dark:text-blue-300"
				>{about.email}</a
			>
			<a href={about.github} class="text-blue-500 hover:underline dark:text-blue-300"
				>github.com/eliaskc</a
			>
		</div>
		<div
			use:autoScroll
			class="flex gap-2 overflow-x-scroll text-nowrap scrollbar-hide max-lg:-mx-8 max-lg:px-8 lg:flex-wrap"
		>
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
