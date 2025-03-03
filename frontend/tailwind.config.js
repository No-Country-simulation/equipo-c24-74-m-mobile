/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily:{
				// fuente predeterminada Roboto
				sans: ['Roboto', 'sans-serif'],
				// fuente Work-Sans: medium = 500, semi-bold= 600, semi-bold = 600 Italic
				workSans: ['Work Sans', 'sans-serif'],
				// Fuente Roboto: normal = 400, medium = 500
				roboto: ['Roboto', 'sans-serif']
			},

			colors: {
				// personalizar colores ejm:
				// 'nombre-del-color': '#243cff'

				primary: {
					50: "#eef2ff",
					100: "#d0d9ff",
					200: "#a6b7ff",
					300: "#7a96ff",
					400: "#4e75ff",
					500: "#2154ff",
					600: "#1a4be6",
					700: "#153ea6",
					800: "#102c7a",
					900: "#0c1e4c",
				},
				secondary: {
					/*paleta amarilla*/
					50: "#fcf6e7",
					100: "#f6e2b3",
					200: "#f2d58f",
					300: "#ecc15c",
					400: "#e8b53c",
					500: "#e2a30b",
					600: "#ce940a",
					700: "#a07408",
					800: "#7c5a06",
					900: "#5f4405",
				},
				title: {
					/*paleta negra para los textos */ 
					50: "#e8e8e8",
					100: "#b9b9b8",
					200: "#979796",
					300: "#686866",
					400: "#4a4a49",
					500: "#1d1d1b",
					600: "#1a1a19",
					700: "#151513",
					800: "#10100f",
					900: "#0c0c0b",
				},
			},

			screens: {
				mobile: {'max':"22.5rem"},
				tablet: "46.5rem",
				desktop: "90rem",
			},

			spacing: {
				// espaciado como lo es Ancho, alto, padding, margin.. ejm
				// '42': '170px'
			},
		},
	},
	plugins: [],
};
