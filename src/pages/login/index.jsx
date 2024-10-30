import { useState } from "react";
import "./index.scss";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; 
import axios from 'axios';

const Login = () => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function entrar() {
    const usuario = {
      "nome": nome,
      "usuario": senha,
    };
    const url = 'YOUR_API_URL_HERE';
    try {
      let resp = await axios.post(url, usuario);

      if (resp.data.erro !== undefined) {
        alert(resp.data.erro);
      } else {
        localStorage.setItem('usuario', resp.data.token);
        navigate('/consulta');
      }
    } catch (error) {
      console.error("Erro ao fazer login", error);
      alert("Ocorreu um erro. Tente novamente.");
    }
  }

  return (
    <div className="outer-container">
      <div className="container">
        <div>
          <div className="primeira">
            <h1>Bem-Vindo!!!</h1>
            <div className="input-field">
              <input
                type="text"
                placeholder="E-mail"
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

            <div className="recall-forget">
              <a href="#">Esqueceu sua senha?</a>
            </div>
            <button type="button" onClick={entrar}>Login</button> {}
            <div className="signup-link">
              <p>
                Não tem uma conta? <Link to='/cadastrar'>Registrar</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
