/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/automation/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ph-black': '#000000',
        'ph-dark-gray': '#111111',
        'ph-whitest-gray': '#F8F9FA', // A very light, almost white gray
        'ph-white': '#FFFFFF',
        'ph-light-gray': '#AAAAAA',
        'ph-accent': '#00BFFF',
        'ph-border': '#333333',
        'ph-translucent-white': 'rgba(255, 255, 255, 0.1)',
        'ph-menu-overlay': 'rgba(0, 0, 0, 1)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
