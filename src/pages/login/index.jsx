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
            nome: nome.trim(), 
            senha: senha.trim()
        };

        const url = 'http://localhost:5010/entrar/';
        try {
            const resp = await axios.post(url, usuario);
            if (resp.data.erro) {
                toast.error(resp.data.erro); 
            } else {
                localStorage.setItem('USUARIO', JSON.stringify(resp.data.usuario));
                localStorage.setItem('TOKEN', resp.data.token);
                
                navigate('/pagina-adm', { state: { usuario: resp.data.usuario } });
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            toast.error('Erro ao fazer login, por favor tente novamente.');
        }
    }

    return (
        <div className="outer-container">
            <div className="container">
                <form onSubmit={entrar}>
                    <div className="primeira">
                        <Link to={'/'}>
                            <img className="voltar" src="/assets/images/seta-para-a-esquerda.png" alt="Voltar" />
                        </Link>

                        <h1>Login-ADM</h1>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Usuário"
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
                    </div>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;
