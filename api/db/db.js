const { MongoClient } = require('mongodb');

const init = (dbConnectionString) => {
    return MongoClient.connect(dbConnectionString).
        then((db) => {
            return db;
        });
};

module.exports = { init };
