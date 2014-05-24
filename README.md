# ngActivityIndicator

Simple application preloader animation service for [Angular.js](http://angularjs.org/) applications.

ngActivityIndicator is small, customizable through [themes](https://github.com/voronianski/ngActivityIndicator#built-in-styles) and has only Angular.js as dependency.

## Install

You can download all necessary ngActivityIndicator files manually or install it with bower:

```bash
bower install ngActivityIndicator
```

## Usage

You need only to include ``ngActivityIndicator.js`` and  ``ngActivityIndicator.css`` (as minimal setup) to your project and then you can start using ``$actvityIndicator`` service wherever you want - inside your directives, controllers or services. For example in controllers:

```javascript
var app = angular.module('exampleApp', ['ngActivityIndicator']);

app.controller('MainCtrl', function ($scope, $actvityIndicator) {
	$actvityIndicator.startAnimating();
	setTimeout(function () {
		$actvityIndicator.stopAnimating();
	}, 3000);
});
```

## API

API is highly inspired by Objective-C [UIActivityIndicatorView](https://developer.apple.com/library/ios/documentation/uikit/reference/UIActivityIndicatorView_Class/Reference/UIActivityIndicatorView.html) class from UIKit framework.

##### ``startAnimating()``

Start preload animation.

##### ``stopAnimating(delay)``

Stop animating preloader.

##### ``isAnimating()``

Check whether activity indicator is animating or not.

##### ``setActivityIndicatorStyle()``

There are several styles built-in:

- ``SimpleLightGrey``
- ``AnotherStyle``

Style by default is ``SimpleLightGray``, you can change it by setting the value string on ``$activityIndicatorProvider``, example:

```javascript
angular.module('yourModule', ['ngActivityIndicator'])
	.config(['$activityIndicatorProvider', function ($activityIndicatorProvider) {
		$activityIndicatorProvider.setActivityIndicatorStyle('CircleClockDark');
	}]);
```

## Built-in styles

You're able to choose what indicator suites you most within default ones or create your own simply with css.

---

MIT Licensed
