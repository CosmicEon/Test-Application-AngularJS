/* globals angular */
angular.module('Login.Module', [])
    .controller('Login.Controller', ['$scope', '$log', function ($location, $scope, $log, $http, $rootScope) {

        $scope.loginUser = function (user) {
            $http.post('/login', user)
                .success(function (response) {
                    $rootScope.currentUser = response;
                    $location.url('/profile');
                });
        };
    }]);
