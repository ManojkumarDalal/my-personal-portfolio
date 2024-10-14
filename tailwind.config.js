/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f75023',  // Custom primary color
        secondary: '#eeeee4',  // Custom secondary color
        accent: '#999999',  // Custom accent color
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Custom Roboto font
        jost: ['Jost', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true, // Center the container
        padding: '2rem', // Custom padding on all screens
      },
    },
  },
  plugins: [],
}
