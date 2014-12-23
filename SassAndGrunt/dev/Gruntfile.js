'use strict';

module.exports = function(grunt){
	
	// grunt load tasks
	grunt.loadNpmTasks('grunt-este-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	
	// grunt init config
	grunt.initConfig({
		
		// Compass
		compass: {
			dist: {
				options: {
					// Gruntfile.jsからの相対パス
					config: './scss/config.rb',
					cssDir: './../html/smart/onepi/css',
					sassDir: './scss',
					imagesDir: './../html/i/onepi',
					outputStyle: 'expanded',
					noLineComments: false,
					relativeAssets: true
				}
			}
		},

		// Watch
		esteWatch: {
			options: {
				dirs: ['./scss/**/'],
				livereload: {
					enabled: false
				}
			},
			'scss': function(filepath) { return 'compass' }
		}

	});

	// grunt task
	grunt.registerTask('default', ['esteWatch','compass']);
	
};

