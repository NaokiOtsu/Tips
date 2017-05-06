QUnit.module('Core');
QUnit.test('.attr()', function(assert) {
	var $div = $('<div>');
	$div.attr('id', 'foo');
	
	assert.equal($div[0].id, 'foo', 'idにfooが設定されている');
	assert.equal($div.attr('id'), 'foo', 'fooが取得できる');
});
