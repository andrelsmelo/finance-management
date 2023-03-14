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

const findClientRegisters = async (req, res) => {
    try {
        const { client_id } = req.params;
        const clientRegisters = await registerModel.findClientRegisters(client_id);

        if (clientRegisters.length === 0) {
            return res.status(404).json('Registro não encontrado');
        }
        return res.status(200).json(clientRegisters)
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar registro do cliente', error})
    }
}

const findClientRegistersFiltered = async (req, res) => {
    try {
        const { client_id, start_date, end_date } = req.params;

        console.log(req.params)
        const clientRegistersFiltered = await registerModel.findClientRegistersFiltered(client_id, start_date, end_date);
        return res.status(200).json(clientRegistersFiltered)
    } catch (error) {
        return res.status(500).json({ messatge: 'Erro ao aplicar filtro', error})
    }
}

module.exports = {
    findAll,
    findOrFail,
    store,
    update,
    remove,
    findClientRegisters,
    findClientRegistersFiltered
};
