const bcrypt = require('bcrypt');
const connection = require('../config/database.js');

const findAll = async () => {
    const query = 'SELECT * FROM users WHERE deletedAt IS NULL';
    const [users] = await connection.execute(query);
    return users;
};

const findOrFail = async (id) => {
    const query = 'SELECT * FROM users WHERE id = ? and deletedAt IS NULL';
    const [user] = await connection.execute(query, [id]);
    return user;
};

const store = async (user) => {
    const { login, password, email } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (login, password, email) VALUES (?, ?, ?)';
    const [createdUser] = await connection.execute(query, [login, hashedPassword, email]);
    return { insertId: createdUser.insertId };
};

const update = async (id, user) => {
    const { login, password, email } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'UPDATE users SET login = ?, password = ?, email = ? WHERE id = ?';
    const [updatedUser] = await connection.execute(query, [login, hashedPassword, email, id]);
    return updatedUser;
};

const remove = async (id) => {
    const dateUTC = new Date(Date.now());
    const query = 'UPDATE users SET deletedAt = ? WHERE id = ?';
    const [deletedUser] = await connection.execute(query, [dateUTC, id]);
    return deletedUser;
};

module.exports = {
    findAll,
    findOrFail,
    store,
    update,
    remove
};
