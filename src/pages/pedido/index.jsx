import './index.scss'
import Cabecalho from '../../components/cabecalho'

export default function Pedido (){


    return(
    
   
        <div className='Pedido'>
             <Cabecalho />

            <div className='pedido'>
            <img src="/assets/images/Nike no estilo.png" alt="" />
            <div className='info-produto'>
                <div className='pedido-1'>
            <h1 className='nome-do-produto' >Nike no estilo</h1>
            <p className='valor-do-produto'>R$ 600</p>
            </div>

            <div className='pedido-2'>
                <div className='forma-de-pagamento'>
                 <p>forma de pagamento:</p>
             <img className='pix-foto' src="/assets/images/pix.png" alt="" />
             </div>
                <button class>adicionar ao carrinho</button>
                

            </div>
                


            </div>
            </div>


        </div>
    )

};

    
