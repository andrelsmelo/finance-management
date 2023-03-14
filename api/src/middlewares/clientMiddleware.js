const Joi = require('joi');

const clientSchema = Joi.object({
  name: Joi.string().required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  user_id: Joi.number().required(),
  wage_date: Joi.number().required(),
  wage_value: Joi.number().required()
});

const validateBody = (req, res, next) => {
  const { error } = clientSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = {
  validateBody
};
