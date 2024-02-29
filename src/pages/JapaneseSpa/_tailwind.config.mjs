import { merge } from 'lodash-es';
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindConfig from '../../../tailwind.config.mjs';

/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: { ...defaultTheme.screens, '2xl': '1400px' },
      },
      fontSize: {
        ...Object.fromEntries(
          Object.entries(defaultTheme.fontSize).map(([key, value]) => [key, [value[0], '1.5']]),
        ),
      },
    },
  },
};

export default merge(config, tailwindConfig);
