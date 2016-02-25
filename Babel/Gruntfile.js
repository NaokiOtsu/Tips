module.exports = function(grunt){
	'use strict';
	
	grunt.initConfig({
	 babel: {
		 options: {
		 	presets: ['babel-preset-es2015']
		 },
		 dist: {
			 files: {
			 	'script-es5-grunt.js': 'script.js'
			 }
		 }
	 }
	});
	
	grunt.loadNpmTasks('grunt-babel');
	grunt.registerTask('default', ['babel']);
};

