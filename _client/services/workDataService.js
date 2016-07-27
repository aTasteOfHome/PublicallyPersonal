var workDataService = angular.module("workDataService", []);

workDataService.service('$workDataService', function(){
	this.populate = function($scope){
		$scope.jobs=[{
			workplace: 'Epic Systems Corporation',
			position: 'Technical Services - Reporting Systems',
			startDate: 'June 1, 2015',
			endDate: 'April 22, 2016',
			info: [
				"Debugged and troubleshot issues with SAP Crystal reports, SSAS Cubes, and Microsoft SQL Server databases " + 
					"with the help of T-SQL, as well as knowledge of data warehouse structures and the STAR schema.",
				"Designed, developed, and created QA test cases for system upgrade automation software.",
				"Gathered system requirements and staffing needs to design and/or suggest  bug fixes, feature updates, and configuration changes" + 
					" to best benefit the customer, along with feedback to improve all of the above.",
				"Maintained and updated internal documentation as part of Epic’s documentation team.",
				"Kept up to date with various departments across Epic, and with sister technologies we integrated with, to ensure that " +
					"documentation was current with the latest developments.",
				"Communicated with customers and performed project management tasks during stressful situations, such as system upgrades and server downtimes.",
				"Trained customers and provided feedback to users for how best to improve their use of Epic applications."
			]
		},{
			workplace: 'mGage',
			position: 'Software Development Intern',
			startDate: 'May 2014',
			endDate: 'Aug 2014',
			info: [
				'Wrote a PHP redirect for a high-priority customer to eliminate a critical bug that corrupted request content.',
				'Created tables and views, and the stored procedures and scheduled jobs that manage them, in order to monitor' +
					' message metrics over a 20-day period.',
				'Performed in-depth refactoring and updating of old, "legacy" code to follow Object-Oriented design principles' + 
					' rather than Procedural patterns.',
				'Created and edited new Database Access Objects (DAOs) and service classes using hibernate.',
				"Helped develop part of an API that would take in and return information between systems and customers with the " + 
					"use of the Spring framework, and its custom serialization/deserialization capabilities."
			]
		},{
			workplace: 'Georgia Institute of Technology',
			position: 'Associate Tutor',
			startDate: 'February 2014',
			endDate: 'May 2014',
			info: [
				'Tutored freshmen, sophomores, and juniors in a wide array of computing concepts, such as basic conditionals, data structures, ' + 
					'time and memory complexity, and Object-Oriented Programming (OOP) concepts.',
				'Assisted students with homework problems by explaining and/or elaborating upon the instructions and by providing' +
					' students with tools and or methods to solve and debug their code.'
			]
		}];

		$scope.projects=[{
			name: 'Publically Personal',
			description: 'Personal website to hold information on past work and achievements',
			startDate: 'April 2016',
			info: [
				"Website url: http://andrewtsai-publicallypersonal.herokuapp.com",
				"Built on the MEAN stack (MongoDB, Express, Angular.js, Node.js).",
				"Dynamic, single-page application.",
				"Made use of bower and npm to manage project dependencies.",
				"Deployed on Heroku",
				"Used Git for version control."
			]
		},{
			name: 'Collegiate Cribs',
			description:  'Senior Project: Yelp for collegiate housing ',
			startDate: 'Aug 2014',
			endDate: 'May 2015',
			info: [
				'Made extensive use of the MEAN stack, especially Angular, in conjunction with Polymer and other Javascript tools to create our team’s website.',
				'Drafted and finalized technical documentation, including Status Reports, the Statement of Work, and the Feasibility Report.',
				'Designed mockups of the entire website, including subpages, with an eye towards usability and user-friendly interface design.',
				'Prepared and performed a presentation of all of our work and research, in conjunction with a walkthrough of our mockups.',
				'Set up and managed a Git repository structure, and oversaw all merges and code reviews.'
			]
		}];
	};
});