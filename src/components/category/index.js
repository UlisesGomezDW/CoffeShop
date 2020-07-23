import React, {useState}  from 'react'
import './index.scss'
import {ModalInfo} from './../common/modal'

const info = [
    {name: 'Café', img_url: 'https://image.flaticon.com/icons/svg/2935/2935413.svg', info: 'jahaaggagag'},
    {name: 'Postres', img_url: 'https://image.flaticon.com/icons/svg/2965/2965661.svg', info: 'jahaaggagag'},
    {name: 'Desayunos', img_url: 'https://image.flaticon.com/icons/svg/3014/3014582.svg', info: 'jahaaggagag'},
    {name: 'Malteadas', img_url: 'https://image.flaticon.com/icons/svg/2984/2984209.svg', info: 'jahaaggagag'}
]
const Category = () =>{
    const [visible, setVisible] = useState(false)
    const [selectData, setSelect] = useState(null)
    const clickItem = ({name}) => {
        setSelect(name)
        setVisible(!visible)
        console.log(name)
    }
    return(
        <div className="category-gral">
            <p className="p-tittle">Nuestra Categoría</p>
            <div className="category">
                {info.map((data, i)=>(
                <div className="section-category" key={i} onClick={()=>clickItem(data)}>
                    <img src={data.img_url} alt="cafe"/>
                    <p>{data.name}</p>
                    <span>{data.info}</span>
                </div>
                ))}
            </div>
            <ModalInfo visible={visible}/>
        </div>
    )
}
export default Category