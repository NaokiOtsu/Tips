var gulp               = require('gulp');
var browserSync        = require('browser-sync');
var sass               = require('gulp-sass');
var autoprefixer       = require('gulp-autoprefixer');
var webpack            = require('webpack-stream');

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: 'public/'
		}
	});
});

gulp.task('sass', function() {
	gulp.src('assets/css/**/*.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('public/css/'));
});

gulp.task('js', function() {
	return gulp.src('assets/js/main.js')
		.pipe( webpack( require('./webpack.config.js') ) )
		.pipe(gulp.dest('public/js/'));
});

gulp.task('default', ['browserSync'], function() {
	gulp.watch('assets/css/**/*.scss', ['sass']);
	gulp.watch('assets/js/**/*.js', ['js']);
});