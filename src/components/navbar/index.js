import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.scss'
import ShopCart from '../common/shopCart'
import SideBar from './menu'
const Navbar = () =>{
    const [active, setActive] = useState(null)
    const history = useHistory()
    const onActive = () =>{
        active === 'active' ? setActive(null) : setActive('active')
    }
    return(
    <nav className="navbar">
        <SideBar active={active} side={onActive}/>
        <div className="hamburger-menu" onClick={onActive}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <div className="social-red">
            <img src="https://image.flaticon.com/icons/svg/21/21155.svg" alt="Facebook"/>
            <img src="https://image.flaticon.com/icons/svg/87/87390.svg" alt="Instagram"/>
            <img src="https://image.flaticon.com/icons/svg/733/733635.svg" alt="Twiter"/>
        </div>
        <p className="tag-link" onClick={()=>history.push('/')}>Nosotros</p>
        <p onClick={()=>history.push('/')}>coffee</p>
        <p className="tag-link" onClick={()=>history.push('/')}>Contacto</p>
        <ShopCart count={0} />
    </nav>
    )
}
export default Navbar