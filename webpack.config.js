const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlPluginRemove = require('html-webpack-plugin-remove');

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
    new HtmlWebpackPlugin({
		template: './index.html',
		minify   : {
			html5                          : true,
			collapseWhitespace             : true,
			minifyCSS                      : true,
			minifyJS                       : true,
			minifyURLs                     : false,
			removeAttributeQuotes          : true,
			removeComments                 : true,
			removeEmptyAttributes          : true,
			removeOptionalTags             : true,
			removeRedundantAttributes      : true,
			removeScriptTypeAttributes     : true,
			removeStyleLinkTypeAttributese : true,
			useShortDoctype                : true
  }
		}),
	new ExtractTextPlugin('css/styles.css'),
	new OptimizeCssAssetsPlugin({
      assetNameRegExp: /styles\.css/g
    }),
	new HtmlPluginRemove(/<link rel[^>]*href="[^>]*[^>]*"[^>]*>/ig)
  ]
};