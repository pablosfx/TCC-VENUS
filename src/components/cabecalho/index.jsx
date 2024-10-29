import './index.scss'
import { Link } from 'react-router-dom'
export default function Cabecalho (){


    return(
        <div className='cabecalho '>
             <div className="cabecalho">
        <img className='logo' src="/assets/images/logo.svg" />
        <input className='pesquisa' type="text" placeholder='O que você procura?' />
        <Link to={'/login'}> <img className='usuario' src="/assets/images/usuario.png" /></Link>
        <img className='carrinho' src="/assets/images/carrinho.png" />

      </div>





        </div>
    )

}