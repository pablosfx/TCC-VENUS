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
        { id: 1, title: "Tênis Nike Air Zoom", url: "/produtos/tenis-nike-air-zoom" },
        { id: 2, title: "Camiseta Adidas Essentials", url: "/produtos/camiseta-adidas" },
        { id: 3, title: "Bola de Futebol Penalty", url: "/produtos/bola-penalty" },
        { id: 4, title: "Raquete Wilson Pro Staff", url: "/produtos/raquete-wilson" },
        { id: 5, title: "Mochila Under Armour", url: "/produtos/mochila-under-armour" },
        { id: 6, title: "Calça Legging Puma", url: "/produtos/calca-legging-puma" },
        { id: 7, title: "Bermuda de Surf Quiksilver", url: "/produtos/bermuda-quiksilver" },
        { id: 8, title: "Jaqueta North Face", url: "/produtos/jaqueta-north-face" },
        { id: 9, title: "Equipamento de Yoga Manduka", url: "/produtos/yoga-manduka" },
        { id: 10, title: "Boné New Era", url: "/produtos/bone-new-era" },
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
                             <Link to= {'/pagina-produtos'} key={value.id} className='dataItem'>
                             <IconContext.Provider value={{ color: "#B8B8B8", size: "22px" }}>
                                 <GoSearch />
                             </IconContext.Provider>
                             <p>{value.title}</p>
                         </Link>
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
