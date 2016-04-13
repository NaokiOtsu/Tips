var fs = require('fs');
var gulp = require('gulp');
var runSequence = require('run-sequence'); // 処理を非同期から、同期処理に変えるプラグイン。

gulp.task('default', function(callback) {
	
	var config = require('../config/webpack/');
	config.watch = true;
	
	return runSequence('js', callback); // 直列で実行したい処理を順番に書いていく
});