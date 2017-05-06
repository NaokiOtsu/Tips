var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('server', function() {
	var watchFiles = [
		'../public/**/*.js',
		'../public/**/*.css',
		'../public/**/*.html'
	];
	
	gulp.watch(watchFiles).on('change', function() {
		browserSync.reload();
	});
	
	return browserSync({
		server: {
			baseDir: '../public'
		},
		open: false
	});
});