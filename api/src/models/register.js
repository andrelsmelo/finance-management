const connection = require('../config/database.js');

const findAll = async () => {
  const query = 'SELECT * FROM register WHERE deletedAt IS NULL';
  const [registers] = await connection.execute(query);
  return registers;
};

const findOrFail = async (id) => {
  const query = 'SELECT * FROM register WHERE id = ? AND deletedAt IS NULL';
  const [register] = await connection.execute(query, [id]);
  return register;
};

const store = async (register) => {
  const { client_id, register_date, value, category_id, revenue_type_id } = register;
  const query = 'INSERT INTO register (client_id, register_date, value, category_id, revenue_type_id) VALUES (?, ?, ?, ?, ?)';
  const [createdRegister] = await connection.execute(query, [client_id, register_date, value, category_id, revenue_type_id]);
  return { insertId: createdRegister.insertId };
};

const update = async (id, register) => {
  const { client_id, register_date, value, category_id, revenue_type_id } = register;
  const query = 'UPDATE register SET client_id = ?, register_date = ?, value = ?, category_id = ?, revenue_type_id = ? WHERE id = ?';
  const [updatedRegister] = await connection.execute(query, [client_id, register_date, value, category_id, revenue_type_id, id]);
  return updatedRegister;
};

const remove = async (id) => {
  const dateUTC = new Date(Date.now());
  const query = 'UPDATE register SET deletedAt = ? WHERE id = ?';
  const [deletedRegister] = await connection.execute(query, [dateUTC, id]);
  return deletedRegister;
};

module.exports = {
  findAll,
  findOrFail,
  store,
  update,
  remove
};
