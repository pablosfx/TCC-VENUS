import './index.scss'
import Cabecalho from '../../components/cabecalho';
import Produto from '../../components/produto'
import Rodape from  '../../components/rodape'
export default function PaginaProdutos () {

    return(

        <div className='Pagina-produtos'>
            <Cabecalho />
           <div className='Lista-produtos'>

            <Produto 
                foto="/assets/images/Short Puma Feminino Train Strong 3 Tight.webp"
                nome="Short Puma Feminino Train Strong 3 Tight"
                total="R$ 149,99"
                final="R$ 109,24"
            />
            <Produto
                foto="/assets/images/Moletom Adidas Essentials Big Logo Masculino Ic9365.avif"
                nome="Moletom Adidas Essentials Big Logo Masculino Ic9365"
                total="R$ 399,99"
                final="R$ 248,04"
            />
            <Produto 
                foto="/assets/images/Blusão de Moletom Cropped adidas Animal Print 3 Listras - Feminino.avif"
                nome="Blusão de Moletom Cropped adidas Animal Print 3 Listras - Feminino"
                total="R$ 419,90"
                final="R$ 269,90"
            />
            <Produto 
                foto="/assets/images/Tênis Nike Revolution 7 - Feminino.avif"
                nome="Tênis Nike Revolution 7 - Feminino"
                total="R$ 399,99"
                final="R$ 299,99"
            />
            <Produto 
               foto="/assets/images/Camiseta Feminina Nike Manga Curta Tee Rlgd Lb.avif"
               nome="Camiseta Feminina Nike Manga Curta Tee Rlgd Lb"
               total="R$ 149,99"
               final="R$ 94,99"
            />
            <Produto 
                foto="/assets/images/Shorts Nike Dri-FIT Challenger - Masculino.avif"
                nome="Shorts Nike Dri-FIT Challenger - Masculino"
                total="R$ 229,99"
                final="R$ 169,99"
            />
            <Produto 
                foto="/assets/images/Blusa Feminina Manga Curta Cropped Puma Essentials Logo Tee.avif"
                nome="Blusa Feminina Manga Curta Cropped Puma Essentials Logo Tee"
                total="R$ 129,99"
                final="R$ 66,49"
            />

            <Produto 
                foto="/assets/images/Shorts Puma Teamrise Masculino.webp"
                nome="Shorts Puma Teamrise Masculino"
                total="R$ 119,90"
                final="R$ 89,90"
            />

            <Produto 
                foto="/assets/images/Mochila Puma Phase BackPack 22 Litros.avif"
                nome="Mochila Puma Phase BackPack 22 Litros"
                total="R$ 199,99"
                final="R$ 137,74"
            />

            <Produto 
                foto="/assets/images/Tênis Puma Carina BDP - Feminino.avif"
                nome="Tênis Puma Carina BDP - Feminino"
                total="R$ 399,99"
                final="R$ 265,99"
            />

            <Produto
                foto="/assets/images/Chuteira Society Puma Future Play 7 - Adulto.jpg"
                nome="Chuteira Society Puma Future Play 7 - Adulto"
                total="R$ 269,99"
                final="R$ 256,49"
            />

            <Produto
                foto="/assets/images/Shorts adidas Plana Aeroready - Masculina.avif"
                nome="Shorts adidas Plana Aeroready - Masculina"
                total="R$ 159,90"
                final="R$ 134,90"
            />

            <Produto
                foto="/assets/images/Camisa do Cruzeiro I 24 adidas Masculina Torcedor.webp"
                nome="Camisa do Cruzeiro I 24 adidas Masculina Torcedor"
                total="R$ 314,99"
                final="R$ 267,74"
            />

            <Produto
                foto="/assets/images/Calça Feminina adidas 3 Listras.avif"
                nome="Calça Feminina adidas 3 Listras"
                total="R$ 199,99"
                final="R$ 189,99"
            />

            <Produto
                foto="/assets/images/Boné Aba Curva adidas Strapback Running - Adulto.avif"
                nome="Boné Aba Curva adidas Strapback Running - Adulto"
                total="R$ 124,99"
                final="R$ 118,74"
            />

            <Produto
                foto="/assets/images/Camisa do Flamengo II 24 adidas Feminina Torcedor.webp"
                nome="Camisa do Flamengo II 24 adidas Feminina Torcedor"
                total="R$ 349,99"
                final="R$ 332,49"
            />
            
           </div>
           <Rodape />

        </div>
    )
}