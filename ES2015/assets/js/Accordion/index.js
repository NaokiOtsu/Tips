import $      from 'jquery';
import Device from 'Device';

const DATA_ATTR_NAME = {
	'trigger': 'accordion-trigger',
	'target': 'accordion-target'
};

const CLASS_NAME = {
	'expand': 'expand'
};

class Accordion {
	constructor() {
		this.$trigger = $('[data-'+ DATA_ATTR_NAME.trigger +']');
		this.$target = $('[data-'+ DATA_ATTR_NAME.target +']');
		
		this.height_obj = {};
		
		this.init();
	}
	
	init() {
		_.each(this.$target, (target, index) => {
			let $target = $(target);
			let data_name = $target.data(DATA_ATTR_NAME.target);
			
			this.height_obj[data_name] = $target.height();
			$target.css({
				'height': 0
			});
		});
		
		this.bindEvents();
	}
	
	bindEvents() {
		let touch_end = Device.isTouchable ? 'touchend' : 'click';
		
		this.$trigger.on(touch_end, this.onTouch.bind(this));
	}
	
	onTouch() {
		let $trigger = $(event.target);
		let data_name = $trigger.data(DATA_ATTR_NAME.trigger);
		
		this.toggle(data_name);
	}
	
	toggle(data_name) {
		let $target = $('[data-'+ DATA_ATTR_NAME.target +'="'+ data_name +'"]');
		
		if ($target.hasClass(CLASS_NAME.expand)) {
			$target.removeClass(CLASS_NAME.expand);
			$target.css({
				'height': 0
			});
		} else {
			$target.addClass(CLASS_NAME.expand);
			$target.css({
				'height': this.height_obj[data_name]
			});
		}
	}
	
}

module.exports = Accordion;