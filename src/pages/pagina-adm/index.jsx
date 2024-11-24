import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { useHistory } from 'react-router-dom'

export default function paginaadm() {

  return (
    <div className='cabecalho '>

      <div className='adm'>
       <h1>ADMINISTRADOR</h1>

      </div>

    </div>


  );
}


