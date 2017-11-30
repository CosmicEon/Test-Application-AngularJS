/* globals angular */
angular.module('Register.Module', [])
    .controller('Register.Controller', function (COUNTRIES) {
        const login = this;
        login.countries = COUNTRIES;
    });
