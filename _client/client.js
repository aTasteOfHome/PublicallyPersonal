'use strict'

//initialize with dependencies
var app = angular.module("app",[
	'ui.router',
	'sticky',
	'MainController'
]);


app.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('main',{
        	url: "/",
        	templateUrl: '/_client/partials/main.html',
        	controller: 'MainController'
        });
	}
]);