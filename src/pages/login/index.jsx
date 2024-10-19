import { useState } from 'react';
import './index.scss'
import axios from 'axios';

export default function Login  (){

const [senha,setsenha] = useState('')
const [usuario,setusuario ] = useState('')

    async function salvar() {
        const id = {
            "usuario" :usuario,
            "senha" : senha
        }

        const url = 'http://localhost:5010/usuario';
        let resp = await axios.post(url, id);

        alert('usuario adicionado. Id: ' + resp.data.novoId);
    }


    return(
        <div className="login">
            <div className='cont'>
            <div className="cont1">
            <img src="/assets/images/logo.svg" alt="" />
            <h1>Seja Bem-Vindo!</h1>
            <p>Você esta  prestes a entrar  em modo adimin!</p></div>
             <div className='cont2'>
                <h1>Login Admin</h1>
            <input value={usuario} onChange={e =>setusuario(e.target.value)}   type="text" placeholder="Usuario:" />
            <input  value={senha} onChange={e =>setsenha(e.target.value)}    type="text" placeholder="Senha:" />
            <button onClick={salvar} className='continuar'>Continuar</button>
           
            </div>
          </div>
        </div>
    )
}