/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-black': '#1a1a1a',
        'brand-dark-gray': '#2d2d2d',
        'brand-red': '#dc2626',
        'brand-dark-red': '#7f1d1d',
        'brand-silver': '#f5f5f5',
        'brand-gray': '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sohne', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
