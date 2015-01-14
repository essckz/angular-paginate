app.directive("paginate", ['$http', '$state', '$rootScope',
    function ($http, $state, $rootScope) {

        return {
            templateUrl: "scripts/directives/angular-paginate/angular.paginate.html",
            restrict: "E",
            replace: true,
            transclude: true,
            scope:{
                type: "@",
                componentModel: "="
            },

            controller: function($scope){

                console.log('paginate');
            },

            link: function (scope, elm, attrs) {
            }
        };
        
        /*return {
            template: 'Name:'
        };*/
    }
]);
