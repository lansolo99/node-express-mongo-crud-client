module.exports = {
    theme: {
      extend: {
      }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/custom-forms')
      ],
    purge: {
      enabled: process.env.NODE_ENV === 'production',
      content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js'
      ]
    },
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true
    }
  }
  