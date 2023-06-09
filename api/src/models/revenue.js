const connection = require('../config/database.js');

const findAll = async () => {
  const query = 'SELECT * FROM revenues WHERE deleted_at IS NULL';
  const [registers] = await connection.execute(query);
  return registers;
};

const findOrFail = async (id) => {
  const query = 'SELECT * FROM revenues WHERE id = ? AND deleted_at IS NULL';
  const [register] = await connection.execute(query, [id]);
  return register;
};

const store = async (register) => {
  const { user_id, date, amount, category_id } =
    register;
  const query =
    'INSERT INTO revenues (user_id, date, amount, category_id) VALUES (?, ?, ?, ?)';
  const [createdRegister] = await connection.execute(query, [
    user_id,
    date,
    amount,
    category_id,
  ]);
  return { insertId: createdRegister.insertId };
};

const update = async (id, register) => {
  const { user_id, date, amount, category_id } =
    register;
  const query =
    'UPDATE revenues SET user_id = ?, date = ?, amount = ?, category_id = ? WHERE id = ?';
  const [updatedRegister] = await connection.execute(query, [
    user_id,
    date,
    amount,
    category_id,
    id,
  ]);
  return updatedRegister;
};

const remove = async (id) => {
  const dateUTC = new Date(Date.now());
  const query = 'UPDATE revenues SET deleted_at = ? WHERE id = ?';
  const [deletedRegister] = await connection.execute(query, [dateUTC, id]);
  return deletedRegister;
};

const findClientRegisters = async (user_id) => {
  const query = `
    SELECT
      r.id,
      r.date,
      r.amount,
      c.name,
      c.revenue_type
    FROM finance.revenues AS r
    JOIN finance.categories AS c
      ON r.category_id = c.id
    WHERE r.user_id = ?
      AND r.deleted_at IS NULL`;
      
  const [clientRegisters] = await connection.execute(query, [user_id]);
  return clientRegisters;
};

const findClientRegistersFiltered = async (user_id, start_date, end_date) => {
  const start_date_string = new Date(start_date);
  const end_date_string = new Date(
    new Date(end_date).getTime() + 24 * 60 * 60 * 1000
  );

  const query = `
    SELECT * FROM revenues WHERE user_id = ? AND date BETWEEN ? AND ? AND deleted_at IS NULL
  `;

  const [clientRegistersFiltered] = await connection.execute(query, [
    user_id,
    start_date_string,
    end_date_string,
  ]);

  return clientRegistersFiltered;
};

module.exports = {
  findAll,
  findOrFail,
  store,
  update,
  remove,
  findClientRegisters,
  findClientRegistersFiltered,
};
