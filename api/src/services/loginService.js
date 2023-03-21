const connection = require('../config/database.js');

const findClientByUserid = async (id) => {
    const query = 'SELECT * FROM clients WHERE user_id = ? and deletedAt IS NULL';

    const [client] = await connection.execute(query, [id]);
    console.log(client)
    return client;
}

module.exports = {
    findClientByUserid
};