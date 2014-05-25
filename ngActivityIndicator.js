/*
 * ngActivityIndicator - simple preloaders for Angular
 * http://github.com/voronianski/ngActivityIndicator
 * (c) 2014 MIT License, http://pixelhunter.me
 */

(function (window, angular, undefined) {
	'use strict';

	var activityIndicatorStyle = 'CircledGrey';
	var templates = {

		CircledWhite: '\
			<div ng-show="AILoading" class="ai-circled ai-white-spin ai-indicator"></div>',

		DottedWhite: '\
			<div ng-show="AILoading" class="ai-dotted ai-white-parent ai-indicator">\
				<span class="ai-inner1"></span><span class="ai-inner2"></span><span class="ai-inner3"></span>\
			</div>',

		SpinnerWhite: '\
			<div ng-show="AILoading" class="ai-spinner ai-white-parent ai-indicator">\
				<div class="ai-bar1"></div><div class="ai-bar2"></div><div class="ai-bar3"></div><div class="ai-bar4"></div><div class="ai-bar5"></div><div class="ai-bar6"></div>\
				<div class="ai-bar7"></div><div class="ai-bar8"></div><div class="ai-bar7"></div><div class="ai-bar8"></div><div class="ai-bar9"></div><div class="ai-bar10"></div>\
			</div>'
	};

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

	.directive('ngActivityIndicator', function () {
		return {
			restrict: 'AE',
			compile: function (elem, attrs) {
				var style = attrs.ngActivityIndicator || activityIndicatorStyle;
				var template = templates[style];

				elem.append(template);

				// if elem is body
				// find ng-view + add ng-hide="AILoading"
				//debugger;
			}
		};
	});

})(window, window.angular);
