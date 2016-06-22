import $      from 'jquery';
import Device from 'Device';

const DATA_ATTR_NAME = {
	'trigger': 'tab-trigger',
	'contents': 'tab-contents'
};

const CLASS_NAME = {
	'active': 'active'
};

class Tab {
	constructor(data_name) {
		this.$trigger = $('[data-'+ DATA_ATTR_NAME.trigger +']');
		this.$contents = $('[data-'+ DATA_ATTR_NAME.contents +']');
		
		this.init(data_name);
	}
	
	init(data_name) {
		data_name = data_name ? data_name : '';
		this.render(data_name);
		
		this.bindEvents();
	}
	
	bindEvents() {
		var touch_end = Device.isTouchable() ? 'touchend' : 'mousedown';
		
		this.$trigger.on(touch_end, this.onTouch.bind(this));
	}
	
	onTouch() {
		var $trigger = $(event.target);
		var data_name = $trigger.data(DATA_ATTR_NAME.trigger);
		
		this.render(data_name);
	}
	
	render(data_name) {
		var $target = $('[data-'+ DATA_ATTR_NAME.contents +'="'+ data_name +'"]');
		if(data_name === '') $target = this.$contents.eq(0);
		
		this.$contents.removeClass(CLASS_NAME.active);
		$target.addClass(CLASS_NAME.active);
	}
}

module.exports = Tab;