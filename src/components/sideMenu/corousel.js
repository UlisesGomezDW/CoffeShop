import React from 'react'
import { Carousel } from 'antd'
import './index.scss'
import Consult from './data.json'
const Slide = () =>{
    return(
        <Carousel autoplay>
        {Consult.map((data, id)=>(
            <div key={id} style={{background: "#000"}}>
                <h3>{data.text}</h3>
            </div>
        ))}
        </Carousel>
    )
}
export default Slide