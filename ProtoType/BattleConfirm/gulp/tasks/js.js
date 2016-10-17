var fs            = require('fs');
var path          = require('path');
var gulp          = require('gulp');
var plumber       = require('gulp-plumber');
var webpackStream = require('webpack-stream');

gulp.task('js', function(callback) {
  var config = require('../config/webpack/');

  gulp.src('./assets/js')
    .pipe(plumber())
    .pipe(webpackStream(config))
    .pipe(gulp.dest('./public/js/'))
    .on('end', function() {
      callback();
    });

    if (config.watch) callback();
});