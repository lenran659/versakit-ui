/* eslint-disable @typescript-eslint/no-require-imports */

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}
