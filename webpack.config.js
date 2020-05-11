const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve('./dist/')
  },
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    hot: true,
    open: true,
    port: 8617
  }
}