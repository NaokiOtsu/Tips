(function(){
	var Staff = Backbone.Model.extend({
		defaults: {
			'name': '',
			'age': 0,
			'updateTime': new Date()
		},
		initialize: function () {
			console.log('Staff[' + this.cid + ']: ' + JSON.stringify(this));
		}
	});

	var tmpStaff = new Staff();
	tmpStaff.set({name: 'Murata', age: 15, id: 101});
	console.log('Staff[' + tmpStaff.cid + ']: ' + JSON.stringify(tmpStaff));
	var tmpStaff2 = new Staff({name: 'Kenichiro', age: 35, id: 102});

	var objs = new Backbone.Collection([obj, obj2]);
	console.log('objs: ' + JSON.stringify(objs));

	console.log('objs.get(cid): ' + JSON.stringify(objs.get('c1')));
	console.log('objs.at(index): ' + JSON.stringify(objs.at(0)));
}());
