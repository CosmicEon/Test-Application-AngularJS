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
            resolve: {
                logincheck: myApp.checkLoggedin,
            },
        })
        .otherwise({ redirectTo: '/' });
});

myApp.controller('App.Controller', ['$scope', '$log', function ($scope, $log) {
    $scope.logoutUser = function () {
        $http.post('/logout')
            .success(function () {
                $rootScope.currentUser = null;
                $location.url('/home');
            });
    };

    const checkLoggedin = function ($q, $timeout, $http, $location, $rootScope) {
        const deferred = $q.defer();

        $http.get('/users/login').success(function (user) {
            $rootScope.errorMessage = null;
            // User is Authenticated
            if (user !== '0') {
                $rootScope.currentUser = user;
                deferred.resolve();
            } else { // User is not Authenticated
                $rootScope.errorMessage = 'You need to log in.';
                deferred.reject();
                $location.url('/login');
            }
        });

        return deferred.promise;
    };
}]);

myApp.value('COUNTRIES', [
    { name: 'Bulgaria' },
    { name: 'England' },
    { name: 'France' },
    { name: 'Germany' },
    { name: 'Spain' },
    { name: 'United States' },
]);
