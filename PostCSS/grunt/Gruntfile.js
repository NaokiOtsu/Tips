var csswring = require('csswring');
var cssNested = require('postcss-nested');
var autoPrefixer = require('autoprefixer');

var browsers = [
    'ios_saf 6', 'Android >= 2'
];
//node.jsのバージョンが0.11.13未満の場合必要
//require('es6-promise').polyfill();

module.exports = function(grunt) {
  grunt.initConfig({
    browserSync: {
      files: [
        'app/**/*.*',
        'app/css/main.min.css'
      ],
      options: {
          server: ['app/']
      }
    },
    postcss: {
      options: {
        processors: [
          autoPrefixer({browsers: browsers}),
          cssNested(),
          csswring()
        ]
      },
      dist: {
        src: 'dev/css/*.css',
        dest: 'app/css/main.min.css'
      }
    },
    watch: {
      css: {
        files: ['dev/css/*.css'],
        tasks: ['postcss']
      },
      template: {
        files: ['app/**/*.*'],
        task: ['browserSync']
      }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default', ['browserSync']);
};