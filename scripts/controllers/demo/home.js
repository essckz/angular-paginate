'use strict';
/*jshint sub:true*/

angular.module('demo')
.controller('DemoHomeCtrl', ['$scope', '$state','$rootScope',
	function($scope, $state, $rootScope) {
		console.log('DemoHomeCtrl');

        $scope.list = [];

        for (var i=0; i<100000; i++) {
            $scope.list.push(i);  
        }
	}]);

