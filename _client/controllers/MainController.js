var app = angular.module("MainController", []);

app.controller('MainController', ['$scope', '$location', 'smoothScroll', '$cookies', '$window', '$staticDataService',
	function($scope, $location, smoothScroll, $cookies, $window, $staticDataService){

		//navbar functions
		$scope.goToSection = function(sectionId) {
			var element = document.getElementById(sectionId);
			var options = {};
			if(sectionId != 'home'){
				options.offset=angular.element(document.querySelector('#navbar'))[0].offsetHeight;
			}
			smoothScroll(element,options);
		};

		//listener for refresh
		$window.onbeforeunload = function(e){
			$cookies.put('Tsai_Resume_Site_ScrollY',$window.scrollY);
		}

		
//==== perform on load ====

		//load data into scope
		$staticDataService.populate($scope);

		//restore previous scroll position
		var loc=$cookies.get('Tsai_Resume_Site_ScrollY');
		if(typeof loc === 'string'){
			smoothScroll('main', {
				offset: (function(){
					return -1*loc;
				})()
			});
		}

		//clean cookies
		$cookies.remove('Tsai_Resume_Site_ScrollY');
	}]
);