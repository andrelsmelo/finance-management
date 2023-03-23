const Joi = require('joi');
const RevenueType = require('../enums/Revenue');

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

  const categoryId = req.body.category_id;
  if (!Object.values(RevenueType).includes(categoryId)) {
    return res.status(400).json({ message: 'Invalid category_id' });
  }

  return next();
};

module.exports = { validateBody };
