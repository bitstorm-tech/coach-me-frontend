const colors = require('tailwindcss/colors');
const accentColor = colors.red['500'];

const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        accent: accentColor,
        primary: colors.indigo['200'],
        darkest: colors.gray['800'],
        darker: colors.gray['700'],
        dark: colors.gray['600']
      },
      boxShadow: {
        'inner-glow': `inset 0 0 20px ${accentColor}`,
        'inner-glow-s': `inset 0 0 5px ${accentColor}`,
        inner: 'inset 0 1px 2px #0f1422, 0 1px 0 #273147'
      }
    }
  },
  plugins: []
};

module.exports = config;
