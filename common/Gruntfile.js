module.exports = function(grunt) {
	
	// config
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		compass: {
			build: {
				src: 'scss/*.scss',
				dest: 'css/index.css'
			}
		},
		
		cssmin: {
			minimize: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
				},
				files: {
					'css/index.min.css': '<%= compass.build.dest %>'
				}
			}
		},
		
		// ファイル結合
		concat: {
			dist: {
				src: ['js/riddle.js', 'js/index.js'],
				dest: 'js/all.js'
			}
		},
		
		// ファイル圧縮
		uglify: {
			options: {
				banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'js/all.js',
				dest: 'js/all.min.js'
			}
		},
		
		watch: {
			files: ['scss/*.scss', 'js/*.js'],
			tasks: ['compass', 'cssmin', 'concat', 'uglify']
		}
		
	});
	
	// plugin
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	// tasks
	grunt.registerTask('default', ['compass', 'cssmin', 'concat', 'uglify', 'watch']);
	
};