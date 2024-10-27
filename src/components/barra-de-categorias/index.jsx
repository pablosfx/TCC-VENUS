
import './index.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react';
export default function TooltipCategorias () {

 const [categoriaVIsivel, setCategoriaVIsivel] = useState(null);
  //mostra qual categoria esta com a telinha aberta


   // Funções para exibir e ocultar a telinha (tooltip)
   const mostrarTela = (categoria) => setCategoriaVIsivel(categoria);
   const esconderTela = () => setCategoriaVIsivel(null);


    return(
        
       <div
          onMouseEnter={() => mostrarTela('Masculino')}
          onMouseLeave={esconderTela}
        >
          
          
          <Link className='categoria' to="#">Masculino</Link>
          {categoriaVIsivel === 'Masculino' && (
            <div className="tooltip">
              <div className='linha1'>
               <li className='Tcategoria'> <Link>Calçados</Link></li>
              <li><Link>Chuteiras</Link></li>
              <li> <Link>Chinelos</Link></li>
              <li> <Link>Tênis</Link></li>
              <li><Link>Tênis Skate</Link></li>
              <li><Link>Botas</Link></li>
           </div>
            
            <div className='linha2'>
              <li className='Tcategoria'><Link>Roupas</Link></li>
              <li><Link>Camisetas</Link></li>
              <li><Link>Calças</Link></li>
              <li><Link>Bermudas</Link></li>
              <li><Link>Blusas</Link></li>
              <li><Link>Regatas</Link></li>
              </div>

            <div className='linha3'>
              <li className='Tcategoria' > <Link>Acessorios</Link></li>
              <li> <Link>Óculos de natação</Link></li>
              <li><Link>Testeira</Link></li>
              <li><Link>Bonés</Link></li>
              <li> <Link>Cotoveleira</Link></li>
              <li> <Link>Joelheira</Link></li>
          </div>
            </div>
          )}
        </div>
    )
}