/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./views/**/*.edge"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			colors: {
				orangeMain: "#ff5a3e",
				darkMain: "#22293d",
			},
		},
	},
	plugins: [],
};
