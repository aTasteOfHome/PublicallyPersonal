var app = angular.module("MainController", []);

app.controller('MainController', ['$scope',
	function($scope){
		$scope.test='Hello World!';
	}]
);