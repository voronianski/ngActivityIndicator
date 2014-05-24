# ngActivityIndicator

Simple application preloader animation provider for [Angular.js](http://angularjs.org/) applications.

ngActivityIndicator is small, all-in-one solution, customizable through [themes](https://github.com/voronianski/ngActivityIndicator#built-in-styles) and dependant only on Angular.js.

## Install

You can download all necessary ngActivityIndicator files manually or install it with bower:

```bash
bower install ngActivityIndicator
```

## Usage

You need to include ``ngActivityIndicator.js`` and  ``ngActivityIndicator.css`` (as minimal setup) to your project and then you can start using ``$actvityIndicator`` service wherever you want - inside your directives, controllers or services. For example in controllers:

```javascript
var app = angular.module('exampleApp', ['ngActivityIndicator']);

app.controller('MainCtrl', function ($scope, $actvityIndicator) {
	$actvityIndicator.startAnimating();
	setTimeout(function () {
		$actvityIndicator.stopAnimating();
	}, 3000);
});
```

You can use [ngActivityIndicator directive](https://github.com/voronianski/ngActivityIndicator#Directive) to show animation or you are able to create your own preloader in html, style with CSS and simply show/hide it:

```html
<body>
	<div ng-show="AILoading" class="your-preloader"></div>
	<div ng-hide="AILoading" ng-view></div>
</body>
```

## API

API is highly inspired by Objective-C [UIActivityIndicatorView](https://developer.apple.com/library/ios/documentation/uikit/reference/UIActivityIndicatorView_Class/Reference/UIActivityIndicatorView.html) class from UIKit framework.

##### ``startAnimating()``

Start preload animation by setting ``$rootScope.AILoading`` to ``true``.

##### ``stopAnimating(delay)``

Stop animating preloader by setting ``$rootScope.AILoading`` to ``false``.

##### ``isAnimating()``

Check whether activity indicator is animating or not.

##### ``setActivityIndicatorStyle()``

There are several [styles built-in](https://github.com/voronianski/ngActivityIndicator#list-of-style-names)). Style by default is ``SimpleLightGray``, you can change it by setting the value string on ``$activityIndicatorProvider``, example:

```javascript
angular.module('yourModule', ['ngActivityIndicator'])
	.config(['$activityIndicatorProvider', function ($activityIndicatorProvider) {
		$activityIndicatorProvider.setActivityIndicatorStyle('CircleDark');
	}]);
```

## Directive

Module is shiped with helpful directive. It is called as **ngActivityIndicator** and can behave differently based on the tag or restrict it's used with.

When it's added to ``<body>`` tag, it adds relevant preloader into the app, shows and hides ``ng-view`` while animating. It's recommended and the most common use-case, example:

```html
<!-- Indicator is injected into the DOM automaticly -->
<body ng-activity-indicator>

	<!-- ngView is shown/hidden automaticly -->
	<div ng-view></div>
</body>
```

If you prefer to manage what to show on preloading mode by yourself, just use it as an element or attribute. Directive will handle animation status automaticly, example:

```html
<body>
	<!-- it is shown/hidden automaticly -->
	<div ng-activity-indicator class="center"></div>

	<!-- show/hide elements based on $rootScope.AILoading property -->
	<div ng-hide="AILoading" class="some-wrapper"></div>
</body>
```

You can also override preloader style by adding it's name as directive value:

```html
<div ng-activity-indicator="CircleDark"></div>
```

## Built-in styles

You're able to choose what indicator suites you most within default ones or create your own.

##### List of style names:

- ``SimpleLightGrey``
- ``AnotherStyle``

## Contribution

Want to add your styles into this module? Cool, just fork this repo and make pull-request!

---

**MIT Licensed**
