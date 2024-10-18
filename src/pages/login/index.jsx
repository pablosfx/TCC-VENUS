import './index.scss'

export default function Login  (){

    return(
        <div className="login">
            <div className='cont'>
            <div className="cont1">
            <img src="/assets/images/logo.svg" alt="" />
            <h1>Seja Bem-Vindo!</h1>
            <p>Você esta  prestes a entrar  em modo adimin!</p></div>
             <div className='cont2'>
                <h1>Login Admin</h1>
            <input type="text" placeholder="Usuario:" />
            <input type="text" placeholder="Senha:" />
            <button className='continuar'>Continuar</button>
           
            </div>
          </div>
        </div>
    )
}