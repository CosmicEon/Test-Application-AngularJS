/* globals angular */
const myApp = angular.module('myApp', [
    'ngRoute',
    'Login.Module',
    'Register.Module',
    'Profile.Module',
    'Home.Module',
]);

myApp.config(function ($locationProvider, $routeProvider) {
    // $locationProvider.hasPrefix('!');

    $routeProvider
        .when('/', {
            templateUrl: 'home/home.template.html',
            controller: 'Home.Controller',
        })
        .when('/login', {
            templateUrl: 'user/login/login.template.html',
            controller: 'Login.Controller',
        })
        .when('/register', {
            templateUrl: 'user/register/register.template.html',
            controller: 'Register.Controller',
        })
        .when('/profile', {
            templateUrl: 'user/profile/profile.template.html',
            controller: 'Profile.Controller',
        })
        .otherwise({ redirectTo: '/' });
});


myApp.value('COUNTRIES', [
    { name: 'Bulgaria' },
    { name: 'England' },
    { name: 'France' },
    { name: 'Germany' },
    { name: 'Spain' },
    { name: 'United States' },
]);
