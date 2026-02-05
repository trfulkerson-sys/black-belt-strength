/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0a0e27',
        'brand-red': '#dc2626',
        'brand-dark-red': '#7f1d1d',
        'brand-silver': '#e5e7eb',
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
