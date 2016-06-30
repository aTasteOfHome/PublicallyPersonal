var mod = angular.module("likeImgStyle",[]);

mod.directive("likeImgStyle", function($window){ 
   	return {
	     restrict: 'A',
	     link: function(scope, elem, attr) {
	     	angular.element(document).ready(function(){
	     		elem.css('height','6.0em');
     		});

     		elem.on('load',function() {
     			var width = elem.width(),
	                height = elem.height();
	            //check width and height and apply styling to parent here.
	            if(!height || !width){
	            	elem.css('height','9.0em');
	            }else if(height >= width*2){
	            	elem.css('height','15.0em');
	            }else if(height >= width/1.5){
	            	elem.css('height',Math.floor(15.0-(width/height-0.5)*6.0) + 'em');
	            }else if(height >= width/2){
	            	elem.css('height', Math.floor(9.0-(width/height-1.5)*4.5) + 'em');
	            }else{
	            	elem.css('height','6.75em');
	            }
     		});
     	}
   	};
});