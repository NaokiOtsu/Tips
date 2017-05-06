var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(callback) {
  
  // webpack watch
  var config = require('../config/webpack/');
  config.watch = true;

  gulp.watch('./assets/scss/**/*.scss', ['css']);

  return runSequence('build', 'server', callback)
});