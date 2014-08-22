'use strict';

module.exports = function (grunt) {
	
	// 使用するプラグインを読み込みi(プレビュー用)
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	// 使用するプラグインを読み込みi(ビルド用)
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-usemin');
	
	// タスクのオプション設定
	grunt.initConfig({
		
		connect: {
			server: {
				options: {
					port: 9001,
					middleware: function(connect){
						return [
							require('connect-livereload')({ port: 35729 }),
							connect.static(require('path').resolve('app'))
						]
					}
				}
			} // connect:server
		}, // connect

		watch: {
			livereload: {
				options: {
					livereload: 35729
				},
				files: [
					'app/images/**/*.{png,jpg,gif}',
					'app/styles/**/*.css',
					'app/scripts/**/*.js',
					'app/**/*.html'
				]
			} // watch:livereload
		}, // watch

		clean: {
			dist: {
				files: [{
					dot: true,
					src: ['dist']
				}]
			} // clean:dist
		}, // clean

		copy: {
			build: {
				files: [{
					expand: true,
					dot: true,
					cwd: 'app',
					dest: 'dist',
					src: [
						'images/**/*.{png,jpg,gif}',
						'**/*.html'
					]
				}]
			} // copy:build
		}, // copy

		useminPrepare: {
			html: 'app/index.html',
			options: {
				dest: 'dest'
			}
		}, // useminPrepare

		usemin: {
			html: [
				'dist/**/*.html'
			] // usemin:html
		} // usemin
	});

	// プレビュータスク
	grunt.registerTask('serve', [
		'connect',
		'watch'
	]);

	// ビルドタスク
	grunt.registerTask('build', [
		'clean:dist',
		'copy:build',
		'useminPrepare',
		'concat',
		'cssmin',
		'uglify',
		'usemin'
	]);

	// デフォルトのタスク
	grunt.registerTask('default', function(){
		grunt.log.write('Grunt vs Gulp').ok();
	});
};
