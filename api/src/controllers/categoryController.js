const categoryModel = require('../models/category');
const { saveLog } = require('../services/logService');

const findAll = async (req, res) => {
    try {
        const categories = await categoryModel.findAll();
        saveLog('info', 'category/findAll', {}, 'Categories fetched successfully');
        return res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        saveLog('error', 'category/findAll', {}, error.message);
        return res.status(500).json({ message: 'Error fetching Categories' });
    }
};

const findOrFail = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await categoryModel.findOrFail(id);

        if (category.length === 0) {
            saveLog('warn', 'category/findOrFail', req.params, 'Category not found');
            return res.status(404).json('Category not found');
        }
        saveLog('info', 'category/findOrFail', req.params, 'Category found successfully');
        return res.status(200).json(category);
    } catch (error) {
        console.error(error);
        saveLog('error', 'category/findOrFail', req.params, error.message);
        return res.status(500).json({ message: 'Error fetching category' });
    }
};

const store = async (req, res) => {
    try {
        const createdCategory = await categoryModel.store(req.body);
        saveLog('info', 'category/store', req.body, 'Category created successfully');
        return res.status(201).json(createdCategory);
    } catch (error) {
        console.error(error);
        saveLog('error', 'category/store', req.body, error.message);
        return res.status(500).json({ message: 'Error creating category' });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCategory = req.body;
        await categoryModel.update(id, updatedCategory);
        saveLog('info', 'category/update', req.params, 'Category updated successfully');
        return res.status(204).json();
    } catch (error) {
        console.error(error);
        saveLog('error', 'category/update', req.params, error.message);
        return res.status(500).json({ message: 'Error updating category', error });
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await categoryModel.remove(id);
        saveLog('info', 'category/remove', req.params, 'Category removed successfully');
        return res.status(204).json();
    } catch (error) {
        console.error(error);
        saveLog('error', 'category/remove', req.params, error.message);
        return res.status(500).json({ message: 'Error deleting category', error});
    }
};

module.exports = {
    findAll,
    findOrFail,
    store,
    update,
    remove,
};
