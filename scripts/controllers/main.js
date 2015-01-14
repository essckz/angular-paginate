angular.module('demo')
	.controller('MainCtrl', ['$scope', '$state', '$rootScope',
	function($scope, $state, $rootScope) {
		console.log('MainCtrl');
		$state.transitionTo('home');
	}
]);