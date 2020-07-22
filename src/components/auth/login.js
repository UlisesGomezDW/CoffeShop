import React, {useState}  from 'react'
import {useHistory} from 'react-router-dom'
import {PrimaryButton} from './../common/button'
import {InputText} from './../common/input'
import './../views/index.scss'
import 'animate.css'
const Login = () => {
    const history = useHistory()
    const [data, setData] = useState({email: "", password: ""})
    return(
    <div className="layout-login-container">
      <div className="layout-login animate__animated animate__backInUp">
        <p className="tittle-login">Inicia sesión</p>
        <InputText placeholder="Correo" type="email" value={data.email} onChange={e=>setData({...data, email: e.target.value})}/>
        <InputText placeholder="Contraseña" type="password" value={data.password} onChange={e=>setData({...data, password: e.target.value})}/>
        <PrimaryButton onClick={()=>console.log(data)}>Aceptar</PrimaryButton>
        <p className="tittle-login">o</p>
        <section className="section"><img src="https://image.flaticon.com/icons/svg/145/145802.svg" alt="facebook"/><span>Iniciar con Facebook</span></section>
        <section className="section"><img src="https://image.flaticon.com/icons/svg/2702/2702602.svg" alt="google"/><span>Iniciar con Google</span></section>
        <p className="text-login">¿Aún no tienes una cuenta? <span onClick={()=>history.push('/sign-in/')}>Registrate</span></p>
      </div>
    </div>
    )
}
export default Login