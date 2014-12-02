/*global describe beforeEach it expect */

define([
	'angular',
	'angularMocks',
	'app'
], function(angular, mocks, app) {
	'use strict';

	describe('MyCtrl2', function(){
		var MyCtrl2, scope, httpBackend;

		beforeEach(function() {
			mocks.module('immersive.controllers');
			mocks.inject(function($rootScope, $controller, $httpBackend) {
				scope = $rootScope.$new();
				MyCtrl2 = $controller('MyCtrl2', {
					$scope: scope,
                    $http: $httpBackend
				});
			});
		});
        it('should create $scope.greeting when calling sayHello',
            function() {
                expect(scope.greeting).toBeUndefined();
                scope.sayHello();
                expect(scope.greeting).toEqual("Hello Ari");
         });
	});

	describe('MyCtrl2', function(){
		//...
	});
});