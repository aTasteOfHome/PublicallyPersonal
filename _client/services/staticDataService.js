var staticDataService = angular.module("staticDataService", []);

staticDataService.service('$staticDataService', [ '$workDataService', '$aboutMeDataService', function($workDataService, $aboutMeDataService){
	this.populate = function($scope){
		$workDataService.populate($scope);
		$aboutMeDataService.populate($scope);
	};
}]);