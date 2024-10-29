import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./index.scss";
import { Link } from "react-router-dom";
import axios from "axios";


const Login = () => {
    const [email, setemail] = useState("");
    const [Telefone, settelefone] = useState("");
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
                        <div className="cadas">Registrar-se</div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Nome"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Telefone"
                                required
                                value={Telefone}
                                onChange={(e) => settelefone(e.target.value)}
                            />

                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="E-mail"
                                required
                                value={email}
                                onChange={(e) => setemail(e.target.value)} 
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
                        <button className="butao" type="submit">Registrar-se</button>
                        <div className="signup-link">


                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
