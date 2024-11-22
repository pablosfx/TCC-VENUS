import './index.scss'
import Cabecalho from '../../components/cabecalho';
import Produto from '../../components/produto'
import Rodape from  '../../components/rodape'
export default function Puma () {

    return(

        <div className='Pagina-produtos'>
            <Cabecalho />
           <div className='Lista-produtos'>
           <Produto
    foto="/assets/images/Blusa Feminina Manga Curta Cropped Puma Essentials Logo Tee.avif"
    nome="Blusa Feminina Manga Curta Cropped Puma Essentials Logo Tee"
    total="R$ 129,99"
    final="R$ 66,49"/>

<Produto
    foto="/assets/images/Short Puma Feminino Train Strong 3 Tight.webp"
    nome="Short Puma Feminino Train Strong 3 Tight"
    total="R$ 149,99"
    final="R$ 109,24"/>

<Produto
    foto="/assets/images/Shorts Puma Teamrise Masculino.webp"
    nome="Shorts Puma Teamrise Masculino"
    total="R$ 119,90"
    final="R$ 89,90"/>
    <Produto
    foto="/assets/images/Camisa do Palmeiras I 24 Puma Masculina Torcedor.avif"
    nome="Camisa do Palmeiras I 24 Puma Masculina Torcedor"
    total="R$ 369,99"
    final="R$ 351,49"/>

<Produto
    foto="/assets/images/Chinelo Slide Puma Popcat 20 Bdp - Masculino.avif"
    nome="Chinelo Slide Puma Popcat 20 Bdp - Masculino"
    total="R$ 149,99"
    final="R$ 142,49"/>

<Produto
    foto="/assets/images/Camiseta Masculina Puma Manga Curta ESS Tee Logo.avif"
    nome="Camiseta Masculina Puma Manga Curta ESS Tee Logo"
    total="R$ 109,99"
    final="R$ 80,74"/>

<Produto
    foto="/assets/images/Tênis Puma Carina BDP - Feminino.avif"
    nome="Tênis Puma Carina BDP - Feminino"
    total="R$ 399,99"
    final="R$ 265,99"/>

<Produto
    foto="/assets/images/Camiseta Puma Manga Curta Active Small Logo - Masculina.avif"
    nome="Camiseta Puma Manga Curta Active Small Logo - Masculina"
    total="vazio"
    final="R$ 85,49"/>

<Produto
    foto="/assets/images/Chuteira Society Puma Future Play 7 - Adulto.jpg"
    nome="Chuteira Society Puma Future Play 7 - Adulto"
    total="R$ 269,99"
    final="R$ 256,49"/>

<Produto
    foto="/assets/images/Mochila Puma Phase BackPack 22 Litros.avif"
    nome="Mochila Puma Phase BackPack 22 Litros"
    total="R$ 199,99"
    final="R$ 137,74"/>






            
           </div>
           <Rodape />

        </div>
    )
}