const registerModel = require('../models/register');

const findAll = async (req, res) => {
    try {
        const registers = await registerModel.findAll();
        return res.status(200).json(registers);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar registros', error });
    }
};

const findOrFail = async (req, res) => {
    try {
        const { id } = req.params;
        const register = await registerModel.findOrFail(id);
        if (register.length === 0) {
            return res.status(404).json('Registro não encontrado');
        }
        return res.status(200).json(register);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar registro', error });
    }
};

const store = async (req, res) => {
    try {
        const createdRegister = await registerModel.store(req.body);
        return res.status(200).json(createdRegister);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao criar registro', error });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRegister = req.body;
        await registerModel.update(id, updatedRegister);
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao atualizar registro', error });
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await registerModel.remove(id);
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao excluir registro', error });
    }
};

module.exports = {
    findAll,
    findOrFail,
    store,
    update,
    remove
};
