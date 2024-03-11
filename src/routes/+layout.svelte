<script>
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@500&display=swap');

	:global(html) {
		background-color: #fafafa;
		font-family: 'Bricolage Grotesque';
		scroll-behavior: smooth;
		/* cursor: url('icons8-cursor.svg'), auto; */
	}

	:global(h1) {
		font-size: theme(fontSize.5xl) !important;
	}

	:global(h2) {
		font-size: theme(fontSize.3xl) !important;
	}

	:global(h3) {
		font-size: theme(fontSize.2xl) !important;
	}

	:global(h4) {
		font-size: theme(fontSize.xl) !important;
	}
</style>
