/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: { 
      'xsm': '320px',
      'sm': '600px',
      'nm': '800px',
      'md': '1024px', 
      'lg': '1280px', 
      'xl': '1920px', 
    },
  },
  plugins: [],
}

