const usersController = (data) => {
    const register = (req, res, next) => {
        const userData = req.body;

        // data.users.findByNickname(userData)
        //     .then((dbUser) => {
        //         if (dbUser) {
        //             res.redirect('/users/register');
        //         }
        //     })

        data.users.register(userData)
            .then((response) => {
                res.status(200)
                    .send(response);
            })
            .catch((error) => {
                next(error);
            });
    };

    // passport.js handles login
    // const login = (req, res) => {
    // };

    const putDetails = (req, res) => {
        const userData = req.body;

        data.users.putDetails(userData)
            .then((response) => {
                res.status(200)
                    .send(response);
            })
            .catch((error) => {
                return res.json(error);
            });
    };

    return {
        register,
        putDetails,
    };
};

module.exports = usersController;
