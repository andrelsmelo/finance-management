const Joi = require('joi');
const ExpenseType = require('../enums/Expense');
const userModel = require('../models/user');

const registerSchema = Joi.object({
  user_id: Joi.number().required(),
  date: Joi.date().required(),
  amount: Joi.number().required(),
  category_id: Joi.number().required(),
});

const validateBody = async (req, res, next) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const user_id = req.body.user_id;
  const [user] = await userModel.findOrFail(user_id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const categoryId = req.body.category_id;
  if (!Object.values(ExpenseType).includes(categoryId)) {
    return res.status(400).json({ message: 'Invalid category_id' });
  }

  return next();
};

module.exports = { validateBody };
