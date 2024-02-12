<script lang="ts">
	let scroll: number = 0;

	function blurOnScroll(element: HTMLElement, newScroll: number) {
		updateBlur(element, scroll);

		return {
			update(newScroll: number) {
				updateBlur(element, newScroll);
			}
		};
	}

	function updateBlur(element: HTMLElement, currentScroll: number) {
		let elementRect = element.getBoundingClientRect();
		const viewportHeight = window.innerHeight;
		const viewportCenter = viewportHeight / 2;

		let elementCenter = elementRect.top + elementRect.height / 2;

		let distance = elementCenter - viewportCenter;
		if (distance < 0) {
			element.style.filter = 'none';
		} else {
			const maxDistance = 500;
			const maxBlur = 3;

			let blurAmount = Math.min(Math.pow(distance / maxDistance, 2) * maxBlur, maxBlur);
			element.style.filter = `blur(${blurAmount}px)`;
		}
	}
</script>

<svelte:window bind:scrollY={scroll} />

<main class="container mx-auto gap-12 md:grid md:grid-cols-12">
	<div class="max-md:hidden md:col-span-2">
		<nav class="fixed flex h-screen flex-col justify-center gap-4">
			<a href="#about" class="text-left text-lg">About me</a>
			<a href="#experience" class="text-left text-lg">Experience</a>
			<a href="#education" class="text-left text-lg">Education</a>
			<!-- TODO: Add theme switching button -->
			<!-- TODO: Add light/dark/system theme switching buttons -->
		</nav>
	</div>

	<div class="relative top-48 col-span-7">
		<h1 class="z-0 mb-32 text-4xl font-semibold lg:text-6xl">
			Hi, I'm Elias - a Software Engineer with a <i class="text-red-500">splash</i> of design.
		</h1>

		<section id="about" class="mb-16 font-medium">
			<h2 class="my-8" use:blurOnScroll={scroll}>
				My goal is to create products that truly make a difference to users. I want to have a
				positive impact, even if it’s something small like making someone’s grocery shopping
				slightly easier.
			</h2>

			<h2 class="my-8" use:blurOnScroll={scroll}>
				I love learning new things and my biggest strength is the speed at which I’m able to do so.
			</h2>

			<h2 class="my-8" use:blurOnScroll={scroll}>
				Born and raised in Gothenburg, I’ve graduated from Chalmers University of Technology with a
				Msc. in Software Engineering. My education has given me a broad range of skills, from data
				science & AI to UI/UX and everything in between.
			</h2>
		</section>

		<section id="experience" class="mb-16 font-medium">
			<h2 class="my-8" use:blurOnScroll={scroll}>
				My professional journey began as a Junior Developer at InnovateTech, where I was immersed in
				the world of software development, working on a variety of projects from web applications to
				mobile apps. This experience laid the foundation of my coding skills and taught me the
				importance of teamwork and agile methodologies.
			</h2>

			<h2 class="my-8" use:blurOnScroll={scroll}>
				Progressing to a Software Engineer role at TechSolutions, I spearheaded the development of a
				groundbreaking project management tool, leading a small team and coordinating closely with
				stakeholders to ensure the product met its ambitious goals. This role honed my leadership
				skills and deepened my technical expertise, particularly in cloud computing and scalable
				architectures.
			</h2>

			<h2 class="my-8" use:blurOnScroll={scroll}>
				Currently, as a Senior Developer at CreativeDesigns, I am blending my passion for technology
				with creativity, working at the intersection of software engineering and digital design.
				This unique position allows me to innovate in user experience and interface design, pushing
				the boundaries of what's possible in digital products and services.
			</h2>
		</section>

		<section id="education" class="mb-16 font-medium">
			<h2 class="my-8" use:blurOnScroll={scroll}>
				My educational journey started at the Royal Institute of Technology, where I earned my
				Bachelor's degree in Information Technology. The rigorous program provided me with a solid
				foundation in computer science, mathematics, and the principles of software development.
			</h2>

			<h2 class="my-8" use:blurOnScroll={scroll}>
				Pursuing further specialization, I obtained a Master's degree in Software Engineering from
				Chalmers University of Technology. My thesis focused on the application of machine learning
				algorithms in predictive modeling, which has since been published in a renowned scientific
				journal.
			</h2>

			<h2 class="my-8" use:blurOnScroll={scroll}>
				In addition to my formal education, I've completed several professional certifications,
				including Certified ScrumMaster (CSM) and AWS Certified Solutions Architect, which have
				supplemented my skills in project management and cloud services, respectively.
			</h2>
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
