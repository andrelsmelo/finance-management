const connection = require('../config/database');

const findAll = async () => {
  const query = 'SELECT * FROM categories WHERE deletedAt IS NULL';
  const [categories] = await connection.execute(query);
  return categories;
};

const findOrFail = async (id) => {
  const query = 'SELECT * FROM categories WHERE id = ? AND deletedAt IS NULL';
  const [category] = await connection.execute(query, [id]);
  return category;
};

const store = async (category) => {
  const { name } = category;
  const query = 'INSERT INTO categories (name) VALUES (?)';
  const [createdCategory] = await connection.execute(query, [name]);
  return { insertId: createdCategory.insertId };
};

const update = async (id, category) => {
  const { name } = category;
  const query = 'UPDATE categories SET name = ? WHERE id = ?';
  const [updatedCategory] = await connection.execute(query, [name, id]);
  return updatedCategory;
};

const remove = async (id) => {
  const dateUTC = new Date(Date.now());
  const query = 'UPDATE categories SET deletedAt = ? WHERE id = ?';
  const [deletedCategory] = await connection.execute(query, [dateUTC, id]);
  return deletedCategory;
};

module.exports = {
  findAll,
  findOrFail,
  store,
  update,
  remove,
};
