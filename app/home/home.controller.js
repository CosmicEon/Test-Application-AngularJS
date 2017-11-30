/* globals angular */
angular.module('Home.Module', [])
    .controller('Home.Controller', ['$scope', '$log', function ($scope, $log) {
        $scope.name = 'Jane Doe';
        console.log($scope);
        $log.log('home');
    }]);
