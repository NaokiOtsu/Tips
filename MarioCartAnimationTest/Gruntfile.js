module.exports = function (grunt) {

	// $B;HMQ$9$k%W%i%0%$%s$rFI$_9~$_(Bi($B%W%l%S%e!<MQ(B)
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

	// $B%W%l%S%e!<%?%9%/(B
	grunt.registerTask('serve', [
		'connect',
		'watch'
	]);

	grunt.registerTask('default', [
		
	]);
};
