'use strict';

define([
	'angular',
	'filters',
	'services',
	'directives',
	'directives/aside',
	'controllers',
	'angularRoute',
	], function (angular, filters, services, directives, aside, controllers) {

		// Declare app level module which depends on filters, and services
		
		return angular.module('immersive', [
			'ngRoute',
			'immersive.filters',
			'immersive.services',
			'immersive.directives',
			'immersive.aside',
			'immersive.controllers'
		]);
});
