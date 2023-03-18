
var jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if(!token) {
        res.status(401).json({msg: 'Acesso negado!'})
    }

    try {
        const secret = process.env.SECRET

        jwt.verify(token, secret)

        next()
    } catch (error) {
        res.status(400).json({msg: 'token invalido'})
    }
}

module.exports = {verifyToken};
