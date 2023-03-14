const Joi = require('joi');

const userSchema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
});

const validateBody = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = {
  validateBody
};