
import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';



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
        
        <div
          onMouseEnter={() => mostrarTela('Masculino')}
          onMouseLeave={esconderTela}
        >
          
          
           
          
          <Link to="#">Masculino</Link>
          {categoriaVIsivel === 'Masculino' && (
            <div className="tooltip"><div className='linha1'>
               <li> <Link>Calçados</Link></li>
              <li><Link>Chueteiras</Link></li>
              <li> <Link>Chinelos</Link></li>
              <li> <Link>Tênis</Link></li>
              <li><Link>Tênis Skate</Link></li>
              <li><Link>Botas</Link></li>
           </div>
            
            <div className='linha2'>
              <li><Link>Roupas</Link></li>
              <li><Link>Camisetas</Link></li>
              <li><Link>Calças</Link></li>
              <li><Link>Bermudas</Link></li>
              <li><Link>Blusas</Link></li>
              <li><Link>Regatas</Link></li></div>

            <div className='linha3'>
              <li> <Link>Acessorios</Link></li>
              <li> <Link>Óculos de natação</Link></li>
              <li><Link>Testeira</Link></li>
              <li><Link>Bonés</Link></li>
              <li> <Link>Cotoveleira</Link></li>
              <li> <Link>Joelheira</Link></li>
          </div>
            </div>
          )}
        </div>

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


