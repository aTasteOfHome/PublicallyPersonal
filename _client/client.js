'use strict'

//initialize with dependencies
var app = angular.module("app",[
	//downloaded dependencies
	'ui.router',
	'slick',
	'smoothScroll',
	'ngCookies',
	'formly',
	'formlyBootstrap',

	//controllers
	'MainController',
	'ContactFormController',

	//services
	'workDataService',
	'aboutMeDataService',
	'staticDataService',

	//directives
	'likeImgStyle',
	'navbarScrollStyle'
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