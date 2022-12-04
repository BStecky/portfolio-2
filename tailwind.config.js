/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3f2b96',
        secondary: '#ecc94b',
        accent: '#000000',
        background:'#fafafa',
        dark_primary:'#3f2b96',
        dark_secondary:'#ffffff',
        dark_accent:'#000000',
        dark_background:'#121212',
        // ...
      },
    },
  },
  
  darkMode: "class", 
  
  plugins: [],
}
