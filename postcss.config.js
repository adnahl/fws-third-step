export default {
  plugins: {
    tailwindcss: {
      config: './tailwind.config.js'
    },
    'postcss-import': {},
    'postcss-flexbugs-fixes': {
      bugs: 'flex-shrink'
    },
    autoprefixer: {
      flexbox: 'no-2009'
    },
    'postcss-nested': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'focus-within-pseudo-class': false
      }
    }
  }
}
