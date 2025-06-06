/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({addUtilities}){
      const newUtilities={
        '.no-scrollbar::-webkit-scrollbar':{
          display:'none',
        },
        '.no-scrollbar':{
          '-ms-overflow-style':'none',
          "scrollbar-width":"none"
        }
      
      }
      addUtilities(newUtilities)
    }
  ],
}

