const Joi = require('joi');

const registerSchema = Joi.object({
  user_id: Joi.number().required(),
  date: Joi.date().required(),
  amount: Joi.number().required(),
  category_id: Joi.number().required(),
});

const validateBody = (req, res, next) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  return next();
};

module.exports = { validateBody };
