'use strict';

module.exports = function(grunt) {
	
	// 使用するプラグインを読み込み
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	// タスクのオプション設定
	grunt.initConfig({

		connect : {
			test : {
				options : {
					port: 9006,
					base : 'app'
				}
			}
		},
		
		watch: {
			livereload: {
				options: {
					livereload: 35729
				},
				files: [ 'app/**/*.html' ]
			},
			scss: {
				files: [ 'scss/**/*.scss' ],
				tasks: ['compass']
			}
		},
		
		compass: {
			compile: {
				options: {
					cssDir: 'app/css',
					sassDir: 'scss',
					outputStyle: 'expanded',
					relativeAssets: false,
					noLineComments: true
				}
			}
		}

	});

	// タスク
	grunt.registerTask('default', 'connect watch livereload tasks', [
		'connect',
		'watch'
	]);
};
