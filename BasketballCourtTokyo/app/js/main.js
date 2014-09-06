;(function(){
	
	var initialize = function () {
		var myLating = new google.maps.LatLng(35.650337, 139.689516);

		var mapOptions = {
			center: myLating,
			zoom: 18,
			mapTypId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
		
		var icon = new google.maps.MarkerImage(
			'./img/twitter.png',
			new google.maps.Size(201, 61),
			new google.maps.Point(0, 0)
		);
		var marker = new google.maps.Marker({
			position: myLating,
			icon: icon,
			title: 'hello world'
		});

		marker.setMap(map);

		// markerクリックしたら
		google.maps.event.addListener(marker, 'mouseover', function(){
			console.log(111);
		});
	};

	window.addEventListener('DOMContentLoaded', function(){
		initialize();
	}, false);

})();
