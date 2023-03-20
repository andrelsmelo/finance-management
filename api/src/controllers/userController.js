const userModel = require('../models/user');
const { saveLog } = require('../services/logService');

const findAll = async (req, res) => {
  try {
    const users = await userModel.findAll();
    saveLog('info', 'user/findAll', {}, 'Users fetched successfully');
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    saveLog('error', 'user/findAll', {}, error.message);
    return res.status(500).json({ message: 'Error fetching users', error });
  }
};

const findOrFail = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findOrFail(id);
    if (user.length === 0) {
      saveLog('warn', 'user/findOrFail', req.params, 'User not found');
      return res.status(404).json('User not found');
    }
    saveLog('info', 'user/findOrFail', req.params, 'User found successfully');
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    saveLog('error', 'user/findOrFail', req.params, error.message);
    return res.status(500).json({ message: 'Error fetching user', error });
  }
};

const store = async (req, res) => {
  try {
    const createdUser = await userModel.store(req.body);
    saveLog('info', 'user/store', req.params, 'User created successfully');
    return res.status(201).json(createdUser);
  } catch (error) {
    console.error(error);
    saveLog('error', 'user/store', req.params, error.message);
    return res.status(500).json({ message: 'Error creating user', error });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = req.body;
    await userModel.update(id, updatedUser);
    saveLog('info', 'user/update', req.params, 'User updated successfully');
    return res.status(204).json();
  } catch (error) {
    console.error(error);
    saveLog('error', 'user/update', req.params, error.message);
    return res.status(500).json({ message: 'Error updating user', error });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.remove(id);
    saveLog('info', 'user/remove', req.params, 'User removed successfully');
    return res.status(204).json();
  } catch (error) {
    console.error(error);
    saveLog('error', 'user/remove', req.params, error.message);
    return res.status(500).json({ message: 'Error deleting user', error });
  }
};

module.exports = {
  findAll,
  findOrFail,
  store,
  update,
  remove,
};
