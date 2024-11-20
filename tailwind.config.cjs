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
          step1: '#daf139bb',
          step2: '#faa794bb',
        },
        gradient2: {
          step1: '#f4fc92bb',
          step2: '#f9bc9dbb',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat\\ Variable', 'ui-sans-serif', ...defaultTheme.fontFamily.sans],
        playfair: ['Playfair\\ Display\\ Variable', 'Montserrat', 'ui-serif'],
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
