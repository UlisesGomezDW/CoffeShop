import React, {useState}  from 'react'
import {useHistory} from 'react-router-dom'
import {PrimaryButton} from './../common/button'
import {InputText} from './../common/input'
import { Upload, Button } from 'antd'
import {propsUpload} from './avatarProps'
import './../views/index.scss'
import 'animate.css'

const Login = () => {
    const history = useHistory()
    const [data, setData] = useState({username: '', age: '', email: '', password: '', avatar: ''})
    const [viewSection, setViewSection] = useState(true)
    return(
    <div className="layout-login-container">
      <div className="layout-login animate__animated animate__backInUp">
        <p className="tittle-login">{viewSection ? 'Ingresa tus datos' : 'Registrate'}</p>
        <div className={viewSection ? 'with-email animate__animated animate__backInDown' : 'not-view'}>
          <InputText placeholder="Nombre" type="text" value={data.username} onChange={e=>setData({...data, username: e.target.value})}/>
          <InputText placeholder="Edad" type="number" value={data.age} onChange={e=>setData({...data, age: e.target.value})}/>
          <InputText placeholder="Correo" type="email" value={data.email} onChange={e=>setData({...data, email: e.target.value})}/>
          <InputText placeholder="Tu contraseña" type="password" value={data.password} onChange={e=>setData({...data, password: e.target.value})}/>
          <Upload {...propsUpload}><Button className="Mybtn-ant">¡Agrega una foto!</Button></Upload>
          <PrimaryButton onClick={()=>console.log(data)}>Registar</PrimaryButton>
        </div>
        <div className={viewSection ? 'not-view' : 'with-email'}>
        <section className="section section-signin" onClick={()=>setViewSection(!viewSection)}><img src="https://image.flaticon.com/icons/svg/855/855502.svg" alt="facebook"/><span>Iniciar con Correo</span></section>
          <section className="section section-signin"><img src="https://image.flaticon.com/icons/svg/145/145802.svg" alt="facebook"/><span>Iniciar con Facebook</span></section>
          <section className="section section-signin"><img src="https://image.flaticon.com/icons/svg/2702/2702602.svg" alt="google"/><span>Iniciar con Google</span></section>
        </div>
        <p className="text-login">¿Ya tienes una cuenta? <span onClick={()=>history.push('/login/')}>Inicia sesión</span></p>
      </div>
    </div>
    )
}
export default Login