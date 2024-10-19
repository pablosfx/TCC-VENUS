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
            // Limpar os campos
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
        <div className='pagina-consultar'>
            <h1> CONSULTAR </h1>

            <div className='input'>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <input  type="text" placeholder="Nome do Cliente" value={nomecliente} onChange={(e) => setNomeCliente(e.target.value)} />
                <input type="text" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                <button className='consulta' onClick={adicionarCliente}>Adicionar Cliente</button>
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
