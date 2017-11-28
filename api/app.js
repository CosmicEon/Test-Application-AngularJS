const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const init = (data) => {
    const app = express();

    app.use('/app', express.static('app'));

    app.use(cors());
    app.use(morgan('dev', {
        skip: (req, res) => {
            return res.statusCode < 400;
        },
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    require('./passport').applyTo(app, data);

    require('./routes/users.router').attachTo(app, data);

    return app;
};

module.exports = { init };
