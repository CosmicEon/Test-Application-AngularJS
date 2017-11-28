const { Router } = require('express');
const passport = require('passport');


const attachTo = (app, data) => {
    const userController = require('./users.controller')(data);
    const router = new Router();

    router
        .post('/register', (req, res) => {
            return userController.register(req, res);
        })
        .post('/login', passport.authenticate('local', {
            successRedirect: '/details',
            failureRedirect: '/users/login',
            failureFlash: true,
        }))
        .put('/details', (req, res) => {
            return userController.putDetails(req, res);
        });

    app.use('/users', router);
};

module.exports = { attachTo };
