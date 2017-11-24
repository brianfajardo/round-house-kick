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
            'stage-2',
          ],
          plugins: ['transform-object-rest-spread'],
        },
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
}
