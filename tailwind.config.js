const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      background: {
        light: colors.gray[50],
        default: colors.gray[100],
        dark: colors.gray[200],
      },
      text: {
        light: colors.gray[700],
        default: colors.gray[800],
        dark: colors.gray[900],
      },
      primary: {
        light: colors.blue[700],
        default: colors.blue[800],
        dark: colors.blue[900],
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
