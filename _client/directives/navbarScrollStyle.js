
var mod = angular.module("navbarScrollStyle",[]);

mod.directive("navbarScrollStyle", function($window) {
    return{
        restrict: 'A',
        link: function(scope, element, attrs) {

            var winjQuery= angular.element($window);
            var elemjQuery=angular.element(element);
            
            //on element load, get top position
            var elementPos= element[0].getBoundingClientRect();
            var initialTop=elementPos.top;
            var initialBot= winjQuery.height();

            //get update initial positions on resize, to accomdate for a different window size
            winjQuery.resize(function(){
                console.log('resized');

                if(scope.navbarStuck){
                    elemjQuery.removeClass('stuckToTop');
                    initialTop= elemjQuery.offset().top;
                    elemjQuery.addClass('stuckToTop');
                }else{
                    initialTop= elemjQuery.offset().top;
                }
                initialBot= winjQuery.height();
            });

            winjQuery.bind("scroll", function() { 
                /*start:
                    border-width 0, border color transparent or the same
                    background color transparent/same
                    id 'navbarHomeButton' has width 0, img inside does not exist or is hidden.
                end:
                    border-width top, bottom thin
                    background color white
                    id 'navbarHomeButton' has width 20%, img appears.
                    
                business logic:
                    go from initialTop to initialBot

                    start:
                        border-color: rgba(0,0,0,0);
                        background-color: rgba(255,255,255,0);

                        #navbarHomeButton {
                            width: 0%;
                        }
                        #navbarHomeButton img {
                            opacity: 0;
                        }

                    middle:
                    (when width > img width)
                        #navbarHomeButton img {
                            opacity: <start to grow>;
                        }

                    end:
                        border-color: rgba(0,0,0,1);
                        background-color: rgba(255,255,255,1);

                        #navbarHomeButton {
                            width: 20%;
                        }
                        #navbarHomeButton img {
                            opacity: 1;
                        }

                    math:
                    (initialBot-initialTop) scale
                    transparency: pageYOffset/scale
                    width: pageYOffset/scale*20

                */
                var opacity = this.pageYOffset/initialTop;
                if(opacity>1){
                    opacity=1;
                }

                var homeImgOpacity = (this.pageYOffset-initialTop/2)/initialTop;
                if(homeImgOpacity>1){
                    homeImgOpacity=1;
                }
                if(homeImgOpacity<0){
                    homeImgOpacity=0;
                }

                var navbarHomeWidth = this.pageYOffset/initialTop*20;
                if(navbarHomeWidth>20){
                    navbarHomeWidth=20;
                }

                var navbarSpacerWidth = 25-(this.pageYOffset/initialTop*25);

                angular.element(element[0].querySelector('#navbarHomeButton img')).css('opacity',homeImgOpacity);
                angular.element(element[0].querySelector('#navbarHomeButton')).css('width', navbarHomeWidth +'%');
                angular.element(element[0].querySelectorAll('.navbarSpacer')).css('width', navbarSpacerWidth +'%');
                angular.element(element[0].querySelectorAll('.navbarButton')).css('border-color','rgba(0,0,0,'+opacity+')');
                angular.element(element[0].querySelectorAll('.navbarButton')).css('background-color','rgba(255,255,255,'+opacity+')');

                //when window scrolls below the navbar's initial position, apply the 'stuckToTop' class with the navbarStuck boolean.
                scope.navbarStuck = this.pageYOffset >= initialTop;
                scope.$apply();
            });
        }  
    }    
});