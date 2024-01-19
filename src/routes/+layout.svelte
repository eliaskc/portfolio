<script>
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

	:global(html) {
		background-color: theme(colors.gray.100);
		font-family: 'Inter', sans-serif;
		scroll-behavior: smooth;
	}

	:global(h1) {
		font-size: theme(fontSize.6xl) !important;
	}

	:global(h2) {
		font-size: theme(fontSize.3xl) !important;
	}
</style>
