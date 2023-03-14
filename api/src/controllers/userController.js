const bcrypt = require('bcrypt');
const userModel = require('../models/user');

const findAll = async (req, res) => {

    const users = await userModel.findAll();

    return res.status(200).json(users);
};

const findOrFail = async (req, res) => {

    const {id} = req.params;

    const user = await userModel.findOrFail(id);

    if (user.length === 0) {
        return res.status(404).json('Não existe esse usuário');
    }

    return res.status(200).json(user);
};

const store = async (req, res) => {

    const { login, password, email } = req.body;

    // encripta a senha antes de salvar no banco de dados
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await userModel.store({
      login,
      password: hashedPassword,
      email
    });

    return res.status(200).json(createdUser);
};

const update = async (req, res) => {

    const { id } = req.params;

    const { login, password, email } = req.body;

    // encripta a senha antes de salvar no banco de dados
    const hashedPassword = await bcrypt.hash(password, 10);

    await userModel.update(id, {
      login,
      password: hashedPassword,
      email
    });

    return res.status(204).json();
};

const remove = async (req, res) => {

    const { id } = req.params;

    await userModel.remove(id);

    return res.status(204).json();
};

module.exports = {
    findAll,
    findOrFail,
    store,
    update,
    remove
};
