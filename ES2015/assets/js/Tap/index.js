const DISTANCE_THRESHOLD = 10;

class Tap {
	constructor() {
		this.init();
	}
	
	init() {
		this.body = document.querySelectorAll('body');
		
		this.touchstart_position = {};
		this.touchmove_position = {};
		
		this.bindEvents();
	}
	
	bindEvents() {
		this.body[0].addEventListener('touchstart', this.touchstart.bind(this), true);
		this.body[0].addEventListener('touchmove', this.touchmove.bind(this), true);
		this.body[0].addEventListener('touchend', this.touchend.bind(this), true);
	}
	
	touchstart() {
		if (!event.changedTouches[0]) return;
		
		var touch = event.changedTouches[0];
		this.touchstart_position = {
			x: touch.clientX,
			y: touch.clientY
		};
	}
	
	touchmove() {
		if (!event.changedTouches[0]) return;
		
		var touch = event.changedTouches[0];
		this.touchmove_position = {
			x: touch.clientX,
			y: touch.clientY
		};
	}
	
	touchend() {
		if (!this.touchstart_position) return;
		if (!this.touchmove_position) return;
		
		var x_distance = this.touchstart_position.x - this.touchmove_position.x;
		var y_distance = this.touchstart_position.y - this.touchmove_position.y;
		
		var distance = Math.sqrt(Math.pow(x_distance, 2) + Math.pow(y_distance, 2));
		
		this.touchstart_position = null;
		this.touchmove_position = null;
		
		if (distance >= DISTANCE_THRESHOLD) event.stopPropagation();
	}
}

module.exports = Tap;