
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
        <button className='botao-verMais'>Ver mais</button>
      </div>
      <div className='sub-app'>
      <div className='Promocoes-demo'>
        <div className='item-promocao'>
          <img className='imagem-item-promocao' src="/assets/images/Nike no estilo.png" alt="" />
          <p className='titulo-item-promocao'>Nike no estilo </p>
          <div className='porcentagem-de-desconto'>
            <p>até</p>
            <p className='titulo-item-promocao'>60%</p>
          </div>
          <button className='item-Ver'>Ver</button>
        </div>
        <div className='item-promocao'>
          <img className='imagem-item-promocao' src="/assets/images/Chuteiras nike.png" alt="" />
          <p className='titulo-item-promocao'>Chuteiras Nike </p>
          <div className='porcentagem-de-desconto'>
            <p>até</p>
            <p className='titulo-item-promocao'>40%</p>
          </div>
          <button className='item-Ver'>Ver</button>
        </div>
        <div className='item-promocao'>
          <img className='imagem-item-promocao' src="/assets/images/Mega ofertas Nike.png" alt="" />
          <p className='titulo-item-promocao'>Mega ofertas </p>
          <div className='porcentagem-de-desconto'>
            <p>até</p>
            <p className='titulo-item-promocao'>80%</p>
          </div>
          <button className='item-Ver'>Ver</button>
        </div>
      </div>


      <div className='Esportes-imgs'> 
    <h1>Escolha seu esporte</h1>
    <div className='imagens-esporte'>
        <div className='imagem-container'>
            <img className='imagem-esporte' src="/assets/images/futebol.png" alt="Futebol" />
            <h1 className='texto-sobre-imagem'>Futebol</h1>
        </div>
        <div className='imagem-container'>
            <img className='imagem-esporte' src="/assets/images/volei.png" alt="Vôlei" />
            <h1 className='texto-sobre-imagem'>Vôlei</h1>
        </div>
        <div className='imagem-container'>
            <img className='imagem-esporte' src="/assets/images/basquete.png" alt="Basquete" />
            <h1 className='texto-sobre-imagem'>Basquete</h1>
        </div>
        <div className='imagem-container'>
            <img className='imagem-esporte' src="/assets/images/natacao.png" alt="Natação" />
            <h1 className='texto-sobre-imagem'>Natação</h1>
        </div>
        <div className='imagem-container'>
            <img className='imagem-esporte' src="/assets/images/corrida.png" alt="Corrida" />
            <h1 className='texto-sobre-imagem'>Corrida</h1>
        </div>
        <div className='imagem-container'>
            <img className='imagem-esporte' src="/assets/images/skate.png" alt="Skate" />
            <h1 className='texto-sobre-imagem'>Skate</h1>
        </div>
    </div>
</div>



      <div className='produto '>
        <h1 className='produtos-em-destaque'>Produtos em destaque</h1>
        <Produtos />
        <Produtos />
        <Produtos />
        <Produtos />
        <Produtos />


      </div>
      </div>
       <Rodape />

      
    </div>
  );
}


