var fs = require('fs');
var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(callback) {
	
	var config = require('../config/webpack/');
	config.watch = true;
	
	return runSequence('js', callback);
});