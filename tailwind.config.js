/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0d1117',
        primary: '#f97316',
        secondary: '#fbbf24',
      },
    },
  },
  plugins: [],
};
