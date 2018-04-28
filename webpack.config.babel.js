const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',

  entry: "./app/index.tsx",

  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public/js/`,
    publicPath: '/js/',
  },

  module: {
    rules: [
      {
        test: /\.ts.?$/,
        exclude: /node_modules/,
        use: [
          {loader: 'awesome-typescript-loader'}
        ]
      },
      {
        enforce: 'post',
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              'es2015',
              'react',
            ]
          }
        }]
      }
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },

  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },

  devServer: {
    contentBase: `${__dirname}/public/`,
    watchContentBase: true,
    open: true,
    port: 3000,
  }
};