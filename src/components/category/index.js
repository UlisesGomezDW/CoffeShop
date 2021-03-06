import React from 'react'
import './index.scss'

const info = [
    {name: 'Café', img_url: 'https://image.flaticon.com/icons/svg/2935/2935413.svg', info: 'jahaaggagag'},
    {name: 'Postres', img_url: 'https://image.flaticon.com/icons/svg/2965/2965661.svg', info: 'jahaaggagag'},
    {name: 'Desayunos', img_url: 'https://image.flaticon.com/icons/svg/3014/3014582.svg', info: 'jahaaggagag'},
    {name: 'Malteadas', img_url: 'https://image.flaticon.com/icons/svg/2984/2984209.svg', info: 'jahaaggagag'}
]
const Category = () =>{
    return(
        <div className="category-gral">
            <p className="p-tittle">Nuestra Categoría</p>
            <div className="category">
                {info.map((data, i)=>(
                <div className="section-category" key={i} onClick={()=>console.log("Juanin")}>
                    <img src={data.img_url} alt="cafe"/>
                    <p>{data.name}</p>
                    <span>{data.info}</span>
                </div>
                ))}
            </div>
        </div>
    )
}
export default Category