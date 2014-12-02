'use strict';

require.config({
	paths: {
		angular: '../bower_components/angular/angular',
		jQuery: '../bower_components/jquery/dist/jquery',
		angularRoute: '../bower_components/angular-route/angular-route',
		angularMocks: '../bower_components/angular-mocks/angular-mocks',
		text: '../bower_components/requirejs-text/text',
        bootstrap: 'vendor/bootstrap.min',
        Isotope: 'vendor/isotope.pkgd.min',
        paper: 'vendor/jquery.paperfold',
        cookie:'vendor/jquery.cookie',
        modn:'vendor/modernizr.custom.71147',
        touch:'vendor/jquery.touchSwipe.min',
        carousel:'vendor/carouFredSel',
        arc:'vendor/jquery.arctext',
        fillsize:'vendor/fillsize',
        theme:'vendor/theme',
        firebaseCDN:'https://cdn.firebase.com/js/client/1.1.1/firebase',
        firebase:'../bower_components/angularfire/dist/angularfire.min',
        classie:'vendor/classie'


	},
	shim: {
		'jQuery' : {'exports' : '$'},
		'angular' : {
            deps:['jQuery','firebaseCDN'],
            'exports' : 'angular'
        },
        'Isotope':['jQuery', 'angular'],
        'base' :['jQuery', 'angular', 'Isotope'],
        'app' :['jQuery', 'angular', 'Isotope','firebase'],
        'firebase' :[ 'angular'],
		'angularRoute': ['jQuery','angular'],
		'angularMocks': {
			deps:['jQuery','angular'],
			'exports':'angular.mock'
		},
        'paper': ['jQuery', 'angular'],
        'arc': ['jQuery', 'angular'],
        'fillsize': ['jQuery', 'angular'],
        'theme': ['jQuery', 'angular','fillsize', 'arc', 'base'],
        'classie': ['jQuery', 'angular']
	},
	priority: [
		"angular"
	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
    'jQuery',
	'angular',
    'Isotope',
    'paper',
	'app',
	'routes',
    'base',
    'theme',
    'classie'
], function($, angular,Isotope, paper, app, routes, base) {
	var $html = angular.element(document.getElementsByTagName('html')[0]);
    $(function() {
        base.initialize();

    });
	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});
