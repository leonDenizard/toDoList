/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#f8f9fa',
      },
      fontFamily:{
        'Roboto': ['Roboto', 'sans-serif']
      },
      maxWidth:{
        '80': '80%'
      },
      minHeight:{
        'section': '60vh'
      }
    },
  },
  plugins: [],
}