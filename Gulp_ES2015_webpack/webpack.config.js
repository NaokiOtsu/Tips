'use strict';

const webpack = require('webpack');
const util = require('gulp-util');

module.exports = {
	entry: {
		index: ['./assets/js/index.js']
	},
	output: {
		path: __dirname + 'public/js,',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
}

