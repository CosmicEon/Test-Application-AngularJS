const init = (db) => {
    const userDb = db.collection('users');
    // TODO
    const register = (nickName, password, email, phone, country) => {
        return new Promise((resolve, reject) => {
            // userDb.findOne();

        });
    };

    return {
        register,
    };
};

module.exports = { init };
