const registerModel = require('../models/register');
const { saveLog } = require('../services/logService');

const findAll = async (req, res) => {
    try {
        const registers = await registerModel.findAll();
        saveLog('info', 'register/findAll', {}, 'Registers fetched successfully');
        return res.status(200).json(registers);
    } catch (error) {
        console.error(error);
        saveLog('error', 'register/findAll', {}, error.message);
        return res.status(500).json({ message: 'Erro ao buscar registros', error });
    }
};

const findOrFail = async (req, res) => {
    try {
        const { id } = req.params;
        const register = await registerModel.findOrFail(id);
        if (register.length === 0) {
            saveLog('warn', 'register/findOrFail', req.params, 'Registro não encontrado');
            return res.status(404).json('Registro não encontrado');
        }
        saveLog('info', 'register/findOrFail', req.params, 'Register found successfully');
        return res.status(200).json(register);
    } catch (error) {
        console.error(error);
        saveLog('error', 'register/findOrFail', req.params, error.message);
        return res.status(500).json({ message: 'Erro ao buscar registro', error });
    }
};

const findClientRegisters = async (req, res) => {
    try {
        const { client_id } = req.params;
        const clientRegisters = await registerModel.findClientRegisters(client_id);

        if (clientRegisters.length === 0) {
            saveLog('warn', 'register/findClientRegisters', req.params, 'Registros não encontrados');
            return res.status(404).json('Registro não encontrado');
        }
        return res.status(200).json(clientRegisters)
    } catch (error) {
        console.error(error);
        saveLog('error', 'register/findClientRegisters', req.params, error.message);
        return res.status(500).json({ message: 'Erro ao buscar registro do cliente', error})
    }
}

const findClientRegistersFiltered = async (req, res) => {
    try {
        const { client_id, start_date, end_date } = req.params;

        const clientRegistersFiltered = await registerModel.findClientRegistersFiltered(client_id, start_date, end_date);
        if (clientRegistersFiltered.length === 0) {
            saveLog('warn', 'register/findClientRegisters', req.params, 'Registros não encontrados');
            return res.status(404).json('Registro não encontrado');
        }
        return res.status(200).json(clientRegistersFiltered)
    } catch (error) {
        console.error(error);
        saveLog('error', 'register/findClientRegistersFiltered', req.params, error.message);
        return res.status(500).json({ messatge: 'Erro ao aplicar filtro', error})
    }
}

const store = async (req, res) => {
    try {
        const createdRegister = await registerModel.store(req.body);
        saveLog('info', 'register/store', req.body, 'Register created successfully');
        return res.status(201).json(createdRegister);
    } catch (error) {
        console.error(error);
        saveLog('error', 'register/store', req.params, error.message);
        return res.status(500).json({ message: 'Erro ao criar registro', error });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRegister = req.body;
        await registerModel.update(id, updatedRegister);
        saveLog('info', 'register/update', req.params, 'Register updated successfully');
        return res.status(204).json();
    } catch (error) {
        console.error(error);
        saveLog('error', 'register/update', req.params, error.message);
        return res.status(500).json({ message: 'Erro ao atualizar registro', error });
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await registerModel.remove(id);
        saveLog('info', 'category/remove', req.params, 'Register removed successfully');
        return res.status(204).json();
    } catch (error) {
        console.error(error);
        saveLog('error', 'register/remove', req.params, error.message);
        return res.status(500).json({ message: 'Erro ao excluir registro', error });
    }
};

module.exports = {
    findAll,
    findOrFail,
    store,
    update,
    remove,
    findClientRegisters,
    findClientRegistersFiltered
};
