import gulp from 'gulp';
import svgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import cheerio from 'gulp-cheerio';
import rename from 'gulp-rename';

gulp.task('svg', () => {
  gulp.src('./svg/**/*.svg')
    .pipe(svgmin())
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(cheerio({
      run: ($, file) => {
        $('svg').addClass('name');
        $('[fill]').removeAttr('fill');
      },
      parserOptions: {
        xmlMode: true,
        decodeEntities: false
      }
    }))
    .pipe(rename({
      basename: 'svg_sprite'
    }))
    .pipe(gulp.dest('../public/svg/'));
});
