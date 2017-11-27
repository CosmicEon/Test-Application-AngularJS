const dataBase = require('./api/db/db');
const constants = require('./api/constants');


dataBase.init(constants.dbString)
    .then((db) => {
        return require('./api/data/users.data').init(db);
    })
    .then((data) => {
        return require('./api/app').init(data);
    })
    .then((app) => {
        app.listen(constants.port, () => {
            console.log(`Server runs on port:${constants.port}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
