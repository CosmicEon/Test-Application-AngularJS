const myApp = angular.module('myApp', []);

myApp.controller('mainController', function ($scope) {
    $scope.name = 'Jane Doe';
    console.log($scope);
});
