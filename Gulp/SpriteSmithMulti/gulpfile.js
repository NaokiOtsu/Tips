var fs          = require('fs');
var path        = require('path');
var gulp        = require('gulp');
var spritesmith = require('gulp.spritesmith');

var IMAGES_DIR      = './assets/img/'; // スプライトしたい画像が格納されているディレクトリ
var DEST_IMAGES_DIR = './public/img/'; // スプライト画像の出力先ディレクトリ
var DEST_SCSS_DIR   = './assets/scss/'; // scssファイルの出力先ディレクトリ

gulp.task('sprite', function(callback) {
	var spritePaths = [];
	
	if (!fs.existsSync(IMAGES_DIR)) { return; } 
	
	var dirs = fs.readdirSync(IMAGES_DIR); 
	
	// ディレクトリ数だけ繰り返し
	dirs.forEach(function(dir) {
		var path = IMAGES_DIR + dir + '/sprite/';
		
		// ディレクトリじゃなかったらreturn
		if (!fs.existsSync(path) || !fs.statSync(path).isDirectory()) { return; }
		
		var ds = fs.readdirSync(path);
		// console.log(ds)
		ds.forEach(function(d) {
			var p = path + d;
			
			if (!fs.statSync(p).isDirectory()) { return; }
			
			spritePaths.push(p + '/'); // EXP: ./assets/img/common/sprite/hoge1/
		});
	});
	
	// 該当ディレクトリがなかったら終了
	var length = spritePaths.length;
	if (!length) {
		callback();
		return;
	}
	
	var count = 0;
	spritePaths.forEach(function(path, index) {
		createSprite(path, function() {
			count++;
			if (count == length) { callback(); }
		})
	});
});

// EXP: dirPath => './assets/img/common/sprite/hoge1/'
function createSprite(dirPath, callback) {
	var fileName = path.basename(dirPath); // EXP: 'hoge1'
	
	// スプライト画像出力パス
	var destImagePath = dirPath.replace(IMAGES_DIR, DEST_IMAGES_DIR).replace(fileName + '/', '');
	var destImageName = fileName + '.png';
	
	// scss出力パス
	var destScssPath = dirPath.replace(IMAGES_DIR, DEST_SCSS_DIR).replace(fileName + '/', '');
	var destScssName = '_' + fileName + '.scss';
	
	// css内の画像パス
	var imageCssPath = destImagePath.replace(DEST_IMAGES_DIR, '') + destImageName;
	imageCssPath = imageCssPath.replace('/img/', '../../');
	
	var spriteData = gulp.src(dirPath + '*.png').pipe(
		spritesmith({
			imgName: destImageName,
			cssName: destScssName,
			imgPath: imageCssPath,
			cssFormat: 'scss',
			padding: 4,
			cssOpts: {
				variableNameTransforms: []
			}
		})
	);
	
	spriteData.css.pipe(gulp.dest(destScssPath));
	spriteData.img.pipe(gulp.dest(destImagePath).on('end', function() {
		console.log('created sprite: ', destImagePath + destImageName);
	}));
}