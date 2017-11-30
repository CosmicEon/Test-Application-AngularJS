/* globals angular */
angular.module('Login.Module', [])
    .controller('Login.Controller', ['$scope', '$log', function ($scope, $log) {
        $scope.name = 'Jane Doe';
        console.log($scope);
        $log.log('login');
    }]);