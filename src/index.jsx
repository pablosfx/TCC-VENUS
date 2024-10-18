import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/app/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>  
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


