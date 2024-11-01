import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login';
import Cadastrar from './pages/cadastrar'
import App from './pages/app'
import Pedido from './pages/pedido';
import TermosECondicoes from './pages/termos-e-condicoes';
import PaginaProdutos from './pages/pagina-produtos';
import Paginaadm from './pages/pagina-adm'
import Naoencontrado from './pages/naoencontrada'
import Carrinho from './pages/carrinho'

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
      <Route path='/' element={<App/>}/>  
      <Route path='/login' element={<Login/>}/>
      <Route path='/cadastrar' element={<Cadastrar/>}/>
      <Route path='/pedido' element={<Pedido/>}/>
      <Route path='/termos-e-condicoes' element={<TermosECondicoes/>}/>
      <Route path='/pagina-produtos' element={<PaginaProdutos/>}/>
      <Route path='/pagina-adm' element={<Paginaadm/>}/>
      <Route path='/carrinho' element={<Carrinho/>}/>




      <Route path='*' element={<Naoencontrado/>}/>


            </Routes>
        </BrowserRouter>
    )





}