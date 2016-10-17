var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function(callback) {
  gulp.src('./assets/**/*.scss')
    .pipe(sass({
      'outputStyle': 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9', 'Android >= 2.3', 'ios_saf >= 8'], // サポートブラウザ(https://github.com/postcss/autoprefixer#options)
      cascade: false
    }))
    .pipe(gulp.dest('./public/css/'))
    .on('end', function() {
      callback();
    });
});