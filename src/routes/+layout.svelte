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
		background-color: #fafafa;
		scroll-behavior: smooth;
		font-family: 'Bricolage Grotesque', sans-serif;
		color: #212427;
		/* cursor: url('icons8-cursor.svg'), auto; */
	}

	:global(h1) {
		font-family: 'Bricolage Grotesque';
		font-size: theme(fontSize.5xl) !important;
	}

	:global(h2) {
		font-family: 'Bricolage Grotesque';
		font-size: theme(fontSize.3xl) !important;
	}

	:global(h3) {
		font-family: 'Bricolage Grotesque';
		font-size: theme(fontSize.2xl) !important;
	}

	:global(h4) {
		font-family: 'Bricolage Grotesque';
		font-size: theme(fontSize.xl) !important;
	}
</style>
