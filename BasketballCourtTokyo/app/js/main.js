;(function(){
	
	var markers = [
		{ title: '中目黒公園', position: new google.maps.LatLng(35.640620, 139.704983)},
		{ title: '広尾公園', position: new google.maps.LatLng(35.648038, 139.721983)},
		{ title: '代々木公園', position: new google.maps.LatLng(35.672801, 139.692596)},
		{ title: '都立青山公園', position: new google.maps.LatLng(35.656146, 139.731668)},
		{ title: '西麻布レジデンスコート', position: new google.maps.LatLng(35.656281, 139.72326)},
		{ title: '駒沢公園', position: new google.maps.LatLng(35.626472, 139.660217)},
		{ title: '新宿中央公園', position: new google.maps.LatLng(35.715246, 139.703982)},
		{ title: '清水川橋公園', position: new google.maps.LatLng(35.658871, 139.65613)},
		{ title: 'ジョーダンコート', position: new google.maps.LatLng(35.661974, 139.703017)}
	];

	var initialize = function () {
		var mapOptions = {
			center: markers[0]['position'],
			zoom: 13,
			mapTypId: google.maps.MapTypeId.ROADMAP
		};
		
		var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
		
		var icon = new google.maps.MarkerImage(
			'./img/icon.png',
			new google.maps.Size(80, 80),
			new google.maps.Point(0, 0)
		);
		
		for(var i=0, l=markers.length; i<l; i++){
			
			var marker = new google.maps.Marker({
				position: markers[i]['position'],
				icon: icon,
				animation: google.maps.Animation.DROP,
				title: markers[i]['title']
			});

			marker.setMap(map);
			
			// markerマウスオーバーしたら
			google.maps.event.addListener(marker, 'mouseover', function(){
				console.log(this);
				console.log($(this));
			});
		}

	};

	window.addEventListener('DOMContentLoaded', function(){
		initialize();
	}, false);

})();
