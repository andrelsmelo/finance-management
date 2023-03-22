const Joi = require('joi');

const categorySchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});

const validateBody = (req, res, next) => {
  const { error } = categorySchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  return next();
};

module.exports = { validateBody };
