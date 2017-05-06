var gulp = require('gulp');
var browserSync = require('browser-sync');
var connect = require('gulp-connect-php');

gulp.task('server', function() {
	connect.server({
		port: 3000,
		base: '../public'
	}, function() {
		browserSync({
			proxy: 'localhost:3000'
		});
	});
	
	var watchFiles = [
		'../public/**/*.js',
		'../public/**/*.css',
		'../public/**/*.html',
		'../public/**/*.php'
	];
	
	gulp.watch(watchFiles).on('change', function() {
		browserSync.reload();
	});
});

gulp.task('default', ['server']);
