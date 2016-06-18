
var mod = angular.module("mySticky",[]);

mod.directive("scroll", function($window) {
    return function(scope, element, attrs) {
    	var elementPos= element[0].getBoundingClientRect();
        var initialTop=elementPos.top;
        angular.element($window).bind("scroll", function() {

             if (this.pageYOffset >= initialTop) {
                 scope.navbarStuck = true;
                 console.log('Scrolled below header.');
             } else {
                 scope.navbarStuck = false;
                 console.log('Header is in view.');
             }
            scope.$apply();
        });
    };   
});