import React, { Fragment, useState} from 'react';
import { ReactSVG } from 'react-svg'
import origami from '../../images/origami.svg'
import { Button, Container } from '../../component/index'
import { LoginService, SignUpService } from '../../services/index'
import './style.css'
import { useHistory } from 'react-router';

export const LoginScreen: React.FC = () => {

  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [cadastrarUsuario, setcadastrarUsuario] = useState(false);
  const history = useHistory();

  async function logar() {
    const autenticado = await LoginService(username, senha)
    if (autenticado.autorizado) {
      history.push('/home')
    }
  }
  function cadastrar() {
    SignUpService(username, senha)
  }

  function redirecionar() {
    setcadastrarUsuario(!cadastrarUsuario)
  }

  return (
    <Fragment>
      <Container page={'login'}>
        <div className="esquerda">
          <ReactSVG src={origami} className="origami" />
          <div className="descricao">
            <div>We Learn focado em verificar conhecimentos</div>
            <div className="final">"A diferença entre passado , presente e futuro é somente uma persistente ilusão"</div>
          </div>
        </div>
        <form>
          <div className="informacao">
            <div className="titulo">WeLearn</div>
            <div className="frase">Bem vindo ao WeLearn</div>
            <div className="dados">
              <div>Username</div>
              <input type="text" name="username" autoComplete="off" required onChange={e => setUsername(e.target.value)}></input>
              <div className="linha"></div>
            </div>
            <div className="dados">
              <div>Senha</div>
              <input type="password" name="senha" required onChange={e => setSenha(e.target.value)}></input>
              <div className="linha"></div>
            </div>

            {!cadastrarUsuario && <div className="cadastro">
              <div onClick={logar}>
                <Button nome={"Sign in"} />
              </div>
              <div className="novoCadastro"> Novo por Aqui?
                  <div className="criarConta" onClick={redirecionar}> Crie uma Conta</div>
              </div>
            </div>}

            {cadastrarUsuario && <div className="cadastro">
              <div onClick={cadastrar}>
                <Button nome={"Sign up"} />
              </div>
              <div className="novoCadastro"> Já é de casa?
                  <div className="criarConta" onClick={redirecionar}> Loggar na Conta</div>
              </div>
            </div>}
          </div>
        </form>
      </Container>
    </Fragment>
  )

}