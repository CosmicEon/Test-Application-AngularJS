/* globals angular */
angular.module('Register.Module', [])
    .controller('Register.Controller', ['$scope', '$http', '$log', 'COUNTRIES', function ($scope, $http, $rootScope, $location, $log, COUNTRIES) {
        $scope.countries = COUNTRIES;

        $log.log($scope.countries);

        $scope.checkIfValidText = function (input) {
            if (input.value.length > 40 || input.value === '') {
                throw new Error('Should be text with max length of 40 characters');
            }
        };

        $scope.checkIfValidPhoneNum = function (input) {
            // $log.log($scope.phoneField);
            $log.log(input);

            if (typeof input !== 'number') {
                throw new Error('Phone should be a number');
            }

            if ($scope.phoneField.length > 15) {
                throw new Error('Phone should be with max length of 15 digits');
            }
        };

        $scope.registerUser = function (user) {
            if (user.password === user.password2) {
                $http.post('/users/register', user)
                    .success(function (userData) {
                        $rootScope.currentUser = userData;
                        $location.url('/profile');
                    });
            }
        };
    }]);
