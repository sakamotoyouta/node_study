const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',

  entry: [
    'webpack-hot-middleware/client',
    "./frontend/index",
  ],

  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public/js/`,
    publicPath: '/js/',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
              plugins: ['react-hot-loader/babel'],
            }
          },
          'awesome-typescript-loader',
        ]
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]
};