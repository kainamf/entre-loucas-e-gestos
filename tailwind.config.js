/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        verde: '#a8b098',
        bege: {
          900: '#a68f7e',
          700: '#bfb2a8',
          500: '#c3b2a1',
          300: '#c8bfb8',
          100: '#d7c8c0',
        },
      },
    },
  },
  plugins: [],
};
