<script lang="ts">
	let scroll: number;

	function fadeInOnScroll(node: HTMLElement) {
		const updateBlur = () => {
			const rect = node.getBoundingClientRect();
			const windowHeight = window.innerHeight || document.documentElement.clientHeight;
			const windowCenter = windowHeight / 2;
			const elementCenter = rect.top + rect.height / 2;
			const distanceFromCenter = Math.abs(windowCenter - elementCenter);
			const visible = rect.top <= windowHeight && rect.bottom >= 0;

			if (visible) {
				const scaleFactor = 2;
				const maxBlur = 5;
				const blurIntensity = Math.min(1, distanceFromCenter / windowCenter / scaleFactor);
				node.style.filter = `blur(${maxBlur * blurIntensity}px)`;
			} else {
				node.style.filter = '';
			}
		};

		const onScroll = () => {
			requestAnimationFrame(updateBlur);
		};

		window.addEventListener('scroll', onScroll);
		updateBlur();

		return {
			destroy() {
				window.removeEventListener('scroll', onScroll);
			}
		};
	}
</script>

<svelte:window bind:scrollY={scroll} />

<main class="container mx-auto mt-16 gap-16 p-4 md:grid md:grid-cols-7">
	<div class="max-md:hidden md:col-span-1">
		<nav class="fixed top-1/2 flex flex-col justify-center gap-4">
			<a href="#about" class="text-left text-lg">About me</a>
			<a href="#experience" class="text-left text-lg">Experience</a>
			<a href="#education" class="text-left text-lg">Education</a>
			<!-- TODO: Add theme switching button -->
			<!-- <button class="border-2 border-black bg-gray-100 px-2 py-1">Switch it up</button> -->
			<!-- TODO: Add light/dark/system theme switching buttons -->
			<!-- <div>
				<button class="border-2 border-black bg-gray-100 px-2 py-1">L</button>
				<button class="border-2 border-black bg-gray-100 px-2 py-1">D</button>
				<button class="border-2 border-black bg-gray-100 px-2 py-1">S</button>
			</div> -->
		</nav>
	</div>

	<div class="relative top-48 col-span-4">
		<h1
			use:fadeInOnScroll
			class="z-0 mb-32 font-['Bricolage_Grotesque'] text-4xl font-semibold lg:text-6xl"
		>
			Hi, I'm Elias - a Software Engineer with a <i class="text-red-500">splash</i> of design.
		</h1>

		<section id="about" class="mb-16 font-medium" use:fadeInOnScroll>
			<h2 class="my-8">
				My goal is to create products that truly make a difference to users. I want to have a
				positive impact, even if it’s something small like making someone’s grocery shopping
				slightly easier.
			</h2>

			<h2 class="my-8">
				I love learning new things and my biggest strength is the speed at which I’m able to do so.
			</h2>

			<h2 class="my-8">
				Born and raised in Gothenburg, I’ve graduated from Chalmers University of Technology with a
				Msc. in Software Engineering. My education has given me a broad range of skills, from data
				science & AI to UI/UX and everything in between.
			</h2>
		</section>

		<section id="experience" class="mb-16 h-96 border-2 border-black"></section>

		<section id="education" class="h-96 border-2 border-blue-700"></section>
	</div>

	<aside
		style:transform={`translate3d(0, ${scroll * 0.7}px, 0)`}
		class="relative top-32 col-span-2 flex flex-col gap-4"
	>
		<img
			class="mb-4 aspect-square w-full border-4 border-black object-cover"
			src="elias.png"
			alt="Portrait of me"
		/>
		<div>
			<h3 class="text-lg font-semibold">Skills</h3>
			<p>python - java - react - figma - ...</p>
		</div>
		<div>
			<h3 class="text-lg font-semibold">Interests</h3>
			<p>gaming - design - football - ...</p>
		</div>
	</aside>
</main>
