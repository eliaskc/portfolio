<script>
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

	:global(html) {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: theme(colors.gray.100);
		font-family: 'Inter', sans-serif;
	}

	:global(h1) {
		font-size: theme(fontSize.5xl) !important;
	}

	:global(h2) {
		font-size: theme(fontSize.3xl) !important;
	}
</style>
