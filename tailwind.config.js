/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gerdau: {
          blue: '#004C97',
          red: '#E31837',
          gray: '#58595B',
          'blue-light': '#0060BC',
          'blue-dark': '#003A74',
          yellow: '#FFD700',
        },
      },
    },
  },
  plugins: [],
};