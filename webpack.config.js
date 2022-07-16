const path = require('path')

module.exports = {
  // can be production later idk the diff
  mode: 'development',

  // raw file to be bundled
  entry: './src/index.js',

  // output bundled file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // bundles on save
  watch: true
}