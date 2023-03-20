const connection = require('../config/database');


const store = async (type, method, params, error) => {

    const query = 'INSERT INTO logs (type, method, params, error) VALUES ( ?, ?,?,? )';

    await connection.execute(query, [type, method, params, error]);

};

module.exports = {
    store,
};
