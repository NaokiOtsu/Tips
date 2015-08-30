'use strict';

module.exports = function(grunt) {
	
	// 使用するプラグインを読み込み
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// タスクのオプション設定
	grunt.initConfig({

		connect : {
			test : {
				options : {
					port: 9005,
					base : 'app'
				}
			}
		},

		watch: {
			livereload: {
				options: {
					livereload: 35729
				},
				files: [
					'app/**/*.html'
				]
			} // watch:livereload
		} // watch

	});

	// タスク
	grunt.registerTask('default', 'connect watch livereload tasks', [
		'connect',
		'watch'
	]);
};
