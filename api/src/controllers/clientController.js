const clientModel = require('../models/client');

const findAll = async (req, res) => {
    try {
        const clients = await clientModel.findAll();
        return res.status(200).json(clients);
    } catch (error) {
        console.error(error);
        return res.status(500).json('Erro ao buscar clientes');
    }
};

const findOrFail = async (req, res) => {
    try {
        const {id} = req.params;
        const client = await clientModel.findOrFail(id);

        if (client.length === 0) {
            return res.status(404).json('Não existe esse cliente');
        }

        return res.status(200).json(client);
    } catch (error) {
        console.error(error);
        return res.status(500).json('Erro ao buscar cliente');
    }
};

const store = async (req, res) => {
    try {
        const createdClient = await clientModel.store(req.body);
        return res.status(200).json(createdClient);
    } catch (error) {
        console.error(error);
        return res.status(500).json('Erro ao criar cliente');
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedClient = req.body;

        await clientModel.update(id, updatedClient);

        return res.status(204).json();
    } catch (error) {
        console.error(error);
        return res.status(500).json('Erro ao atualizar cliente');
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;

        await clientModel.remove(id);

        return res.status(204).json();
    } catch (error) {
        console.error(error);
        return res.status(500).json('Erro ao remover cliente');
    }
};

module.exports = {
    findAll,
    findOrFail,
    store,
    update,
    remove
};
