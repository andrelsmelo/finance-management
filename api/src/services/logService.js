const logModel = require('../models/logError');

const saveLog = async (type, method, params, err) => {
    
    const value = [];
    value.push(err);
    const error = JSON.stringify(value);

    logModel.store(type, method, params, error);
}

module.exports = {
    saveLog
};