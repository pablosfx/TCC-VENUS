import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login';
import Cadastrar from './pages/cadastrar'
import App from './pages/app'
import Pedido from './pages/pedido';
import TermosECondicoes from './pages/termos-e-condicoes';
import PaginaProdutos from './pages/pagina-produtos';

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
            </Routes>
        </BrowserRouter>
    )





}