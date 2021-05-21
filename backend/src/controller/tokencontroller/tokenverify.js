const jwt = require('jsonwebtoken')

const TokenVerify = (req, res) =>{
    const token = req.header('auth-token')
    jwt.verify(token, 'SECRET-KEY', (err, decoded) => {
        if (err) return res.status(401).json({ mensagem: 'Não está autorizado!!'});
        res.username = decoded.username;
    })

}


module.exports = TokenVerify