/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'brand-red': '#cc2128',
				'brand-blue': '#004797',
				'industrial-gray': '#333333',
			}
		},
	},
	plugins: [],
};
