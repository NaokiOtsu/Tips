// Todo一覧のリストを管理するViewクラス
function TodoListView($el) {
	this.$el = $el;
	Todo.on('add', this.add.bind(this));
}

// Todoの要素を追加するメソッド
TodoListView.prototype.add = function(todo) {
	var item = new TodoListItemView(todo);
	this.$el.append(item.$el);
};

// Todo一覧の要素を管理するViewクラス
function TodoListItemView(todo) {
	this.todo = todo;
	this.$el = $('<li><input type="checkbox">' + todo.text + '</li>');
	this.$checkbox = this.$el.find('input[type="checkbox"]');
	
	this.$checkbox.change(this.onchangeCheckbox.bind(this));
	this.todo.on('change:complete', this.onchangeComplete.bind(this));
}

// checkboxの値が変わった時のイベントハンドラ
TodoListItemView.prototype.onchangeCheckbox = function() {
	this.todo.setComplete(this.$checkbox.is(':checked'));
};

// モデルのcompleteプロパティの値が変わった時のイベントハンドラ
TodoListItemView.prototype.onchangeComplete = function() {
	if (this.todo.complete) {
		this.$el.addClass('complete');
	} else {
		this.$el.removeClass('complete');
	}
	
	this.$checkbox.attr('checked', this.todo.complete);
};