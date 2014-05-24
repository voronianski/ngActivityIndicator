describe('ngActivityIndicator module', function () {
	var $activityIndicator, rootScope;

	beforeEach(module('ngActivityIndicator'));

	beforeEach(function () {
		inject(function ($injector, $rootScope) {
			$activityIndicator = $injector.get('$activityIndicator');
			rootScope = $rootScope.$new();
		});
	});

	describe('when start animating', function() {
		beforeEach(function () {
			$activityIndicator.startAnimating();
		});

		it('should add loading property "true" to $rootScope', function () {
			expect(rootScope.AILoading).toBe(true);
		});

		it('should set service status as isAnimating', function () {
			expect($activityIndicator.isAnimating()).toBe(true);
		});

		describe('when stop animating', function () {
			beforeEach(function () {
				$activityIndicator.stopAnimating();
			});

			it('should change loading property "false" to $rootScope', function () {
				expect(rootScope.AILoading).toBe(false);
			});

			it('should set service status as not isAnimating', function () {
				expect($activityIndicator.isAnimating()).toBe(false);
			});
		});
	});
});
