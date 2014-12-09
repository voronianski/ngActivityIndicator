/*
 * ngActivityIndicator - simple preloaders for Angular.js apps
 * http://github.com/voronianski/ngActivityIndicator
 * (c) 2014 MIT License, http://pixelhunter.me
 */

(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('angular'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['angular'], factory);
    } else {
        // Global Variables
        factory(root.angular);
    }
}(this, function (angular) {
    'use strict';

    var activityIndicatorStyle = 'CircledGrey';

    var templates = {
        Circled: '<div ng-show="AILoading" class="ai-circled ai-indicator"></div>',
        Dotted: '<div ng-show="AILoading" class="ai-dotted ai-indicator"><span class="ai-inner1"></span><span class="ai-inner2"></span><span class="ai-inner3"></span></div>',
        Spinner: '<div ng-show="AILoading" class="ai-spinner ai-indicator"><div class="ai-bar1"></div><div class="ai-bar2"></div><div class="ai-bar3"></div><div class="ai-bar4"></div><div class="ai-bar5"></div><div class="ai-bar6"></div><div class="ai-bar7"></div><div class="ai-bar8"></div><div class="ai-bar7"></div><div class="ai-bar8"></div><div class="ai-bar9"></div><div class="ai-bar10"></div></div>'
    };

    var templater = function (styleName, skipNgShow) {
        var parts = styleName.match(/([A-Z]?[^A-Z]*)/g).slice(0,-1);
        var template = parts[0];
        var color = parts[1].toLowerCase();

        var $template = angular.element(templates[template]);
        if (template === 'Circled') {
            $template.addClass('ai-' + color + '-spin');
        } else {
            $template.addClass('ai-' + color + '-parent');
        }
        if (skipNgShow) {
            $template.removeAttr('ng-show');
        }

        return $template;
    };

    return angular.module('ngActivityIndicator', [])

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
                var styleName = attrs.ngActivityIndicator || activityIndicatorStyle;
                var skipNgShow = (attrs.skipNgShow && attrs.skipNgShow === 'yes') ? true : false;
                var tmpl = templater(styleName, skipNgShow);

                if (elem[0].nodeName === 'BODY') {
                    var ngView = angular.element(document.querySelectorAll('[ng-view]'));
                    ngView.attr('ng-hide', 'AILoading');
                }

                elem.append(tmpl);
            }
        };
    });
}));
