const Connections = require('../../database/connection/connectioncontroller')
const bcrypt = require('bcrypt')
class UsuarioValidator {


    verificarSeExisteUsuarioCadastrado = async (username) => {
        let conec = new Connections()
        let quantidadeRegistros = 0
        const text = 'SELECT * FROM usuario WHERE username=$1'
        const values = [`${username}`]
        await conec.con.connect()
        const result = await conec.con.query(text, values)
        quantidadeRegistros = result.rowCount
        await conec.con.end()
        return quantidadeRegistros
    }

    verificarSeUsernameESenhaSaoValidos=async(username,senha)=>{
        let conec = new Connections()
        const text = 'SELECT * FROM usuario WHERE username=$1'
        const values = [`${username}`]
        await conec.con.connect()
        const resultado = await conec.con.query(text, values)
        await conec.con.end()
        if(resultado.rowCount==0 ){
            return false
        }
       return await bcrypt.compare(senha, resultado.rows[0].senha)
    }
}

module.exports = UsuarioValidator