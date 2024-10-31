import './index.scss'
import { Link } from 'react-router-dom'

export default function Rodape (){

    return(
        <div className='Rodape'>
            <div className='rodape'>

<div className='cmc'><img className='logo' src="/assets/images/logo.svg" alt="" />
  <Link to={'/termos-e-condicoes'}  ><p className='Termos'> termos e condições</p></Link></div>
<div className='Links-rdp'>
  <div className='Esportes'>
    <Link className='Esportes'>Esportes</Link>
    <Link className='Esportes'>futebol</Link>
    <Link className='Esportes'>basquete</Link>
    <Link className='Esportes'>Corrida</Link>
    <Link className='Esportes'>musculação</Link>
    <Link className='Esportes'>volei</Link>
  </div>
  <div className='Marcas'>
    <Link className='Marcas' >Marcas</Link>
    <Link className='Marcas'>Nike</Link>
    <Link className='Marcas'>Addidas</Link>
    <Link className='Marcas'>Puma</Link>
    <Link className='Marcas'>Mizuno</Link>
    <Link className='Marcas'>Penalty</Link>
  </div></div>
<div className='rdp2'>
<h1 className='Contato'>Contato</h1>
  <div className='Luiz'>

    <img className='zap' src="/assets/images/zap.png" alt="" />
    <img className='ig' src="/assets/images/instagram.png" alt="" />
  </div>
  <div className='pagamento-rdp'> <h1 className='forma-de-pagamento'>Forma de pagamento</h1>
    <img className='pix' src="/assets/images/pix.png" alt="" /></div>

</div>

</div>
        </div>

            
    )
}