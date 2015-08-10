'use strict';

module.exports = function(grunt) {
	
	// 使用するプラグイン
	grunt.loadNpmTasks('grunt-contrib-concat');

	// タスクのオプション設定
	grunt.initConfig({
		concat: {
			files: {
				// 元ファイルの指定。
				src : './js/**/*.js',
				// 出力ファイルの名前・パス指定
				dest: './js/all.js'
			}
		}
	});
	
	// タスク登録
	grunt.registerTask('hoge', ['concat']);
};
