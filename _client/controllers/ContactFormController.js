'use strict';

var app = angular.module("ContactFormController", []);

app.controller('ContactFormController',['$scope', '$http', function($scope, $http){
	var cfc=this;

	//model object referenced in the form
	cfc.contact = {};

	//array of form fields with configuration and options set.
	cfc.contactFields = [{
			key: 'contactName',
			type: 'input',
			templateOptions: {
				type: 'text',
				label: 'Name',
				required: true
			}
		},{
			key: 'contactEmail',
			type: 'input',
			templateOptions: {
				type: 'text',
				label: 'Email',
				required: true
			},
			validators: {
				isEmailValid: function($viewValue, $modelValue, scope){
					return true;
				}
			}
		},{
			key: 'contactMsg',
			type: 'textarea',
			templateOptions: {
				label: 'Message',
				rows: 7,
				required: true
			}
		}
	];

	cfc.sendMail = function(){
		var data = cfc.contact;

		console.log(data);
		console.log(data.contactName);
		console.log(data.contactEmail);
		console.log(data.contactMsg);

		// $http.post('/contact-form',data)
		// 	.success(function(data,status,headers,config){
		// 		//when response is available, show that message was sent
		// 	})
		// 	.error(function(data, status, headers, config){
		// 		//called asynch if an error happens, or server returns response with error status.
		// 	});

	};
}]);