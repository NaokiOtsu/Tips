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
(function (r, window, undefined) {

	var targetClassName = 'js-count-timer-unit', // タイマー要素
		triggerShowClassName = 'js-count-timer-trigger-show', // タイマーが0秒に到達した時に表示する要素
		triggerHideClassName = 'js-count-timer-trigger-hide', // タイマーが0秒に到達した時に非表示する要素
		paramsName = 'data-counttimer-params'; // パラメーターが記載されているタイマー要素の属性名

	function CountTimer(params, target){
		var params = params || {};

		// カウントする時刻
		this.day   	= params.day   	=== undefined ? false : params.day - 0;
		this.hour   = params.hour   === undefined ? false : params.hour - 0;
		this.minute = params.minute === undefined ? false : params.minute - 0;
		this.second = params.second === undefined ? false : params.second - 0;

		// 日/時/分/秒の表示ラベル（デフォルトは h:m:s）
		this.dayLabel    = params.dayLabel   === undefined ? ':' : params.dayLabel;
		this.hourLabel   = params.hourLabel   === undefined ? ':' : params.hourLabel;
		this.minuteLabel = params.minuteLabel === undefined ? ':' : params.minuteLabel;
		this.secondLabel = params.secondLabel === undefined ? '' : params.secondLabel;

		// 日/時/分/秒を0パーディングして2桁で表示
		this.dayZeropad    = params.dayZeropad; 
		this.hourZeropad   = params.hourZeropad;   
		this.minuteZeropad = params.minuteZeropad;
		this.secondZeropad = params.secondZeropad;

		// ０に達したときも表示するかどうか
		this.dayShowZero    = params.dayShowZero 		=== undefined ? true : params.dayShowZero;
		this.hourShowZero   = params.hourShowZero  	=== undefined ? true : params.hourShowZero;
		this.minuteShowZero = params.minuteShowZero === undefined ? true : params.minuteShowZero;
		this.secondShowZero = params.secondShowZero === undefined ? true : params.secondShowZero;

		// タイマーが0秒に到達した時にタイマーを非表示する
		this.hideWhenZero = params.hideWhenZero; 

		// タイマーが0秒に到達した時にタイマーをリロードする
		this.reloadWhenZero = params.reloadWhenZero; 

		// タイマーを表示する要素
		this.target = target;

		this.init();
	}

	CountTimer.prototype = {
		init : function() {
			var self = this;

			this.startTime = 0;
			if (this.day !== false) {
				this.startTime += this.day * (3600 * 24);
			}
			if (this.hour !== false) {
				this.startTime += this.hour * 3600;
			}
			if (this.minute !== false) {
				this.startTime += this.minute * 60;
			}
			if (this.second !== false) {
				this.startTime += this.second;
			}

			var initTime = +new Date;

			self.changeTime(0);
			this.timer = setInterval(function() {
				self.changeTime((+new Date - initTime)/1000 | 0);
			}, 1000);
		},
		changeTime : function(progressTime) {
			var remainTime = this.startTime - progressTime,
				day 		= Math.max(remainTime / (3600 * 24) | 0, 0),
				hour 		= Math.max(remainTime / 3600 % 24 | 0, 0),
				minute 	= Math.max(remainTime / 60 % 60 | 0, 0),
				second 	= Math.max(remainTime % 60, 0),
				src = '';
				// console.log("remainTime:"+remainTime);

			// 0時0分0秒に到達 
			if(remainTime === 0) {
				clearInterval(this.timer);

				var self = this;
				setTimeout(function(){
					if(self.hideWhenZero) {
						// タイマーを隠す
						self.target.css("display", "none");
					}
					// リロードする
					if(self.reloadWhenZero) {
						location.reload();
					}
					// 指定した要素を表示/非表示する
					r.cls(triggerHideClassName).css("display", "none");
					r.cls(triggerShowClassName).css("display", "block");
				}, 1000);
			}

			if (this.day !== false) {

				// 0表示
				if(this.day < 0 ) {
					day = "0";
				}

				// 0パーディング
				if(this.dayZeropad && day < 10) {
					day = "0" + day;
				}

				// 時ラベル表示
				if( 0 < parseInt(day) || this.dayShowZero ) src += day + this.dayLabel;
			}
			if (this.hour !== false) {

				// 0表示
				if(this.hour < 0 ) {
					hour = "0";
				}

				// 0パーディング
				if(this.hourZeropad && hour < 10) {
					hour = "0" + hour;
				}

				// 時ラベル表示
				if( 0 < parseInt(hour) || this.hourShowZero ) src += hour + this.hourLabel;
			}
			if (this.minute !== false) {

				// 0表示
				if(this.minute < 0 ) {
					minute = "0";
				}

				// 0パーディング
				if(this.minuteZeropad && minute < 10) {
					minute = "0" + minute;
				}

				// 分ラベル表示
				if( 0 < parseInt(minute) || this.minuteShowZero ) src += minute + this.minuteLabel;
			}
			if (this.second !== false) {

				// 0表示
				if(this.second < 0 ) {
					second = "0";
				}

				// 0パーディング
				if(this.secondZeropad && second < 10) {
					second = "0" + second;
				}

				// 秒ラベル表示
				if( 0 < parseInt(second) || this.secondShowZero ) src += second + this.secondLabel;
			}

			this.target.html(src);
		}
	};

	// カウントタイマー用クラスが指定されているDOMを検索して初期化
	r.cls(targetClassName).each(function(obj) {
		var json;

		try{
			json = r.parseJSON(obj[0].getAttribute(paramsName));
		}catch(e){
			throw new Error('JSON parse error');
		}

		new CountTimer(json, obj);
	});

})(r, window);

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
(function (r, window, undefined) {

	var targetClassName = 'js-count-timer-unit', // タイマー要素
		triggerShowClassName = 'js-count-timer-trigger-show', // タイマーが0秒に到達した時に表示する要素
		triggerHideClassName = 'js-count-timer-trigger-hide', // タイマーが0秒に到達した時に非表示する要素
		paramsName = 'data-counttimer-params'; // パラメーターが記載されているタイマー要素の属性名

	function CountTimer(params, target){
		var params = params || {};

		// カウントする時刻
		this.day   	= params.day   	=== undefined ? false : params.day - 0;
		this.hour   = params.hour   === undefined ? false : params.hour - 0;
		this.minute = params.minute === undefined ? false : params.minute - 0;
		this.second = params.second === undefined ? false : params.second - 0;

		// 日/時/分/秒の表示ラベル（デフォルトは h:m:s）
		this.dayLabel    = params.dayLabel   === undefined ? ':' : params.dayLabel;
		this.hourLabel   = params.hourLabel   === undefined ? ':' : params.hourLabel;
		this.minuteLabel = params.minuteLabel === undefined ? ':' : params.minuteLabel;
		this.secondLabel = params.secondLabel === undefined ? '' : params.secondLabel;

		// 日/時/分/秒を0パーディングして2桁で表示
		this.dayZeropad    = params.dayZeropad; 
		this.hourZeropad   = params.hourZeropad;   
		this.minuteZeropad = params.minuteZeropad;
		this.secondZeropad = params.secondZeropad;

		// ０に達したときも表示するかどうか
		this.dayShowZero    = params.dayShowZero 		=== undefined ? true : params.dayShowZero;
		this.hourShowZero   = params.hourShowZero  	=== undefined ? true : params.hourShowZero;
		this.minuteShowZero = params.minuteShowZero === undefined ? true : params.minuteShowZero;
		this.secondShowZero = params.secondShowZero === undefined ? true : params.secondShowZero;

		// タイマーが0秒に到達した時にタイマーを非表示する
		this.hideWhenZero = params.hideWhenZero; 

		// タイマーが0秒に到達した時にタイマーをリロードする
		this.reloadWhenZero = params.reloadWhenZero; 

		// タイマーを表示する要素
		this.target = target;

		this.init();
	}

	CountTimer.prototype = {
		init : function() {
			var self = this;

			this.startTime = 0;
			if (this.day !== false) {
				this.startTime += this.day * (3600 * 24);
			}
			if (this.hour !== false) {
				this.startTime += this.hour * 3600;
			}
			if (this.minute !== false) {
				this.startTime += this.minute * 60;
			}
			if (this.second !== false) {
				this.startTime += this.second;
			}

			var initTime = +new Date;

			self.changeTime(0);
			this.timer = setInterval(function() {
				self.changeTime((+new Date - initTime)/1000 | 0);
			}, 1000);
		},
		changeTime : function(progressTime) {
			var remainTime = this.startTime - progressTime,
				day 		= Math.max(remainTime / (3600 * 24) | 0, 0),
				hour 		= Math.max(remainTime / 3600 % 24 | 0, 0),
				minute 	= Math.max(remainTime / 60 % 60 | 0, 0),
				second 	= Math.max(remainTime % 60, 0),
				src = '';
				// console.log("remainTime:"+remainTime);

			// 0時0分0秒に到達 
			if(remainTime === 0) {
				clearInterval(this.timer);

				var self = this;
				setTimeout(function(){
					if(self.hideWhenZero) {
						// タイマーを隠す
						self.target.css("display", "none");
					}
					// リロードする
					if(self.reloadWhenZero) {
						location.reload();
					}
					// 指定した要素を表示/非表示する
					r.cls(triggerHideClassName).css("display", "none");
					r.cls(triggerShowClassName).css("display", "block");
				}, 1000);
			}

			if (this.day !== false) {

				// 0表示
				if(this.day < 0 ) {
					day = "0";
				}

				// 0パーディング
				if(this.dayZeropad && day < 10) {
					day = "0" + day;
				}

				// 時ラベル表示
				if( 0 < parseInt(day) || this.dayShowZero ) src += day + this.dayLabel;
			}
			if (this.hour !== false) {

				// 0表示
				if(this.hour < 0 ) {
					hour = "0";
				}

				// 0パーディング
				if(this.hourZeropad && hour < 10) {
					hour = "0" + hour;
				}

				// 時ラベル表示
				if( 0 < parseInt(hour) || this.hourShowZero ) src += hour + this.hourLabel;
			}
			if (this.minute !== false) {

				// 0表示
				if(this.minute < 0 ) {
					minute = "0";
				}

				// 0パーディング
				if(this.minuteZeropad && minute < 10) {
					minute = "0" + minute;
				}

				// 分ラベル表示
				if( 0 < parseInt(minute) || this.minuteShowZero ) src += minute + this.minuteLabel;
			}
			if (this.second !== false) {

				// 0表示
				if(this.second < 0 ) {
					second = "0";
				}

				// 0パーディング
				if(this.secondZeropad && second < 10) {
					second = "0" + second;
				}

				// 秒ラベル表示
				if( 0 < parseInt(second) || this.secondShowZero ) src += second + this.secondLabel;
			}

			this.target.html(src);
		}
	};

	// カウントタイマー用クラスが指定されているDOMを検索して初期化
	r.cls(targetClassName).each(function(obj) {
		var json;

		try{
			json = r.parseJSON(obj[0].getAttribute(paramsName));
		}catch(e){
			throw new Error('JSON parse error');
		}

		new CountTimer(json, obj);
	});

})(r, window);

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
(function (r, window, undefined) {

	var targetClassName = 'js-count-timer-unit', // タイマー要素
		triggerShowClassName = 'js-count-timer-trigger-show', // タイマーが0秒に到達した時に表示する要素
		triggerHideClassName = 'js-count-timer-trigger-hide', // タイマーが0秒に到達した時に非表示する要素
		paramsName = 'data-counttimer-params'; // パラメーターが記載されているタイマー要素の属性名

	function CountTimer(params, target){
		var params = params || {};

		// カウントする時刻
		this.day   	= params.day   	=== undefined ? false : params.day - 0;
		this.hour   = params.hour   === undefined ? false : params.hour - 0;
		this.minute = params.minute === undefined ? false : params.minute - 0;
		this.second = params.second === undefined ? false : params.second - 0;

		// 日/時/分/秒の表示ラベル（デフォルトは h:m:s）
		this.dayLabel    = params.dayLabel   === undefined ? ':' : params.dayLabel;
		this.hourLabel   = params.hourLabel   === undefined ? ':' : params.hourLabel;
		this.minuteLabel = params.minuteLabel === undefined ? ':' : params.minuteLabel;
		this.secondLabel = params.secondLabel === undefined ? '' : params.secondLabel;

		// 日/時/分/秒を0パーディングして2桁で表示
		this.dayZeropad    = params.dayZeropad; 
		this.hourZeropad   = params.hourZeropad;   
		this.minuteZeropad = params.minuteZeropad;
		this.secondZeropad = params.secondZeropad;

		// ０に達したときも表示するかどうか
		this.dayShowZero    = params.dayShowZero 		=== undefined ? true : params.dayShowZero;
		this.hourShowZero   = params.hourShowZero  	=== undefined ? true : params.hourShowZero;
		this.minuteShowZero = params.minuteShowZero === undefined ? true : params.minuteShowZero;
		this.secondShowZero = params.secondShowZero === undefined ? true : params.secondShowZero;

		// タイマーが0秒に到達した時にタイマーを非表示する
		this.hideWhenZero = params.hideWhenZero; 

		// タイマーが0秒に到達した時にタイマーをリロードする
		this.reloadWhenZero = params.reloadWhenZero; 

		// タイマーを表示する要素
		this.target = target;

		this.init();
	}

	CountTimer.prototype = {
		init : function() {
			var self = this;

			this.startTime = 0;
			if (this.day !== false) {
				this.startTime += this.day * (3600 * 24);
			}
			if (this.hour !== false) {
				this.startTime += this.hour * 3600;
			}
			if (this.minute !== false) {
				this.startTime += this.minute * 60;
			}
			if (this.second !== false) {
				this.startTime += this.second;
			}

			var initTime = +new Date;

			self.changeTime(0);
			this.timer = setInterval(function() {
				self.changeTime((+new Date - initTime)/1000 | 0);
			}, 1000);
		},
		changeTime : function(progressTime) {
			var remainTime = this.startTime - progressTime,
				day 		= Math.max(remainTime / (3600 * 24) | 0, 0),
				hour 		= Math.max(remainTime / 3600 % 24 | 0, 0),
				minute 	= Math.max(remainTime / 60 % 60 | 0, 0),
				second 	= Math.max(remainTime % 60, 0),
				src = '';
				// console.log("remainTime:"+remainTime);

			// 0時0分0秒に到達 
			if(remainTime === 0) {
				clearInterval(this.timer);

				var self = this;
				setTimeout(function(){
					if(self.hideWhenZero) {
						// タイマーを隠す
						self.target.css("display", "none");
					}
					// リロードする
					if(self.reloadWhenZero) {
						location.reload();
					}
					// 指定した要素を表示/非表示する
					r.cls(triggerHideClassName).css("display", "none");
					r.cls(triggerShowClassName).css("display", "block");
				}, 1000);
			}

			if (this.day !== false) {

				// 0表示
				if(this.day < 0 ) {
					day = "0";
				}

				// 0パーディング
				if(this.dayZeropad && day < 10) {
					day = "0" + day;
				}

				// 時ラベル表示
				if( 0 < parseInt(day) || this.dayShowZero ) src += day + this.dayLabel;
			}
			if (this.hour !== false) {

				// 0表示
				if(this.hour < 0 ) {
					hour = "0";
				}

				// 0パーディング
				if(this.hourZeropad && hour < 10) {
					hour = "0" + hour;
				}

				// 時ラベル表示
				if( 0 < parseInt(hour) || this.hourShowZero ) src += hour + this.hourLabel;
			}
			if (this.minute !== false) {

				// 0表示
				if(this.minute < 0 ) {
					minute = "0";
				}

				// 0パーディング
				if(this.minuteZeropad && minute < 10) {
					minute = "0" + minute;
				}

				// 分ラベル表示
				if( 0 < parseInt(minute) || this.minuteShowZero ) src += minute + this.minuteLabel;
			}
			if (this.second !== false) {

				// 0表示
				if(this.second < 0 ) {
					second = "0";
				}

				// 0パーディング
				if(this.secondZeropad && second < 10) {
					second = "0" + second;
				}

				// 秒ラベル表示
				if( 0 < parseInt(second) || this.secondShowZero ) src += second + this.secondLabel;
			}

			this.target.html(src);
		}
	};

	// カウントタイマー用クラスが指定されているDOMを検索して初期化
	r.cls(targetClassName).each(function(obj) {
		var json;

		try{
			json = r.parseJSON(obj[0].getAttribute(paramsName));
		}catch(e){
			throw new Error('JSON parse error');
		}

		new CountTimer(json, obj);
	});

})(r, window);
