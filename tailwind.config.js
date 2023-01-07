/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: [
          '"Quicksand"',
          'sans-serif',
        ]
      },
      backgroundImage:  {
        'yellowwaves': "url('/../public/assets/yellow-waves.svg')",
      },
      colors: {
        primary: '#3f2b96',
        secondary: '#b8a8ff',
        accent: '#000000',
        grey: 'eeeeee',
        background:'#fafafa',
        dark_primary:'#3f2b96',
        dark_secondary:'#121212',
        dark_accent:'#000000',
        dark_background:'#121212',
        // ...
      },
    },
  },
  
  darkMode: "class", 
  
  plugins: [],
}
