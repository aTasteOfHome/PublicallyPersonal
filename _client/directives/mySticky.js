
var mod = angular.module("mySticky",[]);

mod.directive("sticky", function($window) {
    return function(scope, element, attrs) {
    	var elementPos= element[0].getBoundingClientRect();
        var initialTop=elementPos.top;
        angular.element($window).bind("scroll", function() { 
			scope.navbarStuck = this.pageYOffset >= initialTop;
            scope.$apply();
        });
    };   
});