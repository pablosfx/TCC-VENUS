
import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TooltipCategorias from '../../components/barra-de-categorias';
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper,SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import Produtos from '../../components/produto';
import ItensPromocoes from '../../components/itens-promocoes';


export default function App() {

  const [categoriaVIsivel, setCategoriaVIsivel] = useState(null);
  //mostra qual categoria esta com a telinha aberta


   // Funções para exibir e ocultar a telinha (tooltip)
   const mostrarTela = (categoria) => setCategoriaVIsivel(categoria);
   const esconderTela = () => setCategoriaVIsivel(null);
  return (
    
    <div className='App'>
   
    <div className="cabecalho">
     <img className='logo' src="/assets/images/logo.svg"/>
      <input className='pesquisa' type="text" placeholder='O que você procura?' />
      <Link to={'/login'}> <img className='usuario' src="/assets/images/usuario.png"/></Link>
      <img className='carrinho' src="/assets/images/carrinho.png"/>
       
    </div>
    <div className='categorias'>
        <div
          onMouseEnter={() => mostrarTela('Esportes')}
          onMouseLeave={esconderTela}
        >
          <Link to="#">Esportes</Link>
          {categoriaVIsivel === 'Esportes' && (
            <div className="tooltip">Informações sobre Esportes</div>
          )}
        </div>
         <TooltipCategorias/>
        

        <div
          onMouseEnter={() => mostrarTela('Feminino')}
          onMouseLeave={esconderTela}
        >
          <Link to="#">Feminino</Link>
          {categoriaVIsivel === 'Feminino' && (
            <div className="tooltip">Informações sobre Feminino</div>
          )}
        </div>


        <div
          onMouseEnter={() => mostrarTela('Marcas')}
          onMouseLeave={esconderTela}
        >
          <Link to="#">Marcas</Link>
          {categoriaVIsivel === 'Marcas' && (
            <div className="tooltip">Informações sobre Marcas</div>
          )}
        </div>
      </div>
     <div className='Promocoes-geral'>
     
      <img className='nike-promoção' src="/assets/images/Nike foto.png" alt="" />
      <button className='botao-verMais'>Ver mais</button>
     </div>
    
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
    <p className='titulo-item-promocao'>Mega ofertas Nike</p>
    <div className='porcentagem-de-desconto'>
    <p>até</p>
    <p className='titulo-item-promocao'>80%</p>
    </div>
    <button className='item-Ver'>Ver</button>
</div>
</div>
      <div className='carrosel'>
        <h1 className='escolha-seu-esporte'>Escolha seu esporte</h1>
      <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={3}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      className="carousel"
    >
            <SwiperSlide>
              <img className='imagem-carrosel' src="/assets/images/futebol.png" alt="" />
                
            </SwiperSlide>
            <SwiperSlide>
              <img className='imagem-carrosel' src="/assets/images/basquete.png" alt="" />
              
            </SwiperSlide>
            <SwiperSlide>
              <img className='imagem-carrosel' src="/assets/images/volei.png" alt="" />
              
            </SwiperSlide>
            <SwiperSlide>
              <img className='imagem-carrosel' src="/assets/images/natacao.png" alt="" />
              
            </SwiperSlide>
            <SwiperSlide>
              <img className='imagem-carrosel' src="/assets/images/futsal.png" alt="" />
              
            </SwiperSlide>
            <SwiperSlide>
              <img className='imagem-carrosel' src="/assets/images/skate.png" alt="" />
              
            </SwiperSlide>
            <SwiperSlide>
              <img className='imagem-carrosel' src="/assets/images/musculamento.png" alt="" />
              
            </SwiperSlide>
            <SwiperSlide>
              <img className='imagem-carrosel' src="/assets/images/corrida.png" alt="" />
              
            </SwiperSlide>
            <SwiperSlide>
              <img className='imagem-carrosel' src="/assets/images/handebol.png" alt="" />
              
            </SwiperSlide>
            
              


          </Swiper>
      </div>


       <div className='produto '>
        <h1 className='produtos-em-destaque'>Produtos em destaque</h1>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          
          


       </div>


        <div className='rodape'>

          <div className='cmc'><img className='logo' src="/assets/images/logo.svg" alt="" />
          <Link ><p className='Termos'> termos e condições</p></Link></div>
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
            <img className='zap' src="/assets/images/zap.png" alt="" />
            <img className='ig' src="/assets/images/instagram.png" alt="" />
           <div className='pagamento-rdp'> <h1 className='forma-de-pagamento'>Forma de pagamento</h1>
            <img className='pix' src="/assets/images/pix.png" alt="" /></div>
           
          </div>

        </div>
    </div>
  );
}


