const userModel = require('../models/user');

const findAll = async (req, res) => {
    try {
        const users = await userModel.findAll();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar usuários', error });
    }
};

const findOrFail = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findOrFail(id);
        if (user.length === 0) {
            return res.status(404).json('Usuário não encontrado');
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar usuário', error });
    }
};

const store = async (req, res) => {
    try {
        const createdUser = await userModel.store(req.body);
        return res.status(200).json(createdUser);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao criar usuário', error });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = req.body;
        await userModel.update(id, updatedUser);
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao atualizar usuário', error });
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await userModel.remove(id);
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao excluir usuário', error });
    }
};

module.exports = {
    findAll,
    findOrFail,
    store,
    update,
    remove
};
