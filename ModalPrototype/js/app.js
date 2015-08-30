(function(){
	"use strict";
	
	function Modal(el) {
		this.initialize(el);
	}
	
	Modal.prototype.initialize = function(el) {
		this.$el = el;
		this.$container = $("#modal");
		this.$contents = $("#modal-contents");
		this.$overlay = $("#modal-overlay");
		this.$parents = this.$el.parents("ul");
		this.$window = $(window);
		this.handleEvents();
	}
	
	Modal.prototype.handleEvents = function() {
		var self = this;
		this.$parents.on("click", "a", function(e) {
			self.show(e);
			return false;
		});
		
		this.$container.on("click", "#modal-close", function(e) {
			self.hide(e);
			return false;
		});
		
		this.$overlay.on("click", function(e) {
			self.hide(e);
			return false;
		});
		
		this.$container.on("click", "#modal-next", function(e) {
			self.next(e);
			return false;
		});
		
		this.$container.on("click", "#modal-prev", function(e) {
			self.prev(e);
			return false;
		});
		
		this.$window.on("load resize", function() {
			self.resize();
		});
	}
	
	Modal.prototype.show = function(e) {
		var $target = $(e.currentTarget),
			src = $target.attr("href");
		this.$contents.html('<img src="'+ src +'" />');
		this.$container.fadeIn();
		this.$overlay.fadeIn();
		
		var index = $target.data('index');
		this.countChange = this.createCounter(index, this.$el.length);
		return false;
	}
	
	Modal.prototype.hide = function(e) {
		this.$container.fadeOut();
		this.$overlay.fadeOut();
	}
	
	Modal.prototype.slide = function(index) {
		this.$contents.find("img").fadeOut({
			complete: function(){
				var src = $('[data-index="'+ index +'"]').find("img").attr("src");
				$(this).attr("src", src).fadeIn();
			}
		});
	}
	
	Modal.prototype.createCounter = function(index, len) {
		return function(num) {
			return index = (index + num + len) % len;
		};
	}
	
	Modal.prototype.next = function() {
		this.slide(this.countChange(1));
	}
	
	Modal.prototype.prev = function() {
		this.slide(this.countChange(-1));
	}
	
	Modal.prototype.resize = function() {
		var w = this.$window.width();
		if(w < 640) {
			this.$container.css({"width": "320","height": "213"});
		} else {
			this.$container.css({"width": "750","height": "500"});
		}
	}
	
	var modal = new Modal($("#modal-thumb a"));
	
	$("#more-btn").on("click", function(){
		var html = '<li>\
			<a href="images/photo-04.jpg" data-index="3">\
				<img src="images/photo-04.jpg" width="160" class="img-thumbnail" alt="" />\
			</a>\
		</li>';
		$(html).appendTo($("#modal-thumb")).hide().fadeIn();
		$(this).fadeOut();
		modal.$el = $("#modal-thumb a");
	});
	
}());