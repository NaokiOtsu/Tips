import gulp from 'gulp';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.babel';
import del from 'del';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';

const PATHS = {
  srcJs: './src/js/**/*.js',
  publicJsDir: './public/js/',
  publicHtml: './public/**/*.html'
};

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: 'public'
    }
  });
});

gulp.task('reload', () => {
  browserSync.reload();
});

gulp.task('clean', () => {
  return del(PATHS.publicJsDir);
});

gulp.task('build', ['clean'], () => {
  return gulp.src(PATHS.srcJs)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', () => {
  gulp.watch(PATHS.srcJs, () => {
    return runSequence('build', 'reload');
  });
  gulp.watch(PATHS.publicHtml, () => {
    return runSequence('build', 'reload');
  });
});

gulp.task('default', () => {
  return runSequence(
    'clean',
    'build',
    'browser-sync',
    'watch'
  );
});

