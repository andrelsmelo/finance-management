const categoryModel = require('../models/category');

const findAll = async (req, res) => {
  try {
    const categories = await categoryModel.findAll();
    return res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao buscar categorias' });
  }
};

const findOrFail = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findOrFail(id);

    if (category.length === 0) {
      return res.status(404).json('Não existe essa categoria');
    }

    return res.status(200).json(category);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao buscar categoria' });
  }
};

const store = async (req, res) => {
  try {
    const createdCategory = await categoryModel.store(req.body);
    return res.status(201).json(createdCategory);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao criar categoria' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCategory = req.body;
    await categoryModel.update(id, updatedCategory);
    return res.status(204).json();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao atualizar categoria' });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await categoryModel.remove(id);
    return res.status(204).json();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao remover categoria' });
  }
};

module.exports = {
  findAll,
  findOrFail,
  store,
  update,
  remove,
};
