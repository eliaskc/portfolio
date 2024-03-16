<script>
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@500&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

	:global(html) {
		/* cursor: url('icons8-cursor.svg'), auto; */
		@apply scroll-smooth bg-slate-100 font-bricolage-grotesque text-gray-900;
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
