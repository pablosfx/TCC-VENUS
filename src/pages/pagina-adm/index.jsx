import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { useHistory } from 'react-router-dom'

export default function paginaadm() {

  return (
    <div className='cabecalho '>

      <Link to={'/'}><img className='logo' src="/assets/images/logo.svg" /></Link>
      <div className='adm'>
       <h1>ADM</h1>
      </div>

    </div>


  );
}


