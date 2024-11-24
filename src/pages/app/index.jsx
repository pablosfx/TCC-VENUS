
import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Produtos from '../../components/produto';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { useHistory } from 'react-router-dom'






export default function App() {






 
  return (

    <div className='App'>

     <Cabecalho/>
      
      <div className='Promocoes-geral'>

        <img className='nike-promoção' src="/assets/images/Nike foto.png" alt="" />
       <Link to='/pagina-produtos'> <button className='botao-verMais'>Ver Mais</button></Link>
      </div>
      <div className='sub-app'>
      <div className='Promocoes-demo'>
        <div className='item-promocao'>
          <img className='imagem-item-promocao' src="/assets/images/Nike.jpg" alt="" />
          <p className='titulo-item-promocao'>Nike </p>
          <div className='porcentagem-de-desconto'>
            <p>Até</p>
            <p className='titulo-item-promocao'>60%</p>
          </div>
          <Link to={'/nike'}><button className='item-Ver'>Ver</button></Link>
        </div>
        <div className='item-promocao'>
          <img className='imagem-item-promocao' src="/assets/images/Adidas.jpg" alt="" />
          <p className='titulo-item-promocao'>Adidas </p>
          <div className='porcentagem-de-desconto'>
            <p>Até</p>
            <p className='titulo-item-promocao'>40%</p>
          </div>
          <Link to={'/adidas'}><button className='item-Ver'>Ver</button></Link>
        </div>
        <div className='item-promocao'>
          <img className='imagem-item-promocao' src="/assets/images/Puma.jpg" alt="" />
          <p className='titulo-item-promocao'>Puma </p>
          <div className='porcentagem-de-desconto'>
            <p>Até</p>
            <p className='titulo-item-promocao'>50%</p>
          </div>
          <Link to={'/puma'}><button className='item-Ver'>Ver</button></Link>
        </div>
      </div>


    

<h1 className='produtos-em-destaque'>Produtos em Destaque</h1>

      <div className='produto '>
        <Produtos 
        foto="/assets/images/Bola Society adidas UCL League.webp" 
        nome= "Bola Society adidas UCL League"
        total="R$ 349,99"
        final= "R$ 294,49"
         />

<Produtos
    foto="/assets/images/Jaqueta Corta-Vento Masculina adidas com Capuz Run IT Jacket.avif"
    nome="Jaqueta Corta-Vento Masculina adidas com Capuz Run IT Jacket"
    total="R$ 599,99"
    final="R$ 341,99"/>
        <Produtos
    foto="/assets/images/Blusão de Moletom Cropped adidas Animal Print 3 Listras - Feminino.avif"
    nome="Blusão de Moletom Cropped adidas Animal Print 3 Listras - Feminino"
    total="R$ 419,90"
    final="R$ 269,90"/>
        <Produtos
    foto="/assets/images/Chuteira de Campo adidas F50 Club Fxg - Adulto.avif"
    nome="Chuteira de Campo adidas F50 Club Fxg - Adulto"
    total="R$ 399,99"
    final="R$ 389,90"/>
        


      </div>
      </div>
       <Rodape />

      
    </div>
  );
}


