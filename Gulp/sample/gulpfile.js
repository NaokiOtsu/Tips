var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var frontnote = require('gulp-frontnote');
var uglify = require('gulp-uglify');
var browser = require('browser-sync');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');

gulp.task('imageMin', function() {
	gulp.src('app/img/*.jpg')
		.pipe(imagemin())
		.pipe(gulp.dest('app/img/min/'));
});

gulp.task('server', function () {
	browser({
		server: {
			baseDir: 'app'
		}
	})
});

gulp.task('sass', function() {
	gulp.src('dev/scss/**/*.scss')
		.pipe(plumber())
		.pipe(frontnote({
			css: '../app/css/style.css',
			css: '../app/css/style1.css'
		}))
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('app/css'))
		.pipe(browser.reload({ stream: true }));
});

gulp.task('js', function() {
	gulp.src(['dev/js/**/*.js', '!js/min/**/*.js'])
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('app/js'))
		.pipe(browser.reload({ stream: true }));
});

gulp.task('default', ['server'], function() {
	gulp.watch('app/**/*.html', function() {
		browser.reload();
	});
	gulp.watch(['dev/js/**/*.js'],['js']);
	gulp.watch(['dev/scss/**/*.scss'],['sass']);
});
