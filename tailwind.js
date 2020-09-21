const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    mode: 'layers',
    layers: ['base', 'components', 'utilities'],
    content: ['src/**/*.tsx', 'public/**/*.html'],
  },
  target: 'relaxed',
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  corePlugins: {},
  plugins: [require('@tailwindcss/ui')],
}
