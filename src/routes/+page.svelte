<header class="fixed left-1/2 top-0 -translate-x-1/2 py-8">
	<button class="mx-2 border-2 border-black bg-gray-100 px-2 py-1">Switch it up</button>
	<button class="mx-2 border-2 border-black bg-gray-100 px-2 py-1">Dark mode</button>
</header>

<main class="container mt-16 grid max-h-[calc(100dvh-3rem)] w-full grid-cols-12 gap-4 p-8">
	<nav class="fixed top-1/2 col-start-1 col-end-3 flex flex-col justify-center gap-4">
		<button class="text-left text-lg">About me</button>
		<button class="text-left text-lg">Experience</button>
		<button class="text-left text-lg">Education</button>
	</nav>

	<container class="col-start-3 col-end-10 flex flex-col items-start justify-center gap-16">
		<section id="about" class="flex flex-col gap-4">
			<h1>Hi, I'm Elias - a Software Engineer with a <i>splash</i> of design.</h1>

			<h2>
				My goal is to create products that truly make a difference to users. I want to have a
				positive impact, even if it’s something small like making someone’s grocery shopping
				slightly easier.
			</h2>

			<h2>
				I love learning new things and believe my biggest strength is the speed at which I’m able to
				do so.
			</h2>

			<h2>
				Born and raised in Gothenburg, I’ve graduated from Chalmers University of Technology with a
				Msc. in Software Engineering. My education has given me a broad range of skills, from data
				science & AI to UI/UX and everything in between.
			</h2>
		</section>

		<section id="experience"></section>

		<section id="education"></section>
	</container>

	<aside class="col-start-10 col-end-13 flex flex-col justify-center">
		<img
			class="mb-4 h-96 w-full border-4 border-black object-cover"
			src="elias.png"
			alt="Portrait of me"
		/>
		<h3 class="text-lg font-semibold">Skills</h3>
		<p>python - java - react - figma - ...</p>
	</aside>
</main>
