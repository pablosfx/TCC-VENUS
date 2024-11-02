import './index.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GoSearch } from 'react-icons/go';
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons';

export default function Cabecalho() {
    const [inputSearch, setInputSearch] = useState("");
    const [filterSearch, setFilterSearch] = useState([]);

    const data = [
        { id: 1, title: "Tênis Nike Air Zoom" },
        { id: 2, title: "Camiseta Adidas Essentials" },
        { id: 3, title: "Bola de Futebol Penalty" },
        { id: 4, title: "Raquete Wilson Pro Staff" },
        { id: 5, title: "Mochila Under Armour" },
        { id: 6, title: "Calça Legging Puma" },
        { id: 7, title: "Bermuda de Surf Quiksilver" },
        { id: 8, title: "Jaqueta North Face" },
        { id: 9, title: "Equipamento de Yoga Manduka" },
        { id: 10, title: "Boné New Era" },
    ];

    const handleFilter = (event) => {
        const searchValue = event.target.value;
        setInputSearch(searchValue);

        const newFilter = data.filter(value => {
            return value.title.toLowerCase().includes(searchValue.toLowerCase());
        });

        setFilterSearch(newFilter);
    };

    useEffect(() => {
        if (inputSearch === "") {
            setFilterSearch([]);
        }
    }, [inputSearch]);

    const handleClickAutoComplete = (value) => {
        setInputSearch(value.title);
        setFilterSearch([]);
    };

    const clearText = () => {
        setInputSearch("");
        setFilterSearch([]);
    };

    return (
        <div className='cabecalho'>
            <Link to={'/'}>
                <img className='logo' src="/assets/images/logo.svg" alt="Logo" />
            </Link>
            <div className='teste'>
                <IconContext.Provider value={{ color: "#B8B8B8", size: "30px" }}>
                    <GoSearch />
                    <div className='pesquisa'>
                        <input 
                            className='input'
                            type="text" 
                            placeholder='Pesquisar...' 
                            value={inputSearch} 
                            onChange={handleFilter} 
                        />
                        {inputSearch && <AiOutlineClose onClick={clearText} />}
                    </div>
                </IconContext.Provider>
                {filterSearch.length > 0 && (
                    <div className='dataResult'>
                        {filterSearch.slice(0, 15).map(value => (
                            <div key={value.id} className='dataItem' onClick={() => handleClickAutoComplete(value)}>
                                <IconContext.Provider value={{ color: "#B8B8B8", size: "22px" }}>
                                    <GoSearch />
                                </IconContext.Provider>
                                <p>{value.title}</p>
                            </div>
                        ))}
                        
                    </div>
                )}
            </div>
            <div className='icones'>
                <Link to={'/login'}>
                    <img className='usuario' src="/assets/images/usuario.png" alt="Usuário" />
                </Link>
                <Link to={'/carrinho'}>
                    <img className='carrinho' src="/assets/images/carrinho.png" alt="Carrinho" />
                </Link>
            </div>
        </div>
    );
}
