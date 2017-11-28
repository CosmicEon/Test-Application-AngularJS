const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const MongoStore = require('connect-mongo')(session);

const constants = require('./constants');

const applyTo = (app, data) => {
    passport.use(new LocalStrategy((username, password, done) => {
        data.users.checkUser(username, password)
            .then(() => {
                return data.users.findByUsername(username);
            })
            .then((user) => {
                done(null, user);
            })
            .catch((err) => {
                done(err);
            });
    }));

    app.use(session({
        store: new MongoStore({ url: constants.dbString }),
        secret: constants.secret,
        saveUninitialized: true,
        resave: true,
    }));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser((nickname, done) => {
        data.users.findByNickname(nickname)
            .then((user) => {
                done(null, user);
            }).catch(done);
    });

    app.use(passport.initialize());
    app.use(passport.session());
};

module.exports = { applyTo };
