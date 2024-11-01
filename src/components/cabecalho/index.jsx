import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Cabecalho() {
    const [inputValue, setInputValue] = useState('');
    const [sugestoes, setSugestoes] = useState([]);
    
    const products = [
        { nome: 'Tênis Nike Air Max' },
        { nome: 'Tênis Adidas Ultraboost'},
        { nome: 'Tênis Puma RS-X' },
        { nome: 'Sandália Havaianas' },
        { nome: 'Botas Timberland' },
    ];

    const handlePesquisaChange = async (event) => {
        const valor = event.target.value;
        setInputValue(valor);

        if (valor.length > 2) {
            try {
                const resposta = await axios.get(`http://localhost:5010/produtos/${valor}`); 
                setSugestoes(resposta.data);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        } else {
            setSugestoes([]);
        }
    };

    const filteredProducts = products.filter(produto =>
        produto.nome.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <div className='cabecalho'>
            <Link to={'/'}>
                <img className='logo' src="/assets/images/logo.svg" alt="Logo" />
            </Link>
            <input 
                className='pesquisa' 
                type="text" 
                placeholder='O que você procura?' 
                value={inputValue} 
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
            {sugestoes.length > 0 && (
                <ul className='resultado-pesquisa'>
                    {sugestoes.map(produto => (
                        <li key={produto.produto}>
                            <Link to={`/produto/${produto.produto}`}>{produto.nome} - {produto.valor}</Link>
                        </li>
                    ))}
                </ul>
            )}
            {filteredProducts.length > 0 && inputValue.length > 2 && (
                <ul className='resultado-pesquisa'>
                    {filteredProducts.map(produto => (
                        <li key={produto.produto}>
                            <Link to={`/produto/${produto.produto}`}>{produto.nome} - {produto.valor}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
