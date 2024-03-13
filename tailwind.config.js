/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		// add font family for Instrument Serif and Bricolage Grotesque
		extend: {
			fontFamily: {
				'instrument-serif': ['Instrument Serif', 'serif'],
				'bricolage-grotesque': ['Bricolage Grotesque', 'sans-serif']
			}
		}
	},
	plugins: []
};
