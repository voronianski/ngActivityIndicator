# ngActivityIndicator

Simple application preloader animation provider for [Angular.js](http://angularjs.org/) applications.

ngActivityIndicator is small, all-in-one solution, customizable through [themes](https://github.com/voronianski/ngActivityIndicator#built-in-styles) and dependant only on Angular.js.

### [Demo](http://labs.voronianski.com/ngActivityIndicator.js)

[![](https://dl.dropboxusercontent.com/u/100463011/ngActivityIndicator-small.gif)](http://labs.voronianski.com/ngActivityIndicator.js)

## Install

You can download all necessary ngActivityIndicator files manually or install it with bower:

```bash
bower install ngActivityIndicator
```

## Usage

You need to include ``ngActivityIndicator.js`` and  ``ngActivityIndicator.css`` (as minimal setup) to your project and then you can start using ``$activityIndicator`` service wherever you want - inside your directives, controllers or services. For example in controllers:

```javascript
var app = angular.module('exampleApp', ['ngActivityIndicator']);

app.controller('MainCtrl', ['$activityIndicator', '$timeout',
	function ($activityIndicator, $timeout) {
		$activityIndicator.startAnimating();
		$timeout(function () {
			$activityIndicator.stopAnimating();
		}, 3000);
	}
]);
```

You can use [ngActivityIndicator directive](https://github.com/voronianski/ngActivityIndicator#directive) to show one of built-in animated views or you are able to create your own preloader in html, style it with CSS and simply show/hide it:

```html
<body>
	<div ng-show="AILoading" class="your-preloader"></div>
	<div ng-hide="AILoading" ng-view></div>
</body>
```

Also this service can be easily used with **[loading](https://github.com/jxnblk/loading)** SVG concept by Brett Jackson. But be aware of limited browser SVG support and user experience issues with perceptual loading time - http://caniuse.com/svg-smil.

Or you can use preloader styles from Luke's [https://github.com/lukehaas/css-loaders](https://github.com/lukehaas/css-loaders) as well.

## API

API is highly inspired by Objective-C [UIActivityIndicatorView](https://developer.apple.com/library/ios/documentation/uikit/reference/UIActivityIndicatorView_Class/Reference/UIActivityIndicatorView.html) class from UIKit framework.

##### ``startAnimating()``

Start preload animation by setting ``$rootScope.AILoading`` to ``true``.

##### ``stopAnimating(delay)``

Stop animating preloader by setting ``$rootScope.AILoading`` to ``false``.

##### ``isAnimating()``

Check whether activity indicator is animating or not.

##### ``setActivityIndicatorStyle()``

There are several [styles built-in](https://github.com/voronianski/ngActivityIndicator#list-of-style-names). Style by default is ``CircledGrey``, you can change it by setting the value string on ``$activityIndicatorProvider``, example:

```javascript
angular.module('yourModule', ['ngActivityIndicator'])
	.config(['$activityIndicatorProvider', function ($activityIndicatorProvider) {
		$activityIndicatorProvider.setActivityIndicatorStyle('SpinnerDark');
	}]);
```

## Directive

Module is shiped with helpful directive. It is called as **ngActivityIndicator** and can behave differently based on the tag or restrict it's used with.

When it's added to ``<body>`` tag, it adds relevant preloader into the app, shows and hides ``ng-view`` while animating. It's recommended and the most common use-case, example:

```html
<!-- Indicator is injected into the DOM automatically -->
<body ng-activity-indicator>

	<!-- ngView is shown/hidden automatically -->
	<div ng-view></div>
</body>
```

If you prefer to manage what to show on preloading mode by yourself, just use it as an element or attribute. Directive will handle animation status automaticly, example:

```html
<body>
	<!-- it is shown/hidden automatically -->
	<div ng-activity-indicator class="center"></div>

	<!-- show/hide elements based on $rootScope.AILoading property -->
	<div ng-hide="AILoading" class="some-wrapper"></div>
</body>
```

You can also override preloader style by adding it's name as directive value:

```html
<div ng-activity-indicator="CircledDark"></div>
```

### Skip `ngShow`

Sometimes it's useful to control indicator show/hide behavior by your own `$scope` (for example if you have multiple loaders inside one view). In this case there is additional attribute for directive:

##### `skip-ng-show="[yes/no]"`

It's easy to use, just add it on the activity indicator directive:

```html
<div ng-show="myLoadingConditional" ng-activity-indicator skip-ng-show="yes"></div>
```

This will ends up in skipping `ng-show="AILoading"` directive on ngActivityIndicator element and will add ability to control loader presence by `myLoadingConditional`.

## Built-in styles

You're able to choose what indicator suites you most within default ones or create your own.

##### List of style names:

- CircledWhite / CircledGrey *(default)* / CircledDark
- DottedWhite / DottedGrey / DottedDark
- SpinnerWhite / SpinnerGrey / SpinnerDark

## Contribution

Want to add your styles into this module? Cool, just fork this repo and make pull-request!

## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

MIT Licensed

Copyright (c) 2014, Dmitri Voronianski [dmitri.voronianski@gmail.com](mailto:dmitri.voronianski@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
