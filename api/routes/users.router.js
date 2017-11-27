const { Router } = require('express');

const attachTo = (app, data) => {
    const router = new Router();
    const userController = require('./users.controller')(data);

    router
        .post('/', (req, res) => {
            return userController.register(req, res);
        })
        .put('/', (req, res) => {
            return userController.login(req, res);
        })
        .get('/details', (req, res) => {
            return userController.getDetails(req, res);
        });

    app.use('/users', router);
};

module.exports = { attachTo };
