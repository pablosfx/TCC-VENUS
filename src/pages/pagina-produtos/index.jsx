import './index.scss'
import Cabecalho from '../../components/cabecalho';
import Produto from '../../components/produto'
import Rodape from  '../../components/rodape'
export default function PaginaProdutos () {

    return(

        <div className='Pagina-produtos'>
            <Cabecalho />
           <div className='Lista-produtos'>
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            
           </div>
           <Rodape />

        </div>
    )
}