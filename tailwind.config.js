/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        colorPrimary : '#2C4A75',
        
        gradientPrimary: 'linear-gradient(108deg, #6A5538 2%, #BC975E 35%, #D9BE85 45%, #E7D491 56%, #C5A76C 67%, #BC975E 78%, #6A5538 100%)',
        colorBgVarient: '#1C2F4B',
        transparentBgColor: 'rgba(255, 255, 255, 0.15)',

      }
    },
  },
  plugins: [],
}

