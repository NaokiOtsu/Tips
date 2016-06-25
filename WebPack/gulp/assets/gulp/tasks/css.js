var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function(callback) {
	gulp.src('./scss/**/*.scss')
		.pipe(sass({
			'outputStyle': 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			brower: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('../public/css/'))
		.on('end', function() {
			callback();
		});
});