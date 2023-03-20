const clientModel = require('../models/client');
const { saveLog } = require('../services/logService');

const findAll = async (req, res) => {
  try {
    const clients = await clientModel.findAll();

    saveLog('info', 'client/findAll', {}, 'Clients fetched successfully');
    return res.status(200).json(clients);
  } catch (error) {
    console.error(error);

    saveLog('error', 'client/findAll', {}, error.message);
    return res.status(500).json({ message: 'Error fetching clients', error });
  }
};

const findOrFail = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await clientModel.findOrFail(id);
    
    if (client.length === 0) {
      saveLog('warn', 'client/findOrFail', req.params, 'Client not found');
      return res.status(404).json('Client not found');
    }

    saveLog('info', 'client/findOrFail', req.params, 'Client found successfully');
    return res.status(200).json(client);
  } catch (error) {
    console.error(error);

    saveLog('error', 'client/findOrFail', req.params, error.message);
    return res.status(500).json({ message: 'Error fetching client', error });
  }
};

const findClientByUserid = async (req, res) => {
  try {
    const { id } = req.params;

    const client = await clientModel.findClientByUserid(id);

    saveLog('info', 'client/findClientByUserid',req.params,'Client found by user id successfully');
    return res.status(200).json(client);
  } catch (error) {
    console.error(error);

    saveLog('error', 'client/findClientByUserid', req.params, error.message);
    return res.status(500).json({ message: 'Error fetching client by user_id', error });
  }
};

const store = async (req, res) => {
  try {
    const createdClient = await clientModel.store(req.body);

    saveLog('info', 'client/store', req.body, 'Client created successfully');
    return res.status(201).json(createdClient);
  } catch (error) {
    console.error(error);

    saveLog('error', 'client/store', req.body, error.message);
    return res.status(500).json({ message: 'Error creating client', error });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedClient = req.body;

    await clientModel.update(id, updatedClient);

    saveLog('info', 'client/update', req.params, 'Client updated successfully');
    return res.status(204).json();
  } catch (error) {
    console.error(error);

    saveLog('error', 'client/update', req.params, error.message);
    return res.status(500).json({ message: 'Error updating client', error });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await clientModel.remove(id);

    saveLog('info', 'client/remove', req.params, 'Client removed successfully');
    return res.status(204).json();
  } catch (error) {
    console.error(error);

    saveLog('error', 'client/remove', req.params, error.message);
    return res.status(500).json({ message: 'Error removing client', error });
  }
};

module.exports = {
  findAll,
  findOrFail,
  store,
  update,
  remove,
  findClientByUserid,
};
