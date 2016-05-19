webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $        = __webpack_require__(1);

	var PreloadImage = __webpack_require__(5);

	new PreloadImage([
		'images/1.jpg',
		'images/2.jpg',
		'images/3.jpg',
		'images/4.jpg',
		'images/5.jpg',
		'images/6.jpg',
		'images/7.jpg',
		'images/8.jpg',
		'images/9.jpg',
		'images/10.jpg',
		'images/11.jpg',
		'images/12.jpg',
		'images/13.jpg',
		'images/14.jpg',
		'images/15.jpg',
		'images/16.jpg'
	]);



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(1);
	var _ = __webpack_require__(3);

	function PreloadImage(images) {
		this.images = images;
		this.imageLength = this.images.length;
		this.loaded = 0;
		this.tmp = '';
		
		this.init();
	}
	module.exports = PreloadImage;

	PreloadImage.prototype.init = function() {
		console.log('init');
		
		this.preload();
	};

	PreloadImage.prototype.preload = function() {
		_.each(this.images, _.bind(function(path, index) {
			$('<img/>')
				.attr('src', path)
				.load(_.bind(function() {
					this.loaded++;
					this.check(path);
				}, this));
		}, this));
	};

	PreloadImage.prototype.check = function(path) {
		console.log( Math.ceil(100 * this.loaded / this.imageLength) + '%');
		
		this.tmp += '<li><img src="'+ path +'" height="200" alt=""></li>';
		
		if (this.loaded >= this.imageLength) {
			console.log('完了')
			$('.loading').addClass('fadeout');
			$('.percent').html('100%');
			$('.bar').css({
				'width': '100%'
			});
			
			$('.result').html(this.tmp);
		} else {
			console.log('まだ')
			$('.percent').html(Math.ceil(100 * this.loaded / this.imageLength) + '%');
			$('.bar').css({
				'width': Math.ceil(100 * this.loaded / this.imageLength) + '%'
			});
		}
	};


/***/ }
]);