var app = angular.module("ContactFormController", []);

app.controller('ContactFormController',['$scope', '$http','$animate', function($scope, $http){
	this.sendMail = function(){
		var data = {
			contactName : this.contactName,
            contactEmail : this.contactEmail,
            contactMsg : this.contactMsg
		};

		$http.post('/contact-form',data)
			.success(function(data,status,headers,config){
				//when response is available, show that message was sent
			})
			.error(function(data, status, headers, config){
				//called asynch if an error happens, or server returns response with error status.
			});
	};
}]);