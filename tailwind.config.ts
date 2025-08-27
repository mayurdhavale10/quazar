import type { Config } from 'tailwindcss';

export default {
  // Use system light/dark automatically
  darkMode: 'media',

  // Scan all your source files
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#ffd700',
          yellow2: '#ffcc00',
          navy: '#0d1b2a',
          charcoal: '#14213d',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '16px',
      },
    },
  },
  plugins: [],
} satisfies Config;
