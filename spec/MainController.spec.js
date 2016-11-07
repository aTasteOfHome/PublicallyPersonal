describe('Main Controller', function() {
	var $document;

	beforeEach(inject(function(_$document_, _$rootScope_, _$controller_) {
        $document = _$document_;
        $scope = _$rootScope_.$new();

        $vmMainCtrl = function(){
          return _$controller_('MainController', {
            '$scope': $scope
          });
        }
    }));

	beforeEach(function(){
		 $document = angular.element(document);
	});

	it('has a dummy spec to test 2 + 2', function() {
  	// An intentionally failing test. No code within expect() will never equal 4.
  	expect(2+2).toEqual(4);
	});

	it('should have a mocked document object', function(){
		expect($document).toBeDefined();
	})


});