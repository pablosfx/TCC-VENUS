import './index.scss'



export default function Produto(props) {

 return (
    <div className='Produto'>
    
        <div className='card-produto'>
            <img className='foto-produto' src="/assets/images/Nike no estilo.png" alt="" />
            <p className='nome-produto'>produto</p>
            <div className='precos-produto'>
             <p className='preco-total'>R$ 800.00</p>
             <p className='preco-final'>R$ 679.99</p>
             <p className='frete'>frete gratis</p>
          </div>
          </div>
          </div>
 )

    
}