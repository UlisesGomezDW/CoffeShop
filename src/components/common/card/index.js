import React from 'react'
import './index.scss'
const  Card = ({ img, name, description }) => (
    <div className="card">
        <img className="card-img" src="https://www.starbucks.com.mx/media/CaffeMocha_tcm54-2064_w1024_n.jpg" alt="product"/>
        <div className="card-body">
            <p className="product">Cafe Americano</p>
            <p className="description">Uno de los mejores</p>
        </div>
    </div>
)
export default Card
