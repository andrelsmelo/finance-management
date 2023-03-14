const connection = require('../config/database.js');


const findAll = async () => {

    const query = 'SELECT * FROM clients WHERE deletedAt IS NULL';

    const [clients] = await connection.execute(query);

    return clients;
};

const findOrFail = async (id) => {

    const query = 'SELECT * FROM clients WHERE id = ? and deletedAt IS NULL';

    const [client] = await connection.execute(query, [id]);

    return client;
};

const store = async (client) => {

    const { name, gender, wage_date, wage_value } = client;

    const dateUTC = new Date(Date.now());

    const query = 'INSERT INTO clients (user_id, name, gender, wage_date, wage_value, createdAt, updatedAt) VALUES ( ?,?,?,?,?,?,? )';

    const [createdClient] = await connection.execute(query, [name, gender, wage_date, wage_value, dateUTC, dateUTC]);

    return { insertId: createdClient.insertId};

};

const update = async (id, client) => {

    const { name, gender, wage_date, wage_value } = client;

    const dateUTC = new Date(Date.now());

    const query = 'UPDATE clients SET name = ?, gender = ?, wage_date = ?, wage_value = ? updatedAt = ? WHERE id = ?';

    const [updatedClient] = await connection.execute(query, [name, gender, wage_date, wage_value, dateUTC, id]);

    return updatedClient;
};

const remove = async (id) => {

    const dateUTC = new Date(Date.now());

    const query = 'UPDATE clients SET deletedAt = ? WHERE id = ?';

    const [deletedClient] = await connection.execute(query, [dateUTC, id]);

    return deletedClient;
};

module.exports = {
    findAll,
    findOrFail,
    store,
    update,
    remove
};