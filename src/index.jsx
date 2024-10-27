import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/app/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar'
import {} from 'swiper/element/bundle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>  
      <Route path='/login' element={<Login/>}/>
      <Route path='/cadastrar' element={<Cadastrar/>}/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


