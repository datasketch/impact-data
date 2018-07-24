const common = require('./webpack.common')
const merge = require('webpack-merge')
const path = require('path')

function resolve (dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: resolve('docs'),
    port: 5000,
    publicPath: '/',
    stats: 'errors-only'
  }
})
