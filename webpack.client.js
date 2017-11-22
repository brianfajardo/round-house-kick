const path = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const clientConfig = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
}

module.exports = merge(commonConfig, clientConfig)
