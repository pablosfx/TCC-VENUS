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
          "nome": nome,  // Se for email, altere para "email": nome
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
              navigate('/'); // Redireciona para a página ./app
          }
      } catch (error) {
          toast.error('Erro ao fazer login');
          console.error(error);
      }

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
       <Link to={'/'}> <img className="voltar" src="/assets/images/voltar.png" alt="" /></Link>
      <div className="container">

        <form onSubmit={entrar}>

        <div>

          <div className="primeira">
            <h1>Login-ADM</h1>
            <div className="input-field">
              <input
                type="text"
                placeholder="Usuario"
                required

                value={nome}  

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

                value={senha}
                onChange={(e) => setSenha(e.target.value)} 

              />
              <FaLock className="icon" />
            </div>

            <div className="recall-forget">
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
      <Toaster /> {/* Adiciona o Toaster aqui */}
    </div>
  );
};

export default Login;
