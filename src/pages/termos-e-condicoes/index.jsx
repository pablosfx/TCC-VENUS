import './index.scss' 
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
export default function TermosECondicoes () {


    return(
        <div className='Termos'>
             <Cabecalho/> 
             <h1 className='t1'>Termos  e Condições</h1>
            <div className='Termos-condicoes'>
           

            <h2>1. Aceitação dos Termos</h2>
            <p>Ao acessar ou usar o site Venus (o "Site"), você concorda em cumprir e estar sujeito aos seguintes Termos de Serviço ("Termos"). Se você não concorda com qualquer parte destes Termos, não deve utilizar o Site.</p>
            <h2>2. Modificações dos Termos</h2>
            <p>A Venus reserva-se o direito de modificar ou atualizar estes Termos a qualquer momento. As alterações entrarão em vigor assim que publicadas no Site. É sua responsabilidade revisar periodicamente os Termos atualizados.</p>
            <h2> 3. Uso do Site</h2>
            <p>3.1. Elegibilidade: Você deve ter pelo menos 18 anos de idade para utilizar o Site.
            3.2. Responsabilidades do Usuário: Ao utilizar o Site, você concorda em fornecer informações precisas e atualizadas, bem como em não utilizar o Site para qualquer atividade ilícita. Você é responsável por manter a confidencialidade de suas credenciais de acesso.</p>
            <h2>4. Produtos e Serviços</h2>
            <p>4.1. Disponibilidade: Todos os produtos oferecidos no Site estão sujeitos a disponibilidade. A Venus se reserva o direito de limitar a quantidade de itens comprados por pessoa, por domicílio ou por pedido.
            4.2. Preços: Os preços dos produtos são listados no Site e podem ser alterados sem aviso prévio. O preço final a ser pago pelo produto será o preço no momento da compra.
             4.3. Informações de Produto: A Venus se esforça para garantir que todas as descrições e imagens de produtos sejam precisas. No entanto, não garantimos que as descrições, imagens ou outras informações do produto sejam totalmente precisas, completas, confiáveis, atuais ou livres de erros.</p>
            <h2>5. Política de Pagamento</h2>
            <p>5.1. Formas de Pagamento: Aceitamos diversas formas de pagamento, conforme indicado no Site. O pagamento deve ser efetuado no momento da compra.
            5.2. Processamento de Pagamentos: Todos os pagamentos são processados de forma segura por 
            provedores de pagamento terceirizados. A Venus não armazena informações de cartão de crédito dos usuários.</p>


        </div>

         <Rodape />
        </div>


    )
}