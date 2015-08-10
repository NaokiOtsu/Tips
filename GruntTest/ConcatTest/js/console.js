(function(){
function c(){
	var that = this;
	
	this.width  = window.innerWidth - 25 + 'px';
	this.height = window.innerHeight/2   + 'px';
	
	var console = document.createElement('div');
	console.style.position   = 'absolute';
	console.style.top        = '10px';
	console.style.left       = '10px';
	console.style.background = '#000';
	console.style.opacity    = '0.7';
	console.style.color      = '#fff';
	console.style.border     = '2px solid #fff';
	console.style.width      = this.width;
	console.style.height     = this.height;
	console.style.overflow   = 'hidden';
	console.style.zIndex     = '100';
	console.style.webkitBorderRadius  = '10px';
	console.addEventListener('touchstart', this, false);
	console.addEventListener('touchmove',  this, false);
	console.addEventListener('touchend',   this, false);
	console.style.webkitTransitionProperty = 'height, -webkit-border-radius';
	console.style.webkitTransitionDuration = '800ms';
	
	var head = document.createElement('div');
	head.style.background = '#fff';
	head.style.color      = '#000';
	head.style.height     = '15px';
	head.style.padding    = '5px';
	head.style.lineHeight = '70%';
	head.innerHTML        = 'CONSOLE';
	console.appendChild(head);
	
	var main = document.createElement('div');
	main.style.padding  = '5px';
	console.appendChild(main);
	
	this.console = console;
	this.main    = main;
	this.data    = 'debug console ok';
	this.eHandle = this.close;
	this.moved   = null;
	this.startX  = null;
	this.startY  = null;
	
	this.log();

}
console.prototype = {
	log : function(data){
		if (data) { 
			this.data = data + '<br>' + this.data;
		}
		this.main.innerHTML = this.data;
	},
	handleEvent : function(e){
		switch(e.type){
			case "touchstart" : this.touchStart(e); break;
			case "touchmove"  : this.touchMove(e); break;
			case "touchend"   : this.eHandle(); break;
		}
	},
	close : function(){
		if (this.moved) {
			this.touchMoveEnd();
			return;
		}
		this.console.style.height = '23px';
		this.console.style.webkitBorderRadius = '0px';
		this.console.style.webkitBorderTopLeftRadius  = '10px';
		this.console.style.webkitBorderTopRightRadius = '10px';
		this.eHandle = this.open;
	},
	open : function(){
		if (this.moved) {
			this.touchMoveEnd();
			return;
		}
		this.console.style.height = this.height;
		this.console.style.webkitBorderRadius = '10px';
		this.eHandle = this.close;
	},
	touchMoveEnd : function(){
		this.console.style.opacity = '0.7';
		this.moved = null;
	},
	touchStart : function(e){
		e.preventDefault();
		this.startX = e.touches[0].pageX;
		this.startY = e.touches[0].pageY;
	},
	touchMove : function(e){
		var deltaX = e.touches[0].pageX - this.startX;
		var deltaY = e.touches[0].pageY - this.startY;
		
		var newX = (this.console.style.left.replace('px', '') - 0) + (deltaX - 0);
		var newY = (this.console.style.top.replace('px', '')  - 0) + (deltaY - 0);
		
		this.console.style.left = newX + 'px';
		this.console.style.top  = newY + 'px';
		this.console.style.opacity = '0.3';
		
		this.startX = e.touches[0].pageX;
		this.startY = e.touches[0].pageY;
		this.moved  = 1;
	},
	display : function(){
		document.body.appendChild(this.console);
	},
	changeHeight: function(height){
		this.console.style.height = height + 'px';
	}
};
window.console = new console();
})();