/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  important: true,
  plugins: [],
  theme: {
    extend: {
      colors: {
        green: {
          ...defaultTheme.colors.green,
          900: '#001e1e',
        },
        red: {
          ...defaultTheme.colors.orange,
          900: '#3f1e1e',
        },
        orange: '#fb544d',
      },
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
        playfair: ['Playfair Display', 'Montserrat', ...defaultTheme.fontFamily.serif],
      },
    },
  },
};
