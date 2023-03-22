const userModel = require('../models/user');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { findClientByUserid } = require('../services/loginService');


  async function login(req, res) {

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

      const token = jwt.sign({ userId: user.id }, secret);
      
      return res.status(200).json({ token: token, user_id: user.id });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
  

  module.exports = { login };
