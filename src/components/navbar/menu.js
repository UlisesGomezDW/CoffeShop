import React from 'react'
import {NavLink} from 'react-router-dom'
import './index.scss'

const UserInfo = ({close}) =>{
    return(
        <div className="user">
            <div className="info-user">
                <img src="https://image.flaticon.com/icons/svg/860/860784.svg" alt="user"/>
                <p>Ulises Gómez</p>
                <span>CDMX</span>
            </div>
            <NavLink to="//" onClick={close} className="tag-link-nav">Mi perfil</NavLink>
            <NavLink to="//" onClick={close} className="tag-link-nav">Pedidos</NavLink>
            <NavLink to="//" onClick={close} className="tag-link-nav">Compras</NavLink>
        </div>
)}

const Static = ({close}) =>{
    return(
        <div className="user">
            <div className="info-user">
                <img src="https://image.flaticon.com/icons/svg/860/860784.svg" alt="user"/>
                <NavLink to="/login/" onClick={close}><p>Inicia Sesión</p></NavLink>
                <NavLink to="/sign-in/" onClick={close}><span>Registrate</span></NavLink>
            </div>
            <NavLink to="/about/" className="tag-link-nav" onClick={close}>Nosotros</NavLink>
            <NavLink to="/contact/" className="tag-link-nav" onClick={close}>Contacto</NavLink>
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
        {login ? <UserInfo close={side}/> : <Static close={side}/>}
        </div>
        <div className="on-click-exit" onClick={side}></div>
    </div>
)}
export default Menu