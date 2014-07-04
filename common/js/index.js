;(function(window, undefined){
	// opacity 0 setting
	r('#menu li').css({ opacity: 0 });
		
	// initialize
	var initialize = function() {
		var i = 0;
		
		r('#menu li').each(function(elem){
			setTimeout(function(){
				elem.addClass('animation');
			}, 30 * i++);
			
			elem.bind('webkitAnimationEnd', function(){
				elem.css({ opacity: 1 });
			}, false)
		});
	}
	
	// DOMContentLoaded
	r(document).bind('DOMContentLoaded', function(){
		initialize();
	}, false);
	
})(window);
