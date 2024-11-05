import './index.scss';

import { Link } from 'react-router-dom';


export default function naoencontrado() {
return(

 <div className="naoencontrado">
   <h1 className='pg'>Pagina Nao Encontrada</h1>
    <img  className='pg'src="/assets/images/404.png" alt="" />
 <div>


    <Link to={'/'}> <button className='botao'>Voltar</button></Link>
    
 </div>
 </div>

)


};