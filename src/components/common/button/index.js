import React from 'react'
import './index.scss'
export const PrimaryButton = ({children, onClick}) => (
    <button className="btn-form btn-primary" onClick={onClick}>{children}</button>
)
export const SecondaryButton = ({children, onClick}) => (
    <button className="btn-form btn-secondary" onClick={onClick}>{children}</button>
)
export const SecondaryLink = ({children, onClick}) => (
    <button className="btn-form link-secondary" onClick={onClick}>{children}</button>
)
export const PrimaryLink = ({children, onClick}) => (
    <button className="btn-form link-primary" onClick={onClick}>{children}</button>
)
