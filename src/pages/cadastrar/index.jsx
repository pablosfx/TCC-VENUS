import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';

export default function Consultar() {
    const [cadastrar, setCadastrar] = useState([]);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nomecliente, setNomeCliente] = useState('');
    const [telefone, setTelefone] = useState('');

    async function buscar() {
        const url = 'http://localhost:5010/clientes';
        try {
            let resp = await axios.get(url);
            setCadastrar(resp.data);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }

    useEffect(() => {
        buscar();
    }, []);

    const adicionarCliente = async () => {
        const url = 'http://localhost:5010/clientes';
        const novoCliente = { email, senha, nomecliente, telefone };
        try {
            await axios.post(url, novoCliente);
            setCadastrar([...cadastrar, novoCliente]);
            
            setEmail('');
            setSenha('');
            setNomeCliente('');
            setTelefone('');
            alert('Cliente adicionado com sucesso!');

        } catch (error) {
            console.error("Erro ao adicionar cliente:", error);
        }
    };

    return (
        <div className='area-cadastro'>
            

            <div className='cadastro'>
            <h1 className='titulo-cadastro'>Insira suas Informações  para criar sua conta</h1>
                <div className='input-cadastro'>
                <input className='email' type="text" placeholder="Email:" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className='senha' type="password" placeholder="Senha:" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <input className='nome-do-usuario-C' type="text" placeholder="Nome:" value={nomecliente} onChange={(e) => setNomeCliente(e.target.value)} />
                <input className='telefone' type="text" placeholder="Telefone:" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                </div>
                <button  className='criar' onClick={adicionarCliente}>Criar </button>
            </div>

            <table>



                <tbody>
                    {Array.isArray(cadastrar) && cadastrar.map(item => (
                        <tr key={item.email}>
                            <td>{item.email}</td>
                            <td>{item.senha}</td>
                            <td>{item.nomecliente}</td>
                            <td>{item.telefone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
