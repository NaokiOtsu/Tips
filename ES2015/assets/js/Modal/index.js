import $      from 'jquery';
import Device from 'Device';

const DOM_ELEMENT = {
	'btn'       : '.btn',
	'container' : '.modal-container',
	'close'     : '.modal-close',
	'filter'    : '.modal-filter'
};

const CLASS_NAME = {
	'active': 'active'
};

class Modal {
	constructor(element) {
		this.$btn = $(DOM_ELEMENT.btn);
		this.$container = $(DOM_ELEMENT.container);
		this.$close = $(DOM_ELEMENT.close);
		this.$filter = $(DOM_ELEMENT.filter);
		
		this.init();
	}
	
	init() {
		this.bindEvents();
	}
	
	bindEvents() {
		var touch_end = Device.isTouchable() ? 'touchend' : 'click';
		
		this.$btn.on(touch_end,    this.show.bind(this));
		this.$close.on(touch_end,  this.close.bind(this));
		this.$filter.on(touch_end, this.close.bind(this));
	}
	
	show() {
		this.$container.addClass(CLASS_NAME.active);
	}
	
	close() {
		this.$container.removeClass(CLASS_NAME.active);
	}
}

module.exports = Modal;