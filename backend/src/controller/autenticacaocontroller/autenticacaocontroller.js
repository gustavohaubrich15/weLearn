const UsuarioValidator = require('../../validator/usuariovalidator/usuariovalidator')
const CadastroNovoUsuario= require('../../service/usuarioservice/usuarioservice')
const tokenVerifiy = require('../tokencontroller/tokenverify')
const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

router.route('/login').post(async(req, res) => {
  const { username, senha } = req.body
  verificarLoginSemUsuarioOuSenha(username,senha,res)
  let usuarioValidator = new UsuarioValidator()
  let gerarToken = await usuarioValidator.verificarSeUsernameESenhaSaoValidos(username,senha)
  if(gerarToken){
        jwt.sign({username},'SECRET-KEY',{algorithm:'HS256', expiresIn:'10h'}, function(err,token){
            return res.json({token})
        })
    }else{
        return res.status(404).json({ mensagem: 'Usuário inválido'})
    }
})

router.route('/cadastrar').post(async (req, res) => {
  const { username, senha } = req.body
  verificarLoginSemUsuarioOuSenha(username,senha)
  let usuarioValidator = new UsuarioValidator()
  let numeroRegistros = await usuarioValidator.verificarSeExisteUsuarioCadastrado(username)
  if (numeroRegistros > 0) {
    return res.status(404).json({ mensagem: 'usuário já cadastrado'})
  } else {
    let cadastrado = new CadastroNovoUsuario()
    await cadastrado.cadastrar(username,senha)
    return res.status(200).json({ mensagem: 'Cadastro efetuado com sucesso'})
  }

})

router.route('/token').get((req, res) => {
    tokenVerifiy(req,res)
    return res.status(200).json({ mensagem: 'Autorizado!!', username:res.username})

})


verificarLoginSemUsuarioOuSenha = (username,senha,res) =>{
    if (username === '' || senha === '') {
        return res.status(400).json({
          mensagem: 'Usuario/Senha Inválidos'
        })
      }
}


module.exports = router