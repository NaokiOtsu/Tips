const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('webserver', function () {
    gulp.src('app')
        .pipe(webserver({
            host: 'localhost',
            port: 8000,
            livereload: true
        }));
});