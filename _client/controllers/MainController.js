var app = angular.module("MainController", []);

app.controller('MainController', ['$scope', '$location', '$anchorScroll',
	function($scope, $location, $anchorScroll){
		$scope.test='Hello World!';

		$scope.goToSection = function(sectionId) {
			$location.hash(sectionId);
			if(sectionId != 'home'){
				$anchorScroll.yOffset=angular.element(document.querySelector('#navbar'))[0].offsetHeight;
			}
			$anchorScroll();
		};

		$scope.jobs=[{
			workplace: 'Epic Systems Corporation',
			position: 'Technical Services - Reporting Systems',
			startDate: 'June 1, 2015',
			endDate: 'April 22, 2016',
			info: [
				'Managed systems and database upgrades across multiple hospitals and organizations',
				'Remodeled the "Epic Quarterly Update", a quarterly process that gives customer executives' +
					' important information on their organization\'s current status.',
				'Wrote SQL queries, checked database definitions, and examined query plans for stored procedures' + 
					' to troubleshoot and resolve customer issues with ETL and data integrity',
				'Designed and developed software and their associated QA tests and test cases. Among these software projects' +
					'included the automating mapping table generation, tables which translated between Epic\'s hierarchical' +
					'database and SQL relational databases.',
				'Adhered to standards used in Electronic Health Records and the Health industry, e.g. HIPAA.'
			]
		},{
			workplace: 'mGage',
			position: 'Software Development Intern',
			startDate: 'May 2014',
			endDate: 'Aug 2014',
			info: [
				'Wrote a PHP redirect for a high-priority customer to eliminate a critical bug that corrupted request content.',
				'Created tables and views, and the stored procedures and scheduled jobs that manage them, in order to monitor message metrics over a 20-day period.',
				'Performed in-depth refactoring and updating of old, "legacy" code to follow Object-Oriented design principles rather than Procedural patterns.',
				'Created and edited new Database Access Objects (DAOs) and service classes using hibernate.'
			]
		},{
			workplace: 'Georgia Institute of Technology',
			position: 'Associate Tutor',
			startDate: 'February 2014',
			endDate: 'May 2014',
			info: [
				'Tutored students 1-on-1 in various Computing subjects and classes',
				'Reviewed and/or re-taught students of varying years and skill levels computing concepts ranging from basic coding' + 
					'to data structures to CPU datapaths.',
				'Assisted students with homework problems by explaining and/or elaborating upon the instructions and by providing' +
					'students with tools and or methods to solve and debug their code.'
			]
		}];

		$scope.skillVals=[1,2,3,4,5,6,7,8,9,10];
		$scope.skills=[{
			name: "Java",
			skillLevel: "10"
		},{
			name: "Javascript",
			skillLevel: "6"
		},{
			name: "Java (drink)",
			skillLevel: "10"
		},{
			name: "HTML",
			skillLevel: "7"
		},{
			name: "CSS",
			skillLevel: "5"
		},{
			name: "Angular",
			skillLevel: "4"
		},{
			name: "SQL",
			skillLevel: "8"
		}];
	}]
);