const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
var webpack = require('webpack')


module.exports = {
  entry: path.resolve(__dirname, './js/typescript'),

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './js/src'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],     
  },

  module: {
    rules: [
      { 
        test: /\.(ts|js)x?$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/ 
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  performance: { 
    hints: false 
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.ProvidePlugin({
      "$":"jquery",
      "jQuery":"jquery",
      "window.jQuery":"jquery"
    })
  ]
};
