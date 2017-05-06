// var path = require('path');
var webpack = require('webpack');
// var BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
	entry: {
		'common': [
			'jquery',
			'backbone',
			'underscore'
		],
		'pc/index': [
			'./assets/js/pc/index.js'
		]
	},
	output: {
		filename: '[name].bundle.js'
	},
	resolve: {
		root: [
			// './bower_components',
			'./node_modules',
			'./assets/js'
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('common', 'common.bundle.js')
	]
	// bower-webpack-plugin使わないときは(.bower.jsonのmainが配列だったらこれだとエラーになる、があまりそれは無さそう？)
	// ,plugins: [
	// 	new webpack.ResolverPlugin(
	// 		new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
	// 	)
	// ]
	//
	// bower-webpack-plugin使うときは
	// plugins: [
	// 	new BowerWebpackPlugin()
	// ]
};