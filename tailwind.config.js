const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        background: colors.coolGray[50],
        text: {
          default: colors.gray[800],
          lighter: colors.gray[500],
        },
        primary: {
          default: colors.blue[800],
          lighter: colors.blue[600],
        },
        secondary: {
          default: colors.lime[900],
          lighter: colors.lime[700],
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.default'),
              '&:hover': {
                color: theme('colors.primary.lighter'),
              },
            },
            code: {
              color: theme('colors.text.default'),
            },
            'code::before': {
              content: 'unset',
            },
            'code::after': {
              content: 'unset',
            },
            'a code': {
              color: 'unset',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
