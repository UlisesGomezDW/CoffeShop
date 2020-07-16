import React from 'react'
import {useHistory, NavLink} from 'react-router-dom'
import './index.scss'

const UserInfo = ({close}) =>{
    const history = useHistory()
    return(
        <div className="user">
            <div className="info-user">
                <img src="https://image.flaticon.com/icons/svg/860/860784.svg" alt="user"/>
                <p>Ulises Gómez</p>
                <span>CDMX</span>
            </div>
            <p className="tag-link-nav" onClick={()=>history.push('/')}>Mi perfil</p>
            <p className="tag-link-nav" onClick={()=>history.push('/')}>Pedidos</p>
            <p className="tag-link-nav" onClick={()=>history.push('/')}>Compras</p>
        </div>
)}

const Static = ({close}) =>{
    return(
        <div className="user">
            <div className="info-user">
                <img src="https://image.flaticon.com/icons/svg/860/860784.svg" alt="user"/>
                <p>Inicia Sesión</p>
                <span>Registrate</span>
            </div>
            <NavLink to="/" className="tag-link-nav" onClick={()=>close}>Nosotros</NavLink>
            <NavLink to="/" className="tag-link-nav" onClick={()=>close}>Contacto</NavLink>
            <div className="social-red-nav">
                <img src="https://image.flaticon.com/icons/svg/21/21155.svg" alt="Facebook"/>
                <img src="https://image.flaticon.com/icons/svg/87/87390.svg" alt="Instagram"/>
                <img src="https://image.flaticon.com/icons/svg/733/733635.svg" alt="Twiter"/>
            </div>
        </div>
)}

const Menu = ({active, side}) =>{
    const login = false
    return(
    <div className={'side-bar-content ' + active}>
        <div className="side-bar">
        {login ? <UserInfo close={active}/> : <Static close={active}/>}
        </div>
        <div className="on-click-exit" onClick={side}></div>
    </div>
)}
export default Menu