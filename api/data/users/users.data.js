const { User } = require('./user.model');

const init = (db) => {
    const userDb = db.collection('users');

    const register = (userData) => {
        // userData -> nickName, password, email, phone, country
        console.log(userData);

        return userDb.findOne({ nickname: userData.nickname })
            .then((name) => {
                if (name) {
                    throw new Error('User already exists!');
                }

                return userDb.findOne({ email: userData.email });
            })
            .then((email) => {
                if (email) {
                    throw new Error('Email already used!');
                }

                const createUser = new User(userData.nickname, userData.password,
                    userData.email, userData.phone, userData.country);

                return userDb.insert(createUser);
            })
            .catch((error) => {
                return console.log(error);
            });
    };

    const putDetails = (userData) => {
        const user = userData.email;
        const userNickname = userData.nickname;

        console.log(user, userNickname);
        return userDb.updateOne(
            { user },
            { $set: { nickname: userNickname } })
            .catch((error) => {
                return console.log(error);
            });
    };

    const findByNickname = (nickname) => {
        return userDb.findOne({ nickName: nickname });
    };

    const checkUser = (nickname, password) => {
        return userDb.findByNickname(nickname)
            .then((user) => {
                if (!user) {
                    throw new Error('Invalid user');
                }

                if (user.password !== password) {
                    throw new Error('Invalid password');
                }

                return true;
            });
    };

    return {
        register,
        putDetails,
        findByNickname,
        checkUser,
    };
};

module.exports = { init };
