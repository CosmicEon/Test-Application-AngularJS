const userData = require('./users/users.data');

const init = (db) => {
    return {
        users: userData.init(db),
    };
};

module.exports = { init };
