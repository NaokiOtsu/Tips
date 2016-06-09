'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const browser = require('browser-sync');
const plumber = require('gulp-plumber');

gulp.task('server', () => {
	browser({
		server: {
			baseDir: 'public'
		},
		open: false
	});
});

gulp.task('js', () => {
	return gulp.src('./assets/js/')
		.pipe(plumber())
		.pipe(webpack( require('./webpack.config.js') ))
		.pipe(gulp.dest('./public/js'));
});

gulp.task('default', ['server', 'js'], () => {
	gulp.watch('public/index.html', browser.reload);
	gulp.watch('assets/js/**/*.js', ['js', browser.reload]);
});