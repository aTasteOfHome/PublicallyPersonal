var app = angular.module("MainController", []);

app.controller('MainController', ['$scope', '$location', 'smoothScroll', '$cookies', '$window',
	function($scope, $location, smoothScroll, $cookies, $window){

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

		//add all scope data
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
			workplace: 'Collegiate Cribs',
			position:  'Co-creator / Front-end Developer',
			startDate: 'Aug 2014',
			endDate: 'May 2015',
			info: [
				'Used the  MEAN stack, especially Angular, in conjunction with Polymer, jQuery and other Javascript/HTML/CSS tools to create our website.',
				'Drafted and finalized technical documentation, including Status Reports, the Statement of Work, and the Feasibility Report.',
				'Designed mockups of the entire website, including subpages, with an eye towards usability and user-friendly interface design.',
				'Prepared and performed a presentation of all of our work and research, in conjunction with a walkthrough of our mockups.',
				'Set up and managed a Git repository structure, and oversaw all merges and code reviews.'

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

		$scope.skillVals= (function() {
			var arr = [];
			for(var i=1; i<=10; i++){
				arr[i-1]=i;
			}
			return arr;
		})();

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

		$scope.likeTypes=[{
			name: 'Hobbies',
			likes: [{
				name: 'Guitar'
			},{
				name: 'Piano'
			},{
				name: 'Singing'
			},{
				name: 'Songwriting'
			},{
				name: 'Exercise'
			},{
				name: 'Food'
			}]
		},{
			name:"Books",
			likes:[{
				name:'Freakonomics'
			},{
				name:'Outliers'
			},{
				name: '100 Years of Solitude'
			},{
				name: 'American Gods'
			},{
				name: 'Significant Digits'
			},{
				name: 'Harry Potter (series)'
			},{
				name: 'Good Omens'
			},{
				name: 'Death Trilogy (Discworld)'
			}]
		},{
			name:"Movies",
			likes:[{
				name:'12 Angry Men'
			},{
				name: 'Exit Through the Gift Shop'
			},{
				name: 'Ex Machina'
			},{
				name: 'The Dark Knight'
			},{
				name: 'Spirited Away'
			},{
				name: 'Speedy Scandal'
			},{
				name: 'Hot Fuzz'
			},{
				name: 'Anchorman'
			}]

		},{
			name: 'Music',
			likes: [{
				name: 'Ratatat'
			},{
				name: 'The Strokes'
			},{
				name: 'Alabama Shakes'
			},{
				name: 'Shakey Graves'
			},{
				name: 'Julien Baker'
			},{
				name: 'Death Cab for Cutie'
			},{
				name: 'The Black Keys'
			},{
				name: 'Bombay Bicycle Club'
			},{
				name: 'Tycho'
			},{
				name: 'The Lumineers'
			},{
				name: 'Kid Cudi'
			},{
				name: 'J Cole'
			}]
		}]

		//perform on load
		var loc=$cookies.get('Tsai_Resume_Site_ScrollY');
		if(typeof loc === 'string'){
			smoothScroll('main', {
				offset: (function(){
					return -1*loc;
				})()
			});
		}
		$cookies.remove('Tsai_Resume_Site_ScrollY');
	}]
);