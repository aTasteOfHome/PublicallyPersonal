var app = angular.module("MainController", []);

app.controller('MainController', ['$scope',
	function($scope){
		$scope.test='Hello World!';

		$scope.workExp=[{
			workplace: 'Epic Systems Corporation',
			position: 'Technical Services - Reporting Systems',
			startDate: 'June 1, 2015',
			endDate: 'April 22, 2016',
			info: [
				"detail 1",
				'detail 2'
			]
		},{
			workplace: 'mGage',
			position: 'Software Development Intern',
			startDate: 'May 2014',
			endDate: 'Aug 2014',
			info: [
				'Managed systems and database upgrades across multiple hospitals and organizations',
				'Remodeled the "Epic Quarterly Update", a quarterly process that gives customer executives important information on their organization\'s current status.',
			]
		}];
	}]
);