const expenseModel = require('../models/expense');
const { saveLog } = require('../services/logService');

const findAll = async (req, res) => {
  try {
    const registers = await expenseModel.findAll();

    saveLog('info', 'register/findAll', {}, 'Registers fetched successfully');
    return res.status(200).json(registers);
  } catch (error) {
    console.error(error);

    saveLog('error', 'register/findAll', {}, error.message);
    return res.status(500).json({ message: 'Error fetching registers', error });
  }
};

const findOrFail = async (req, res) => {
  try {
    const { id } = req.params;

    const register = await expenseModel.findOrFail(id);

    if (register.length === 0) {
      saveLog('warn', 'register/findOrFail', req.params, 'Register not found');
      return res.status(404).json('Register not found');
    }

    saveLog('info', 'register/findOrFail', req.params, 'Register found successfully');
    return res.status(200).json(register);
  } catch (error) {
    console.error(error);
    saveLog('error', 'register/findOrFail', req.params, error.message);
    return res.status(500).json({ message: 'Error fetching register', error });
  }
};

const findClientRegisters = async (req, res) => {
  try {
    const { user_id } = req.params;
    const clientRegisters = await expenseModel.findClientRegisters(user_id);

    if (clientRegisters.length === 0) {
      saveLog('warn', 'register/findClientRegisters', req.params, 'Client registers not found');
      return res.status(404).json('Client registers not found');
    }
    saveLog('info', 'register/findClientRegisters', req.params, 'Client registers found successfully');
    return res.status(200).json(clientRegisters);
  } catch (error) {
    console.error(error);
    saveLog('error', 'register/findClientRegisters', req.params, error.message);
    return res.status(500).json({ message: 'Error fetching client registers', error });
  }
};

const findClientRegisterGraphs = async (req, res) => {
  try {
    const { user_id } = req.params;
    const clientRegisters = await expenseModel.findClientRegisterGraphs(user_id);

    if (clientRegisters.length === 0) {
      saveLog('warn', 'register/findClientRegisters', req.params, 'Client registers graphs not found');
      return res.status(404).json('Client registers not found');
    }
    saveLog('info', 'register/findClientRegisters', req.params, 'Client registers graphs found successfully');
    return res.status(200).json(clientRegisters);
  } catch (error) {
    console.error(error);
    saveLog('error', 'register/findClientRegisters', req.params, error.message);
    return res.status(500).json({ message: 'Error fetching client registers graphs', error });
  }
}

const findClientRegistersFiltered = async (req, res) => {
  try {
    const { user_id, start_date, end_date } = req.params;

    const clientRegistersFiltered = await expenseModel.findClientRegistersFiltered( user_id, start_date, end_date);

    if (clientRegistersFiltered.length === 0) {
      saveLog('warn', 'register/findClientRegisters', req.params, 'Filtered client registers not found');
      return res.status(404).json('Filtered client registers not found');
    }
    saveLog('info', 'register/findClientRegistersFiltered', req.params, 'Filtered client registers found successfully');
    return res.status(200).json(clientRegistersFiltered);
  } catch (error) {
    console.error(error);

    saveLog('error', 'register/findClientRegistersFiltered', req.params, error.message);
    return res.status(500).json({ messatge: 'Error fetching filtered client registers', error });
  }
};

const store = async (req, res) => {
  try {
    const createdRegister = await expenseModel.store(req.body);

    saveLog('info', 'register/store', req.body, 'Register created successfully');
    return res.status(201).json(createdRegister);
  } catch (error) {
    console.error(error);

    saveLog('error', 'register/store', req.params, error.message);
    return res.status(500).json({ message: 'Error creating register', error });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRegister = req.body;

    await expenseModel.update(id, updatedRegister);

    saveLog('info', 'register/update', req.params, 'Register updated successfully');
    return res.status(204).json();
  } catch (error) {
    console.error(error);

    saveLog('error', 'register/update', req.params, error.message);
    return res.status(500).json({ message: 'Error updating register', error });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    await expenseModel.remove(id);

    saveLog('info', 'category/remove', req.params, 'Register removed successfully');
    return res.status(204).json();
  } catch (error) {
    console.error(error);

    saveLog('error', 'register/remove', req.params, error.message);
    return res.status(500).json({ message: 'Error removing register', error });
  }
};

module.exports = {
  findAll,
  findOrFail,
  store,
  update,
  remove,
  findClientRegisters,
  findClientRegistersFiltered,
  findClientRegisterGraphs
};
