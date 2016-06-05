import $      from 'jquery';
import Device from 'Device';

const WIDTH = 300;

const DOM_ELEMENT = {
	'list': '.carousel-list',
	'prev': '.carousel-prev',
	'next': '.carousel-next',
	'thumb': '.carousel-thumb li'
};

const CLASS_NAME = {
	'active': 'active'
};

class Carousel {
	constructor() {
		this.$list = $(DOM_ELEMENT.list);
		this.$prev = $(DOM_ELEMENT.prev);
		this.$next = $(DOM_ELEMENT.next);
		this.$thumb = $(DOM_ELEMENT.thumb);
		
		this.counter = 0;
		this.length = $(DOM_ELEMENT.list + ' li').length;
		
		this.init();
	}
	
	init() {
		this.bindEvents();
		this.thumbCheck();
	}
	
	bindEvents() {
		var touch_end = Device.isTouchable ? 'touchend' : 'click';
		
		this.$prev.on(touch_end, this.onPrev.bind(this));
		this.$next.on(touch_end, this.onNext.bind(this));
	}
	
	onPrev() {
		this.counter = this.counter - 1;
		
		if (this.counter <= -1) {
			this.counter = this.length - 1;
		}
		
		this.slide();
	}
	
	onNext() {
		this.counter = this.counter + 1;
		
		if (this.counter >= this.length) {
			this.counter = 0;
		}
		
		this.slide();
	}
	
	slide() {
		this.$list.css({
			'-webkit-transform': 'translate3d('+ -(this.counter * WIDTH) +'px, 0, 0)'
		});
		this.thumbCheck();
	}
	
	thumbCheck() {
		this.$thumb.removeClass(CLASS_NAME.active);
		this.$thumb.eq(this.counter).addClass(CLASS_NAME.active);
	}
}

module.exports = Carousel;