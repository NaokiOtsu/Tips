var gulp       = require('gulp');
var postcss    = require('gulp-postcss');
var rename     = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function() {
  return gulp.src('./css/style.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      require('postcss-import'),
      require('postcss-custom-properties'),
      require('postcss-nested'),
      require('postcss-extend'),
      require('autoprefixer'),
      require('cssnano')
    ]))
    .pipe(rename('style.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('./css/**/*.css', ['build']);
});
