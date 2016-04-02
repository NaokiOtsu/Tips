var gulp = require('gulp'),
  webserver = require('gulp-webserver');

//Webサーバー
gulp.task('webserver', function() {
  gulp.src('app') //Webサーバーで表示するサイトのルートディレクトリを指定
    .pipe(webserver({
      livereload: true, //ライブリロードを有効に
      //directoryListing: true //ディレクトリ一覧を表示するか。オプションもあり
    }));
});


/**
 * デフォルトタスク
 *
 * コマンド'gulp'で実行される
 */
gulp.task('default', ['webserver']);