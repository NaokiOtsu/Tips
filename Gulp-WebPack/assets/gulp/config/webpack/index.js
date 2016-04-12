var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
	entry: {
		common: ['jquery']
	},
	output: {
		filename: '[name]/bundle.js'
	},
	resolve: {
		root: ['./bower_components']
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery'
		}),
		new BowerWebpackPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'common.js',
			minChunks: 10
		})
	]
};