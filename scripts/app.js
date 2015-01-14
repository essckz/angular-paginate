/* 'use strict'; */

var app = angular.module('demo', ['ui.router'])
	.config(['$stateProvider', function($stateProvider) {
		$stateProvider
        .state('home', {
			url: '/home',
			templateUrl: 'views/demo/home.html',
			controller: 'DemoHomeCtrl'
		});
	}])
	.config(['$httpProvider', function($httpProvider) {
		var interceptor = ['$rootScope', '$q', function(scope, $q) {

			function success(response) {
				return response;
			}

			function error(response) {
				return $q.reject(response);
			}

			return function(promise) {
				return promise.then(success, error);
			};
		}];

		$httpProvider.responseInterceptors.push(interceptor);
	}])
	.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}]);