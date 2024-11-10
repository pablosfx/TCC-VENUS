import { useState, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./index.scss";

const Login = () => {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const registrar = async () => {
        try {
            const url = `http://localhost:5010/cadastro`;
            const paramCorpo = {
                nome,
                email,
                senha,
            };

            await axios.post(url, paramCorpo);

            navigate('/login');
        } catch (error) {
            console.error("Erro ao registrar:", error.response?.data || error.message);
            alert("Erro ao registrar. Verifique os dados e tente novamente.");
        }
    };

    const consultar = async () => {
        try {
            const url = `http://localhost:5010/cadastro/${id}`;
            let resp = await axios.get(url);
            let dados = resp.data;

            setEmail(dados.email);
            setNome(dados.nome);
            setSenha(dados.senha);
        } catch (error) {
            console.error("Erro ao consultar:", error.response?.data || error.message);
            alert("Erro ao carregar dados do usuário.");
        }
    };

    useEffect(() => {
        const usu = localStorage.getItem('USUARIO');
        if (!usu) {
            navigate('/');
        } else {
            setToken(usu);
            if (id) {
                consultar();
            }
        }
    }, [id, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registrar();
    };

    return (
        <div className="outer-container">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <Link to={'/login'}>
                        <img className="voltar" src="/assets/images/seta-para-a-esquerda.png" alt="Voltar" />
                    </Link>
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
                                placeholder="E-mail"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
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
                        <button className="butao" type="submit">Registrar-se</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
