const clientModel = require('../models/client');

const findAll = async (req, res) => {

    const clients = await clientModel.findAll();

    return res.status(200).json(clients);
};

const findOrFail = async (req, res) => {

    const {id} = req.params;

    const client = await clientModel.findOrFail(id);

    if (client.length === 0) {
        return res.status(404).json('Não existe esse cliente');
    }

    return res.status(200).json(client);
};

const store = async (req, res) => {

    const createdClient = await clientModel.store(req.body);

    return res.status(200).json(createdClient);
};

const update = async (req, res) => {

    const { id } = req.params;

    const updatedClient = req.body;

    await clientModel.update(id, updatedClient);

    return res.status(204).json();
};

const remove = async (req, res) => {

    const { id } = req.params;

    await clientModel.remove(id);

    return res.status(204).json();
};

module.exports = {
    findAll,
    findOrFail,
    store,
    update,
    remove
};