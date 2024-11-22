import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login';
import Cadastrar from './pages/cadastrar'
import App from './pages/app'
import Pedido from './pages/pedido';
import TermosECondicoes from './pages/termos-e-condicoes';
import PaginaProdutos from './pages/pagina-produtos';
import Paginaadm from './pages/pagina-adm'
import Naoencontrado from './pages/naoencontrada'
import Nike from './pages/nike';
import Adidas from './pages/adidas';
import Puma from './pages/puma';
 
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
      <Route path='/nike' element={<Nike/>}/>
      <Route path='/adidas' element={<Adidas/>}/>
      <Route path='/puma' element={<Puma/>}/>





      <Route path='*' element={<Naoencontrado/>}/>


            </Routes>
        </BrowserRouter>
    )





}