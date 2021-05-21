const Connections = require('../../database/connection/connectioncontroller')
const bcrypt = require('bcrypt')


class CadastroNovoUsuario {


    cadastrar = async (username, senha) => {
        let conec = new Connections()
        const text = 'INSERT INTO usuario(username,senha) VALUES($1,$2)'
        let senhaDb = await bcrypt.hash(senha,10)
        const values = [`${username}`,`${senhaDb}`]
        await conec.con.connect()
        const result = await conec.con.query(text, values)
        await conec.con.end()
    }

   
}

module.exports = CadastroNovoUsuario