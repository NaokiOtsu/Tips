'use strict';

module.exports = function(grunt) {
	
	// 使用するプラグイン
	grunt.loadNpmTasks('grunt-contrib-concat');

	// タスクのオプション設定
	grunt.initConfig({
		concat: {
			files: {
				// 元ファイルの指定。
				src : './css/**/*.css',
				// 出力ファイルの名前・パス指定
				dest: './css/all.css'
			}
		}
	});
	
	// タスク登録
	grunt.registerTask('hoge', ['concat']);
};
