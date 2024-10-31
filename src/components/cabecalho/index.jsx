import './index.scss'
import { Link } from 'react-router-dom'
export default function Cabecalho (){


    return(
        <div className='cabecalho '>
             
        <Link to={'/'}><img className='logo' src="/assets/images/logo.svg" /></Link>
        <input className='pesquisa' type="text" placeholder='O que você procura?' />
        <div className='icones'>
        <Link to={'/login'}> <img className='usuario' src="/assets/images/usuario.png" /></Link>
        <Link><img className='carrinho' src="/assets/images/carrinho.png" /></Link>
      </div>
      





        </div>
    )

}