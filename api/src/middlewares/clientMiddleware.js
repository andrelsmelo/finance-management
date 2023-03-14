const validateBody = (req, res, next) => {
    const { body } = req;

    if (body.name === undefined) {
        return res.status(400).json({message: 'Corpo inválido'});
    }

    if (body.name === '') {
        return res.status(400).json({message: 'Propriedades vazias'});
    }
    
    next();
};

module.exports = {
    validateBody
};