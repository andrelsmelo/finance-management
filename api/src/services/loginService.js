const connection = require('../config/database.js');

const findClientByUserid = async (id) => {
    const query = 'SELECT * FROM clients WHERE user_id = ? and deleted_at IS NULL';

    const [client] = await connection.execute(query, [id]);
    return client;
}

module.exports = {
    findClientByUserid
};