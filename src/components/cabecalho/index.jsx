import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GoSearch } from 'react-icons/go';
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons';

export default function Cabecalho() {
    const [inputSearch, setInputSearch] = useState("");
    const [filterSearch, setFilterSearch] = useState([]);
    const navigate = useNavigate();

    const data =[
        { id: 1, "title": "Bermuda de Surf Quiksilver", "url": "/produtos/bermuda-quiksilver" },
        { id: 2, "title": "Boné New Era", "url": "/produtos/bone-new-era" },
        { id: 3, "title": "bola de Futebol", "url": "/produtos/bola-penalty" },
        { id: 4, "title": "bola de basquete", "url": "/produtos/raquete-wilson" },
        { id: 5, "title": "Calça Legging Puma", "url": "/produtos/calca-legging-puma" },
        { id: 6, "title": "camiseta Adidas", "url": "/produtos/camiseta-adidas" },
        { id: 7, "title": "camisa nike", "url": "/produtos/yoga-manduka" },
        { id: 8, "title": "Equipamento de Yoga Manduka", "url": "/produtos/yoga-manduka" },
        { id: 9, "title": "Jaqueta The North Face", "url": "/produtos/jaqueta-north-face" },
        { id: 10, "title": "Mochila", "url": "/produtos/mochila-under-armour" },
        { id : 11, "title": "tenis Nike", "url": "/produtos/tenis-nike-air-zoom" }
    ]
    

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
        if (value.id === 1) {
            navigate('/pagina-produtos');
        } else {
            navigate(value.url);
        }
        setInputSearch("");
        setFilterSearch([]);
    };

    const clearText = () => {
        setInputSearch("");
        setFilterSearch([]);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && filterSearch.length > 0) {
            handleClickAutoComplete(filterSearch[0]); // Navega para o primeiro item filtrado
        }
    };

    return (
        <div className='cabecalho'>
           <Link to={'/'}>
                <img className='logo' src="/assets/images/logo.svg" alt="Logo" />
           </Link>
            <div className='teste'>
                
                    
                    <div className='pesquisa'>
                        <input
                            className='input'
                            type="text"
                            placeholder='Pesquisar...'
                            value={inputSearch}
                            onChange={handleFilter}
                            onKeyDown={handleKeyDown} // Adicionando o manipulador de eventos
                        />
                        {inputSearch && <AiOutlineClose onClick={clearText} />}
                    </div>
                {filterSearch.length > 0 && (
                    <div className='dataResult'>
                        {filterSearch.slice(0, 15).map(value => (
                            <div className='dataItem' key={value.id} onClick={() => handleClickAutoComplete(value)}>
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
