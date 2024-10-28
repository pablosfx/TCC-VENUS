import { useState } from "react";
import "./index.scss";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Login:", { username, password });
  };

  return (
    <div className="outer-container">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="primeira">
            <h1>Bem-Vindo!!!</h1>
            <div className="input-field">
              <input
                type="text"
                placeholder="E-mail"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FaUser className="icon" />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Senha"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="icon" />
            </div>

            <div className="recall-forget">
              <a href="#">Esqueceu sua senha?</a>
            </div>
            <button type="submit">Login</button>
            <div className="signup-link">
              <p>
                Não tem uma conta?   <Link to={'/cadastrar'}> <a href="#">Registrar</a></Link>
              </p>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
