'use strict';

var $ = require('jquery');
var _ = require('underscore');

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
