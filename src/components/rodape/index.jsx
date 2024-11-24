import './index.scss'
import { Link } from 'react-router-dom'

export default function Rodape (){

    return(
        <div className='Rodape'>
            <div className='rodape'>

<div className='cmc'><img className='logo' src="/assets/images/logo.svg" alt="" />
  <Link to={'/termos-e-condicoes'}  ><p className='Termos'> Termos e Condições</p></Link></div>
<div className='Links-rdp'>
  <div className='Esportes'>
    <Link className='Esportes'>Esportes</Link>
    <Link className='Esportes'>Futebol</Link>
    <Link className='Esportes'>Basquete</Link>
    <Link className='Esportes'>Corrida</Link>
    <Link className='Esportes'>Musculação</Link>
    <Link className='Esportes'>Vôlei</Link>
  </div>
  <div className='Marcas'>
    <Link className='Marcas' >Marcas</Link>
    <Link className='Marcas'>Nike</Link>
    <Link className='Marcas'>Adidas</Link>
    <Link className='Marcas'>Puma</Link>
    <Link className='Marcas'>Mizuno</Link>
    <Link className='Marcas'>Penalty</Link>
  </div></div>
<div className='rdp2'>
<h1 className='Contato'>Contato</h1>
  <div className='Luiz'>

  <a href="https://wa.me/5511954395235" target="_blank">
    <img className='zap' src="/assets/images/zap.png" alt="WhatsApp" />
</a>
<a href="https://instagram.com/y_luiz19" target="_blank">
    <img className='ig' src="/assets/images/instagram.png" alt="Instagram" />
</a>  </div>
  <div className='pagamento-rdp'> <h1 className='forma-de-pagamento'>Forma de Pagamento</h1>
    <img className='pix' src="/assets/images/pix.png" alt="" /></div>

</div>

</div>
        </div>

            
    )
}