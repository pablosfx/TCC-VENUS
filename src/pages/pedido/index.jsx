import './index.scss'
import Cabecalho from '../../components/cabecalho'

export default function Pedido (){


    return(
    
   
        <div className='Pedido'>
             <Cabecalho />

            <div className='pedido'>
            <img src="/assets/images/Nike no estilo.png" alt="" />
            <div className='info-produto'>
            <h1>Nike no estilo</h1>
            <p>R$ 600</p>
            <div className='tamanho'>
                <h1>Tamanhos:</h1>
                <input type="radio" />
                <input type="radio" />
                <input type="radio" />
                <input type="radio" />


            </div>
                


            </div>
            </div>


        </div>
    )

};

    
