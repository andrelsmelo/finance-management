const connection = require('../config/database.js');

const findAll = async () => {
  const query = 'SELECT * FROM registers WHERE deletedAt IS NULL';
  const [registers] = await connection.execute(query);
  return registers;
};

const findOrFail = async (id) => {
  const query = 'SELECT * FROM registers WHERE id = ? AND deletedAt IS NULL';
  const [register] = await connection.execute(query, [id]);
  return register;
};

const store = async (register) => {
  const { client_id, register_date, value, category_id, revenue_type_id } = register;
  const query = 'INSERT INTO registers (client_id, register_date, value, category_id, revenue_type_id) VALUES (?, ?, ?, ?, ?)';
  const [createdRegister] = await connection.execute(query, [client_id, register_date, value, category_id, revenue_type_id]);
  return { insertId: createdRegister.insertId };
};

const update = async (id, register) => {
  const { client_id, register_date, value, category_id, revenue_type_id } = register;
  const query = 'UPDATE registers SET client_id = ?, register_date = ?, value = ?, category_id = ?, revenue_type_id = ? WHERE id = ?';
  const [updatedRegister] = await connection.execute(query, [client_id, register_date, value, category_id, revenue_type_id, id]);
  return updatedRegister;
};

const remove = async (id) => {
  const dateUTC = new Date(Date.now());
  const query = 'UPDATE registers SET deletedAt = ? WHERE id = ?';
  const [deletedRegister] = await connection.execute(query, [dateUTC, id]);
  return deletedRegister;
};

const findClientRegisters = async (client_id) => {
  const query = `
    SELECT
      r.id,
      r.register_date,
      r.value,
      c.name,
      c.revenue_type
    FROM finance.registers AS r
    JOIN finance.categories AS c
      ON r.category_id = c.id
    WHERE r.client_id = 1
      AND r.deletedAt IS NULL`;
  const [clientRegisters] = await connection.execute(query, [client_id]);
  return clientRegisters;
};


const findClientRegistersFiltered = async (client_id, start_date, end_date) => {
  const start_date_string = new Date(start_date);
  const end_date_string = new Date(new Date(end_date).getTime() + (24 * 60 * 60 * 1000));

  const query = `
    SELECT * FROM registers WHERE client_id = ? AND register_date BETWEEN ? AND ? AND deletedAt IS NULL
  `;

  const [clientRegistersFiltered] = await connection.execute(query, [client_id, start_date_string, end_date_string]);

  return clientRegistersFiltered;
}

module.exports = {
  findAll,
  findOrFail,
  store,
  update,
  remove,
  findClientRegisters,
  findClientRegistersFiltered
};
