import './index.scss';

import { Link } from 'react-router-dom';


export default function naoencontrado() {
return(

 <div className="naoencontrado">
    <div className={'container'}>
    <h1>Pagina não encontrada</h1>
   <Link className='link' to={'/'}> <button className="button">voltar</button></Link>
    </div>
 </div>

)


};