app.directive("paginate", ['$http', '$state', '$rootScope',
    function ($http, $state, $rootScope) {

        return {
            templateUrl: "scripts/directives/angular-paginate/angular.paginate.html",
            restrict: "E",
            replace: true,
            transclude: true,
            scope: {
            /*    type: "@",
                componentModel: "="*/
            },

            controller: function($scope){

                console.log('paginate');
            },

            link: function (scope, elm, attrs) {
                scope.pagination = [];
                scope.controls = [];

                scope.current = {};
                scope.current.page = 0;

                var first = 0;
                var last = 0;

                var interval = 10;
                scope.interval = interval;

                scope.data = [];
    
                for (var i=0; i<50; i++) {
                    scope.data.push(i);  
                }

                scope.elements = [];

                function process(index) {

                    /*if (index === scope.current.page) {
                        return;
                    }*/

                    if (index < 0 || index >= scope.pagination.length) {
                        return;
                    }

                    scope.current.page = index;

                    var findIndex = scope.pagination.map(function(e) {
                        return e.index;
                    }).indexOf(scope.current.page);

                    if (findIndex !== -1) {
                        var b = scope.pagination[findIndex];
                        scope.elements = scope.data.slice(b.begin, b.end);
                    }
                }

                scope.page = process;

                function paginate(n) {

                  scope.pagination = [];

                  var index = 0;
                  for (var i = 0; i < n; i += scope.interval) {
                    var page = {};
                    page.begin = i;
                    page.end = i + scope.interval;
                    page.index = index++;

                    scope.pagination.push(page);
                  }

                  if ( scope.current.page >= 0 && scope.current.page < 7 ) {
                    first = 0;

                    if (n < 10) {
                      last = n;
                    }
                    else {
                      last = 10;
                    }
                  }
                  else {
                    last = scope.current.page + 5;

                    while ( last > (n-1) ) {
                      last--;
                    }

                    first = last - 10;
                    while ( first < 0 ) {
                      first++;
                    }
                  }

                  scope.controls = scope.pagination.slice(first, last);

                  process(scope.current.page);
                }

                paginate(scope.data.length);
            }
        };
    }
]);
