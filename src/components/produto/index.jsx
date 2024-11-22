import './index.scss'



export default function Produto(props) {

 return (
    <div className='Produto'>
    
        <div className='card-produto'>
            <img className='foto-produto' src={props.foto} alt="" />
            <p className='nome-produto'>{props.nome} </p>
            <div className='precos-produto'>
             <p className='preco-total'>{props.total} </p>
             <p className='preco-final'>{props.final}</p>
             <p className='frete'>frete gratis</p>
          </div>
          </div>
          </div>
 )

    
}