/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/automation/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ph-dark': '#000000',
        'ph-dark-gray': '#111111',
        'ph-light-gray': '#AAAAAA',
        'ph-accent': '#00BFFF',
        'ph-border': '#333333',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
