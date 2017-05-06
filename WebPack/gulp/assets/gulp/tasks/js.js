var gulp = require('gulp');
var plumber = require('gulp-plumber');
var webpackStream = require('webpack-stream');
var webpack = require('webpack');

gulp.task('js', function(callback) {
	var config = require('../config/webpack/');
	gulp.src('./js/')
		.pipe(plumber())
		.pipe(webpackStream(config))
		.pipe(gulp.dest('../public/js/'))
		.on('end', function() {
			callback();
		});
		
		if (config.watch) {
			callback();
		}
});