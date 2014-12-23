'use strict';

module.exports = function(grunt){
	// 読み込むモジュールの設定
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	// 各タスクの設定
	grunt.initConfig({
	
		// Compass
		compass: {
			dist: {
				options: {
					config: 'scss/config.rb'
				}
			}
		},

		// Watch
		watch: {
			// scss
			sass: {
				files: 'scss/**/*.scss',
				tasks: ['compass']
			}
		}

	});

	// gruntコマンドで実行するタスクの設定
	grunt.registerTask('default', ['watch','compass']);
	
};

