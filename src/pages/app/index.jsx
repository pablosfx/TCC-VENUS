
import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TooltipCategorias from '../../components/barra-de-categorias';



export default function App() {

  const [categoriaVIsivel, setCategoriaVIsivel] = useState(null);
  //mostra qual categoria esta com a telinha aberta


   // Funções para exibir e ocultar a telinha (tooltip)
   const mostrarTela = (categoria) => setCategoriaVIsivel(categoria);
   const esconderTela = () => setCategoriaVIsivel(null);
  return (
    
    <div className='App'>
   
    <div className="cabecalho">
     <img className='logo' src="/assets/images/logo.svg"/>
      <input className='pesquisa' type="text" placeholder='O que você procura?' />
      <Link to={'/cadastrar'}> <img className='usuario' src="/assets/images/usuario.png"/></Link>
      <img className='carrinho' src="/assets/images/carrinho.png"/>
       
    </div>
    <div className='categorias'>
        <div
          onMouseEnter={() => mostrarTela('Esportes')}
          onMouseLeave={esconderTela}
        >
          <Link to="#">Esportes</Link>
          {categoriaVIsivel === 'Esportes' && (
            <div className="tooltip">Informações sobre Esportes</div>
          )}
        </div>
         <TooltipCategorias/>
        

        <div
          onMouseEnter={() => mostrarTela('Feminino')}
          onMouseLeave={esconderTela}
        >
          <Link to="#">Feminino</Link>
          {categoriaVIsivel === 'Feminino' && (
            <div className="tooltip">Informações sobre Feminino</div>
          )}
        </div>

        <div
          onMouseEnter={() => mostrarTela('Acessorios')}
          onMouseLeave={esconderTela}
        >
          <Link to="#">Acessórios</Link>
          {categoriaVIsivel === 'Acessorios' && (
            <div className="tooltip">Informações sobre Acessórios</div>
          )}
        </div>

        <div
          onMouseEnter={() => mostrarTela('Equipamentos')}
          onMouseLeave={esconderTela}
        >
          <Link to="#">Equipamentos</Link>
          {categoriaVIsivel === 'Equipamentos' && (
            <div className="tooltip">Informações sobre Equipamentos</div>
          )}
        </div>

        <div
          onMouseEnter={() => mostrarTela('Marcas')}
          onMouseLeave={esconderTela}
        >
          <Link to="#">Marcas</Link>
          {categoriaVIsivel === 'Marcas' && (
            <div className="tooltip">Informações sobre Marcas</div>
          )}
        </div>
      </div>
    
    
    </div>
  );
}


