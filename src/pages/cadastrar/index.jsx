import { useState, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./index.scss";

const Login = () => {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState("");
    const [Telefone, setTelefone] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const consultar = async () => {
        const paramCorpo = {
            "email": email,
            "telefone": Telefone,
            "nome": nome,
            "senha": senha,
        };
        if (id === undefined) {
            const url = `http://localhost:5010/clientes?x-access-token=${token}`;
            await axios.post(url, paramCorpo);
        } else {
            const url = `http://localhost:5010/clientes/${id}?x-access-token=${token}`;
            let resp = await axios.get(url);
            let dados = resp.data;

            setEmail(dados.email);
            setTelefone(dados.telefone);
            setNome(dados.nome);
            setSenha(dados.senha);
        }
    };

    useEffect(() => {
        const usu = localStorage.getItem('USUARIO');
        setToken(usu);
        if (usu === undefined) {
            navigate('/');
        }
        if (id) {
        consultar();
        }
    }, [id, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

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
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Telefone"
                                required
                                value={Telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="E-mail"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-field">
                            <input
                                type="password" // Corrigido de "senha" para "password"
                                placeholder="Senha"
                                required
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <FaLock className="icon" />
                        </div>
                        <button  className="butao" type="submit">Registrar-se</button>
                        <div className="signup-link"></div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
