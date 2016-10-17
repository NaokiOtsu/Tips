var gulp        = require('gulp');
var connect     = require('gulp-connect-php');
var browserSync = require('browser-sync');

gulp.task('connect-sync', function() {
  connect.server({
    port: 8001,
    base: 'www'
  }, function() {
    browserSync({
      proxy: 'localhost:8001'
    });
  });
});

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('default', ['connect-sync'], function() {
  gulp.watch('./www/**/*.php', ['reload']);
});