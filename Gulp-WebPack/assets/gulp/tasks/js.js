var fs = require('fs');
var gulp = require('gulp');
var webpackStream = require('webpack-stream');

gulp.task('js', function() {
	var config = require('../config/webpack/');
	
	var devicies = ['pc', 'sp'];
	
	devicies.forEach(function(device) {
		
		var jsDir = './js/entries/' + device + '/';
		
		if (!fs.existsSync(jsDir)) {
			return;
		}
		
		var dirs = fs.readdirSync(jsDir);
		dirs.forEach(function(dir) {
			
			var path = jsDir + dir + '/index.js';
			if (fs.existsSync(path)) {
				config.entry[device + '/' + dir] = path;
				return;
			}
		});
	});
	
	gulp.src('./js/')
		.pipe(webpackStream(config))
		.pipe(gulp.dest('../public/build/'));
});