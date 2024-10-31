import { useState } from "react";
import "./index.scss";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  async function entrar(e) {
      e.preventDefault();

      const usuario = {
          "nome": nome,
          "senha": senha
      };

      const url = `http://localhost:5010/entrar/`;
      try {
          let resp = await axios.post(url, usuario);
          if (resp.data.erro) {
              toast.error(resp.data.erro);
          } else {
              localStorage.setItem('USUARIO', JSON.stringify(resp.data.usuario));
              localStorage.setItem('TOKEN', resp.data.token);
              navigate('/pagina-adm'); // Redireciona para a página ./app
          }
      } catch (error) {
          toast.error('Erro ao fazer login');
          console.error(error);
      }
  }

  return (
    <div className="outer-container">
       <Link to={'/'}> <img className="voltar" src="/assets/images/voltar.png" alt="" /></Link>
      <div className="container">
        <form onSubmit={entrar}>
          <div className="primeira">
            <h1>Login-ADM</h1>
            <div className="input-field">
              <input
                type="text"
                placeholder="Usuario"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <FaUser className="icon" />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Senha"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <FaLock className="icon" />
            </div>
            <button type="submit">Login</button>
            <div className="signup-link">
            </div>
          </div>
        </form>
      </div>
      <Toaster /> {/* Adiciona o Toaster aqui */}
    </div>
  );
};

export default Login;
