var path = require('path');
var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
	entry: {
		common: ['jquery'],
		index: ['index']
	},
	output: {
		filename: '[name].bundle.js'
	},
	resolve: {
		root: [
			path.resolve('./bower_components'),
			path.resolve('./js')
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery'
		}),
		new BowerWebpackPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'common.bundle.js',
			minChunks: 10
		})
	]
};