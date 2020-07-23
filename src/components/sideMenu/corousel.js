import React from 'react'
import { Carousel } from 'antd'
import './index.scss'
const listText = ['Cafetería 100% online', 'Compras seguras', 'Servicio a domicilio', 'Servimos el mejor café de México']
const Slide = () =>{
    return(
        <Carousel autoplay>
        {listText.map((data, id)=>(
            <div key={id}>
                <h3>{data}</h3>
            </div>
        ))}
        </Carousel>
    )
}
export default Slide