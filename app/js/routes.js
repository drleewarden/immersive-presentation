'use strict';

define(['angular', 'app'], function(angular, app) {

	return app.config(['$routeProvider', function($routeProvider) {
        var url = 'wp-content/themes/arcade-basic/';
		$routeProvider.when('/view1', {
			templateUrl: url+'app/partials/partial1.html',
			controller: 'MyCtrl1'
		});
		$routeProvider.when('/view2', {
			templateUrl: url+'app/partials/partial2.html',
			controller: 'MyCtrl2'
		});
        $routeProvider.when('/view3', {
            templateUrl: url+'app/partials/partial3.html',
            controller: 'MyCtrl3'
        });
        $routeProvider.when('/home', {
            templateUrl: url+'app/partials/partial3.html',
            controller: 'MyCtrl3'
        });
        $routeProvider.when('/about', {
            templateUrl: url+'app/templates/about.html',
            controller: 'MyCtrl3'
        });
        $routeProvider.when('/something', {
            templateUrl: url+'app/templates/something.html',
            controller: 'MyCtrl4'
        });
        $routeProvider.when('/search', {
            templateUrl: url+'app/templates/search.html',
            controller: 'MyCtrl4'
        });
        $routeProvider.when('/firebase', {
            templateUrl: url+'app/templates/firebase.html',
            controller: 'MyCtrl2'
        });
		$routeProvider.otherwise({redirectTo: '/view1'});
	}]);

});
