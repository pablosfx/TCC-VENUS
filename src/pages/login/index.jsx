import { useState } from "react";
import "./index.scss";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function entrar(e) {
        e.preventDefault();

        const usuario = {
            email: email.trim(),
            senha: senha.trim()  
        };

        const url = 'http://localhost:5010/login/';
        try {
            const resp = await axios.post(url, usuario);
            if (resp.data.erro) {
                toast.error(resp.data.erro);
            } else {
                localStorage.setItem('USUARIO', JSON.stringify(resp.data.usuario));
                localStorage.setItem('TOKEN', resp.data.token);
                
                navigate('/', { state: { usuario: resp.data.usuario } });
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

                        <h1>Login</h1>
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
                        <button type="submit">Login</button>
                    </div>
                    <div className="h1">
                        <Link className="h1" to={'/cadastrar'}><h2>Registrar-se</h2></Link>
                    </div> 
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;
