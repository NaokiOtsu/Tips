// Todoのデータを管理するModelクラス
function Todo(data) {
	this.text = data.text;
	this.complete = !!data.complete;
}

// onとかtriggerメソッドが使えるように
$.extend(Todo.prototype, Events);
$.extend(Todo, Events);

// completeプロパティを変更するメソッド
Todo.prototype.setComplete = function(complete) {
	this.complete = !!complete;
	this.trigger('change:complete', this);
}

// 自身のインスタンスを保持する配列
Todo.list = [];

// 新規Todoを追加するためのクラスメソッド
Todo.add = function(text) {
	var todo = new Todo({ text: text });
	
	Todo.list.push(todo);
	this.trigger('add', todo);
}

