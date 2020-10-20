module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/components/**/*.jsx',
      'src/layout/**/*.jsx',
      'src/pages/**/*.jsx',
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
