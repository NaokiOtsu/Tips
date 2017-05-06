var gulp        = require('gulp');
var connect     = require('gulp-connect-php');
var browserSync = require('browser-sync').create();

gulp.task('connect-sync', function() {
  connect.server({}, function() {
    browserSync.init({
      proxy: '127.0.0.1:8000'
    });
  });

  gulp.watch(['./*.php', './*.css', './*.js']).on('change', browserSync.reload);
});

gulp.task('default', ['connect-sync']);