import React from 'react'
import './index.scss'
export const InputText = ({placeholder, type, value, onChange}) => (
    <input type={type} value={value} onChange={onChange} className="input-form input-text" placeholder={placeholder}/>
)
