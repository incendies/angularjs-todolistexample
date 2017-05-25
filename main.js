var app = angular.module("todolistapp", []);

app.controller("todolistcontroller", function($scope) {

		$scope.todos = [
				{"name": "justdoit1", "result": false },
				{"name": "justdoit2", "result": false },
				{"name": "justdoit3", "result": true },
				{"name": "justdoit4", "result": false }
				
		];

		$scope.NewTodo = function () {
			$scope.todos.push({
				"name": $scope.todo,
				"result": false
				});

			$scope.todo= "";
			}

			$scope.DeleteTodos= function () {
				$scope.todos = $scope.todos.filter(function(item) {
					return !item.result;	
				});	 
			}

});
