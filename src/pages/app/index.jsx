
import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TooltipCategorias from '../../components/barra-de-categorias';
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper,SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules"

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
      <Link to={'/cadastrar'}> <img className='usuario' src="/assets/images/usuario.png"/></Link>
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
          onMouseEnter={() => mostrarTela('Acessorios')}
          onMouseLeave={esconderTela}
        >
          <Link to="#">Acessórios</Link>
          {categoriaVIsivel === 'Acessorios' && (
            <div className="tooltip">Informações sobre Acessórios</div>
          )}
        </div>

        <div
          onMouseEnter={() => mostrarTela('Equipamentos')}
          onMouseLeave={esconderTela}
        >
          <Link to="#">Equipamentos</Link>
          {categoriaVIsivel === 'Equipamentos' && (
            <div className="tooltip">Informações sobre Equipamentos</div>
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
          <img className='imagem-item-promocao' src="/assets/images/Nike no estilo.png" alt="" />
          <p className='titulo-item-promocao'>Nike no estilo </p>
          <div className='porcentagem-de-desconto'>
          <p>até</p>
          <p className='titulo-item-promocao'>60%</p>
          </div>
          <button className='item-Ver'>Ver</button>
     </div>
     <div className='item-promocao'>
          <img className='imagem-item-promocao' src="/assets/images/Nike no estilo.png" alt="" />
          <p className='titulo-item-promocao'>Nike no estilo </p>
          <div className='porcentagem-de-desconto'>
          <p>até</p>
          <p className='titulo-item-promocao'>60%</p>
          </div>
          <button className='item-Ver'>Ver</button>
     </div>
</div>
      <div className='carrosel'>
      <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      className="carousel"
    >
            <SwiperSlide>
              <img className='imagem-carrosel' src="/assets/images/futebol.png" alt="" />
              <h1 className='nome-esporte-carrosel'>Futebol</h1>
            </SwiperSlide>
            <SwiperSlide>
              <img className='imagem-carrosel' src="/assets/images/basquete.png" alt="" />
              <h1 className='nome-esporte-carrosel'>Basquete</h1>
            </SwiperSlide>
            <SwiperSlide>
              <img className='imagem-carrosel' src="/assets/images/volei.png" alt="" />
              <h1 className='nome-esporte-carrosel'>Volei</h1>
            </SwiperSlide>
            <SwiperSlide>
              <img className='imagem-carrosel' src="/assets/images/natacao.png" alt="" />
              <h1 className='nome-esporte-carrosel'>Natação</h1>
            </SwiperSlide>
            <SwiperSlide>
              <img className='imagem-carrosel' src="/assets/images/futsal.png" alt="" />
              <h1 className='nome-esporte-carrosel'>Futsal</h1>
            </SwiperSlide>
            <SwiperSlide>
              <img className='imagem-carrosel' src="/assets/images/skate.png" alt="" />
              <h1 className='nome-esporte-carrosel'>Skate</h1>
            </SwiperSlide>
            <SwiperSlide>
              <img className='imagem-carrosel' src="/assets/images/musculamento.png" alt="" />
              <h1 className='nome-esporte-carrosel'>Musculação</h1>
            </SwiperSlide>
            <SwiperSlide>
              <img className='imagem-carrosel' src="/assets/images/corrida.png" alt="" />
              <h1 className='nome-esporte-carrosel'>Corrida</h1>
            </SwiperSlide>
            
              


          </Swiper>
      </div>
    </div>
  );
}


