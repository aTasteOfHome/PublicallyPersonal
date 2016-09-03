'use strict';

var app = angular.module("ContactFormController", []);

app.run(function(formlyConfig, formlyValidationMessages, formlyApiCheck){

	formlyValidationMessages.addStringMessage('required', 'This field is required');
});

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
				label: 'Email'
			},
			validators: {
				contactEmail: {
					expression: function($viewValue, $modelValue, scope){
						var value = $modelValue || $viewValue;
						return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
					},
					message: '$viewValue + " is not a valid e-mail address"'
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

		$http.post('./sendMail_sendGrid',data)
			.success(function(data,status,headers,config){
				//when response is available, show that message was sent
				console.log(data);
				console.log('httpSuccess');
				//show success box

				alert(data.message);
			})
			.error(function(data,status,headers,config){
				//when response is available, show that message was sent
				console.log(data);
				console.log('error');
				alert('Connection failed; server did not receive or failed to process request to send message.');
				//show error box
			});

	};
}]);