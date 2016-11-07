describe('Main Controller', function() {
	var $document,
    vmMainCtrl,
    createVmMainCtrl,
    scope,
    app;

  beforeEach(function() {
    app = angular.mock.module('app');
  });

	beforeEach(inject(function(_$document_, _$rootScope_, $controller) {
        $document = _$document_;
        scope = _$rootScope_.$new();

        console.log($controller);
        createVmMainCtrl = function(){
          return $controller('MainController', {
            $scope: scope
          });
        };
    }));

	beforeEach(function(){
		 $document = angular.element(document);
     
	});

  it('should exist', function(){
    vmMainCtrl = createVmMainCtrl();
    expect(vmMainCtrl).toBeDefined();
  });

	it('has a dummy spec to test 2 + 2', function() {
  	// An intentionally failing test. No code within expect() will never equal 4.
  	expect(2+2).toEqual(4);
	});

	it('should have a mocked document object', function(){
		expect($document).toBeDefined();
	})


});