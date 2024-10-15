/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/@takasqr/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        text: {
          light: '#1f2937', // gray-800
          DEFAULT: '#1f2937',
          dark: '#1f2937'
        },
        primary: {
          light: '#6366f1',
          DEFAULT: '#6366f1',
          dark: '#6366f1',
        },
        primaryVia: {
          light: '#29070d',
          DEFAULT: '#a855f7',
          dark: '#a855f7',
        },
        primaryTo: {
          light: '#29070d',
          DEFAULT: '#ec4899',
          dark: '#ec4899',
        },
        secondary: {
          light: '#6366f1',
          DEFAULT: '#6366f1',
          dark: '#0e7490',
        },
        secondaryVia: {
          light: '#29070d',
          DEFAULT: '#a855f7',
          dark: '#0e7490',
        },
        secondaryTo: {
          light: '#29070d',
          DEFAULT: '#ec4899',
          dark: '#0e7490',
        },
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        background: {
          light: '#29070d',
          DEFAULT: '#ec4899',
          dark: '#0e7490',
        },
        surface: {
          light: '#29070d',
          DEFAULT: '#ec4899',
          dark: '#0e7490',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
