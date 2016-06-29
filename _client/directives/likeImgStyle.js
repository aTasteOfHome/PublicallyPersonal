var mod = angular.module("likeImgStyle",[]);

mod.directive("likeImgStyle", function($window){ 
   	return {
	     restrict: 'A',
	     link: function(scope, elem, attr) {
	     	angular.element(document).ready(function(){
	     		elem.parent().css('height','220px');

	     		elem.css('height','100px');
     		});

     		elem.on('load',function() {
     			var width = elem.width(),
	                height = elem.height();
	            //check width and height and apply styling to parent here.
	            if(!height || !width){
	            	elem.css('height','120px');
	            }else if(height >= width*2){
	            	elem.css('height','200px');
	            }else if(height >= width/1.5){
	            	elem.css('height',Math.floor(200-(width/height-0.5)*80) + 'px');
	            }else if(height >= width/2){
	            	elem.css('height', Math.floor(120-(width/height-1.5)*60) + 'px');
	            }else{
	            	elem.css('height','90px');
	            }
     		});
     	}
   	};
});