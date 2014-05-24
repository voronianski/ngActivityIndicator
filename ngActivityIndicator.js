/*
 * ngActivityIndicator - simple preloaders for Angular
 * http://github.com/voronianski/ngActivityIndicator
 * (c) 2014 MIT License, http://pixelhunter.me
 */

(function (window, angular, undefined) {
	'use strict';

	var activityIndicatorStyle = 'SimpleLightGray';

	angular.module('ngActivityIndicator', [])

	.provider('$activityIndicator', function () {
		this.setActivityIndicatorStyle = function (_activityIndicatorStyle) {
			activityIndicatorStyle = _activityIndicatorStyle || activityIndicatorStyle;
		};

		this.$get = ['$rootScope', '$timeout',
			function ($rootScope, $timeout) {
				var timer;

				var publicMethods = {
					startAnimating: function () {
						$timeout.cancel(timer);
						$rootScope.AILoading = true;

						return publicMethods;
					},

					stopAnimating: function (delay) {
						if (!delay || typeof delay !== 'number') {
							return ready();
						}

						timer = $timeout(ready, delay);

						function ready () {
							$timeout.cancel(timer);
							$rootScope.AILoading = false;
						}

						return publicMethods;
					},

					isAnimating: function () {
						return $rootScope.AILoading || false;
					}
				};

				return publicMethods;
			}];
	})

	.directive('activity-indicator', function () {

	});

})(window, window.angular);
