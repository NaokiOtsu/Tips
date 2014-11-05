function TodoCtrl($scope) {
	
	$scope.todos = [
		{ priority: 'A', worker: 'Otsu', consts: 1, date: '2014/12/31', text: '絵コンテを確認する', done: false },
		{ priority: 'B', worker: 'Yasuda', consts: 1, date: '2014/12/31', text: 'ネットワーク開発', done: false },
		{ priority: 'C', worker: 'Kondo', consts: 1, date: '2014/12/31', text: '各種修正', done: false }
	];
	
	$scope.addTodo = function () {
		$scope.todos.push({ text: $scope.todoText, done: false });
		$scope.todoText = '';
	};
	
	$scope.remaining = function () {
		var count = 0;
		angular.forEach($scope.todos, function(todo) {
			count += todo.done ? 0 : 1;
		});
		return count;
	};
	
	$scope.archive = function () {
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo){
			if (!todo.done) $scope.todos.push(todo);
		});
	};
}
