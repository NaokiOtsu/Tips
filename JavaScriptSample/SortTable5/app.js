(function() {
	'use strict';
	
	var INTERVAL = 1 * 1000;
	var TABLE_MAP = [
		"name",
		"price",
		"img",
		"id"
	];
	
	function CreateTable() {
		this.start = document.getElementById('start');
		this.stop = document.getElementById('stop');
		this.sort = document.getElementById('sort');
		this.tbody = document.getElementById('table-container').querySelector('tbody');
		
		this.data = DATA.slice();
		this.timer_id;
		this.is_playing = false;
		
		this.bindEvents();
		this.createTable(this.data);
	}
	
	CreateTable.prototype.bindEvents = function() {
		this.start.addEventListener('click', this.onStart.bind(this), false);
		this.stop.addEventListener('click', this.onStop.bind(this), false);
		this.sort.addEventListener('click', this.onSort.bind(this), false);
	};
	
	CreateTable.prototype.createTable = function(data) {
		var _this = this;
		var fragment = document.createDocumentFragment();
		
		data.forEach(function(obj) {
			var tr = document.createElement('tr');
			var table_map_obj = _this.getTableMapObject(obj);
			
			for (var key in table_map_obj) {
				var td = document.createElement('td');
				td.textContent = table_map_obj[key];
				tr.appendChild(td);
			}
			
			fragment.appendChild(tr);
		});
		
		this.tbody.textContent = null;
		this.tbody.appendChild(fragment);
	};
	
	CreateTable.prototype.getTableMapObject = function(obj) {
		var result = {};
		
		TABLE_MAP.forEach(function(element) {
			for (var key in obj) {
				if (key === element) result[key] = obj[key];
			}
		});
		
		return result;
	};
	
	CreateTable.prototype.shuffle = function(array) {
		var results = [];
		
		while (array.length) {
			var random_num = Math.floor(Math.random() * array.length--);
			var tmp = array[array.length - 1];
		}
		
		return results;
	};
	
	CreateTable.prototype.onStart = function() {
		if (this.is_playing) return;
		this.is_playing = true;
		
		this.timer_id = window.setInterval(this.onUpdateTable.bind(this), INTERVAL);
	};
	
	CreateTable.prototype.onUpdateTable = function() {
		this.shuffle(this.data);
		this.createTable(this.data);
	};
	
	CreateTable.prototype.onStop = function() {
		
	};
	
	CreateTable.prototype.onSort = function() {
		
	};
	
	window.addEventListener('DOMContentLoaded', function() {
		new CreateTable();
	});
})();