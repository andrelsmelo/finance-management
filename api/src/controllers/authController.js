const userModel = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = async (req, res) => {
  try {
    const { email, password } = req.body;
    const secret = process.env.SECRET;
    const [user] = await userModel.findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Usuario nao encontrado.' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Senha incorreta.' });
    }
    const options = { expiresIn: '1h' };

    const payload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    const token = jwt.sign(payload, secret, options);
    return res.status(200).json({ token: token, payload: payload });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { generateToken };
