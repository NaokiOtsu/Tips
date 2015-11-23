module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'main.css': 'main.scss'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['sass']);
}
