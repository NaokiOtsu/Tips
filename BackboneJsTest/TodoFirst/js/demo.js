// Todoモデルの定義
var Todo = Backbone.Model.extend({
	// デフォルトの属性値
	defaults: {
		title: '',
		completed: false
	}
});

// タイトルを指定してTodoモデルをインスタンス化します
// completed属性にはデフォルト値としてfalseがセットされます
var myTodo = new Todo({
	title: 'コンソールに出力されたモデルのプロパティを確認'
});

var TodoView = Backbone.View.extend({
	tagName: 'li',
	
	// 個々の項目のためのテンプレートをキャッシュしておきます
	todoTpl: _.template($('#item-template').html()),
	
	events: {
		'dbclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blue .edit': 'close'
	},
	
	// ビューが最初に生成される際に呼び出されます
	initialize: function(){
		this.$el = $('#todo');
		this.render();
	},
	
	// Todo項目のタイトルを描画します
	render: function(){
		this.$el.html(this.todoTpl(this.model.toJSON()));
		this.input = this.$('.edit');
		return this;
	},
	
	edit: function(){
		
	},
	
	close: function(){
		
	},
	
	updateOnEnter: function(){
		
	}
});

var todoView = new TodoView({model: myTodo})


