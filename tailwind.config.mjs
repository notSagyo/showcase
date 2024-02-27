import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        bebas: ['Bebas Neue', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: '360px',
        '-xs': { max: '359px' },
        '-sm': { max: `${parseInt(defaultTheme.screens.sm) - 1}px` },
        '-md': { max: `${parseInt(defaultTheme.screens.md) - 1}px` },
        '-lg': { max: `${parseInt(defaultTheme.screens.lg) - 1}px` },
        '-xl': { max: `${parseInt(defaultTheme.screens.xl) - 1}px` },
        '-2xl': { max: `${parseInt(defaultTheme.screens['2xl']) - 1}px` },
      },
      animation: { 'fade-in-out': 'fadeIn 2000ms forwards ease-in-out' },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '33%': { opacity: 1 },
          '50%': { opacity: 1 },
          '66%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
