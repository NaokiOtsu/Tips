;(function(){
	
	var initialize = function () {
		console.log(107);
		var mapOptions = {
			center: new google.maps.LatLng(35.650337, 139.689516),
			zoom: 18,
			mapTypId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	};

	window.addEventListener('DOMContentLoaded', function(){
		initialize();
	}, false);

})();
