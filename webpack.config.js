const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
  entry: './index',
  output: {    
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: { loader: 'style-loader' },
          use: {
            loader: 'css-loader',
            options: { minimize: true }
          }
        })
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({template: './index.html'}),
	new ExtractTextPlugin('css/styles.css'),
	new OptimizeCssAssetsPlugin({
      assetNameRegExp: /styles\.css/g
    })
  ]
};