const gulp       = require('gulp');
const webpack    = require('webpack-stream');
const plumber    = require('gulp-plumber');
const browser    = require('browser-sync');
const sass       = require('gulp-sass');
const autoprefix = require('gulp-autoprefixer');

gulp.task('server', () => {
	browser({
		server: {
			baseDir: 'public'
		},
		open: false
	});
});

gulp.task('sass', () => {
	gulp.src('assets/scss/**/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(autoprefix())
		.pipe(gulp.dest('public/css'));
});

gulp.task('js', () => {
	gulp.src('assets/js/')
		.pipe(plumber())
		.pipe(webpack( require('./webpack.config.js') ))
		.pipe(gulp.dest('public/js'));
});

gulp.task('default', ['server', 'sass', 'js'], () => {
	gulp.watch('public/index.html', browser.reload);
	gulp.watch('assets/scss/**/*.scss', ['sass', browser.reload]);
	gulp.watch('assets/js/**/*.js', ['js', browser.reload]);
});