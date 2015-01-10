var app = angular.module('myApp', []);

app.controller('MainCtrl', function(){
	
});

app.filter('reverse', function(){
	return function(input) {
		// 入力が文字列じゃなかったら空文字を返す
		if(typeof input !== 'string'){
			return '';
		}
		
		// 入力文字列を逆にして返す
		return input.split('').reverse().join('');
	}
});


