'use strict';

module.exports = function(grunt) {
	
	// 使用するプラグイン
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// タスクのオプション設定
	grunt.initConfig({
		cssmin : {
			compress: {
				files: {
					'./css/min.css': ['css/boss_mission.css']
				}
			}
		}
	});
	
	// タスク登録
	grunt.registerTask('hoge', ['cssmin']);
};
