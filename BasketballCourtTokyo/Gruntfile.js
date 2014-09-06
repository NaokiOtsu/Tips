module.exports = function (grunt) {

	// 使用するプラグインを読み込みi(プレビュー用)
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
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
					'app/img/**/*.{png,jpg,gif}',
					'app/css/**/*.css',
					'app/js/**/*.js',
					'app/**/*.html'
				]
			} // watch:livereload
		} // watch

	});

	// プレビュータスク
	grunt.registerTask('serve', [
		'connect',
		'watch'
	]);

	grunt.registerTask('default', [
		
	]);
};
