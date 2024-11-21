/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  important: true,
  plugins: [],
  theme: {
    extend: {
      colors: {
        gradient1: {
          step1: '#fdf622',
          step2: '#fc9e89dd',
        },
        gradient2: {
          step1: '#f4fc92dd',
          step2: '#ff9d89bb',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat\\ Variable', 'ui-sans-serif', ...defaultTheme.fontFamily.sans],
        playfair: ['Playfair\\ Display\\ Variable', 'Montserrat\\ Variable', 'ui-serif'],
      },
      gap: {
        xs: '0.25rem',
        sm: '0.5rem',
        lg: '1.25rem',
        xl: '1.75rem',
        '2xl': '3.5rem',
      },
      margin: {
        xs: '0.25rem',
        sm: '0.5rem',
        lg: '1.25rem',
        xl: '1.75rem',
        '2xl': '3.5rem',
      },
      padding: {
        xs: '0.25rem',
        sm: '0.5rem',
        lg: '1.25rem',
        xl: '1.75rem',
        '2xl': '3.5rem',
      },
    },
  },
};
