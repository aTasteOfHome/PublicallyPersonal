
var mod = angular.module("mySticky",[]);

mod.directive("sticky", function($window) {
    return function(scope, element, attrs) {
    	var elementPos= element[0].getBoundingClientRect();
        var initialTop=elementPos.top;
        angular.element($window).bind("scroll", function() { 
        	// angular.element(element[0].querySelectorAll('td')).css('border-color','red');
        	// angular.element(element[0].querySelectorAll('td')).css('border-width', this.pageYOffset+'px');
			scope.navbarStuck = this.pageYOffset >= initialTop;
            scope.$apply();
        });
    };   
});