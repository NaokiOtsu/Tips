var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoPrefixer = require('autoprefixer');
var cssNested = require('postcss-nested');
var csswring = require('csswring');
var browser = require('browser-sync');
var rename = require('gulp-rename');

var browsers = [
    'ios_saf 6', 'Android >= 2'
];

//node.jsのバージョンが0.11.13未満の場合必要
require('es6-promise').polyfill();

gulp.task('server', function () {
    browser({
        server: {
            baseDir: 'app' // ルートとなるディレクトリを指定
        }
    })
});

gulp.task('css', function() {
    var processors = [
        autoPrefixer({browsers: browsers}),
        cssNested(),
        csswring
    ];
    return gulp.src('./dev/css/*.css')
    .pipe(postcss(processors))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('watch',['css'], function() {
    gulp.watch('dev/css/*.css', ['css']);
    var targets = [
        'dev/css/*.css',
        'app/**/*.*'
    ];
    var watcher = gulp.watch(targets);
    watcher.on('change', function() {
        browser.reload();
    });
});

gulp.task('default', ['server', 'watch']);