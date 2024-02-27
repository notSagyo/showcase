/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  endOfLine: 'crlf',
  jsxSingleQuote: true,
  printWidth: 100,
  singleQuote: true,
  tabs: false,
  tabWidth: 2,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
