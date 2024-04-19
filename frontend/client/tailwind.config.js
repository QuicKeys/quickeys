/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        QKGreen: "rgba(var(--QKGreen))",

        BGMain: "rgba(var(--BGMain))",
        BGGradient: "rgba(var(--BGGradient))",
        HeavyMain: "rgba(var(--HeavyMain))",

        MainText: "rgba(var(--MainText))",

      },
    },
    screens: { 
      'xsm': '320px',
      'sm': '600px',
      'nm': '800px',
      'md': '1024px', 
      'lg': '1280px', 
      'xl': '1920px',
      '2xl': '2300px', 
    },
  },
  plugins: [],
}

