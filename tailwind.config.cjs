/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DARK: '#111b1d',
					NOTSODARK: '#1d2f32',
					MEDIUM: '#558b92',
					NOTSOLIGHT: '#add2d7',
					LIGHT: '#d7e8ea',
				},
				secondary: {
					DARK: '#1e0c0c',
					NOTSODARK: '#3e1e1e',
					MEDIUM: '#ff3f34',
					NOTSOLIGHT: '#F9E5E5',
					LIGHT: '#FCE3E3',
				},
			},
		},
	},
	plugins: [],
};
