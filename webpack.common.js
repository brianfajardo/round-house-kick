module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        options: {
          presets: [
            ['env', { targets: { browsers: ['last 2 versions'] } }],
            'react',
          ],
        },
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
}
