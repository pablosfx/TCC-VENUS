import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Cabecalho() {
    const [pesquisa, setPesquisa] = useState('');
    const [produtos, setProdutos] = useState([]);

    const handlePesquisaChange = async (event) => {
        const valor = event.target.value;
        setPesquisa(valor);

        if (valor.length > 2) { // Começa a pesquisar após 3 caracteres
            try {
                const resposta = await axios.get(`http://localhost:5010/produtos${valor}`); // Ajuste a URL conforme necessário
                setProdutos(resposta.data);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        } else {
            setProdutos([]); // Limpa a lista se menos de 3 caracteres
        }
    };

    return (
        <div className='cabecalho'>
            <Link to={'/'}>
                <img className='logo' src="/assets/images/logo.svg" alt="Logo" />
            </Link>
            <input 
                className='pesquisa' 
                type="text" 
                placeholder='O que você procura?' 
                value={pesquisa} 
                onChange={handlePesquisaChange} 
            />
            <div className='icones'>
                <Link to={'/login'}>
                    <img className='usuario' src="/assets/images/usuario.png" alt="Usuário" />
                </Link>
                <Link to={'/carrinho'}>
                    <img className='carrinho' src="/assets/images/carrinho.png" alt="Carrinho" />
                </Link>
            </div>
            {produtos.length > 0 && (
                <ul className='resultado-pesquisa'>
                    {produtos.map(produto => (
                        <li key={produto.produto}>
                            <Link to={`/produto/${produto.produto}`}>{produto.nome} - {produto.valor}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
