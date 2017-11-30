/* globals angular */
const myApp = angular.module('myApp', [
    'ngRoute',
    'Login.Module',
    'Register.Module',
    'Profile.Module',
]);

myApp.config(function ($locationProvider, $routeProvider) {
    // $locationProvider.hasPrefix('!');

    $routeProvider
        .when('/', {
            templateUrl: 'home.template.html',
            controller: 'Home.Controller',
        })
        .when('/login', {
            templateUrl: 'login/login.template.html',
            controller: 'Login.Controller',
        })
        .when('/register', {
            templateUrl: 'register/register.template.html',
            controller: 'Register.Controller',
        })
        .when('/profile', {
            templateUrl: 'profile/profile.template.html',
            controller: 'Profile.Controller',
        })
        .otherwise({ redirectTo: '/' });
});

myApp.controller('Home.Controller', ['$scope', '$log', function ($scope, $log) {
    $scope.name = 'Jane Doe';
    console.log($scope);
    $log.log('test');
}]);

myApp.value('COUNTRIES', [
    { name: 'Bulgaria' },
    { name: 'England' },
    { name: 'France' },
    { name: 'Germany' },
    { name: 'Spain' },
    { name: 'United States' },
]);
