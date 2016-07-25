var aboutMeDataService = angular.module("aboutMeDataService", []);

aboutMeDataService.service('$aboutMeDataService', function(){
	this.populate = function($scope){
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
		},{
			name: "Customer Service",
			skillLevel: "9"
		},{
			name: "Project Mgmt",
			skillLevel: "7"
		},{
			name: "Documentation",
			skillLevel: "9"
		}];

		$scope.likeTypes=[{
			name: 'Hobbies',
			likes: [{
				name: 'Guitar',
				img: 'guitar.jpg'
			},{
				name: 'Piano',
				img: 'piano.jpg'
			},{
				name: 'Singing',
				img: 'singing.jpg'
			},{
				name: 'Songwriting',
				img: 'writing-music.jpg'
			},{
				name: 'Exercise',
				img: 'exercise.png'
			},{
				name: 'Food',
				img: 'food.jpg'
			}]
		},{
			name:"Books/Reading",
			likes:[{
				name:'Freakonomics',
				img: 'Freakonomics.jpg'
			},{
				name:'Outliers',
				img: 'Outliers.jpg'
			},{
				name: '100 Years of Solitude',
				img: '100YearsOfSolitude.jpg'
			},{
				name: 'Significant Digits',
				img: 'significantDigits.png'
			},{
				name: 'Harry Potter (series)',
				img: 'HPatGoF.jpg'
			},{
				name: 'Good Omens',
				img: 'GoodOmens.jpg'
			},{
				name: 'Death Trilogy (Discworld)',
				img: 'DeathTrilogy.jpg'
			},{
				name: 'Blindsight',
				img: 'Blindsight.jpg'
			},{
				name: 'Worm',
				img: 'worm.jpg'
			}]
		},{
			name:"Movies",
			likes:[{
				name:'12 Angry Men',
				img: 'twelve_angry_men.jpg'
			},{
				name: 'Exit Through the Gift Shop',
				img: 'exit_through_the_gift_shop.jpg'
			},{
				name: 'Ex Machina',
				img:'ExMachina.jpg'
			},{
				name: 'The Dark Knight',
				img: 'TheDarkKnight.jpg'
			},{
				name: 'Edge of Tomorrow',
				img:'EdgeOfTomorrow.jpg'
			},{
				name: 'Mad Max: Fury road',
				img: 'MadMaxFuryRoad.jpg'
			},{
				name: 'Spirited Away',
				img: 'SpiritedAway.jpg'
			},{
				name: 'Princess Mononoke',
				img: 'PrincessMononoke.jpg'
			},{
				name: "Howl's Moving Castle",
				img: 'HowlsMovingCastle.jpg'
			},{
				name: 'Kung Fu Hustle',
				img: 'KungFuHustle.jpg'
			},{
				name: 'Hot Fuzz',
				img: 'HotFuzz.jpg'
			},{
				name: 'Shaun of the Dead',
				img: 'ShaunOfTheDead.jpg'
			},{
				name: 'In Bruges',
				img: 'InBruges.jpg'
			},{
				name: 'Seven Psychopaths',
				img: 'SevenPsychopaths.jpg'
			},{
				name: 'Airplane!',
				img: 'Airplane.jpg'
			}]

		},{
			name: 'Music',
			likes: [{
				name: 'Ratatat',
				img: 'ratatat.jpg'
			},{
				name: 'The Strokes',
				img: 'TheStrokes.jpg'
			},{
				name: 'Alabama Shakes',
				img: 'AlabamaShakes.jpg'
			},{
				name: 'Shakey Graves',
				img: 'ShakeyGraves.jpg'
			},{
				name: 'Julien Baker',
				img: 'Julien_Baker.jpg'
			},{
				name: 'J Cole',
				img: 'JCole.png'
			},{
				name: 'Death Cab for Cutie',
				img: 'DeathCabForCutie.jpg'
			},{
				name: 'The Black Keys',
				img: 'TheBlackKeys.jpg'
			},{
				name: 'Bombay Bicycle Club',
				img: 'BombayBicycleClub.jpg'
			},{
				name: 'Matthew Robert Cooper',
				img: 'SomeDaysAreBetterThanOthers.jpg'
			},{
				name: 'The Lumineers',
				img: 'TheLumineers.jpg'
			},{
				name: 'Kid Cudi',
				img: 'KidCudi.jpg'
			}]
		}];
	};
});