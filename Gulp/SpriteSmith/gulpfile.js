var gulp        = require('gulp');
var sass        = require('gulp-sass');
var spritesmith = require('gulp.spritesmith');

gulp.task('sass', function() {
	gulp.src('assets/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/css'));
});

gulp.task('sprite', function() {
	var spriteData = gulp.src('assets/img/hoge1/*.png').pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: '_sprite.scss',
		imgPath: '../img/sprite.png',
		cssFormat: 'scss',
		cssVarMap: function(sprite) {
			sprite.name = 'sprite-' + sprite.name;
		}
	}));
	spriteData.img.pipe(gulp.dest('public/img/'));
	spriteData.css.pipe(gulp.dest('assets/scss'));
});

