'use strict';

module.exports = function(grunt) {
	
	// 使用するプラグインを一括で読み込み
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	// タスクのオプション設定
	grunt.initConfig({
		
		connect: {
			livereload: {
				options: {
					port: 9002,
					middleware: function(connect) {
						return [
							require('connect-livereload')({ port: 35729 }),
							connect.static(require('path').resolve('app'))
						]
					}
				}
			}, // connect:server

			dist: {
				options: {
					port: 9001,
					base: 'dist',
					keepalive: true
				}
			}
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
				dest: 'dist'
			}
		}, // useminPrepare

		usemin: {
			html: [
				'dist/**/*.html'
			], // usemin:html
			css: [
				'dist/styles/**/*.css'
			] // usemin:css
		}, // usemin

		filerev: {
			images: {
				src: 'dist/images/**/*.{png,jpg,gif}'
			}, // filerev:images
			styles: {
				src: 'dist/styles/**/*.css'
			}, // filerev:styles
			scripts: {
				src: 'dist/scripts/**/*.js'
			} // filerev:scripts
		}, // filerev

		image: {
			dist: {
				options: {
					pngquant: true,
					optipng: true,
					advpng: true,
					zopflipng: true,
					pngcrush: true,
					pngout: true,
					jpegtran: true,
					jpegRecompress: true,
					jpegoptim: true,
					gifsicle: true,
					svgo: true
				},
				files: [{
					expand: true,
					cwd: 'dist/images',
					src: '**/*.{png,jpg,gif,svg}',
					dest: 'dist/images'
				}]
			} // image:dist
		}, // image

		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'dist',
					src: [
						'index.html'
					],
					dest: 'dist'
				}]
			} // htmlmin:dist
		} // htmlmin

	});

	// プレビュータスク
	grunt.registerTask('serve', 'Launch built-in preview server with LiveReload.', [
		'connect:livereload',
		'watch'
	]);

	// ビルドタスク
	grunt.registerTask('build', 'Build deployable package. (unify & minify, image opzimization, static file revisioning)', [
		'clean:dist',
		'copy:build',
		'image:dist',
		'useminPrepare',
		'concat',
		'cssmin',
		'filerev:images',
		'usemin:css',
		'uglify',
		'filerev:styles',
		'filerev:scripts',
		'usemin:html',
		'htmlmin:dist'
	]);

	// デフォルトのタスク
	grunt.registerTask('default', 'Build deployable package and launch preview server.', [
		'build',
		'connect:dist'
	]);
};
