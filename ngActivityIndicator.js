/*
 * ngActivityIndicator - simple preloaders for Angular
 * http://github.com/voronianski/ngActivityIndicator
 * (c) 2014 MIT License, http://pixelhunter.me
 */

(function (window, angular, undefined) {
	'use strict';

	angular.module('ngActivityIndicator', []).provider('$activityIndicator', function () {
		var activityIndicatorStyle = 'SimpleLightGray';

		this.setActivityIndicatorStyle = function (_activityIndicatorStyle) {
			activityIndicatorStyle = _activityIndicatorStyle || activityIndicatorStyle;
		};

		this.$get = ['$rootScope', '$timeout',
			function ($rootScope, $timeout) {
				var timer;

				var publicMethods = {
					startAnimating: function () {
						$timeout.cancel(timer);
						$rootScope.loading = true;
					},

					stopAnimating: function (delay) {
						if (!delay || typeof delay !== 'number') {
							return ready();
						}

						timer = $timeout(ready, delay);

						function ready () {
							$timeout.cancel(timer);
							$rootScope.loading = false;
						}
					},

					isAnimating: function () {
						return $rootScope.loading || false;
					}
				};

				return publicMethods;
			}];
	});

})(window, window.angular);
